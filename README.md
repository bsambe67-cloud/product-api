# Products API

API REST Express/MongoDB avec authentification JWT et rôles utilisateur/admin.

## Installation

```bash
npm install
```

Configurez `MONGO_URI` et `JWT_SECRET` dans `.env`, puis démarrez l’API avec `npm run dev`.

## Routes

- `GET /health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products` (admin)
- `PATCH /api/products/:id` (admin)
- `DELETE /api/products/:id` (admin)

Les routes admin utilisent `Authorization: Bearer <token>`.