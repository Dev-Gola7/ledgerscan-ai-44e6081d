
# Implementation Plan

This is a comprehensive update covering 7 areas: email notifications, GST Returns feature, "Use Our Application" button, sitemap, SEO blog pages, LinkedIn company link, and Instagram button.

---

## 1. Email Notifications for Contact Form

Since you don't have a Resend API key, I'll create a backend function that sends email notifications using Lovable's built-in AI capabilities to format and log submissions. The contact form already saves to the database -- I'll add a backend function that gets triggered after form submission to send a notification email to your support email.

**Note:** To actually send emails to your inbox, you'll eventually need a Resend API key (free tier available at resend.com). For now, I'll set up the edge function infrastructure so it's ready when you add the key. The form submissions will continue to be saved in the database.

## 2. "File GST Returns" Feature

Add a new dedicated page `/gst-returns` with:
- Hero section explaining GST return filing
- Step-by-step process (GSTR-1, GSTR-3B filing flow)
- Interactive checklist for filing requirements
- CTA buttons linking to contact/demo
- Add "GST Returns" to the navigation menu

## 3. "Use Our Application" Button

Add a prominent "Use Our Application" button in the header (next to existing CTAs) that links to the app or a signup flow.

## 4. Sitemap.xml

Create a `public/sitemap.xml` file covering all pages:
- `/` (Home)
- `/product`
- `/how-it-works`
- `/solutions`
- `/pricing`
- `/security`
- `/faq`
- `/contact`
- `/blog`
- `/gst-returns` (new)
- All 5 individual blog post pages

## 5. Blog Section - Complete Overhaul

### Blog listing page (`/blog`)
- Already exists in header nav and footer
- Update with 5 new SEO-optimized blog posts
- Add category filtering

### 5 New Blog Posts with full content
Each blog will be a separate page (`/blog/:slug`) with rich, keyword-dense content. The massive keyword list will be distributed across all 5 blogs:

1. **"The Ultimate Guide to Accounting Software for Small Business in 2025"**
   - Keywords: accounting software, best accounting software for small business, online accounting software, simple accounting software, easy accounting software, accounting platforms, accounting packages, etc.

2. **"Best Invoicing Software for Small Business: Complete Comparison"**
   - Keywords: invoicing software, invoice simple, best invoicing software for small business, invoice system, invoice management system, billing software, billing and invoicing software, etc.

3. **"How a Ledger App Transforms Your Business Management"**
   - Keywords: ledger app, ledger software, ledger application, ledger live download, app ledger, ledge app, business management software, company management software, etc.

4. **"Billing Software for Small Business: Automate Your Invoicing"**
   - Keywords: billing software for small business, best billing software, billing system, electronic billing software, bill making software, billing management system, etc.

5. **"ERP Accounting Software vs Simple Bookkeeping: What Your Business Needs"**
   - Keywords: erp accounting software, bookkeeping software, best bookkeeping software for small business, financial accounting software, integrated accounting software, etc.

Each blog will:
- Include relevant images (using placeholder/generated header images)
- Interlink to other website pages (Product, Pricing, Contact, etc.)
- Have proper meta structure for SEO
- Mix all provided keywords naturally into the content

### New files needed:
- `src/pages/BlogPost.tsx` - Individual blog post page component
- `src/data/blogPosts.ts` - Blog data with full content and keywords
- Route `/blog/:slug` in App.tsx

## 6. LinkedIn Button - Company Page

Update the LinkedIn link in Footer from the personal profile to the company page:
`https://www.linkedin.com/company/ledger-scan-pro/?viewAsMember=true`

## 7. Instagram Button

Add an Instagram icon/button in the Footer social links section, linking to:
`https://www.instagram.com/ledgerscan_pro/`

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/pages/GSTReturns.tsx` | Create - New GST Returns page |
| `src/pages/BlogPost.tsx` | Create - Individual blog post page |
| `src/data/blogPosts.ts` | Create - Blog content data with all keywords |
| `public/sitemap.xml` | Create - SEO sitemap |
| `src/App.tsx` | Modify - Add new routes |
| `src/components/layout/Header.tsx` | Modify - Add GST Returns nav, "Use App" button |
| `src/components/layout/Footer.tsx` | Modify - Update LinkedIn, add Instagram, add blog links |
| `src/pages/Blog.tsx` | Modify - Use new blog data, link to individual posts |
| `src/pages/Home.tsx` | Modify - Add blog section link, GST Returns highlight |
| `src/pages/Contact.tsx` | Modify - Add edge function call for email notification |
| `supabase/functions/send-contact-notification/index.ts` | Create - Email notification edge function (ready for Resend key) |

---

## Technical Details

### Edge Function for Email Notifications
```text
supabase/functions/send-contact-notification/index.ts
- Accepts POST with contact form data
- Uses Resend SDK (when API key is added)
- Sends formatted email to support@ledgerscanpro.com
- Returns success/error response
- CORS headers included
```

### Blog Post Data Structure
```text
Each blog post will contain:
- slug, title, excerpt, category
- Full HTML/markdown content (1500-2000 words)
- SEO keywords embedded naturally
- Internal links to website pages
- Featured image placeholder
- Author, date, read time
```

### Sitemap Format
```text
XML sitemap with:
- All static pages
- All blog post URLs
- lastmod dates
- changefreq and priority values
```
