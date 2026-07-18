import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — El Ciclo Roto',
  description: 'Artículos sobre salud mental basados en evidencia científica. Explora contenido sobre ansiedad, depresión, estrés, autoestima, relaciones y mindfulness.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
