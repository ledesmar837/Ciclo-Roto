'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Categorías', href: '/categorias' },
  { label: 'Recursos', href: '/recursos' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-sm">CR</span>
              </div>
              <span className="font-semibold text-lg text-[var(--text-primary)]">
                El Ciclo <span className="text-[var(--color-gold-400)]">Roto</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? 'text-[var(--color-primary-500)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-all"
                aria-label="Buscar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-all"
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {isOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 pb-4 pt-2 bg-white border-t border-[var(--border)] space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-500)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <SearchOverlay onClose={() => setIsSearchOpen(false)} />
      )}
    </>
  );
}

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<{ title: string; slug: string; category: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
      } catch {
        // Search via static data
        const articles = await import('@/data/articles.json');
        const filtered = articles.default.filter(
          (a: any) =>
            a.title.toLowerCase().includes(query.toLowerCase()) ||
            a.tags?.some((t: string) => t.toLowerCase().includes(query.toLowerCase()))
        );
        setResults(filtered.map((a: any) => ({ title: a.title, slug: a.slug, category: a.categoryId })));
      }
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-20 px-4">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-[var(--border)] overflow-hidden animate-slide-down">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border)]">
          <svg className="w-5 h-5 text-[var(--text-tertiary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-base placeholder:text-[var(--text-tertiary)]"
            autoFocus
          />
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-[var(--surface-secondary)] text-[var(--text-tertiary)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="max-h-80 overflow-y-auto p-2">
          {isLoading && (
            <div className="flex items-center justify-center py-8">
              <div className="w-6 h-6 border-2 border-[var(--color-primary-500)] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {!isLoading && results.length > 0 && (
            <div className="space-y-1">
              {results.map((r) => (
                <a
                  key={r.slug}
                  href={`/articulo/${r.slug}`}
                  onClick={onClose}
                  className="block px-4 py-3 rounded-xl hover:bg-[var(--surface-secondary)] transition-colors"
                >
                  <p className="font-medium text-sm text-[var(--text-primary)]">{r.title}</p>
                  <p className="text-xs text-[var(--text-tertiary)] mt-0.5 capitalize">{r.category}</p>
                </a>
              ))}
            </div>
          )}
          {!isLoading && query.length >= 2 && results.length === 0 && (
            <p className="text-center py-8 text-sm text-[var(--text-tertiary)]">
              No encontramos resultados para &quot;{query}&quot;
            </p>
          )}
          {query.length < 2 && (
            <p className="text-center py-8 text-sm text-[var(--text-tertiary)]">
              Escribe al menos 2 caracteres para buscar
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
