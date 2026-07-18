import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categorías — El Ciclo Roto',
  description: 'Explora nuestros contenidos de salud mental organizados por categoría: ansiedad, depresión, estrés, autoestima, relaciones saludables y mindfulness.',
};

export default function CategoriasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
