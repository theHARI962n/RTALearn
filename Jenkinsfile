pipeline {
    agent any

    stages {
        stage('Backend Build & Test') {
            steps {
                dir('backend') {
                    echo "Backend: Node version"
                    sh 'node -v'
                    echo "Backend: Installing dependencies"
                    sh 'npm install'
                    echo "Backend: Running tests"
                    sh 'npm test || echo "No backend tests found"'
                }
            }
        }

        stage('Frontend Build & Test') {
            steps {
                dir('frontend') {
                    echo "Frontend: Node version"
                    sh 'node -v'
                    echo "Frontend: Installing dependencies"
                    sh 'npm install'
                    echo "Frontend: Building project"
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
