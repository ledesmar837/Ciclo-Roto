import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies de El Ciclo Roto. Información sobre el uso de cookies en nuestro sitio.',
};

export default function CookiesPage() {
  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Política de Cookies' }]} />
        <div className="gold-divider mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-8">Política de Cookies</h1>
        
        <div className="prose max-w-none">
          <p><strong>Última actualización:</strong> Julio 2025</p>

          <h2>1. ¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde tus preferencias y comportamiento de navegación.</p>

          <h2>2. Tipos de cookies que utilizamos</h2>
          <ul>
            <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio. No requieren consentimiento.</li>
            <li><strong>Cookies analíticas:</strong> Utilizamos Google Analytics para comprender cómo los visitantes interactúan con nuestro contenido. Estas cookies recopilan información anónima.</li>
          </ul>

          <h2>3. Cookies de terceros</h2>
          <p>Google Analytics establece cookies en nuestro dominio para realizar análisis de tráfico. Google puede transferir esta información a terceros cuando así lo requiera la ley.</p>

          <h2>4. Gestión de cookies</h2>
          <p>Puedes gestionar las cookies desde la configuración de tu navegador:</p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h2>5. Consentimiento</h2>
          <p>Al continuar navegando en nuestro sitio, aceptas el uso de cookies según esta política. Puedes retirar tu consentimiento en cualquier momento mediante la configuración de tu navegador.</p>

          <h2>6. Más información</h2>
          <p>Para más información sobre cómo manejamos tus datos, consulta nuestra <a href="/politica-privacidad">Política de Privacidad</a>.</p>
        </div>
      </div>
    </div>
  );
}
