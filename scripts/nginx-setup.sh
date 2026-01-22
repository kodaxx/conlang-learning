#!/bin/bash
# LinguaQuest - Nginx + SSL Setup Script
# Run this AFTER setup.sh to configure domain and HTTPS
# Usage: sudo bash scripts/nginx-setup.sh yourdomain.com

set -e

DOMAIN=$1
PORT="${PORT:-3000}"

if [ -z "$DOMAIN" ]; then
    echo "❌ Error: Please provide your domain"
    echo "Usage: sudo bash scripts/nginx-setup.sh yourdomain.com"
    echo ""
    echo "Example: sudo bash scripts/nginx-setup.sh globasa.example.com"
    exit 1
fi

echo "🌐 Nginx + SSL Setup for: $DOMAIN"
echo "================================="

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "⚠️  Please run with sudo"
    exit 1
fi

# Install Nginx if not present
if ! command -v nginx &> /dev/null; then
    echo "📦 Installing Nginx..."
    apt-get update
    apt-get install -y nginx
fi

# Install Certbot if not present
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing Certbot..."
    apt-get install -y certbot python3-certbot-nginx
fi

# Create Nginx config
echo "📝 Creating Nginx configuration..."
cat > /etc/nginx/sites-available/linguaquest << EOF
server {
    listen 80;
    server_name $DOMAIN;

    location / {
        proxy_pass http://localhost:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/linguaquest /etc/nginx/sites-enabled/

# Test Nginx config
echo "🧪 Testing Nginx configuration..."
nginx -t

# Reload Nginx
echo "🔄 Reloading Nginx..."
systemctl reload nginx

echo ""
echo "✅ Nginx configured!"
echo ""
echo "📍 Your app is now available at: http://$DOMAIN"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🔒 Now let's add FREE SSL with Let's Encrypt..."
echo ""
echo "IMPORTANT: Make sure your domain's DNS is pointing to this server!"
echo "  - Your server IP: $(curl -s ifconfig.me)"
echo "  - Domain should have an A record pointing to this IP"
echo ""
read -p "Is your DNS configured? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🔐 Running Certbot..."
    certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN --redirect
    
    echo ""
    echo "✅ SSL configured!"
    echo ""
    echo "🎉 Your app is now live at: https://$DOMAIN"
    echo ""
    echo "SSL certificate will auto-renew. To test renewal:"
    echo "  sudo certbot renew --dry-run"
else
    echo ""
    echo "⏭️  Skipping SSL for now."
    echo ""
    echo "When your DNS is ready, run:"
    echo "  sudo certbot --nginx -d $DOMAIN"
fi
