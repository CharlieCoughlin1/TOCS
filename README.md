# TOCS

## Development

This project now includes a simple Express server that logs calculator events to
Supabase.

### Setup

Create a `.env` file or export the following environment variables
(a sample is provided in `.env.example`):

- `SUPABASE_URL` – your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` – service role key with insert permissions

Then install dependencies and start the server:

```sh
npm install
npm start
```

The server serves the static files from `docs/` and exposes an `/api/event`
endpoint used by the calculator.