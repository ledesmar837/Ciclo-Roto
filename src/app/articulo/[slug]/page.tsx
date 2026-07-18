'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import ShareButtons from '@/components/ShareButtons';
import Badge from '@/components/Badge';
import ArticleCard from '@/components/ArticleCard';
import Alert from '@/components/Alert';
import Button from '@/components/Button';
import { markdownToHtml } from '@/lib/markdown';

export default function ArticuloPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const [article, setArticle] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);

  useEffect(() => {
    if (!slug) return;
    async function load() {
      try {
        const articles = (await import('@/data/articles.json')).default;
        const a = articles.find((art: any) => art.slug === slug);
        setArticle(a || null);
        if (a) {
          setRelated(
            articles
              .filter((art: any) => art.categoryId === a.categoryId && art.slug !== slug)
              .slice(0, 3)
          );
        }
      } catch {}
    }
    load();
  }, [slug]);

  if (!slug) {
    return null;
  }

  if (!article) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center py-16">
          <p className="text-lg text-[var(--text-tertiary)]">Artículo no encontrado.</p>
          <Button href="/blog" variant="outline" className="mt-4">Volver al blog</Button>
        </div>
      </div>
    );
  }

  const formatDate = (d: string) => new Date(d).toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const siteUrl = 'https://elcicloroto.com';
  const articleUrl = `${siteUrl}/articulo/${article.slug}`;

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Inicio', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: article.title },
        ]} />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="primary">{article.categoryId}</Badge>
            <span className="text-sm text-[var(--text-tertiary)]">{article.readTime} min de lectura</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 mt-6 pb-6 border-b border-[var(--border)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center text-white font-semibold">
              {article.author?.charAt(0) || 'C'}
            </div>
            <div>
              <p className="font-medium text-sm text-[var(--text-primary)]">{article.author || 'El Ciclo Roto'}</p>
              <p className="text-xs text-[var(--text-tertiary)]">{formatDate(article.date)}</p>
            </div>
          </div>
        </header>

        {article.image && (
          <div className="mb-10 rounded-2xl overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-auto object-cover max-h-[500px]" />
          </div>
        )}

        <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }} />

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-[var(--border)]">
            {article.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--surface-secondary)] text-[var(--text-secondary)]">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-[var(--border)]">
          <ShareButtons url={articleUrl} title={article.title} />
        </div>

        {article.references && article.references.length > 0 && (
          <div className="mt-10 p-6 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Referencias</h2>
            <ul className="space-y-3">
              {article.references.map((ref: any, i: number) => (
                <li key={i}>
                  <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-primary-500)] hover:underline">
                    {ref.title}
                  </a>
                  {ref.source && <span className="text-xs text-[var(--text-tertiary)] ml-2">— {ref.source}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {article.bibliography && article.bibliography.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4">Bibliografía</h2>
            <ul className="space-y-2">
              {article.bibliography.map((b: string, i: number) => (
                <li key={i} className="text-sm text-[var(--text-secondary)] pl-4 border-l-2 border-[var(--border)]">{b}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10">
          <Alert type="info" title="Contenido educativo">
            Este artículo tiene fines exclusivamente informativos y educativos. No constituye consejo
            médico, diagnóstico ni tratamiento. Si estás experimentando problemas de salud mental,
            consulta a un profesional de la salud calificado.
          </Alert>
        </div>

        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] text-center">
          <h3 className="text-xl font-bold text-white mb-2">¿Te fue útil este artículo?</h3>
          <p className="text-white/70 text-sm mb-6">Explora más contenido basado en evidencia científica.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/blog" variant="gold">Ver más artículos</Button>
            <Button href="/recursos" variant="ghost" className="text-white border border-white/30 hover:bg-white/10">Recursos gratuitos</Button>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <div className="gold-divider mb-6" />
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r: any) => (
                <ArticleCard key={r.id} {...r} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
