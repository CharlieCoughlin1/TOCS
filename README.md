# TOCS

## Development

This project includes a simple Express server that logs calculator events to
`data/LSH_Calculator_Leads.csv`.

### Setup

Install dependencies and start the server:

```sh
npm install
npm start
```

The server serves the static files from `docs/` and exposes an `/api/event`
endpoint used by the calculator. Submitted data is appended to
`data/LSH_Calculator_Leads.csv`.
