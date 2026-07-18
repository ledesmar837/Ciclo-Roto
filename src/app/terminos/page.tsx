import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Términos de Uso',
  description: 'Términos y condiciones de uso de El Ciclo Roto.',
};

export default function TerminosPage() {
  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Términos de Uso' }]} />
        <div className="gold-divider mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">Términos de Uso</h1>
        
        <div className="prose max-w-none">
          <p><strong>Última actualización:</strong> Julio 2025</p>

          <h2>1. Aceptación de los términos</h2>
          <p>Al acceder y utilizar El Ciclo Roto, aceptas cumplir con estos términos de uso. Si no estás de acuerdo con alguna parte, te recomendamos no utilizar el sitio.</p>

          <h2>2. Contenido educativo</h2>
          <p>Todo el contenido de este sitio tiene fines exclusivamente educativos e informativos. No sustituye la atención médica, psicológica o psiquiátrica profesional. Consulta nuestro <a href="/descargo">Descargo de Responsabilidad</a> para más información.</p>

          <h2>3. Propiedad intelectual</h2>
          <p>Todo el contenido publicado en este sitio (textos, imágenes, diseño) es propiedad de El Ciclo Roto, a menos que se indique lo contrario. No está permitida la reproducción sin autorización.</p>

          <h2>4. Enlaces externos</h2>
          <p>Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido, precisión o prácticas de privacidad de estos sitios.</p>

          <h2>5. Exactitud de la información</h2>
          <p>Nos esforzamos por mantener la información precisa y actualizada. Sin embargo, la investigación en salud mental evoluciona constantemente. No garantizamos que toda la información esté libre de errores o desactualizaciones.</p>

          <h2>6. Modificaciones</h2>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán publicados en esta página.</p>
        </div>
      </div>
    </div>
  );
}
