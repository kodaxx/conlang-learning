#!/bin/bash
# LinguaQuest - Update Script
# Run this to pull latest changes and redeploy
# Usage: sudo bash /var/www/linguaquest/scripts/update.sh

set -e

APP_DIR="/var/www/linguaquest"
PORT="${PORT:-3000}"

echo "🔄 LinguaQuest Update"
echo "===================="

cd $APP_DIR

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install any new dependencies
echo "📦 Installing dependencies..."
npm install

# Rebuild
echo "🔨 Building..."
npm run build

# Restart the app
echo "🚀 Restarting..."
pm2 restart linguaquest

echo ""
echo "✅ Update complete!"
echo ""
pm2 status linguaquest
