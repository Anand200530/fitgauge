#!/bin/bash
# Deploy FitGauge to GitHub Pages

echo "🚀 Deploying FitGauge to GitHub Pages..."

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Committing changes..."
    git add .
    git commit -m "Update - $(date)"
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployed successfully!"
echo ""
echo "🌐 Your site: https://anand200530.github.io/fitgauge/"
echo ""
echo "📝 GitHub Pages may take 1-2 minutes to update."
