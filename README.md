# AirlinesGroup Travel

<!-- Deployment Note -->
> **Deployment Note**: The app runs in Docker behind Nginx on a VPS. To ensure the real client IP reaches Next.js, include the following directives in your Nginx server block:
>
> ```nginx
> proxy_set_header X-Real-IP $remote_addr;
> proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
> proxy_set_header Host $host;
> ```
> Do not edit any Nginx files in this repo unless one already exists; just document it here.


Next.js App Router project with Tailwind CSS v4.

## Development

Install dependencies with `npm install`, then start the local server with `npm run dev`.

The shared navbar lives in `components/Navbar.jsx` and is rendered from `app/layout.jsx`.
