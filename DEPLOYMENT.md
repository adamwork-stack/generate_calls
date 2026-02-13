# Deployment Guide

This guide covers deploying your Next.js landing page to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

**Steps:**
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js settings
5. Add environment variables:
   - `NEXT_PUBLIC_GA4_ID` = Your GA4 ID
6. Click "Deploy"
7. Your site will be live in ~2 minutes!

**Benefits:**
- Free tier available
- Automatic HTTPS
- Global CDN
- Automatic deployments on git push
- Preview deployments for pull requests

---

### Option 2: Netlify

**Steps:**
1. Push your code to a Git repository
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Site settings
7. Deploy!

**Note:** For Next.js on Netlify, you may need to use `@netlify/plugin-nextjs` or configure for static export.

---

### Option 3: Traditional Hosting (VPS/Shared Hosting)

**Requirements:**
- Node.js 18+ installed
- PM2 or similar process manager (recommended)
- Nginx or Apache for reverse proxy (recommended)

**Steps:**

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Set environment variables:**
   ```bash
   export NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   ```

3. **Start the production server:**
   ```bash
   npm start
   ```
   Or with PM2:
   ```bash
   pm2 start npm --name "landing-page" -- start
   ```

4. **Configure reverse proxy (Nginx example):**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

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

5. **Set up SSL with Let's Encrypt:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

### Option 4: Static Export (For Static Hosting)

If you want to host on GitHub Pages, AWS S3, or similar static hosting:

1. **Update `next.config.js`:**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true, // Required for static export
     },
   };
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy the `out` folder** to your static host

**Note:** API routes won't work with static export. You'll need to handle form submissions differently (e.g., third-party service like Formspree, Netlify Forms, etc.).

---

## 🔧 Pre-Deployment Checklist

- [ ] Update all phone numbers in components
- [ ] Update company name and branding
- [ ] Add your GA4 ID to environment variables
- [ ] Configure contact form submission (email service, CRM, etc.)
- [ ] Add real images with proper alt text
- [ ] Test all links and CTAs
- [ ] Test form submission
- [ ] Test on mobile devices
- [ ] Verify GA4 tracking is working
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL/HTTPS

---

## 📊 Post-Deployment

1. **Verify site is live:**
   - Check all pages load correctly
   - Test on mobile and desktop
   - Test form submission

2. **Set up monitoring:**
   - Verify GA4 is tracking
   - Set up uptime monitoring (UptimeRobot, Pingdom, etc.)
   - Configure error tracking (Sentry, etc.)

3. **SEO:**
   - Submit sitemap to Google Search Console
   - Submit to Bing Webmaster Tools
   - Verify meta tags with social media debuggers

4. **Performance:**
   - Run Lighthouse audit
   - Optimize any issues found
   - Test Core Web Vitals

---

## 🌐 Custom Domain Setup

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS instructions (usually add a CNAME record)

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS instructions

### Traditional Hosting:
1. Point your domain's A record to your server IP
2. Configure Nginx/Apache virtual host
3. Set up SSL certificate

---

## 🔒 Security Considerations

- Keep dependencies updated: `npm audit` and `npm update`
- Use environment variables for sensitive data
- Enable HTTPS/SSL
- Set up rate limiting for API routes
- Validate and sanitize form inputs (already done with React Hook Form)
- Consider adding CAPTCHA to contact form for spam protection

---

## 📈 Performance Optimization

After deployment:
1. Enable Next.js Image Optimization (automatic on Vercel)
2. Set up CDN caching headers
3. Enable compression (usually automatic)
4. Monitor Core Web Vitals
5. Optimize images (use WebP format, proper sizing)

---

## 🆘 Troubleshooting

**Build fails:**
- Check Node.js version (needs 18+)
- Clear `.next` folder and `node_modules`, reinstall
- Check for TypeScript errors: `npm run build`

**Site not loading:**
- Check server logs
- Verify environment variables are set
- Check DNS settings
- Verify port is correct (3000 for Next.js)

**Form not working:**
- Check API route is accessible
- Verify CORS settings if needed
- Check server logs for errors
- Test API endpoint directly

---

## 📞 Need Help?

- Next.js Deployment Docs: https://nextjs.org/docs/deployment
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
