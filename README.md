# MegaBite Restaurant Consulting

A modern website for restaurant consulting services, helping small and local restaurants integrate full-stack technology systems.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/          # Static assets (images, fonts, etc.)
├── src/
│   ├── components/  # Reusable components
│   ├── content/     # Blog posts (markdown/mdx)
│   ├── layouts/     # Page layouts
│   ├── pages/       # Page routes
│   └── styles/      # Global styles
└── package.json
```

## ✨ Features

- 🎨 Modern, sleek design with light pink and white color scheme
- 📱 Fully responsive
- 📝 Blog system with content collections
- 📅 Calendly integration for meeting scheduling
- ⚡ Fast performance with Astro
- 🎯 Strong call-to-action elements

## 📝 Adding Blog Posts

Create new markdown files in `src/content/blog/` with the following frontmatter:

```md
---
title: "Your Post Title"
description: "A brief description"
pubDate: 2024-01-01
author: "Your Name"
---

Your content here...
```

## 🔧 Customization

- Update site information in `astro.config.mjs`
- Modify colors in `tailwind.config.mjs`
- Replace Calendly link in components with your personal link
