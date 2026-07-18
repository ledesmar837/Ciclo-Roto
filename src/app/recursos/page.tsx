'use client';

import { useState, useEffect } from 'react';
import ResourceCard from '@/components/ResourceCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function RecursosPage() {
  const [resources, setResources] = useState<any[]>([]);
  const [typeFilter, setTypeFilter] = useState('todos');

  useEffect(() => {
    import('@/data/resources.json').then(m => setResources(m.default)).catch(() => {});
  }, []);

  const filtered = typeFilter === 'todos' ? resources : resources.filter(r => r.type === typeFilter);

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Recursos Gratuitos' }]} />

        <div className="max-w-2xl mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">Recursos Gratuitos</h1>
          <p className="mt-3 text-[var(--text-secondary)] text-lg">
            Herramientas prácticas descargables para apoyar tu bienestar emocional.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {['todos', 'guia', 'ejercicio', 'audio', 'lista'].map(t => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                typeFilter === t
                  ? 'bg-[var(--color-primary-500)] text-white'
                  : 'bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:bg-[var(--surface-tertiary)]'
              }`}
            >
              {t === 'todos' ? 'Todos' : t === 'guia' ? 'Guías' : t === 'ejercicio' ? 'Ejercicios' : t === 'audio' ? 'Audios' : 'Listas'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r: any) => (
            <ResourceCard key={r.id} {...r} />
          ))}
        </div>
      </div>
    </div>
  );
}
