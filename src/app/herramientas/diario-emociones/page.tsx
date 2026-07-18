"use client";

import { useState, useEffect } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

const MOODS = [
  { emoji: "😢", label: "Muy mal", color: "bg-red-100 border-red-300", value: 1 },
  { emoji: "😟", label: "Mal", color: "bg-orange-100 border-orange-300", value: 2 },
  { emoji: "😐", label: "Regular", color: "bg-yellow-100 border-yellow-300", value: 3 },
  { emoji: "🙂", label: "Bien", color: "bg-emerald-100 border-emerald-300", value: 4 },
  { emoji: "😊", label: "Muy bien", color: "bg-green-100 border-green-300", value: 5 },
];

export default function DiarioEmocionesPage() {
  const [entries, setEntries] = useState<Array<{ date: string; mood: number; note: string }>>([]);
  const [mood, setMood] = useState<number>(3);
  const [note, setNote] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("diario-emociones");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  const saveEntry = () => {
    const newEntry = { date: new Date().toISOString(), mood, note };
    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("diario-emociones", JSON.stringify(updated));
    setNote("");
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString("es-ES", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const last7 = entries.slice(0, 7);
  const avgMood = last7.length > 0
    ? (last7.reduce((a, b) => a + b.mood, 0) / last7.length).toFixed(1)
    : "—";

  return (
    <div className="pt-24 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: "Inicio", href: "/" },
          { label: "Herramientas", href: "/herramientas" },
          { label: "Diario de Emociones" },
        ]} />

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
          Diario de Emociones
        </h1>
        <p className="text-[var(--text-secondary)] mb-8">
          Registra cómo te sientes cada día y observa tus patrones emocionales.
          Tus datos se almacenan solo en tu dispositivo.
        </p>

        {/* Mood summary */}
        <div className="p-5 rounded-2xl bg-[var(--surface-secondary)] border border-[var(--border)] mb-8">
          <p className="text-sm text-[var(--text-tertiary)]">Estado de ánimo promedio (7 días)</p>
          <p className="text-3xl font-bold text-[var(--text-primary)] mt-1">{avgMood}</p>
          <p className="text-xs text-[var(--text-tertiary)]">de 5.0</p>
        </div>

        {/* New entry */}
        <div className="p-6 rounded-2xl bg-white border border-[var(--border)] mb-8">
          <h2 className="font-semibold text-[var(--text-primary)] mb-4">Registra tu estado de hoy</h2>
          <div className="flex gap-3 mb-5">
            {MOODS.map((m) => (
              <button
                key={m.value}
                onClick={() => setMood(m.value)}
                className={`p-3 rounded-xl border-2 transition-all ${
                  mood === m.value
                    ? `${m.color} ring-2 ring-[var(--color-primary-500)]`
                    : "border-transparent hover:bg-[var(--surface-secondary)]"
                }`}
                title={m.label}
              >
                <span className="text-2xl">{m.emoji}</span>
              </button>
            ))}
          </div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="¿Qué pasó hoy? ¿Cómo te sientes?"
            className="w-full p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-secondary)] text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent"
          />
          <button
            onClick={saveEntry}
            className="mt-3 px-6 py-2.5 rounded-xl bg-[var(--color-primary-500)] text-white font-medium text-sm hover:bg-[var(--color-primary-600)] transition-colors"
          >
            Guardar entrada
          </button>
        </div>

        {/* History */}
        <h2 className="font-semibold text-[var(--text-primary)] mb-4">Historial</h2>
        {entries.length === 0 ? (
          <p className="text-sm text-[var(--text-tertiary)] text-center py-8">
            Aún no tienes entradas. ¡Registra tu primera emoción!
          </p>
        ) : (
          <div className="space-y-3">
            {entries.slice(0, 20).map((e, i) => (
              <div key={i} className="p-4 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[var(--text-tertiary)] capitalize">{formatDate(e.date)}</span>
                  <span className="text-lg">{MOODS.find((m) => m.value === e.mood)?.emoji}</span>
                </div>
                {e.note && <p className="text-sm text-[var(--text-secondary)]">{e.note}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
