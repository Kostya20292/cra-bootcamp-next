# Архитектура проекта

```
nextjs-project/
├── public/                    # Static files (robots.txt)
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── icon.svg           # Favicon (metadata convention)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── (routes)/
│   ├── assets/                # Project assets
│   │   ├── fonts/             # Local fonts (next/font/local)
│   │   ├── icons/             # SVG icons (logo, socials, UI)
│   │   └── img/               # Images, backgrounds
│   │       ├── bg/
│   │       └── snake/
│   ├── components/            # Reusable components
│   ├── api/                   # API client
│   ├── hooks/                 # Custom hooks
│   ├── types/                 # TypeScript type definitions
│   ├── shared/                # Shared modules (e.g. constants.ts)
│   ├── styles/                # Global styles
│   └── utils/                 # Utility functions
├── tests/                   # Test files
├── docs/                    # Documentation
├── .env.example             # Environment variables template
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```
