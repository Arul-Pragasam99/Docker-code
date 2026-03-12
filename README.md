# Docker Code – DevOps Deployment Project

This project demonstrates a complete DevOps workflow for deploying a Node.js backend application. The application is containerized using Docker, routed through an Nginx reverse proxy, deployed to the cloud using Render, monitored using UptimeRobot, and integrated with a CI/CD pipeline using GitHub Actions.

---

# Project Overview

The goal of this project is to implement a production-ready backend deployment pipeline using modern DevOps tools and practices.

The system includes:

• Node.js Express backend  
• Docker containerization  
• Nginx reverse proxy routing  
• Cloud deployment using Render  
• CI/CD pipeline using GitHub Actions  
• Application health monitoring using UptimeRobot  

---

# Technology Stack

Backend  
• Node.js  
• Express.js  

DevOps Tools  
• Docker  
• Docker Compose  
• Nginx  
• GitHub Actions  
• Render Cloud Platform  
• UptimeRobot Monitoring  

---

# Project Structure

```
Docker code
│
├── server
│   ├── server.js
│   ├── package.json
│   └── tests
│
├── nginx
│   └── nginx.conf
│
├── docker-compose.yml
│
├── .github
│   └── workflows
│       └── ci.yml
│
└── README.md
```

---

# Week-1 – Linux and Git Foundations

Objectives:

• Practice essential Linux commands  
• Setup Git repository and branch workflow  
• Follow conventional commit standards  

Tasks Completed:

• Used Linux commands such as  
  `ls`, `pwd`, `cd`, `mkdir`, `cat`, `grep`, `chmod`, `ps`, `curl`, `kill`

• Initialized Git repository

• Created branch workflow

```
main
develop
feature/*
```

• Created and merged Pull Requests

Output:

A structured Git workflow with proper commits and branch management.

---

# Week-2 – Docker and Containerization

Objectives:

• Containerize backend using Docker  
• Manage services using Docker Compose  

Tasks Completed:

• Installed Docker Desktop  
• Verified Docker installation  

```
docker --version
docker compose version
```

• Created backend server using Express  
• Created `Dockerfile` for backend container  
• Created `docker-compose.yml` for services  

Services configured:

• Node backend  
• MongoDB database  
• Nginx reverse proxy  

Output:

Application successfully containerized and tested locally using Docker.

---

# Week-3 – Testing and CI Pipeline

Objectives:

• Implement automated testing  
• Add code linting  
• Setup CI pipeline  

Tasks Completed:

• Installed Jest and Supertest  
• Created 5 unit tests for API routes  
• Generated test coverage report  

Coverage achieved:

```
Statements: > 70%
```

• Installed ESLint for code linting  
• Created GitHub Actions workflow  

CI pipeline automatically performs:

```
Install dependencies
Run ESLint
Run Jest tests
```

Output:

CI pipeline successfully running on every Git push.

---

# Week-4 – Cloud Deployment and Monitoring

Objectives:

• Deploy application to cloud  
• Configure reverse proxy  
• Add monitoring system  
• Enable CI/CD workflow  

Tasks Completed:

• Implemented `/health` endpoint for monitoring

Example response:

```json
{
  "status": "ok",
  "message": "server is healthy"
}
```

• Configured Nginx reverse proxy

Request flow:

```
User → Nginx → Node.js Backend
```

• Deployed backend to Render cloud platform

Deployment URL:

```
https://docker-code-0haz.onrender.com
```

Health Endpoint:

```
https://docker-code-0haz.onrender.com/health
```

• Configured environment variables on Render

Example variables:

```
PORT
JWT_SECRET
MONGO_URI
```

• Configured monitoring using UptimeRobot

Monitoring endpoint:

```
https://docker-code-0haz.onrender.com/health
```

Monitoring interval:

```
5 minutes
```

---

# Docker Setup (Local Development)

Start all containers:

```
docker compose up --build
```

Access application locally:

```
http://localhost/health
```

---

# CI/CD Pipeline

The project implements a CI/CD workflow using GitHub Actions.

Pipeline Flow:

```
Git Push
   ↓
GitHub Actions
   ↓
Install Dependencies
   ↓
Run ESLint
   ↓
Run Jest Tests
   ↓
Render Auto Deployment
```

Workflow file:

```
.github/workflows/ci.yml
```

---

# DevOps Architecture

```
User Request
     ↓
Nginx Reverse Proxy
     ↓
Node.js Express Server
     ↓
Health Endpoint Monitoring
     ↓
UptimeRobot Status Checks
```

Deployment Pipeline:

```
Developer Push
     ↓
GitHub Actions CI
     ↓
Automated Tests
     ↓
Render Cloud Deployment
```

---

# Monitoring

Application uptime monitoring is configured using UptimeRobot.

Monitoring checks the `/health` endpoint to ensure the application is running.

Example monitoring URL:

```
https://docker-code-0haz.onrender.com/health
```

---

# Final Outcome

The project successfully demonstrates a complete DevOps pipeline including:

• Containerization using Docker  
• Reverse proxy configuration using Nginx  
• Automated testing and linting  
• CI/CD pipeline using GitHub Actions  
• Cloud deployment using Render  
• Application monitoring using UptimeRobot  

---

# Author

DevOps Internship Project  
Docker Code Deployment System
