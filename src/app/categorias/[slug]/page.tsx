'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function CategoriaSlugPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const [category, setCategory] = useState<any>(null);
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    if (!slug) return;
    Promise.all([
      import('@/data/categories.json').then(m => m.default),
      import('@/data/articles.json').then(m => m.default),
    ]).then(([cats, arts]) => {
      const cat = cats.find((c: any) => c.slug === slug);
      setCategory(cat || null);
      if (cat) {
        setArticles(arts.filter((a: any) => a.categoryId === cat.id));
      }
    }).catch(() => {});
  }, [slug]);

  return (
    <div className="pb-16 md:pb-24">
      {/* Hero header */}
      <div className="relative h-44 md:h-52 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1600&q=80"
          alt="Representación visual de categorías de bienestar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-900)]/85 to-[var(--color-primary-700)]/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Breadcrumbs items={[
              { label: 'Inicio', href: '/' },
              { label: 'Categorías', href: '/categorias' },
              { label: category?.name || slug },
            ]} />
          </div>
        </div>
      </div>

      {/* Category info */}
      {category && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{category.emoji}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">{category.name}</h1>
              <p className="mt-2 text-lg text-[var(--text-secondary)] max-w-2xl">{category.description}</p>
              <p className="mt-1 text-sm text-[var(--text-tertiary)]">{articles.length} artículos</p>
            </div>
          </div>
        </div>
      )}

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article: any) => (
              <ArticleCard key={article.id} {...article} featured={false} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[var(--text-tertiary)]">No hay artículos en esta categoría todavía.</p>
          </div>
        )}
      </div>
    </div>
  );
}
