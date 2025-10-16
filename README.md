# Squad Space — Coming Soon page

This small static page is a responsive "coming soon" announcement for the Squad Space esports platform.

Files added:

- `index.html` — main page
- `styles.css` — styling and responsive rules
- `script.js` — small client-side waitlist handling (localStorage)

To preview locally you can open `index.html` in a browser or run a simple static server:

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

Notes:
- The waitlist form stores emails in the browser's localStorage for demo purposes. Replace with an API POST when you have a backend.
- Icons are inline SVGs to keep this static and dependency-free.
- Accessible-friendly: semantic HTML, labels, and focus behavior included.

Next steps (optional):
- Add an API integration for the waitlist (Netlify Functions, serverless, or your own endpoint).
- Add analytics, social links, and richer animations.
# squad-space-publix