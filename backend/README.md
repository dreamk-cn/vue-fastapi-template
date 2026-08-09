# Backend

FastAPI application skeleton.

```bash
uv sync
uv run uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

- Health: `GET /api/v1/health`
- Docs: `http://127.0.0.1:8000/docs`
