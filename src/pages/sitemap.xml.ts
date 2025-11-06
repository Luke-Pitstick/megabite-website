import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const pages = [
    {
      url: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date()
    },
    {
      url: '/services',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    },
    {
      url: '/pricing',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date()
    },
    {
      url: '/how-it-works',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    },
    {
      url: '/faq',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    },
    {
      url: '/schedule',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date()
    },
    {
      url: '/roi-calculator',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date()
    },
    {
      url: '/labor-calculator',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    },
    {
      url: '/food-waste-calculator',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    },
    {
      url: '/delivery-calculator',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date()
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date()
    },
    {
      url: '/blog',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date()
    },
    {
      url: '/privacy',
      changefreq: 'yearly',
      priority: 0.3,
      lastmod: new Date()
    }
  ];

  // Add blog posts
  const blogPosts = [
    'toast-vs-square-vs-lightspeed-2025',
    'unified-tech-stack-restaurant',
    'restaurant-profitability-crisis-2025-denver',
    'choosing-the-right-pos-system',
    'fractional-cto-vs-fulltime',
    'why-restaurants-need-integrated-systems'
  ];

  for (const slug of blogPosts) {
    pages.push({
      url: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date()
    });
  }

  // Remove trailing slash from site URL to prevent double slashes
  const baseUrl = site?.toString().replace(/\/$/, '') || 'https://megabiteco.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod.toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
