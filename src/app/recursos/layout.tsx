import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recursos Gratuitos — El Ciclo Roto',
  description: 'Descarga guías, ejercicios, audios y listas de verificación gratuitos para apoyar tu bienestar emocional. Herramientas prácticas basadas en evidencia científica.',
};

export default function RecursosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
