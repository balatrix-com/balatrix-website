import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of the website
const DOMAIN = 'https://balatrix.com';

// Define the routes mapping based on src/App.jsx
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/solutions', priority: '0.9', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/demo', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { path: '/terms', priority: '0.5', changefreq: 'yearly' },
  { path: '/security', priority: '0.7', changefreq: 'yearly' },
  { path: '/refund', priority: '0.5', changefreq: 'yearly' }
];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  const urlElements = routes.map((route) => {
    return `
  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>
`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  
  fs.writeFileSync(outputPath, sitemapXml);
  console.log('Sitemap generated successfully at ' + outputPath);
};

generateSitemap();
