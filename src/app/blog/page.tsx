'use client';

import { useState, useEffect } from 'react';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function BlogPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState('todas');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    Promise.all([
      import('@/data/articles.json').then(m => m.default),
      import('@/data/categories.json').then(m => m.default),
    ]).then(([a, c]) => {
      setArticles(a);
      setCategories(c);
    }).catch(() => {});
  }, []);

  const filtered = articles
    .filter(a => activeCategory === 'todas' || a.categoryId === activeCategory)
    .filter(a => !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.tags?.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase())))
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="pb-16 md:pb-24">
      {/* Hero header */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80"
          alt="Persona escribiendo en un cuaderno junto a una taza de café"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-900)]/85 to-[var(--color-primary-700)]/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Blog' }]} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">Blog</h1>
            <p className="mt-2 text-white/70 text-lg max-w-2xl">
              Artículos basados en evidencia científica sobre salud mental y bienestar emocional.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('todas')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'todas'
                ? 'bg-[var(--color-primary-500)] text-white'
                : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:bg-[var(--surface-tertiary)]'
            }`}
          >
            Todas
          </button>
          {categories.map((cat: any) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-[var(--color-primary-500)] text-white'
                  : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:bg-[var(--surface-tertiary)]'
              }`}
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article: any) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-[var(--text-tertiary)]">No encontramos artículos con esos criterios.</p>
            <button onClick={() => { setActiveCategory('todas'); setSearchQuery(''); }} className="mt-4 text-sm text-[var(--color-primary-500)] hover:underline">
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
