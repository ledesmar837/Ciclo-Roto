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
    <div className="pb-16 md:pb-24">
      {/* Hero header */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80"
          alt="Persona meditando al aire libre en un entorno natural"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-900)]/85 to-[var(--color-primary-700)]/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Recursos Gratuitos' }]} />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">Recursos Gratuitos</h1>
            <p className="mt-2 text-white/70 text-lg max-w-2xl">
              Herramientas prácticas descargables para apoyar tu bienestar emocional.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">

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
