def branch = '';

pipeline {
    agent any
    
    environment {
        CI = 'true'
        GIT_SSH_COMMAND = "ssh -o StrictHostKeyChecking=no"
        GH_TOKEN = credentials('jenkins-github-accesstoken')
        DOCKER_BUILDKIT = 1
    }

    stages {
        stage ('prepare') {
            steps {
                script {
                    try {
                        branch = env.GIT_LOCAL_BRANCH
                        branch = branch ?: env.GIT_BRANCH
                        if (branch == 'detached') {
                            branch = ''
                        }
                        branch = branch ?: env.ghprbActualCommit
                    } catch (e) {
                        println "GIT BRANCH not detected"
                    }

                    sh 'git config user.name "jenkins-kabala.tech"'
                    sh 'git config user.email "jenkins@kabala.tech"'

                    if (!branch) {
                        error "GIT branch to process not found"
                    }

                    if (branch.startsWith('origin/')) {
                        branch = branch.replaceAll('origin/', '')
                    }

                    println "GIT branch to process: ${branch}"
                    manager.addShortText(branch, "white", "navy", "1px", "navy")
                }
            }
        }

        stage ('Checkout') {
            steps {
                    checkout([
                            $class                           : 'GitSCM',
                            branches                         : [[name: "${branch}"]],
                            browser                          : [$class: 'GithubWeb', repoUrl: "https://github.com/mariusz-kabala/dashboard-ui"],
                            doGenerateSubmoduleConfigurations: false,
                            userRemoteConfigs                : [[
                                credentialsId: 'github',
                                refspec      : '+refs/pull/*:refs/remotes/origin/pr/*',
                                url          : "git@github.com:mariusz-kabala/dashboard-ui.git"
                            ]]
                    ])
            }
        }

        stage ('Build and release') {
            steps {
                sshagent(['jenkins-ssh-key']) {
                    configFileProvider([configFile(fileId: 'jenkins-npm', targetLocation: '.npmrc')]) {
                        script {
                            sh "docker build --ssh default -f Dockerfile.release --force-rm --no-cache ."
                        }
                    }
                }
            }
        }
    }
}
