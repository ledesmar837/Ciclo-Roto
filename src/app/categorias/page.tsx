'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function CategoriasPage() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    import('@/data/categories.json').then(m => setCategories(m.default)).catch(() => {});
  }, []);

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Categorías' }]} />
        
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">Categorías</h1>
          <p className="mt-3 text-[var(--text-secondary)] text-lg">
            Explora nuestros contenidos organizados por tema. Cada categoría agrupa artículos, recursos y herramientas relacionados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat: any) => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.slug}`}
              className="group p-6 md:p-8 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--color-primary-200)] hover:shadow-md transition-all duration-200"
            >
              <span className="text-4xl mb-4 block">{cat.emoji}</span>
              <h2 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary-500)] transition-colors">
                {cat.name}
              </h2>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{cat.description}</p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[var(--color-primary-500)]">
                Ver artículos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
