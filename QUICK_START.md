# Quick Start Guide

Get your landing page up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
```

(Get your GA4 ID from Google Analytics, or leave empty if you don't have one yet)

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Customize (Before Going Live)

### Essential Updates:

1. **Phone Numbers** - Search for `(123) 456-7890` and replace everywhere
2. **Company Name** - Search for `ServicePro` and replace
3. **Email** - Search for `info@servicepro.com` and replace
4. **Address** - Update in `components/Footer.tsx`
5. **Services** - Customize in `components/Services.tsx`
6. **SEO** - Update meta tags in `app/layout.tsx`

### Quick Find & Replace:

- Phone: `(123) 456-7890` → Your phone
- Company: `ServicePro` → Your company name
- Email: `info@servicepro.com` → Your email
- Domain: `yourdomain.com` → Your domain (in sitemap.ts, robots.txt)

## Step 5: Set Up Contact Form

The form currently logs to console. To enable real submissions:

**Option A: Use a service like Formspree (Easiest)**
1. Sign up at formspree.io
2. Get your form endpoint
3. Update `app/api/contact/route.ts` to POST to Formspree

**Option B: Email service (Recommended)**
- See `HANDOFF.md` for Resend, SendGrid, or Nodemailer setup

## Step 6: Build & Deploy

```bash
npm run build
```

Then deploy to:
- **Vercel** (easiest): Push to GitHub, import in Vercel
- **Netlify**: Push to GitHub, import in Netlify
- **Traditional hosting**: See `DEPLOYMENT.md`

## That's It! 🎉

Your landing page is ready. For detailed customization, see `README.md` and `HANDOFF.md`.

---

**Need Help?**
- Full docs: `README.md`
- Deployment: `DEPLOYMENT.md`
- Handoff: `HANDOFF.md`
