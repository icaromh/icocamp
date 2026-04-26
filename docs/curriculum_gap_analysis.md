# 📊 IcoCamp Curriculum Gap Analysis

**Bootcamp:** Fullstack do Zero ao Deploy — "Minha Estante Virtual"
**Target:** Junior engineer (1 learner, 3 days/week, 12 weeks)
**Stack:** Vanilla JS → HTML/CSS → DOM → Git → HTTP → Node/Express → SQLite → React → Deploy

---

## ✅ What's Working Well

- **Single evolving project** (`Minha Estante Virtual`) is excellent — provides continuity and motivation
- **Pedagogical principle is sound**: _"Nunca ensinar uma abstração antes da dor que ela resolve"_ — avoids premature abstraction
- **Week 1** is the most developed module: clear learning objectives, guided exercises, narrative explanations, and a challenge file
- **Week 4 (DOM/LocalStorage)** is well-structured with multiple sub-lessons broken into logical steps
- **Week 6 (HTTP/REST)** has a real-world challenge using the Open Library API — hands-on and motivating
- **Week 8 (Database)** has the deepest written content — ER diagrams, SQL examples, conceptual bridges from JS to SQL
- **Exercise library** (`exercises/javascript`) is solid: 40+ exercises covering Objects, Iterators, Functions, Challenges with solutions

---

## 🚨 Critical Gaps (Blocking)

### 1. Weeks 7, 9, 10, 11, 12 are nearly empty

These modules are **stub-only** — just a bullet list of topics with no actual content:

| Week | Module | Content Status |
|------|--------|---------------|
| 7 | Backend Node/Express | 16-line stub. No code examples, no exercises, no narrative |
| 9 | React Fundamentals | 15-line stub. No explanation, no setup guide, no exercises |
| 10 | React Advanced | 14-line stub. No code, no project integration guidance |
| 11 | Quality & Architecture | 15-line stub. No examples, no test code |
| 12 | Deploy & Conclusion | 15-line stub. No platform guidance, no walkthrough |

> [!CAUTION]
> The last 5 weeks — the backend, React, and deploy phases — represent **the core of fullstack development** and have virtually zero teaching material. A junior engineer would be completely lost here.

### 2. No exercises beyond JavaScript

The `exercises/` directory only has JavaScript exercises. There are **zero exercises for**:
- HTML structure
- CSS layout
- DOM manipulation
- API/fetch challenges
- Backend route building
- SQL / database
- React components

### 3. Week 7 Backend: No actual code

The backend week has no:
- Express server boilerplate
- Example routes (`GET /books`, `POST /books`)
- How to connect SQLite to Express
- Middleware examples
- Error handling patterns

This is the most complex conceptual leap in the curriculum (browser → server) and is completely unsupported.

---

## ⚠️ Notable Gaps (Important)

### 4. No TypeScript pathway

Week 12 mentions TypeScript in "next steps" but there's no scaffolding. Junior engineers are increasingly expected to write TypeScript from day one in the job market.

### 5. Authentication is entirely absent

There is no mention of:
- Sessions / cookies
- JWT tokens
- Password hashing (bcrypt)
- Protected routes

The capstone project ("Minha Estante Virtual") would naturally want user accounts, and juniors encounter auth in almost every real job.

### 6. Week 5 Git: Branches & merges listed but not taught

The README lists `branches`, `merge`, and `conflicts` as concepts, but the actual content only teaches:
- `git init`, `add`, `commit`, `push`
- Writing a README

Branches and PR workflow — essential for any team job — are promised but missing.

### 7. No API error handling patterns in Week 6

The HTTP week teaches the happy path but doesn't cover:
- `try/catch` with `async/await`
- Non-2xx responses (`response.ok`)
- User-facing error messages
- Network failure handling

The challenge's stretch goal mentions a loading state, but error states are absent.

### 8. Week 8 uses SQLite but Week 8's title/syllabus says PostgreSQL

The main `curso/README.md` syllabus says **PostgreSQL**, but the actual `08-banco-dados/README.md` teaches **SQLite**. This is a mismatch that will confuse the learner and creates a problem when they encounter PostgreSQL in a real job.

### 9. No deployment walkthrough

Week 12 lists deploy topics but zero guidance on:
- Which platforms (Vercel? Render? Railway?)
- Specific steps for each
- Environment variable configuration in production
- Database hosting

