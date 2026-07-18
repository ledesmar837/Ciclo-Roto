'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import ResourceCard from '@/components/ResourceCard';
import CtaBanner from '@/components/CtaBanner';
import Button from '@/components/Button';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80',
  'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1600&q=80',
  'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1600&q=80',
];

const categories = [
  { id: 'ansiedad', name: 'Ansiedad', description: 'Comprende y maneja la ansiedad con herramientas basadas en evidencia.', icon: '🧠', slug: 'ansiedad' },
 { id: 'depresion', name: 'Depresión', description: 'Información responsable sobre la depresión y caminos hacia la recuperación.', icon: '💜', slug: 'depresion' },
 { id: 'estres', name: 'Estrés', description: 'Aprende a identificar y reducir el estrés con técnicas validadas.', icon: '🌿', slug: 'estres' },
 { id: 'autoestima', name: 'Autoestima', description: 'Fortalece tu relación contigo mismo desde el conocimiento.', icon: '✨', slug: 'autoestima' },
 { id: 'relaciones', name: 'Relaciones', description: 'Construye vínculos saludables con comprensión y herramientas.', icon: '🤝', slug: 'relaciones' },
 { id: 'mindfulness', name: 'Mindfulness', description: 'La práctica de la atención plena respaldada por la ciencia.', icon: '☯️', slug: 'mindfulness' },
];

export default function HomePage() {
  const [heroImage, setHeroImage] = useState(HERO_IMAGES[0]);
  const [articles, setArticles] = useState<any[]>([]);
  const [featured, setFeatured] = useState<any[]>([]);
  const [latest, setLatest] = useState<any[]>([]);
  const [resources, setResources] = useState<any[]>([]);

  useEffect(() => {
    setHeroImage(HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)]);

    async function loadData() {
      try {
        const [articlesData, resourcesData] = await Promise.all([
          import('@/data/articles.json').then(m => m.default),
          import('@/data/resources.json').then(m => m.default),
        ]);
        setArticles(articlesData);
        setFeatured(articlesData.filter((a: any) => a.featured).slice(0, 3));
        setLatest(articlesData.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 6));
        setResources(resourcesData.slice(0, 4));
      } catch (e) {
        console.log('Data not yet loaded');
      }
    }
    loadData();
  }, []);

  return (
    <div>
      {/* ======== HERO ======== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Bienestar emocional"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="gold-divider mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Rompe el ciclo.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold-300)] to-[var(--color-gold-400)]">
                Encuentra tu bienestar.
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
              Información responsable sobre salud mental, basada en ciencia y presentada con claridad. 
                  El conocimiento informado es el primer paso hacia una vida más plena.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/blog" variant="gold" size="lg">
                Explorar artículos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/recursos" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                Recursos gratuitos
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ======== CATEGORÍAS ======== */}
      <section className="py-16 md:py-24 bg-[var(--surface-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Explora por categoría
            </h2>
            <p className="mt-3 text-[var(--text-secondary)] max-w-lg mx-auto">
              Encuentra información organizada sobre los temas que más te importan.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categorias/${cat.slug}`}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--color-primary-200)] hover:shadow-md transition-all duration-200"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</span>
                <h3 className="font-semibold text-sm text-[var(--text-primary)] group-hover:text-[var(--color-primary-500)] transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======== ARTÍCULOS DESTACADOS ======== */}
      {featured.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                  Artículos destacados
                </h2>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Nuestros contenidos más completos y valiosos.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary-500)] hover:text-[var(--color-primary-600)] transition-colors"
              >
                Ver todos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((article: any) => (
                <ArticleCard key={article.id} {...article} featured={false} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======== ÚLTIMOS ARTÍCULOS ======== */}
      {latest.length > 0 && (
        <section className="py-16 md:py-24 bg-[var(--surface-secondary)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                  Últimos artículos
                </h2>
                <p className="mt-2 text-[var(--text-secondary)]">
                  Contenido nuevo cada semana.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary-500)] hover:text-[var(--color-primary-600)] transition-colors"
              >
                Ver todos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latest.map((article: any) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
            <div className="text-center mt-10 sm:hidden">
              <Button href="/blog" variant="outline">Ver todos los artículos</Button>
            </div>
          </div>
        </section>
      )}

      {/* ======== RECURSOS GRATUITOS ======== */}
      {resources.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
                Recursos gratuitos
              </h2>
              <p className="mt-3 text-[var(--text-secondary)] max-w-lg mx-auto">
                Herramientas prácticas que puedes descargar y usar hoy mismo.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource: any) => (
                <ResourceCard key={resource.id} {...resource} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ======== CTA ======== */}
      <section className="py-16 md:py-24 bg-[var(--surface-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CtaBanner
            title="El conocimiento es el primer paso"
            description="Explora nuestra biblioteca de artículos basados en evidencia científica. Cada contenido es revisado y respaldado por fuentes confiables como la OMS, la APA y el NIH."
            buttonText="Comenzar ahora"
            buttonHref="/blog"
            variant="primary"
          />
        </div>
      </section>

      {/* ======== NEWSLETTER PLACEHOLDER ======== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
              Mantente informado
            </h2>
            <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">
              Recibe contenido sobre bienestar emocional directamente en tu correo. 
              Información responsable, sin spam, una vez por semana.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-sm placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent transition-all"
                required
              />
              <Button type="submit" variant="primary">
                Suscribirme
              </Button>
            </form>
            <p className="text-xs text-[var(--text-tertiary)] mt-4">
              Al suscribirte aceptas nuestra{' '}
              <Link href="/politica-privacidad" className="underline hover:text-[var(--color-primary-500)]">
                política de privacidad
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
