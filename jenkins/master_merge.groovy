def branch = '';
def hasNewLock = '0';

pipeline {
    agent any

    environment {
        GIT_SSH_COMMAND = "ssh -o StrictHostKeyChecking=no"
        CI = 'true'
        AWS_ACCESS_KEY_ID = credentials('SCALEWAY_S3_ACCESS_KEY')
        AWS_SECRET_ACCESS_KEY = credentials('SCALEWAY_S3_ACCESS_SECRET_KEY')
    }

    stages {
        stage ('prepare') {
            steps {
                script {
                    sh "printenv"
                    try {
                        branch = env.GIT_LOCAL_BRANCH
                        branch = branch ?: env.GIT_BRANCH
                        if (branch == 'detached') {
                            branch = ''
                        }
                        branch = branch ?: env.ghprbSourceBranch
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
        
        stage ('Build and test') {
            steps {
                script {
                    sh "docker build --force-rm --no-cache --target=build ."
                }
            }
        }

        stage ('Upload unit tests results and storybook') {
            steps {
                script {
                    sh "docker build --build-arg AWS_ACCESS_KEY_ID=${env.AWS_ACCESS_KEY_ID} --build-arg AWS_SECRET_ACCESS_KEY=${env.AWS_SECRET_ACCESS_KEY} --target=upload ."
                }
            }
        }
    }
}
