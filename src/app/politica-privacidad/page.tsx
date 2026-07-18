import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de El Ciclo Roto. Conoce cómo manejamos tus datos personales.',
};

export default function PrivacidadPage() {
  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Política de Privacidad' }]} />
        <div className="gold-divider mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">Política de Privacidad</h1>
        
        <div className="prose max-w-none">
          <p><strong>Última actualización:</strong> Julio 2025</p>

          <h2>1. Introducción</h2>
          <p>En El Ciclo Roto (en adelante, &ldquo;nosotros&rdquo; o &ldquo;el sitio&rdquo;), respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política describe cómo recopilamos, usamos y protegemos tu información cuando visitas nuestro sitio web.</p>

          <h2>2. Datos que recopilamos</h2>
          <p>Podemos recopilar los siguientes datos:</p>
          <ul>
            <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de visita y otras estadísticas de uso a través de cookies analíticas.</li>
            <li><strong>Datos de suscripción:</strong> Si te suscribes a nuestro boletín, recopilamos tu dirección de correo electrónico.</li>
            <li><strong>Datos de contacto:</strong> Si nos escribes, recopilamos la información que nos proporcionas voluntariamente.</li>
          </ul>

          <h2>3. Cómo usamos tus datos</h2>
          <p>Utilizamos tus datos para:</p>
          <ul>
            <li>Mejorar nuestro contenido y experiencia de usuario.</li>
            <li>Enviar nuestro boletín informativo (si te suscribes).</li>
            <li>Responder a tus consultas o comentarios.</li>
            <li>Cumplir con obligaciones legales.</li>
          </ul>

          <h2>4. Cookies</h2>
          <p>Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas para entender cómo se utiliza nuestro contenido. Consulta nuestra <a href="/cookies">Política de Cookies</a> para más información.</p>

          <h2>5. Google Analytics</h2>
          <p>Este sitio utiliza Google Analytics, un servicio de análisis web proporcionado por Google LLC. Google Analytics utiliza cookies para ayudar a analizar el uso del sitio. La información generada por la cookie sobre tu uso del sitio (incluyendo tu dirección IP) será transmitida y almacenada por Google en servidores en Estados Unidos.</p>

          <h2>6. Tus derechos</h2>
          <p>Tienes derecho a:</p>
          <ul>
            <li>Acceder a tus datos personales.</li>
            <li>Solicitar la corrección de datos inexactos.</li>
            <li>Solicitar la eliminación de tus datos.</li>
            <li>Oponerte al procesamiento de tus datos.</li>
            <li>Solicitar la portabilidad de tus datos.</li>
          </ul>
          <p>Para ejercer estos derechos, contáctanos en <strong>contacto@elcicloroto.com</strong>.</p>

          <h2>7. Enlaces a terceros</h2>
          <p>Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Te recomendamos leer sus políticas de privacidad.</p>

          <h2>8. Cambios a esta política</h2>
          <p>Podemos actualizar esta política periódicamente. Los cambios serán publicados en esta página con una nueva fecha de actualización.</p>

          <h2>9. Contacto</h2>
          <p>Si tienes preguntas sobre esta política, escríbenos a <strong>contacto@elcicloroto.com</strong>.</p>
        </div>
      </div>
    </div>
  );
}
