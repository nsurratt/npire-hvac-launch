import type { MetadataRoute } from 'next'

const BASE_URL = 'https://hometownheatingair.com'

const routes = [
  { url: '/', priority: 1.0 },
  { url: '/ac-repair', priority: 0.9 },
  { url: '/ac-installation', priority: 0.9 },
  { url: '/about', priority: 0.7 },
  { url: '/service-areas', priority: 0.8 },
  { url: '/reviews', priority: 0.7 },
  { url: '/contact', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ url, priority }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
