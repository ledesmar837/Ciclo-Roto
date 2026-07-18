'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import Breadcrumbs from '@/components/Breadcrumbs';

const ICONS: Record<string, string> = {
  diario: '📓',
  respiracion: '🫁',
  estado: '📊',
  gratitud: '🙏',
};

export default function HerramientasPage() {
  const [tools, setTools] = useState<any[]>([]);

  useEffect(() => {
    import('@/data/tools.json').then(m => setTools(m.default)).catch(() => {});
  }, []);

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Herramientas' }]} />

        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">Herramientas</h1>
          <p className="mt-3 text-[var(--text-secondary)] text-lg">
            Herramientas interactivas prácticas para tu bienestar emocional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool: any) => (
            <Link key={tool.id} href={`/herramientas/${tool.slug}`}>
              <Card variant="elevated" className="p-6 md:p-8 flex gap-5 group">
                <span className="text-4xl flex-shrink-0">{tool.emoji || ICONS[tool.id] || '🔧'}</span>
                <div>
                  <h2 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary-500)] transition-colors">
                    {tool.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[var(--color-primary-500)]">
                    Usar herramienta <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
