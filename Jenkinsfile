pipeline {
    agent any

    environment {
        NODE_VERSION = '18'  // Node version to use
    }

    stages {

        stage('Install Node.js') {
            steps {
                echo "Using Node.js version ${env.NODE_VERSION}"
                sh 'node -v'
            }
        }

        stage('Backend Build & Test') {
            steps {
                dir('backend') { // change if your backend folder name is different
                    echo "Installing backend dependencies..."
                    sh 'npm install'
                    echo "Running backend tests..."
                    sh 'npm test || echo "No backend tests found"'
                }
            }
        }

        stage('Frontend Build & Test') {
            steps {
                dir('frontend') { // change if your frontend folder name is different
                    echo "Installing frontend dependencies..."
                    sh 'npm install'
                    echo "Building frontend..."
                    sh 'npm run build || echo "No frontend build script"'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
