"use client";

import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function RespiracionGuiadaPage() {
  const [mode, setMode] = useState<"caja" | "relajacion" | "calmante">("caja");
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState(0);
  const [counter, setCounter] = useState(4);

  const modes = {
    caja: { name: "Caja (4-4-4-4)", phases: [4, 4, 4, 4], labels: ["Inhala", "Mantén", "Exhala", "Mantén"] },
    relajacion: { name: "Relajación (4-7-8)", phases: [4, 7, 8], labels: ["Inhala", "Mantén", "Exhala"] },
    calmante: { name: "Calmante (2-4-6)", phases: [2, 4, 6], labels: ["Inhala", "Mantén", "Exhala"] },
  };

  const currentMode = modes[mode];

  useEffect(() => {
    if (!isActive) return;
    setPhase(0);
    setCounter(currentMode.phases[0]);

    const interval = setInterval(() => {
      setCounter((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          setPhase((p) => {
            const newPhase = (p + 1) % currentMode.phases.length;
            setCounter(currentMode.phases[newPhase]);
            return newPhase;
          });
          return 0;
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, mode]);

  const circleSize = currentMode.labels[phase] === "Inhala" ? "scale-110" : currentMode.labels[phase] === "Exhala" ? "scale-90" : "scale-100";

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Breadcrumbs items={[
          { label: "Inicio", href: "/" },
          { label: "Herramientas", href: "/herramientas" },
          { label: "Respiración Guiada" },
        ]} />

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Respiración Guiada
        </h1>
        <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
          Sigue el ritmo de la animación para practicar respiración consciente.
        </p>

        {/* Mode selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(Object.entries(modes) as [keyof typeof modes, typeof modes["caja"]][]).map(([key, val]) => (
            <button
              key={key}
              onClick={() => { setMode(key); setIsActive(false); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                mode === key
                  ? "bg-[var(--color-primary-500)] text-white"
                  : "bg-[var(--surface-secondary)] text-[var(--text-secondary)] hover:bg-[var(--surface-tertiary)]"
              }`}
            >
              {val.name}
            </button>
          ))}
        </div>

        {/* Breathing circle */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div
            className={`w-48 h-48 rounded-full bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-primary-600)] flex items-center justify-center transition-all duration-1000 ${isActive ? circleSize : "scale-100"}`}
          >
            <div className="text-center">
              {isActive ? (
                <>
                  <p className="text-white/80 text-sm font-medium">{currentMode.labels[phase]}</p>
                  <p className="text-white text-5xl font-bold mt-1">{counter}</p>
                </>
              ) : (
                <p className="text-white/80 text-sm">Presiona iniciar</p>
              )}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`px-8 py-3 rounded-xl font-medium text-sm transition-all ${
              isActive
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-600)]"
            }`}
          >
            {isActive ? "Detener" : "Iniciar"}
          </button>
          <button
            onClick={() => { setIsActive(false); setPhase(0); setCounter(currentMode.phases[0]); }}
            className="px-6 py-3 rounded-xl bg-[var(--surface-secondary)] text-[var(--text-secondary)] font-medium text-sm hover:bg-[var(--surface-tertiary)] transition-all"
          >
            Reiniciar
          </button>
        </div>

        <p className="text-xs text-[var(--text-tertiary)] mt-8 max-w-md mx-auto">
          La respiración profunda y controlada activa el sistema nervioso parasimpático,
          ayudando a reducir la respuesta fisiológica al estrés. Técnica validada por la APA.
        </p>
      </div>
    </div>
  );
}
