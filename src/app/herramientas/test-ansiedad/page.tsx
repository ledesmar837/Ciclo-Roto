"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Alert from "@/components/Alert";

export default function TestAnsiedadPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<number | null>(null);

  const questions = [
    "Sentirse nervioso/a, ansioso/a o con los nervios de punta",
    "No poder dejar de preocuparse o no poder controlar la preocupación",
    "Preocuparse demasiado por diferentes cosas",
    "Tener dificultad para relajarse",
    "Estar tan inquieto/a que le es difícil quedarse quieto/a",
    "Molestarse o enfadarse fácilmente",
    "Sentir miedo como si algo terrible pudiera ocurrir",
  ];

  const options = [
    { value: 0, label: "Nunca" },
    { value: 1, label: "Varios días" },
    { value: 2, label: "Más de la mitad de los días" },
    { value: 3, label: "Casi todos los días" },
  ];

  const total = Object.values(answers).reduce((a, b) => a + b, 0);

  const getResult = () => {
    setResult(total);
  };

  const getSeverity = (score: number) => {
    if (score <= 4) return { label: "Ansiedad mínima", color: "text-emerald-600", bg: "bg-emerald-50" };
    if (score <= 9) return { label: "Ansiedad leve", color: "text-amber-600", bg: "bg-amber-50" };
    if (score <= 14) return { label: "Ansiedad moderada", color: "text-orange-600", bg: "bg-orange-50" };
    return { label: "Ansiedad severa", color: "text-red-600", bg: "bg-red-50" };
  };

  return (
    <div className="pb-16 md:pb-24">
      {/* Hero header */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486312699619-be057cfc0342?w=1600&q=80"
          alt="Persona resolviendo un cuestionario en una tableta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-900)]/85 to-[var(--color-primary-700)]/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Breadcrumbs items={[
              { label: "Inicio", href: "/" },
              { label: "Herramientas", href: "/herramientas" },
              { label: "Evaluación de Ansiedad" },
            ]} />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3">
              Evaluación de Ansiedad (GAD-7)
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">

        <Alert type="info" title="Información importante" className="mb-8">
          Esta herramienta se basa en el cuestionario GAD-7, un instrumento de cribado validado clínicamente.
          Los resultados son solo informativos y no sustituyen una evaluación profesional.
          Si te sientes preocupado/a por tus respuestas, consulta a un profesional de la salud mental.
        </Alert>

        <p className="text-sm text-[var(--text-secondary)] mb-8">
          Durante las últimas 2 semanas, ¿con qué frecuencia te han molestado los siguientes problemas?
        </p>

        <div className="space-y-6">
          {questions.map((q, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)]">
              <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
                {idx + 1}. {q}
              </p>
              <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setAnswers({ ...answers, [idx]: opt.value })}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      answers[idx] === opt.value
                        ? "bg-[var(--color-primary-500)] text-white"
                        : "bg-white border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--color-primary-300)]"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {Object.keys(answers).length < 7 && (
          <p className="text-xs text-[var(--text-tertiary)] mt-4">
            Responde todas las preguntas para ver tu resultado.
          </p>
        )}

        {Object.keys(answers).length === 7 && !result && (
          <button
            onClick={getResult}
            className="mt-6 px-8 py-3 rounded-xl bg-[var(--color-primary-500)] text-white font-medium hover:bg-[var(--color-primary-600)] transition-colors"
          >
            Ver resultado
          </button>
        )}

        {result !== null && (
          <div className={`mt-8 p-6 rounded-2xl ${getSeverity(result).bg} border ${getSeverity(result).bg.replace("bg-", "border-").replace("-50", "-200")}`}>
            <h3 className={`font-bold text-lg ${getSeverity(result).color}`}>
              {getSeverity(result).label}
            </h3>
            <p className="text-sm mt-2 text-[var(--text-secondary)]">
              Puntuación total: <strong>{result}</strong> de 21
            </p>
            <p className="text-sm mt-2 text-[var(--text-secondary)]">
              {result <= 4
                ? "Tu puntuación sugiere niveles bajos de ansiedad. Mantén tus hábitos saludables."
                : result <= 9
                ? "Tu puntuación sugiere ansiedad leve. Considera hablar con un profesional si estos síntomas te preocupan."
                : result <= 14
                ? "Tu puntuación sugiere ansiedad moderada. Te recomendamos consultar a un profesional de la salud mental."
                : "Tu puntuación sugiere ansiedad severa. Te recomendamos buscar ayuda profesional lo antes posible."}
            </p>
            <Alert type="warning" className="mt-4 text-xs">
              Este resultado es solo informativo. El GAD-7 es una herramienta de cribado, no un diagnóstico.
              Solo un profesional de la salud mental puede realizar un diagnóstico adecuado.
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
}
