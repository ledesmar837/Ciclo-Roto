import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Alert from '@/components/Alert';

export const metadata: Metadata = {
  title: 'Descargo de Responsabilidad',
  description: 'Descargo de responsabilidad de El Ciclo Roto. Información importante sobre el uso de nuestro contenido de salud mental.',
};

export default function DescargoPage() {
  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Descargo de Responsabilidad' }]} />
        <div className="gold-divider mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">Descargo de Responsabilidad</h1>
        
        <Alert type="warning" title="Información importante" className="mb-8">
          Lee atentamente este descargo antes de utilizar la información de este sitio.
        </Alert>

        <div className="prose max-w-none">
          <h2>Propósito educativo únicamente</h2>
          <p>El contenido de El Ciclo Roto tiene fines exclusivamente educativos e informativos. No está diseñado ni pretende ser un sustituto del consejo médico, diagnóstico o tratamiento profesional. Siempre busca el consejo de tu médico, psicólogo u otro profesional de la salud calificado con cualquier pregunta que tengas sobre una condición médica o de salud mental.</p>

          <h2>No es consejo profesional</h2>
          <p>La información presentada en este sitio:</p>
          <ul>
            <li>No constituye consejo médico, psicológico ni psiquiátrico.</li>
            <li>No reemplaza una evaluación profesional.</li>
            <li>No debe utilizarse para automedicarse o autodiagnosticarse.</li>
            <li>No establece una relación paciente-profesional.</li>
          </ul>

          <h2>Precisión de la información</h2>
          <p>Nos esforzamos por presentar información precisa y actualizada basada en evidencia científica. Sin embargo:</p>
          <ul>
            <li>La investigación en salud mental evoluciona continuamente.</li>
            <li>Algunas afirmaciones pueden basarse en evidencia preliminar, lo cual indicamos explícitamente.</li>
            <li>No garantizamos que toda la información esté libre de errores o desactualizaciones.</li>
          </ul>

          <h2>Enlaces a terceros</h2>
          <p>Este sitio puede contener enlaces a recursos externos. No respaldamos ni somos responsables del contenido, precisión o prácticas de terceros.</p>

          <h2>Emergencias</h2>
          <p>Si estás experimentando una emergencia de salud mental:</p>
          <ul>
            <li>Llama a los servicios de emergencia de tu país.</li>
            <li>Contacta a una línea de crisis local.</li>
            <li>Acude al servicio de urgencias más cercano.</li>
          </ul>
          <p>Este sitio no ofrece asistencia en crisis ni puede responder a situaciones de emergencia.</p>

          <h2>Líneas de crisis internacionales</h2>
          <ul>
            <li><strong>International:</strong> +1 800 273 8255 (Línea Internacional de Prevención del Suicidio)</li>
            <li><strong>España:</strong> 024 (Línea de Atención a la Conducta Suicida)</li>
            <li><strong>México:</strong> 55 5259-8121 (SAPTel Línea de Apoyo Psicológico)</li>
            <li><strong>Argentina:</strong> 135 (Línea de Prevención del Suicidio)</li>
            <li><strong>Colombia:</strong> 106 (Línea Nacional de Salud Mental)</li>
            <li><strong>Chile:</strong> *4141 (Línea Prevención del Suicidio)</li>
          </ul>

          <p className="mt-8 p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-sm">
            Al utilizar este sitio, aceptas los términos de este descargo. Si no estás de acuerdo, 
            por favor no utilices nuestro contenido como base para decisiones sobre tu salud.
          </p>
        </div>
      </div>
    </div>
  );
}
