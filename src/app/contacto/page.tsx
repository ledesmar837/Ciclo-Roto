import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Información de contacto de El Ciclo Roto. Estamos comprometidos con brindar información responsable sobre salud mental.',
};

export default function ContactoPage() {
  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} />

        <div className="mb-12">
          <div className="gold-divider mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">Contacto</h1>
          <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl">
            Estamos aquí para escucharte. Si tienes preguntas, sugerencias o comentarios sobre nuestro contenido, 
            no dudes en escribirnos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-50)] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[var(--color-primary-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">Correo electrónico</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">contacto@elcicloroto.com</p>
                <p className="text-xs text-[var(--text-tertiary)] mt-1">Respuesta en 2-3 días hábiles</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-gold-50)] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[var(--color-gold-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">Reportar un error</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">Si encuentras un error en nuestro contenido, por favor háznoslo saber para corregirlo.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--surface-tertiary)] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[var(--text-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)]">Líneas de ayuda</h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">Si necesitas ayuda inmediata, por favor contacta a una línea de crisis en tu país. Este sitio no ofrece asistencia en emergencias.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)]">
            <h3 className="font-semibold text-[var(--text-primary)] mb-3">Antes de escribirnos</h3>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex gap-2">
                <span className="text-[var(--color-gold-400)]">•</span>
                Consulta nuestras <a href="/politica-privacidad" className="text-[var(--color-primary-500)] hover:underline">Políticas de Privacidad</a> para saber cómo manejamos tus datos.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-gold-400)]">•</span>
                Este sitio no ofrece servicios de consejería ni terapia. No podemos responder a consultas médicas o psicológicas individuales.
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--color-gold-400)]">•</span>
                Si deseas sugerir un tema para un artículo, nos encantaría escucharlo. Incluye referencias si es posible.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
