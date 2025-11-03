#!/bin/bash

# GCP Deployment Script - Megabite Consulting
# This script deploys your website to Google Cloud Storage

echo "🚀 Deploying Megabite Consulting to GCP..."

# Configuration
PROJECT_ID="your-gcp-project-id"  # Replace with your actual GCP project ID
BUCKET_NAME="megabite-consulting-website"
DOMAIN="megabite.consulting"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Step 1: Building website...${NC}"
npm run build --no-check

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build successful!${NC}"

echo -e "${YELLOW}Step 2: Creating Cloud Storage bucket...${NC}"
gsutil mb gs://$BUCKET_NAME/ || echo "Bucket might already exist"

echo -e "${YELLOW}Step 3: Configuring bucket for website hosting...${NC}"
gsutil web set -m index.html -e 404.html gs://$BUCKET_NAME/

echo -e "${YELLOW}Step 4: Uploading website files...${NC}"
gsutil -m rsync -r dist/ gs://$BUCKET_NAME/

echo -e "${YELLOW}Step 5: Making files publicly accessible...${NC}"
gsutil iam ch allUsers:objectViewer gs://$BUCKET_NAME/

echo -e "${YELLOW}Step 6: Setting up caching headers...${NC}"
gsutil -m setmeta -h "Cache-Control:public, max-age=31536000" gs://$BUCKET_NAME/**/*.{css,js,png,jpg,jpeg,gif,svg,webp,ico}

echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo -e "${GREEN}📍 Website URL: https://storage.googleapis.com/$BUCKET_NAME/index.html${NC}"
echo -e "${YELLOW}📋 Next steps:${NC}"
echo "1. Set up Load Balancer for custom domain: $DOMAIN"
echo "2. Configure SSL certificate"
echo "3. Update DNS records"

echo -e "${GREEN}✨ Your Megabite website is now live on GCP!${NC}"
