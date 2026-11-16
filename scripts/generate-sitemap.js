import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_POSTS } from '../src/data/blogData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of the website
const DOMAIN = 'https://balatrix.com';

// Define the static routes mapping based on src/App.jsx
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/services/pbx', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/tollfree', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/pbx-whitelabel', priority: '0.9', changefreq: 'weekly' },
  { path: '/solutions', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/blogs', priority: '0.9', changefreq: 'daily' },
  { path: '/demo', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { path: '/terms', priority: '0.5', changefreq: 'yearly' },
  { path: '/security', priority: '0.7', changefreq: 'yearly' },
  { path: '/refund', priority: '0.5', changefreq: 'yearly' }
];

// Blog article routes
const blogRoutes = BLOG_POSTS.map((post) => ({
  path: `/blogs/${post.slug}`,
  priority: post.featured ? '0.8' : '0.7',
  changefreq: 'monthly',
  lastmod: post.updatedAt || post.publishedAt
}));

const routes = [...staticRoutes, ...blogRoutes];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const urlElements = routes
    .map((route) => {
      const lastmod = route.lastmod || currentDate;
      return `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>
`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');

  fs.writeFileSync(outputPath, sitemapXml);
  console.log(`Sitemap generated successfully with ${routes.length} URLs at ${outputPath}`);
};

generateSitemap();
