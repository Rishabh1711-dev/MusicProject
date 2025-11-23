# 🎵 Melody Mastery

> **Where Music Comes Alive**

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-red?style=for-the-badge&logo=framer)

**Melody Mastery** is a modern, highly interactive music education platform built to showcase music courses, webinars, and instructors. It leverages the power of **Next.js 15 (App Router)** and **TypeScript**, featuring stunning UI animations powered by **Framer Motion** and **Aceternity UI**.

## ✨ Key Features

This project features a collection of high-performance, visually appealing UI components:

* **Hero Section with Spotlight:** A dramatic spotlight effect tracking the mouse position to highlight the main value proposition.
* **Featured Courses:** A responsive grid displaying course details (Guitar, Piano, Production) with 3D background gradient effects.
* **Sticky Scroll Reveal:** A "Why Choose Us" section that smoothly reveals content and visuals as the user scrolls.
* **Infinite Moving Testimonials:** A marquee-style scrolling banner showcasing student success stories.
* **Interactive Instructors Section:** A wavy background effect combined with animated tooltips for instructor profiles.
* **Upcoming Webinars:** Hover-responsive cards promoting live music events.
* **Responsive Navigation:** A top-fixed navbar with robust menu interactions.

## 🛠️ Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Motion](https://motion.dev/) (Framer Motion)
* **UI Components:** Custom implementations inspired by [Aceternity UI](https://ui.aceternity.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Font:** Geist Sans & Geist Mono

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have **Node.js** (version 18.17.0 or later) installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/melody-mastery.git](https://github.com/yourusername/melody-mastery.git)
    cd melody-mastery
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## xB8; Project Structure

```bash
src/
├── app/
│   ├── layout.tsx       # Main layout (includes Font & Navbar)
│   ├── page.tsx         # Landing page composition
│   └── globals.css      # Global styles & Tailwind directives
├── components/
│   ├── ui/              # Reusable UI components (Spotlight, Cards, etc.)
│   ├── Featured.tsx     # Featured Courses section
│   ├── HeroSection.tsx  # Landing Hero
│   ├── Instructors.tsx  # Instructor showcase
│   ├── Navbar.tsx       # Main Navigation
│   ├── TestimonialCards.tsx
│   ├── UpcomingWebinars.tsx
│   └── WhyChooseUs.tsx
├── data/
│   └── music_courses.json # Mock data for courses
└── lib/
    └── utils.ts         # cn() utility for class merging




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
