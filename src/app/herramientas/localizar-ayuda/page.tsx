import Breadcrumbs from "@/components/Breadcrumbs";

const HELP_LINES = [
  { country: "Internacional", name: "Línea Internacional de Prevención del Suicidio", phone: "+1 800 273 8255", note: "Disponible 24/7. También en español." },
  { country: "Estados Unidos", name: "988 Suicide & Crisis Lifeline", phone: "988", note: "Marca 988. Línea gratuita y confidencial 24/7." },
  { country: "Estados Unidos", name: "Crisis Text Line", phone: "Envía HOME al 741741", note: "Servicio de crisis por mensaje de texto." },
  { country: "España", name: "Línea de Atención a la Conducta Suicida", phone: "024", note: "Gratuito, disponible 24/7, confidencial." },
  { country: "España", name: "Teléfono de la Esperanza", phone: "717 003 717", note: "Atención emocional 24 horas." },
  { country: "México", name: "SAPTel Línea de Apoyo Psicológico", phone: "55 5259-8121", note: "Atención telefónica especializada." },
  { country: "México", name: "Línea de la Vida", phone: "800 911 2000", note: "Atención en adicciones y salud mental." },
  { country: "Argentina", name: "Línea de Prevención del Suicidio", phone: "135", note: "Atención gratuita desde cualquier punto del país." },
  { country: "Colombia", name: "Línea Nacional de Salud Mental", phone: "106", note: "Atención gratuita 24 horas." },
  { country: "Chile", name: "Línea Prevención del Suicidio", phone: "*4141", note: "Desde cualquier celular." },
  { country: "Perú", name: "Línea 113 Salud Mental", phone: "113", note: "Opción 5. Ministerio de Salud." },
  { country: "Uruguay", name: "Línea de Prevención del Suicidio", phone: "0800 0767", note: "Atención gratuita." },
  { country: "Ecuador", name: "Línea de Confianza", phone: "1800 327 424", note: "Atención psicológica gratuita." },
  { country: "Reino Unido", name: "Samaritans", phone: "116 123", note: "Gratuito 24/7." },
  { country: "OMS", name: "Organización Mundial de la Salud", phone: "—", note: "who.int - Recursos de salud mental." },
];

export default function LocalizarAyudaPage() {
  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: "Inicio", href: "/" },
          { label: "Herramientas", href: "/herramientas" },
          { label: "Líneas de Ayuda" },
        ]} />

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Directorio de Líneas de Ayuda
        </h1>
        <p className="text-[var(--text-secondary)] mb-2">
          Si estás pasando por un momento difícil, no estás solo/a. Estas líneas de ayuda
          ofrecen apoyo gratuito y confidencial.
        </p>
        <p className="text-sm text-[var(--text-tertiary)] mb-8">
          Fuente: Organización Mundial de la Salud (WHO), International Association for Suicide Prevention (IASP).
        </p>

        <div className="space-y-4">
          {HELP_LINES.map((line, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--color-primary-200)] hover:shadow-sm transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-medium text-[var(--color-primary-500)] uppercase tracking-wider">{line.country}</span>
                  <h3 className="font-semibold text-[var(--text-primary)] mt-0.5">{line.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[var(--color-primary-500)]">{line.phone}</p>
                  {line.note && <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{line.note}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-amber-50 border border-amber-200">
          <p className="text-sm text-amber-800">
            <strong>Emergencia:</strong> Si tienes pensamientos de hacerte daño o crees que alguien está en peligro
            inmediato, llama a los servicios de emergencia de tu país (911, 112, 131, etc.)
            o acude a la sala de urgencias más cercana. No esperes.
          </p>
        </div>
      </div>
    </div>
  );
}
