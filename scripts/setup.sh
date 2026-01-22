#!/bin/bash
# LinguaQuest - Initial Server Setup Script
# Run this ONCE on a fresh droplet or first-time setup
# Usage: curl -sSL https://raw.githubusercontent.com/YOUR_USER/YOUR_REPO/main/scripts/setup.sh | bash

set -e

APP_DIR="/var/www/linguaquest"
REPO_URL="${REPO_URL:-https://github.com/kodaxx/conlang-learning.git}"
PORT="${PORT:-3000}"

echo "🚀 LinguaQuest Server Setup"
echo "=========================="

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then
    echo "⚠️  Please run with sudo: sudo bash setup.sh"
    exit 1
fi

# Install Node.js if not present
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi

echo "✅ Node.js $(node -v)"

# Install PM2 globally
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Create app directory
echo "📁 Creating app directory..."
mkdir -p $APP_DIR
cd $APP_DIR

# Clone or update repository
if [ -d ".git" ]; then
    echo "📥 Updating existing repository..."
    git pull origin main
else
    echo "📥 Cloning repository..."
    git clone $REPO_URL .
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the app
echo "🔨 Building production bundle..."
npm run build

# Create data directory for SQLite (persistent)
mkdir -p data

# Get server's public IP for ORIGIN
SERVER_IP=$(curl -s ifconfig.me)

# Setup PM2
echo "🚀 Starting with PM2..."
pm2 delete linguaquest 2>/dev/null || true
ORIGIN=http://$SERVER_IP:$PORT PORT=$PORT pm2 start build/index.js --name linguaquest

# Save PM2 config and setup startup
pm2 save
pm2 startup systemd -u $SUDO_USER --hp /home/$SUDO_USER

echo ""
echo "✅ Setup complete!"
echo ""
echo "📍 App running at: http://localhost:$PORT"
echo ""
echo "Useful commands:"
echo "  pm2 logs linguaquest    - View logs"
echo "  pm2 restart linguaquest - Restart app"
echo "  pm2 status              - Check status"
echo ""
echo "To update later, run: sudo bash $APP_DIR/scripts/update.sh"
