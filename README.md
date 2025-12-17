# 🎵 Melody Mastery

> **Where Music Comes Alive**  
A modern, interactive music learning platform built with cutting-edge web technologies.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animation-red?style=for-the-badge&logo=framer" />
</p>

---

## 🌟 Overview

**Melody Mastery** is a premium, UI-focused music education platform designed to deliver an immersive learning experience for musicians.  
It showcases **advanced frontend engineering**, **fluid animations**, and **scalable architecture** using **Next.js App Router**.

This project is ideal for demonstrating:
- High-quality UI/UX
- Component-driven architecture
- Real-world dashboard & auth flows
- Animation-heavy modern web apps

---

## ✨ Core Features

### 🎯 AI Pathfinder
Personalized curriculum generator that adapts learning paths based on user goals and playstyle.

### 📊 Interactive Dashboard
- Practice streak tracking  
- Daily momentum goals  
- Progress visualization  

### 🎼 Elite Course Catalog
- Responsive 3D animated course cards  
- Programs for instruments, production & composition  

### 🎥 Immersive Visual Experience
- Spotlight hero animations  
- Wavy animated backgrounds  
- Sticky scroll reveal sections  
- Infinite marquee testimonials  

### 🔐 Authentication System
- Google & GitHub OAuth  
- Email-based authentication  
- Protected dashboard routes  

### 🧭 Modern Navigation
- Fixed animated navbar  
- Mobile-friendly menu  
- Smooth transitions  

---

## 🧰 Tech Stack

| Category | Technology |
|-------|------------|
| Framework | **Next.js 15 (App Router)** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** |
| Animations | **Framer Motion** |
| UI System | **Aceternity UI (inspired)** |
| Icons | **Lucide React** |
| Fonts | **Geist Sans & Geist Mono** |

---

## 📁 Project Structure

```txt
musicproject/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (main)/pricing/  # Subscription plans
│   │   ├── ai-pathfinder/   # AI curriculum generator
│   │   ├── auth/login/      # Authentication pages
│   │   ├── contact/         # Contact & support
│   │   ├── courses/         # Course catalog
│   │   ├── dashboard/       # Student dashboard
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Landing page
│   │   └── providers.tsx    # Global providers
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Animated UI primitives
│   │   ├── lms/             # Progress & learning tools
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   └── WhyChooseUs.tsx
│   ├── data/                # Mock data
│   └── lib/                 # Utilities & helpers
├── next.config.ts
├── tailwind.config.ts
└── package.json


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
