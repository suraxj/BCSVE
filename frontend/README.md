# Bharath Council for Skill and Vocational Education (BCSVE) - Frontend

Official web portal and course detail application for the Bharath Council for Skill and Vocational Education.

## Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS 3 (Custom palette: `bcsve` maroon, `gold`, `cream`)
- **Icons:** `lucide-react`
- **Routing:** `react-router-dom` (SPA client-side navigation with hash scroll restoration)
- **Code Quality:** Oxlint

---

## Deployment & Single Page Application (SPA) Routing Note

This application uses client-side routing via `react-router-dom` (`BrowserRouter`) with lazy-loaded sub-pages:
- `/` - Main Council Landing Page
- `/programs/healthcare-wellness` - Healthcare & Wellness ("The Pulse")
- `/programs/information-technology` - Information Technology ("The Terminal")
- `/programs/business-management` - Business & Management ("The Growth Dashboard")
- `/programs/vocational-applied-trades` - Vocational & Applied Trades ("The Workshop Blueprint")
- `*` - Branded 404 Not Found Page

### Web Server / Hosting Rewrite Configuration

To ensure deep links (e.g. refreshing `/programs/healthcare-wellness` directly in the browser) do not return HTTP 404 errors, all non-asset requests must be rewritten to `/index.html`:

1. **Netlify & Cloudflare Pages:**
   - Already configured in [`frontend/public/_redirects`](./public/_redirects):
     ```text
     /*    /index.html   200
     ```

2. **Vercel (`vercel.json`):**
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

3. **Apache (`.htaccess`):**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Nginx:**
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Run Oxlint
npm run lint

# Build production bundle
npm run build
```
