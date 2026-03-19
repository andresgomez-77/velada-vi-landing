# Agent Instructions — La Velada VI Landing (React)

## Context

We are recreating a modern, scalable landing page for **La Velada del Año VI**.

This event generates massive traffic peaks during announcements and live streaming, so the application must prioritize:

- Performance
- Scalability
- Simplicity
- Fast rendering

The landing should visually resemble the current event landing:

Key elements observed:

- Dark cinematic background
- Central event logo
- Countdown timer
- Event information
- Social media links
- CTA for tickets

Design reference image is provided.

---

# Tech Stack

Frontend:

- React
- Vite
- TypeScript
- TailwindCSS
- React Router
- Framer Motion (animations)

Optional:

- Zustand (state)
- React Query (data)

Backend (optional mock):

- Node.js
- Express
- PostgreSQL
- JWT authentication

Deployment:

- Vercel (frontend)
- Vercel/ Railway / Render (backend)

---

# Core Goal

Create a **high-performance landing page capable of handling millions of users** during event traffic spikes.

Focus on:

- Static generation
- Minimal JS
- Fast load time

---

# Project Structure

src/

components
Hero
Countdown
EventInfo
Fights
FightersCard
Sponsors
SocialLinks
Navbar
Footer

pages
Home
Fights
Stream

services
api.ts

hooks
useCountdown.ts

store
authStore.ts

---

# Landing Page Sections

## 1 Hero Section

Elements:

- Full screen section
- Background video or animated background
- Event logo
- Date and location
- Countdown timer
- CTA button

Example content:

25 July — 20:00 CET  
Estadio de La Cartuja — Sevilla

CTA:

View fights  
Watch stream

---

## 2 Countdown Timer

Live updating timer showing:

Days  
Hours  
Minutes  
Seconds

Timer should be calculated from event date.

---

## 3 Fight Cards

Display matchups between creators.

Card includes:

- Fighter 1 image
- Fighter 2 image
- VS element
- Fight title

Example:

Creator vs Creator

---

## 4 Streaming Section

Embed Twitch or YouTube stream.

Example providers:

- Twitch embed
- YouTube embed

---

## 5 Sponsors Section

Logos grid.

Include sponsor hover animation.

---

## 6 Social Links

Icons for:

Twitch  
YouTube  
TikTok  
Twitter

---

# User Roles

Three roles:

Visitor  
Registered user  
Admin

---

## Visitor

Permissions:

View landing  
View fights  
View countdown  
View stream

---

## Registered User

Additional capabilities:

- Comment during live event
- Receive notifications

---

## Admin

Admin dashboard features:

- Add fighters
- Edit fight cards
- Update event info
- Enable/disable stream
- Manage sponsors

---

# Admin Panel Structure

/admin

Sections:

Dashboard  
Fighters  
Fights  
Sponsors  
Event settings

---

# Performance Requirements

Critical because the event can reach **millions of concurrent users**.

Requirements:

- Lazy loading images
- CDN assets
- Static page rendering
- Avoid heavy libraries

Target metrics:

Lighthouse performance > 90

---

# Visual Style

Dark cinematic theme.

Colors:

Black
Gold
Bronze

Typography:

Bold headline font
Minimalistic UI

Animations:

Subtle glow effects
Hero transitions
Hover animations

---

# Bonus Features

Optional improvements:

- Real-time fight announcements
- Event timeline
- Dynamic announcements banner

---

# Deliverables

1 Landing page working
2 Countdown functional
3 Fight cards layout
4 Streaming embed
5 Responsive design
6 Admin panel mock
7 Deploy preview

---

# Expected Result

A fast and visually impressive landing page that could realistically support a major live streaming event like **La Velada**.