---

## 🟡 Minor / Enhancement Gaps

### 10. Week 3 CSS: Grid is "intro only"

CSS Grid is listed as an introduction but Flexbox gets full coverage. In practice, grid is essential for modern layouts. It deserves at least one hands-on exercise.

### 11. No accessibility beyond "basic attributes"

Week 2 mentions `acessibilidade básica` but no `aria-label`, keyboard navigation, or contrast checking are demonstrated.

### 12. No code review / PR culture

There's no mention of how to review someone else's code, request changes, or respond to feedback — a critical soft skill for junior devs.

### 13. `resumo.md` files are mostly empty

Every week has a `resumo.md` file that seems designed to be a student-written summary. Most contain only 1 byte (empty). This might be intentional (student fills it in), but it's undocumented — a first-time learner wouldn't know what to do with it.

### 14. No debugging guide

Week 11 lists "debugging frontend and backend" but there is no actual guide: no browser DevTools walkthrough, no `console.log` strategy, no `node --inspect` usage.

### 15. Exercises directory has 1 incomplete challenge

Challenge #4 (Course Progress Tracker) has `[ ]` status — it's listed but the solution file appears to exist. Worth completing or removing.

---

## 📋 Priority Recommendations

| Priority | Action |
|----------|--------|
| 🔴 P0 | Write Week 7 (Node/Express) with boilerplate, route examples, and a mini challenge |
| 🔴 P0 | Write Week 9 (React) with setup guide, component examples, and exercises |
| 🔴 P0 | Write Week 10 (React Advanced) with useEffect, fetch integration, routing |
| 🔴 P0 | Write Week 12 (Deploy) with a step-by-step guide for Vercel + Render + Railway |
| 🟠 P1 | Add DOM/CSS/HTML exercises to the `exercises/` directory |
| 🟠 P1 | Fix the SQLite vs. PostgreSQL naming inconsistency (pick one and document why) |
| 🟠 P1 | Expand Week 5 Git to actually teach branching and PR workflow |
| 🟡 P2 | Add an authentication mini-module (even JWT basics) |
| 🟡 P2 | Add a debugging guide (DevTools + Node Inspector) |
| 🟡 P2 | Document the `resumo.md` convention so students know what to do with it |
| 🟢 P3 | Add TypeScript introduction as an optional Week 13 |
| 🟢 P3 | Add accessibility practical exercises to Week 2 |

---

## 📐 Content Coverage Matrix

| Week | Has Narrative | Has Code Examples | Has Exercises | Has Challenge | Assessment |
|------|:---:|:---:|:---:|:---:|---|
| 1 — JS Fundamentals | ✅ | ✅ | ✅ | ✅ | 🟢 Complete |
| 2 — HTML | ✅ | partial | ❌ | ❌ | 🟡 Needs exercises |
| 3 — CSS | ✅ | partial | ❌ | ❌ | 🟡 Needs exercises |
| 4 — DOM/LocalStorage | ✅ | ✅ | partial | partial | 🟡 Solid, needs more challenges |
| 5 — Git | ✅ | ✅ | ❌ | ✅ (weak) | 🟡 Missing branch/PR content |
| 6 — HTTP/REST | ✅ | ✅ | ❌ | ✅ | 🟡 Missing error handling |
| 7 — Backend | ❌ | ❌ | ❌ | ❌ | 🔴 Empty |
| 8 — Database | ✅ | ✅ | ✅ | ✅ | 🟢 Best non-JS module |
| 9 — React | ❌ | ❌ | ❌ | ❌ | 🔴 Empty |
| 10 — React Advanced | ❌ | ❌ | ❌ | ❌ | 🔴 Empty |
| 11 — Quality/Arch | ❌ | ❌ | ❌ | ❌ | 🔴 Empty |
| 12 — Deploy | ❌ | ❌ | ❌ | ❌ | 🔴 Empty |

---

## 💡 Quick Wins (Can be done in a day)

1. **Document `resumo.md`** — add a one-liner at the top of each saying "Student: write your week summary here"
2. **Fix the PostgreSQL/SQLite mismatch** — update the main README syllabus to say SQLite
3. **Complete challenge #4** in exercises or mark it as WIP
4. **Add error handling** to the Week 6 fetch example
5. **Expand the `extras.md`** — it currently just has two raw URLs; add context for when/why to use those AI resources
