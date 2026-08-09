# vue-fast-api

Vue 3 + FastAPI monorepo template.

```text
vue-fast-api/
├── frontend/          # Vue 3 + Vite  (.env / .env.example)
├── backend/           # FastAPI       (.env / .env.example)
└── README.md
```

## Prerequisites

- Node.js 20+ and pnpm
- Python 3.12+ and [uv](https://github.com/astral-sh/uv)

## Backend

```bash
cd backend
cp .env.example .env   # optional; defaults work without it
uv sync
uv run uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

- Health: http://127.0.0.1:8000/api/v1/health
- OpenAPI: http://127.0.0.1:8000/docs

## Frontend

```bash
cd frontend
cp .env.example .env   # optional
pnpm install
pnpm dev
```

Dev server: http://127.0.0.1:5173  
`/api` is proxied to the backend.
