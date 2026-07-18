import type { MetadataRoute } from 'next';

const siteUrl = 'https://elcicloroto.com';

const staticPages = [
  { url: siteUrl, priority: 1.0, changeFrequency: 'weekly' as const },
  { url: `${siteUrl}/blog`, priority: 0.9, changeFrequency: 'weekly' as const },
  { url: `${siteUrl}/categorias`, priority: 0.8, changeFrequency: 'weekly' as const },
  { url: `${siteUrl}/recursos`, priority: 0.8, changeFrequency: 'monthly' as const },
  { url: `${siteUrl}/herramientas`, priority: 0.7, changeFrequency: 'monthly' as const },
  { url: `${siteUrl}/sobre-nosotros`, priority: 0.6, changeFrequency: 'monthly' as const },
  { url: `${siteUrl}/contacto`, priority: 0.5, changeFrequency: 'yearly' as const },
  { url: `${siteUrl}/politica-privacidad`, priority: 0.3, changeFrequency: 'yearly' as const },
  { url: `${siteUrl}/cookies`, priority: 0.3, changeFrequency: 'yearly' as const },
  { url: `${siteUrl}/terminos`, priority: 0.3, changeFrequency: 'yearly' as const },
  { url: `${siteUrl}/descargo`, priority: 0.4, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticPages];
}
