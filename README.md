# Complementary Assessment - Fullstack (React + Express + Docker + CI/CD)

## Qué contiene
- Frontend: React + Vite (carpeta `frontend`)
- Backend: Node + Express (carpeta `backend`)
- Dockerfiles para ambos
- CI/CD: GitHub Actions para tests, build y deploy a Render
- Tests: Jest (backend), Vitest (frontend)

## Comandos locales
# Backend
cd backend
npm ci
npm run dev
npm test

# Frontend
cd frontend
npm ci
npm run dev
npm run test

# Levantar ambos con docker-compose (local)
docker-compose up --build

## Deploy
- Push a `main` ejecuta tests + build
- Push/merge a `production` ejecuta deploy a Render (requiere secrets)

## Secrets (GitHub)
- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN
- RENDER_DEPLOY_HOOK
- RENDER_API_KEY (opcional)

## Checklist de evaluación
- [x] Frontend + Backend funcionales
- [x] Docker + docker-compose
- [x] Tests automatizados (backend & frontend)
- [x] CI ejecuta tests y builds
- [x] Despliegue automático a Render (production)
