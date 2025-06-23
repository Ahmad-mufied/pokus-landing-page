# Link Preview Implementation

This document describes the implementation of link preview (Open Graph and social media meta tags) for the Pokus landing page.

## Overview

The link preview system ensures that when the Pokus landing page is shared on social media platforms like WhatsApp, Discord, Telegram, Twitter, Facebook, and LinkedIn, it displays a beautiful and informative preview with:

- Custom title and description
- Dynamic Open Graph image
- Proper meta tags for each platform
- Structured data for SEO

## Implementation Details

### 1. Dynamic Open Graph Image

**File:** `src/app/og/route.tsx`

- Generates a 1200x630 pixel image optimized for social media
- Uses Next.js Edge Runtime for fast generation
- Features the Pokus branding with gradient design
- Includes key features: Pomodoro Timer, Site Blocker, Focus Mode

### 2. Meta Tags Configuration

**File:** `src/app/layout.tsx`

#### Open Graph Tags (Facebook, WhatsApp, Telegram)
```typescript
openGraph: {
  type: "website",
  locale: "en_US",
  url: "https://pokus-landing-page.vercel.app",
  siteName: "Pokus",
  title: "Pokus - Stop Procrastinating, Start Focusing",
  description: "Transform your productivity with Pokus...",
  images: [{ url: "/og", width: 1200, height: 630 }],
}
```

#### Twitter Card Tags
```typescript
twitter: {
  card: "summary_large_image",
  title: "Pokus - Stop Procrastinating, Start Focusing",
  description: "Transform your productivity with Pokus...",
  images: ["/og"],
  creator: "@pokus_team",
  site: "@pokus_team",
}
```

#### Additional Platform-Specific Tags
- **WhatsApp:** `og:image:secure_url`
- **Discord:** `theme-color`, `msapplication-TileColor`
- **LinkedIn:** Additional Open Graph properties
- **Pinterest:** Rich pin support

### 3. Web App Manifest

**File:** `public/manifest.json`

- Enables PWA functionality
- Provides app-like experience on mobile
- Includes proper icons and theme colors

### 4. Structured Data

**File:** `src/app/layout.tsx`

- JSON-LD structured data for better SEO
- Describes Pokus as a SoftwareApplication
- Includes ratings and application details

## Testing

### Test Page
**URL:** `/test-og`

A dedicated test page that includes:
- Links to various social media debugging tools
- Preview of the current OG image
- Validation resources

### Debugging Tools

1. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
2. **Facebook Sharing Debugger:** https://developers.facebook.com/tools/debug/
3. **OpenGraph.xyz:** https://www.opengraph.xyz/
4. **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

## Platform-Specific Features

### WhatsApp
- Uses `og:image:secure_url` for HTTPS image
- Optimized for mobile sharing
- Clean preview with title and description

### Discord
- Rich embed with image, title, and description
- Theme color integration
- Proper fallback for image loading

### Telegram
- Enhanced preview with site name
- Locale-specific formatting
- Image optimization for Telegram's display

### Twitter
- Large image card format
- Creator and site attribution
- Optimized for Twitter's display algorithm

### Facebook
- Full Open Graph support
- Image dimensions optimized for Facebook
- Proper URL canonicalization

## Performance Considerations

1. **Edge Runtime:** OG image generation uses Edge Runtime for fast response
2. **Caching:** Images are cached by social media platforms
3. **Image Optimization:** 1200x630 is the optimal size for most platforms
4. **CDN:** Images served through Vercel's global CDN

## Maintenance

### Updating the OG Image
1. Modify the JSX in `src/app/og/route.tsx`
2. Test using the `/test-og` page
3. Clear cache using social media debugging tools

### Updating Meta Tags
1. Modify the metadata object in `src/app/layout.tsx`
2. Test with various social media platforms
3. Use debugging tools to verify changes

## Troubleshooting

### Common Issues

1. **Image not loading:** Check if the `/og` route is accessible
2. **Wrong preview:** Clear cache using platform debugging tools
3. **Missing meta tags:** Verify the layout.tsx configuration
4. **Structured data errors:** Use Google's Rich Results Test

### Debugging Steps

1. Visit `/test-og` to see the current OG image
2. Use social media debugging tools to test the URL
3. Check browser developer tools for meta tag presence
4. Validate structured data with Google's tools

## Future Enhancements

1. **Dynamic OG Images:** Generate different images based on URL parameters
2. **A/B Testing:** Test different OG image designs
3. **Analytics:** Track social media sharing performance
4. **Localization:** Support multiple languages for meta tags 