# 📜 Infiroll - Infinite Quotes App

A modern React application that fetches motivational quotes using infinite scroll. Built with React Query, Axios, and Mantine viewport detection.


## Live Link

Checkout the live Demo [Infiroll](https://infiroll-snws.vercel.app/)

---

##  Features

-  Infinite scrolling quotes
-  Fast fetching with React Query
-  Intersection Observer (useInViewport)
-  Quote + Author + Categories display
-  Responsive UI (mobile + desktop)
-  Styled with Tailwind CSS + shadcn/ui

---

## Tech Stack

- React (Vite)
- React Query (@tanstack/react-query)
- Axios
- Mantine Hooks
- Tailwind CSS
- shadcn/ui
- Ninja API

---

## Installation

```bash
git clone https://github.com/ABUBAKAR-DAHIR/infiroll.git
cd infiroll
pnpm install
```

### Run locally
```bash
pnpm run dev
```


App runs at:

http://localhost:5173

## API Used

API Ninjas Quotes API


GET https://api.api-ninjas.com/v1/quotes


### Query Params:

- category
- limit
- offset

---

## How It Works

- `useInfiniteQuery` handles pagination
- `offset` controls page fetching
- `useInViewport` detects bottom scroll
- `fetchNextPage()` loads more quotes automatically

---

## 📁 Project Structure
```text
infiroll/
│
├── public/
│ ├── favicon.svg
│ └── icons.svg
│
├── src/
│
│ ├── assets/
│ │ ├── hero.png
│ │ ├── react.svg
│ │ └── vite.svg
│
│ ├── components/
│ │
│ │ ├── ui/
│ │ │ ├── button.tsx # Reusable UI button component
│ │ │ ├── card.tsx # Card UI component
│ │ │ └── skeleton.tsx # Loading skeleton component
│ │
│ │ ├── Quotes.tsx # Main infinite scroll quotes UI
│ │ ├── QuotesLoading.tsx # Loading state UI for quotes
│ │ └── QueryClientProviderC.tsx # React Query provider wrapper
│
│ ├── hooks/
│ │ └── fetchQuotes.tsx # Infinite query API logic
│
│ ├── libs/
│ │ ├── api.ts # Axios instance (baseURL + headers)
│ │ └── utils.ts # Helper utilities
│
│ ├── index.css # Global styles (Tailwind base)
│ ├── main.tsx # React entry point
│ ├── App.tsx # Root app component
│
├── components.json # shadcn/ui config
├── vite.config.ts # Vite configuration
├── tsconfig.json # TypeScript config
├── tsconfig.app.json # App TS config
├── tsconfig.node.json # Node TS config
├── eslint.config.js # ESLint rules
├── package.json # Dependencies & scripts
├── pnpm-lock.yaml # Lock file (pnpm)
└── README.md # Project documentation
```

## 👨‍💻 Author

**Abubakar Dahir Hassan**




