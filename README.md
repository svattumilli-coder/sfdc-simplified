# SF Dev Academy

An interactive learning platform for complete beginners learning Salesforce development.

## Features

- **10 Beginner Lessons** — Apex variables, strings, conditionals, loops, lists, sets, maps, classes, SOQL, and DML
- **10 Coding Challenges** — One per lesson, with hints, solutions, and pattern-based validation
- **SOQL Visual Explorer** — Build and run SOQL queries against fictional demo data
- **Debug Lab** — 5 intentionally broken Apex code scenarios to diagnose and fix
- **4 Project Missions** — Realistic business requirements to apply your skills
- **XP & Leveling System** — Earn XP for completing lessons, quizzes, and challenges
- **Progress saved locally** — localStorage persistence (no account required)

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router v6
- Tailwind CSS
- Lucide React icons

## Getting Started

```bash
cd sf-dev-academy
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Important Note

This is an educational learning platform that is **not affiliated with Salesforce, Inc.**

The coding challenges use **pattern-based validation** in the browser — they do not compile or execute real Apex. To run real Apex code, use a [free Salesforce Developer Edition org](https://developer.salesforce.com/signup).

## Project Structure

```
src/
  components/
    Layout/       # Navbar, Footer
    Lesson/       # LessonCard
    Challenge/    # ChallengeEditor (code input + validation)
    Quiz/         # QuizComponent
    common/       # ProgressBar, Badge
  data/
    lessons.ts    # 10 lessons with content, quizzes
    challenges.ts # 10 coding challenges
    soql-data.ts  # Demo Salesforce records
    missions.ts   # 4 project missions
    debug-scenarios.ts  # 5 debug scenarios
    modules.ts    # Module metadata
  hooks/
    useProgress.ts  # localStorage progress tracking
  pages/
    Home.tsx
    Dashboard.tsx
    ApexPath.tsx
    LessonDetail.tsx
    SOQLExplorer.tsx
    DebuggingSimulator.tsx
    Missions.tsx
    About.tsx
    Challenge.tsx
  types/
    index.ts      # TypeScript interfaces
```
