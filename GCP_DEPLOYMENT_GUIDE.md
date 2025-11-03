# GCP Deployment Guide - Megabite Consulting

## 🚀 Firebase Hosting Setup (Recommended)

### **Prerequisites**
- Google Cloud account with credits
- Firebase project created
- Firebase CLI installed

### **Step 1: Install Firebase CLI**
```bash
npm install -g firebase-tools
```

### **Step 2: Login to Firebase**
```bash
firebase login
firebase init hosting
```

**Configuration:**
- Project: Select/create your Firebase project
- Public directory: `dist`
- Configure as single-page app: **Yes**
- Overwrite index.html: **No**

### **Step 3: Deploy to Firebase**
```bash
npm run deploy:prod
```

### **Step 4: Configure Custom Domain**
1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Enter: `megabite.consulting`
4. Verify domain ownership
5. Update DNS records as instructed

---

## 🌐 Alternative: Cloud Storage + Load Balancer

### **Step 1: Create Cloud Storage Bucket**
```bash
gsutil mb gs://megabite-consulting-website
gsutil web set -m index.html -e 404.html gs://megabite-consulting-website
```

### **Step 2: Upload Files**
```bash
gsutil -m rsync -r dist/ gs://megabite-consulting-website/
gsutil iam ch allUsers:objectViewer gs://megabite-consulting-website
```

### **Step 3: Set up Load Balancer**
1. Go to GCP Console → Load Balancing
2. Create HTTP(S) Load Balancer
3. Backend: Cloud Storage bucket
4. Frontend: Your domain, HTTP/HTTPS
5. Configure SSL certificate

---

## ⚡ Alternative: Cloud Run (Serverless)

### **Step 1: Create Dockerfile**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

### **Step 2: Deploy to Cloud Run**
```bash
gcloud builds submit --tag gcr.io/PROJECT-ID/megabite
gcloud run deploy megabite --image gcr.io/PROJECT-ID/megabite --platform managed
```

---

## 🏗️ Alternative: Compute Engine (VM)

### **Step 1: Create VM Instance**
```bash
gcloud compute instances create megabite-web \
    --machine-type=e2-micro \
    --image-family=ubuntu-2004-lts \
    --image-project=ubuntu-os-cloud \
    --zone=us-central1-a \
    --tags=http-server,https-server
```

### **Step 2: Setup Web Server**
```bash
# SSH into VM
gcloud compute ssh megabite-web --zone=us-central1-a

# Install nginx
sudo apt update
sudo apt install nginx -y

# Upload files
sudo rm -rf /var/www/html/*
sudo scp -r dist/* user@VM_IP:/var/www/html/
```

---

## 💰 Cost Estimates (With Credits)

### **Firebase Hosting**
- **Free tier:** 10GB storage, 360MB/day transfer
- **Paid:** $0.026/GB storage beyond free tier
- **Monthly cost:** $0-5 depending on traffic

### **Cloud Storage + Load Balancer**
- **Storage:** $0.026/GB
- **Egress:** $0.12/GB (first 1GB/month free)
- **Load Balancer:** $0.025/hour (~$18/month)
- **Monthly cost:** $20-30

### **Cloud Run**
- **CPU:** $0.000024/vCPU-second
- **Memory:** $0.0000025/GB-second
- **Requests:** $0.40 per million
- **Monthly cost:** $2-15 depending on traffic

### **Compute Engine**
- **e2-micro:** $4.95/month (free tier covers this)
- **Storage:** $0.026/GB
- **Network:** Minimal for static site
- **Monthly cost:** $5-10

---

## 🎯 Recommended Choice: Firebase Hosting

### **Why Firebase?**
✅ **Free tier covers most needs**
✅ **Global CDN automatically**
✅ **Free SSL certificates**
✅ **Easy deployment**
✅ **Great performance**
✅ **Preview deployments**
✅ **Rollback capability**

### **Performance Benefits**
- **Edge caching** worldwide
- **HTTP/2 support**
- **Automatic compression**
- **IPv6 support**
- **Instant invalidation**

---

## 📋 Deployment Checklist

### **Pre-Deployment**
- [ ] Website builds successfully (`npm run build`)
- [ ] All links work in preview
- [ ] Calendly integration tested
- [ ] Charts and animations work
- [ ] Mobile responsive verified

### **Firebase Setup**
- [ ] Firebase CLI installed
- [ ] Project created in Firebase Console
- [ ] `firebase.json` configured
- [ ] Custom domain ready

### **Post-Deployment**
- [ ] Website loads at custom domain
- [ ] HTTPS working properly
- [ ] All pages accessible
- [ ] SEO meta tags present
- [ ] Google Search Console setup
- [ ] Analytics configured

---

## 🔧 Advanced Configuration

### **Firebase Performance**
```json
{
  "hosting": {
    "public": "dist",
    "cleanUrls": true,
    "trailingSlash": false,
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [{"key": "Cache-Control", "value": "max-age=31536000"}]
      }
    ]
  }
}
```

### **Custom 404 Page**
Create `dist/404.html` for branded error pages.

### **Environment Variables**
Use `.firebaserc` for different environments:
```json
{
  "projects": {
    "default": "megabite-production",
    "dev": "megabite-development"
  }
}
```

---

## 🚀 Quick Deploy Commands

### **Development**
```bash
npm run deploy
```

### **Production**
```bash
npm run deploy:prod
```

### **Preview**
```bash
firebase hosting:channel:deploy preview
```

---

## 📊 Monitoring & Analytics

### **Firebase Analytics**
- Built-in page views
- User demographics
- Performance metrics

### **Google Search Console**
- Submit sitemap: `https://megabite.consulting/sitemap.xml`
- Monitor indexing status
- Track keyword performance

### **PageSpeed Insights**
- Test Core Web Vitals
- Monitor performance scores
- Optimize loading times

---

## 🆘 Troubleshooting

### **Common Issues**
- **Build fails:** Check TypeScript errors
- **Deploy fails:** Verify Firebase authentication
- **404 errors:** Check `firebase.json` rewrites
- **Styles missing:** Ensure `_astro` folder uploaded

### **Support Resources**
- Firebase documentation: firebase.google.com/docs
- GCP support: Available with credits
- Community: Stack Overflow, GitHub Issues

---

**Your Megabite website is ready for GCP deployment!** 🚀

Choose Firebase Hosting for the best balance of performance, cost, and ease of use.
