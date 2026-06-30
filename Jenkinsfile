pipeline {

    agent any

    environment {

        IMAGE_NAME = "portfolio"

    }

    stages {

        stage('Clone') {

            steps {

                checkout scm

            }

        }

        stage('Build Docker Image') {

            steps {

                bat 'docker build -t %IMAGE_NAME% .'

            }

        }

        stage('Run Docker Container') {

            steps {

                bat 'docker stop portfolio || exit 0'
                bat 'docker rm portfolio || exit 0'

                bat 'docker run -d --name portfolio -p 8080:80 %IMAGE_NAME%'

            }

        }

    }

}