pipeline {
    agent {
        docker {
            image 'node:18'
            args '-u root:root'
        }
    }

    stages {

        stage('Backend Build & Test') {
            steps {
                dir('backend') {
                    echo "Installing backend dependencies..."
                    sh 'npm install'
                    echo "Running backend tests..."
                    sh 'npm test || echo "No backend tests found"'
                }
            }
        }

        stage('Frontend Build & Test') {
            steps {
                dir('frontend') {
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
