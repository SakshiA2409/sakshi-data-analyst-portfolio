# Sakshi Agrawal — Data Analyst Portfolio

A ready-to-run React + Tailwind CSS project (built with Vite).

## What's in this version

- Billing project is titled **"Electrical Solutions — Billing Analysis"** (no surname in the title).
- No "How I got here" / Journey section — it was already removed from the code and the nav.
- Your profile photo is wired in at `src/assets/pfp.png` and shown in the hero section.
- This is intentionally **one continuous scrolling page** — the top nav (Home, About, Skills, Projects, Education, Contact) doesn't load new pages, it just smooth-scrolls you down to that section. That's normal for a portfolio like this.
- The reason you weren't seeing any colors before is that the project was missing its build setup (Vite + Tailwind config, index.html, entry point). Colors, gradients, and layout only appear once Tailwind actually compiles — that setup is now included so it works out of the box.

## How to run it

You need Node.js installed (version 18 or newer) — download from nodejs.org.

1. Unzip this folder and open a terminal inside it.
2. Install dependencies:
   npm install
3. Start the local dev server:
   npm run dev
4. Open the link it prints (usually http://localhost:5173) in your browser.

You should now see the full colored design — gradients, cards, nav bar, your photo, everything.

To create a production build you can upload anywhere (Vercel, Netlify, GitHub Pages, etc.):
   npm run build

This creates a dist/ folder — that's what you deploy.

## Before publishing

Replace the remaining "#" placeholders with your real links:
- Email address (Contact section)
- LinkedIn URL (Contact section + footer)
- Resume file (Hero section "Download Resume" button)
- The e-commerce and billing projects' GitHub links (github: "#" in src/App.jsx), if you have repos for them.
