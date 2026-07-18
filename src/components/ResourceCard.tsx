import Link from 'next/link';
import Card from './Card';

interface ResourceCardProps {
  title: string;
  description: string;
  type: string;
  icon: string;
  fileUrl?: string;
}

const TYPE_LABELS: Record<string, string> = {
  guia: 'Guía',
  ejercicio: 'Ejercicio',
  audio: 'Audio',
  lista: 'Lista de verificación',
};

export default function ResourceCard({
  title,
  description,
  type,
  icon,
  fileUrl,
}: ResourceCardProps) {
  return (
    <Card variant="elevated" className="p-5 md:p-6 flex flex-col gap-4 group">
      <div className="flex items-center justify-between">
        <span className="text-3xl">{icon}</span>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--surface-tertiary)] text-[var(--text-secondary)]">
          {TYPE_LABELS[type] || type}
        </span>
      </div>
      <div>
        <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-primary-500)] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed">
          {description}
        </p>
      </div>
      {fileUrl && (
        <a
          href={fileUrl}
          download
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary-500)] hover:text-[var(--color-primary-600)] transition-colors mt-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar recurso
        </a>
      )}
    </Card>
  );
}
