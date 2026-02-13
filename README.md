# Converting Landing - Premium Service Business Website

A modern, high-converting landing page built with Next.js 14, TypeScript, and Tailwind CSS. Designed for local service businesses (HVAC, plumbing, roofing, cleaning) to generate leads and calls.

## 🚀 Features

- **Modern, Premium Design** - Clean, professional UI with smooth animations
- **Mobile-First Responsive** - Optimized for all devices
- **High Performance** - Fast loading with Next.js optimization
- **SEO Optimized** - Meta tags, structured data, semantic HTML
- **Conversion Focused** - Multiple CTAs, contact form, phone tracking
- **GA4 Ready** - Google Analytics 4 integration with conversion tracking
- **Easy to Customize** - Well-structured, commented code

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Google Analytics 4 ID (optional, for tracking)

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/          # Contact form API endpoint
│   ├── layout.tsx            # Root layout with SEO and GA4
│   ├── page.tsx              # Main landing page
│   └── globals.css           # Global styles and Tailwind
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section with CTAs
│   ├── Services.tsx          # Services showcase
│   ├── WhyChooseUs.tsx       # Features/benefits section
│   ├── Testimonials.tsx      # Customer reviews
│   ├── ContactForm.tsx       # Contact form with validation
│   ├── CTA.tsx               # Call-to-action section
│   └── Footer.tsx            # Footer with links
├── public/                   # Static assets (images, etc.)
└── package.json
```

## 🎨 Customization Guide

### 1. Update Business Information

**Company Name & Branding:**
- Edit `components/Header.tsx` - Update logo/company name
- Edit `app/layout.tsx` - Update meta tags and SEO information

**Contact Information:**
- Replace `(123) 456-7890` with your actual phone number (search for this in all files)
- Update email addresses in `components/Footer.tsx`
- Update address in `components/Footer.tsx`

### 2. Customize Services

Edit `components/Services.tsx` to update:
- Service titles and descriptions
- Service icons (currently emojis, can be replaced with SVG icons)
- Service features list

### 3. Update Content

**Hero Section** (`components/Hero.tsx`):
- Main headline
- Subheadline
- Trust indicators

**Testimonials** (`components/Testimonials.tsx`):
- Replace with real customer reviews
- Update names, locations, and service types

**Why Choose Us** (`components/WhyChooseUs.tsx`):
- Update features to match your business
- Modify icons and descriptions

### 4. Colors & Styling

Edit `tailwind.config.ts` to customize:
- Primary color (currently blue)
- Accent color (currently red)
- Font families

### 5. Form Submission

The contact form currently logs to console. To enable actual submissions:

1. **Option A: Email Service** (Recommended)
   - Install a service like Resend, SendGrid, or Nodemailer
   - Update `app/api/contact/route.ts` with your email service

2. **Option B: CRM Integration**
   - Connect to HubSpot, Salesforce, or similar
   - Update the API route accordingly

3. **Option C: Database Storage**
   - Add a database (PostgreSQL, MongoDB, etc.)
   - Store submissions in the database

### 6. Google Analytics Setup

1. Get your GA4 Measurement ID (format: `G-XXXXXXXXXX`)
2. Add it to `.env.local` as `NEXT_PUBLIC_GA4_ID`
3. The tracking is already set up in `app/layout.tsx`

**Conversion Events Tracked:**
- Form submissions
- Phone number clicks
- CTA button clicks
- Service link clicks

## 🚀 Deployment

### Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the 'out' folder (if using static export) or configure for Next.js
```

**Traditional Hosting:**
```bash
npm run build
npm start
# Configure your server to run Node.js and point to port 3000
```

### Environment Variables

Make sure to set `NEXT_PUBLIC_GA4_ID` in your hosting platform's environment variables.

## 📊 SEO Checklist

✅ Meta tags configured in `app/layout.tsx`
✅ Semantic HTML structure
✅ Proper heading hierarchy (H1, H2, H3)
✅ Alt text for images (add when you add images)
✅ Open Graph tags for social sharing
✅ Structured data (can be enhanced with JSON-LD)

**To Add:**
- Add actual images with proper alt text
- Add JSON-LD structured data for LocalBusiness schema
- Create sitemap.xml
- Create robots.txt

## 🔧 Performance Optimization

- Images: Use Next.js Image component for optimized images
- Fonts: Currently using Inter from Google Fonts (optimized by Next.js)
- Code splitting: Automatic with Next.js
- Minification: Automatic in production builds

## 📝 Handoff Notes

### For Developers:
- All components are in TypeScript
- Uses React Hook Form for form validation
- Framer Motion for animations
- Tailwind CSS for styling
- Fully responsive design

### For Content Editors:
- Most content is in component files (easy to find)
- Phone numbers: Search for `1234567890` or `(123) 456-7890`
- Company name: Search for `ServicePro`
- Services: Edit `components/Services.tsx`

### For Marketers:
- GA4 tracking is set up (add your ID)
- All CTAs are tracked
- Form submissions are tracked
- Phone clicks are tracked

## 🐛 Troubleshooting

**Build errors:**
- Make sure all dependencies are installed
- Check Node.js version (18+)

**Form not submitting:**
- Check browser console for errors
- Verify API route is working
- Update `app/api/contact/route.ts` with your submission method

**GA4 not tracking:**
- Verify `NEXT_PUBLIC_GA4_ID` is set correctly
- Check browser console for GA4 errors
- Ensure GA4 property is set up in Google Analytics

## 📞 Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com)

## 📄 License

This project is proprietary. All rights reserved.

---

**Built with ❤️ for high-converting landing pages**
