import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Herramientas Interactivas — El Ciclo Roto',
  description: 'Herramientas interactivas prácticas para tu bienestar emocional: test de ansiedad GAD-7, diario de emociones, respiración guiada y directorio de líneas de ayuda.',
};

export default function HerramientasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
