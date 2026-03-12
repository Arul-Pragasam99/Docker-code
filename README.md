# Docker code — week by week process

## week 1 — linux and git foundations

### objective
build the basic devops foundation using linux commands, git workflow, and github collaboration.

### tasks completed
- practiced essential linux commands such as:
  - `ls -la`
  - `pwd`
  - `cd`
  - `mkdir`
  - `cat`
  - `grep`
  - `chmod`
  - `ps aux`
  - `curl`
  - `kill`
- documented the commands in a cheatsheet
- initialized a git repository
- created branch structure:
  - `main`
  - `develop`
  - `feature/...`
- used conventional commit messages such as:
  - `feat: add backend setup`
  - `fix: resolve route issue`
  - `docs: update readme`
- created and merged pull requests on github

### output
- linux command practice completed
- git branching workflow completed
- github repository initialized and maintained properly

---

## week 2 — docker and containerization

### objective
containerize the backend and understand service orchestration using docker and docker compose.

### tasks completed
- installed docker desktop
- verified docker installation using:
  - `docker --version`
  - `docker compose version`
- created a simple node backend server
- wrote `server.js` for backend testing
- created `Dockerfile` for the backend container
- created `docker-compose.yml` for service setup
- configured mongodb service in docker compose
- tested backend container locally
- verified backend using browser and localhost routes

### important files
- `server/Dockerfile`
- `server/server.js`
- `docker-compose.yml`

### output
- backend container built successfully
- docker compose used to start services
- local containerized backend tested successfully

---

## week 3 — testing, linting, and ci pipeline

### objective
add code quality checks, automated testing, and continuous integration.

### tasks completed
- installed jest and supertest
- wrote 5 test cases for backend api
- generated test coverage report
- achieved more than 60 percent coverage
- installed and configured eslint
- created `eslint.config.js`
- confirmed linting works using:
  - `npm run lint`
- created github actions workflow
- configured pipeline to run on every push
- automated these steps in ci:
  - install dependencies
  - run eslint
  - run jest tests with coverage

### important files
- `server/tests/api.test.js`
- `server/eslint.config.js`
- `.github/workflows/ci.yml`

### output
- 5 tests passed
- coverage achieved above required level
- github actions pipeline executed successfully

---

## week 4 — cloud deployment, nginx, monitoring, and cicd

### objective
deploy the backend to cloud, configure reverse proxy, add health checks, and enable monitoring.

### tasks completed
- updated backend for production deployment
- added root route:
  - `/`
- added health check route:
  - `/health`
- updated server to use:
  - `process.env.PORT || 5001`
- created nginx reverse proxy configuration
- configured nginx to forward traffic to backend
- tested local reverse proxy using:
  - `http://localhost/health`
- pushed final code to github
- deployed the backend to render
- configured environment variable:
  - `PORT`
- verified deployed url and health endpoint
- set up uptime monitoring using uptimerobot
- connected monitoring to:
  - deployed `/health` endpoint
- verified ci/cd flow:
  - push to github
  - github actions runs lint and tests
  - render auto deploys latest code

### important files
- `server/server.js`
- `nginx/nginx.conf`
- `docker-compose.yml`
- `.github/workflows/ci.yml`

### deployment url
- `https://docker-code-ktf8.onrender.com`

### health endpoint
- `https://docker-code-ktf8.onrender.com/health`

### output
- backend deployed successfully on render
- nginx reverse proxy configured successfully
- uptime monitoring enabled
- ci/cd workflow completed

---

## final project summary

### technologies used
- node.js
- express.js
- docker
- docker compose
- nginx
- jest
- eslint
- github actions
- render
- uptimerobot

### final workflow
user request
→ nginx reverse proxy
→ node backend
→ health endpoint monitoring
→ github actions ci
→ render auto deployment

### final result
the project was completed week by week, starting from linux and git basics, then progressing through docker containerization, testing and ci integration, and finally cloud deployment, reverse proxy setup, monitoring, and ci/cd automation.
