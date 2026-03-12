# Архитектура проекта

```
nextjs-project/
├── public/                    # Static assets
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── (routes)/
│   ├── components/           # Reusable components
│   ├── api/                  # API client
│   ├── hooks/                # Custom hooks
│   ├── types/                # TypeScript type definitions
│   ├── shared/               # Shared modules (e.g. constants.ts)
│   ├── styles/               # Global styles
│   └── utils/                # Utility functions
├── tests/                   # Test files
├── docs/                    # Documentation
├── .env.example            # Environment variables template
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```
