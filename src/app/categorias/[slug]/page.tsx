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
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([
      import('@/data/categories.json').then(m => m.default),
      import('@/data/articles.json').then(m => m.default),
    ]).then(([cats, arts]) => {
      setCategories(cats);
      const cat = cats.find((c: any) => c.slug === slug);
      setCategory(cat || null);
      if (cat) {
        setArticles(arts.filter((a: any) => a.categoryId === cat.id));
      }
    }).catch(() => {});
  }, [slug]);

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Inicio', href: '/' },
          { label: 'Categorías', href: '/categorias' },
          { label: category?.name || slug },
        ]} />

        {category && (
          <div className="mb-10">
            <span className="text-5xl mb-4 block">{category.emoji}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">{category.name}</h1>
            <p className="mt-3 text-lg text-[var(--text-secondary)] max-w-2xl">{category.description}</p>
            <p className="mt-2 text-sm text-[var(--text-tertiary)]">{articles.length} artículos</p>
          </div>
        )}

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
