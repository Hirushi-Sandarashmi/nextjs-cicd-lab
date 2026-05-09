# Next.js CI/CD Lab

This is a small Next.js project for learning CI/CD with GitHub Actions and Docker Hub.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Local Checks

Run the same checks that GitHub Actions will run:

```bash
npm run lint
npm run build
```

## Build Docker Image Locally

Replace `your-dockerhub-name` with your Docker Hub username.

```bash
docker build -t your-dockerhub-name/nextjs-cicd-lab:local .
docker run --rm -p 3000:3000 your-dockerhub-name/nextjs-cicd-lab:local
```

## GitHub Actions Setup

The workflow is in `.github/workflows/ci-cd.yml`.

It does two things:

1. On pull requests and pushes to `main`, it runs `npm ci`, `npm run lint`, and `npm run build`.
2. On pushes to `main`, it builds a Docker image and pushes it to Docker Hub.

Add these repository secrets in GitHub:

- `DOCKERHUB_USERNAME`: your Docker Hub username
- `DOCKERHUB_TOKEN`: a Docker Hub access token

## First GitHub Push

```bash
git init
git add .
git commit -m "Create Next.js CI/CD lab"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/nextjs-cicd-lab.git
git push -u origin main
```

After that, every push to `main` will run CI and push a new Docker image to Docker Hub.
