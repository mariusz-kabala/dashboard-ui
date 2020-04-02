def branch = '';

pipeline {
    agent { docker { image 'docker-registry.kabala.tech/node12-with-git:latest' } }

    environment {
        GITHUB_API_KEY = credentials('jenkins-github-accesstoken')
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
        
        stage ('Install dependencies') {
            steps {
                script {
                    sh "yarn"
                    sh "ls -la"
                }
            }
        }

        stage ('Run unit tests') {
            steps {
                script {
                    sh "yarn test --coverage --config ./jest.noThreshold.js"
                }
            }

            post {
                always {
                    configFileProvider([configFile(fileId: 'scaleway-s3-config', targetLocation: 'aws-config')]) {
                        sh "mkdir ~/.aws"
                        sh "mv aws-config ~/.aws/config"
                        sh "aws s3 cp coverage s3://unittest/dashboardui/master/ --recursive --acl public-read"
                    }

                    echo "https://unittest.s3.nl-ams.scw.cloud/dashboardui/master/index.html"
                }
            }
        }

        stage ('Build packages') {
            steps {
                script {
                    sh "yarn workspaces run prepare"
                }
            }
        }

        stage ('Build storybook') {
            steps {
                script {
                    sh "yarn build-storybook"

                    configFileProvider([configFile(fileId: 'scaleway-s3-config', targetLocation: 'aws-config')]) {
                        sh "mkdir -p ~/.aws"
                        sh "mv aws-config ~/.aws/config"
                        sh "aws s3 cp storybook-static s3://dashboardui/master/ --recursive --acl public-read"
                    }

                    echo "https://dashboardui.s3.nl-ams.scw.cloud/master/index.html"
                }
            }
        }
    }
}
