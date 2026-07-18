import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Página no encontrada',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-[var(--color-primary-100)] mb-4">404</div>
        <div className="gold-divider mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-3">Página no encontrada</h1>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
          La página que buscas no existe, fue movida o está temporalmente fuera de servicio. 
          Te invitamos a explorar nuestro contenido desde el inicio.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary-500)] text-white font-medium hover:bg-[var(--color-primary-600)] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
