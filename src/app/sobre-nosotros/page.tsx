import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce el equipo detrás de El Ciclo Roto. Creemos en la información responsable y basada en evidencia sobre salud mental.',
};

export default function SobreNosotrosPage() {
  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Sobre Nosotros' }]} />

        <div className="mb-12">
          <div className="gold-divider mb-6" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">Sobre Nosotros</h1>
        </div>

        <div className="prose max-w-none">
          <h2>Nuestra misión</h2>
          <p>
            En <strong>El Ciclo Roto</strong> creemos que la información de calidad sobre salud mental 
            debería ser accesible para todos. Nuestra misión es ofrecer contenido riguroso, basado en 
            evidencia científica, presentado con claridad y sensibilidad.
          </p>

          <p>
            La salud mental es un tema que afecta a millones de personas en todo el mundo. Sin embargo, 
            gran parte de la información disponible en internet no está verificada, contiene afirmaciones 
            sin respaldo científico o, peor aún, puede ser perjudicial. Queremos cambiar eso.
          </p>

          <h2>Qué nos diferencia</h2>
          <ul>
            <li><strong>Rigor científico:</strong> Cada artículo está respaldado por fuentes verificables como la Organización Mundial de la Salud (OMS), la Asociación Americana de Psicología (APA), los Institutos Nacionales de Salud de EE. UU. (NIH), el Centro para el Control de Enfermedades (CDC) y la Colaboración Cochrane.</li>
            <li><strong>Honestidad intelectual:</strong> Diferenciamos claramente entre hechos comprobados, hipótesis en investigación y opiniones. Cuando no existe evidencia suficiente sobre un tema, lo decimos explícitamente.</li>
            <li><strong>Diseño centrado en la persona:</strong> Creemos que la forma en que se presenta la información importa tanto como su contenido. Un diseño claro, calmado y accesible reduce la barrera de entrada al conocimiento.</li>
            <li><strong>Compromiso ético:</strong> Todo nuestro contenido tiene fines educativos. No reemplaza la atención médica o psicológica profesional. Incluimos descargos claros en cada publicación.</li>
          </ul>

          <h2>Nuestro enfoque</h2>
          <p>
            Abordamos la salud mental desde una perspectiva biopsicosocial, reconociendo que el bienestar 
            emocional es el resultado de la interacción entre factores biológicos, psicológicos y sociales. 
            No promovemos soluciones únicas ni simplificamos problemas complejos.
          </p>
          <p>
            Creemos en el poder del conocimiento informado como primer paso hacia el bienestar, pero 
            también reconocemos sus límites. La información por sí sola no sustituye el apoyo profesional, 
            el acompañamiento terapéutico ni el tratamiento médico cuando es necesario.
          </p>

          <h2>Nuestros valores</h2>
          <ul>
            <li><strong>Empatía:</strong> Cada contenido se crea pensando en las personas que buscan ayuda.</li>
            <li><strong>Precisión:</strong> Verificamos cada afirmación contra fuentes primarias.</li>
            <li><strong>Accesibilidad:</strong> Usamos un lenguaje claro sin sacrificar el rigor.</li>
            <li><strong>Esperanza:</strong> Mostramos que el cambio y la recuperación son posibles.</li>
          </ul>

          <h2>En qué creemos</h2>
          <p>
            Que nadie debería enfrentar sus problemas de salud mental sin información de calidad. 
            Que el conocimiento, presentado con responsabilidad, puede ser una herramienta poderosa 
            de cambio. Y que todos merecen acceso a contenido que respete su inteligencia y su 
            experiencia vivida.
          </p>

          <p>
            Gracias por confiar en nosotros para ser parte de tu camino hacia el bienestar.
          </p>

          {/* Disclaimer */}
          <div className="mt-12 p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)]">
            <p className="text-sm text-[var(--text-secondary)]">
              <strong>Descargo de responsabilidad:</strong> El Ciclo Roto ofrece contenido educativo 
              sobre salud mental. Esta información no sustituye la atención médica o psicológica 
              profesional. Si estás experimentando una crisis de salud mental, contacta a un profesional 
              de la salud o a una línea de crisis en tu país.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
