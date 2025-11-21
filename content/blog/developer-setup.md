---
title: 'My Developer Setup: Tools and Workflows'
description: 'The tools, workflows, and practices that make me productive as a full-stack developer'
date: '2025-10-28'
tags: ['productivity', 'tools', 'developer-experience']
---

# My Developer Setup: Tools and Workflows

After years of experimenting, I've settled on a setup that maximizes productivity while keeping things simple.

## Daily Tools

### Development Environment

- **Editor**: VS Code with Vim keybindings
- **Terminal**: iTerm2 with zsh and Oh My Zsh
- **Version Control**: Git with conventional commits
- **Package Manager**: Bun (incredibly fast!)

### Essential Extensions

```json
{
  "recommendations": [
    "vue.volar",
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "github.copilot",
    "bradlc.vscode-tailwindcss"
  ]
}
```

## Workflow Practices

### 1. Morning Routine

I start each day with:

- ☕ Coffee and light stretching (biohacking in action)
- 📝 Review yesterday's progress
- 🎯 Plan today's top 3 priorities
- 🧘 5-minute meditation

### 2. Development Cycle

```bash
# Feature branch workflow
git checkout -b feature/new-feature
# Work in small, focused commits
git commit -m "feat: add user authentication"
# Keep branches up to date
git rebase main
# Clean merge
git push origin feature/new-feature
```

### 3. Code Quality

- **ESLint + Prettier**: Automated formatting
- **TypeScript**: Type safety everywhere
- **Vitest**: Fast, modern testing
- **Husky**: Pre-commit hooks for quality checks

## Productivity Boosters

### Keyboard-First

I minimize mouse usage:

- Vim motions for editing
- Tmux for terminal multiplexing
- Custom keyboard shortcuts

### Automation

```typescript
// Auto-format on save
// Auto-import components
// Auto-restart dev server
// Auto-deploy on push to main
```

### Focus Time

- 🔕 Turn off notifications during deep work
- ⏰ Pomodoro technique for intense sessions
- 🎵 Lo-fi music for concentration
- 📵 Phone in another room

## Staying Healthy

As someone who fights burnout with calisthenics and biohacking:

- **Regular breaks**: Stand and stretch every hour
- **Exercise**: Morning calisthenics routine
- **Sleep**: 7-8 hours, no compromise
- **Nutrition**: Optimize for mental clarity
- **Hydration**: Water bottle always nearby

## Continuous Learning

- 📚 Read technical blogs and documentation
- 🎥 Follow key developers on Instagram
- 💻 Contribute to open source
- 🧪 Experiment with new technologies
- 📝 Write about what I learn

The key is finding what works for *you* and continuously refining it!
