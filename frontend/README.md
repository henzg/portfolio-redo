# Zac Henry — Personal Portfolio

Personal portfolio and game dev blog built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4.

## Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** react-icons

## Project structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout + metadata
│   ├── page.tsx           # Main portfolio page
│   ├── globals.css        # Design tokens + global styles
│   └── blog/
│       ├── page.tsx       # Blog listing
│       └── [id]/page.tsx  # Individual blog post
├── components/            # UI components (Nav, Hero, About, Projects, Blog, Contact, Footer)
└── data/
    ├── project.ts         # Project entries
    └── blog.ts            # Blog post entries
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Adding content

- **Projects:** Edit `src/data/project.ts`
- **Blog posts:** Edit `src/data/blog.ts`
