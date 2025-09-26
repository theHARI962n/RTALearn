pipeline {
    agent any

    environment {
        REPO_DIR = "${WORKSPACE}" // Jenkins workspace
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/theHARI962n/RTALearn.git'
            }
        }

        stage('Backend Build & Test') {
            steps {
                echo "Backend: Building with Docker Node container"
                sh """
                docker run --rm -v $REPO_DIR/backend:/app -w /app node:18 \
                bash -c "npm install && npm run test"
                """
            }
        }

        stage('Frontend Build & Test') {
            steps {
                echo "Frontend: Building with Docker Node container"
                sh """
                docker run --rm -v $REPO_DIR/frontend:/app -w /app node:18 \
                bash -c "npm install && npm run build"
                """
            }
        }
    }

    post {
        always {
            echo "CI Pipeline finished"
        }
        success {
            echo "Build succeeded!"
        }
        failure {
            echo "Build failed!"
        }
    }
}
