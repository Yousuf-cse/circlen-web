# ⭕Circlen — Web

> Your circle. No more lies.

We all have that one friend. The one who says 'bro I didn't study anything' and then tops the class. Circlen is for that. This is the waitlist site, built while the app is cooking.

---

## Tech Stack

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Vercel** — hosting + serverless functions
- **Mailchimp** — waitlist email collection

---

## Project Structure

```
circlen/
├── api/
│ └── subscribe.ts
├── public/
├── src/
│ ├── App.tsx
│ ├── App.css
│ ├── index.css
│ ├── main.tsx
│ ├── assets/
│ ├── components/
│ │ ├── subComponents/
│ │ │ ├── Cursor.tsx
│ │ │ ├── FriendNode.tsx
│ │ │ ├── Particles.tsx
│ │ │ └── Ticker.tsx
│ │ └── ui/
│ │ └── button.tsx
│ ├── hooks/
│ │ └── useReveal.ts
│ ├── lib/
│ │ ├── utils.ts
│ │ └── waitlist.ts
│ ├── mocks/
│ │ ├── friendcard.mock.ts
│ │ ├── liveStatus.mock.ts
│ │ └── tickerItems.mock.ts
│ ├── section/
│ │ ├── FeaturesSection.tsx
│ │ ├── Footer.tsx
│ │ ├── Hero.tsx
│ │ ├── Nav.tsx
│ │ ├── OrbitalSection.tsx
│ │ ├── ProblemSection.tsx
│ │ ├── RoastSection.tsx
│ │ ├── StepsSection.tsx
│ │ └── WaitlistsSection.tsx
│ └── types/
│ └── friendCard.ts
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/circlen.git
cd circlen
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_AUDIENCE_ID=your_audience_id_here
MAILCHIMP_SERVER=us18
```

You can get these from your Mailchimp account:
- **API Key** → Account → Extras → API Keys
- **Audience ID** → Audience → Settings → Audience name and defaults
- **Server** → the prefix in your Mailchimp URL (e.g. `us18`)

### 4. Run locally

To test with the serverless function working locally:

```bash
pnpm install -g vercel
vercel dev
```

Or just run Vite for UI-only development:

```bash
pnpm dev
```

---

## Deployment

Deployed on Vercel. The `api/` folder is automatically picked up as serverless functions.

```bash
vercel --prod
```

Make sure your environment variables are set in the Vercel dashboard under **Project → Settings → Environment Variables**.

---

## About Circlen

Circlen is a mobile app (Android) that knows what your friends are really doing when they say they're studying. It tells everyone. Automatically. No warning. No mercy.

This repo is the web page only, built for idea validation and waitlist collection pre-launch.

---

## License

MIT
