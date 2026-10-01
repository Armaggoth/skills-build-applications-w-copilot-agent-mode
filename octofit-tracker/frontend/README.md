# Octofit Tracker Frontend

React 19 presentation tier for Octofit Tracker, powered by Vite, React Router,
and Bootstrap.

## API configuration

`VITE_CODESPACE_NAME` must be defined in
`octofit-tracker/frontend/.env.local` when running in a Codespace so the
frontend can reach the forwarded backend API:

```dotenv
VITE_CODESPACE_NAME=your-codespace-name
```

The frontend uses
`https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[resource]/`. If the
variable is unset during local development, requests fall back to
`http://localhost:8000/api/[resource]/`. Restart Vite after changing `.env.local`.

## Development

Run `npm install --prefix octofit-tracker/frontend` to install dependencies, then
`npm run dev --prefix octofit-tracker/frontend` to start Vite.
