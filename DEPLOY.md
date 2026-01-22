# LinguaQuest Deployment

## Quick Deploy to Your Droplet

### First Time Setup

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/language-app.git
   git push -u origin main
   ```

2. **On your Droplet, run:**
   ```bash
   # Clone and setup
   sudo git clone https://github.com/YOUR_USERNAME/language-app.git /var/www/linguaquest
   cd /var/www/linguaquest
   sudo bash scripts/setup.sh
   ```

3. **Configure Nginx** (optional, for domain + SSL):
   ```nginx
   server {
       listen 80;
       server_name globasa.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   Then: `sudo certbot --nginx` for SSL.

---

### Updating (After Push to GitHub)

```bash
cd /var/www/linguaquest
sudo bash scripts/update.sh
```

---

### Useful Commands

| Command | Description |
|---------|-------------|
| `pm2 logs linguaquest` | View app logs |
| `pm2 restart linguaquest` | Restart the app |
| `pm2 status` | Check running status |
| `pm2 monit` | Real-time monitoring |

---

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | HTTP port to listen on |

---

### Database

SQLite database is stored in `/var/www/linguaquest/data/`.
This folder is gitignored and persists between updates.
