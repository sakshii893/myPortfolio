# GitHub Pages Deployment Guide

## Prerequisites
✅ gh-pages package installed
✅ package.json configured with homepage and deploy scripts
✅ vite.config.ts configured with base path

## Step-by-Step Deployment

### 1. Initialize Git Repository (if not already done)
```bash
git init
```

### 2. Create GitHub Repository
- Go to https://github.com/new
- Repository name: `portfolio` (or your preferred name)
- Make it Public
- Don't initialize with README (we already have files)
- Click "Create repository"

### 3. Add Remote Repository
```bash
git remote add origin https://github.com/sakshii893/portfolio.git
```

### 4. Check What Will Be Committed
```bash
git status
```

### 5. IMPORTANT: Verify .env is NOT being tracked
```bash
git status | grep .env
```
If you see .env listed, it means it's being tracked. Run:
```bash
git rm --cached .env
```

### 6. Add All Files
```bash
git add .
```

### 7. Commit Your Changes
```bash
git commit -m "Initial commit: Portfolio website"
```

### 8. Push to GitHub
```bash
git branch -M main
git push -u origin main
```

### 9. Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Deploy the `dist` folder to GitHub Pages

### 10. Enable GitHub Pages (if needed)
- Go to your repository on GitHub
- Click "Settings"
- Scroll to "Pages" section
- Source should be set to "gh-pages" branch
- Click "Save"

### 11. Access Your Site
Your site will be available at:
```
https://sakshii893.github.io/portfolio/
```

## Important Notes

### Security Checklist
- ✅ .env file is in .gitignore
- ✅ Never commit API tokens or secrets
- ⚠️ REVOKE your current GitHub token (it was exposed in .env)
- ✅ Create a new GitHub token if needed

### If Repository Name is Different
If you use a different repository name (e.g., "my-portfolio"), update:

1. **package.json**:
```json
"homepage": "https://sakshii893.github.io/YOUR-REPO-NAME"
```

2. **vite.config.ts**:
```typescript
base: '/YOUR-REPO-NAME/'
```

### Updating Your Site
After making changes:
```bash
git add .
git commit -m "Your commit message"
git push
npm run deploy
```

## Troubleshooting

### Issue: 404 Error
- Check that base path in vite.config.ts matches your repo name
- Verify GitHub Pages is enabled in repository settings

### Issue: Assets Not Loading
- Ensure base path is correct
- Check browser console for errors

### Issue: .env File Pushed to GitHub
1. Remove it from git:
```bash
git rm --cached .env
git commit -m "Remove .env file"
git push
```
2. Revoke any exposed tokens immediately
3. Create new tokens

## Current Configuration

- **Repository**: https://github.com/sakshii893/portfolio
- **Live Site**: https://sakshii893.github.io/portfolio/
- **Base Path**: /portfolio/

## Need Help?
- GitHub Pages Docs: https://docs.github.com/en/pages
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
