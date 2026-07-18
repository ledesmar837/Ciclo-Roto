'use client';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-5xl mb-4">😔</div>
        <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
          Algo salió mal
        </h1>
        <p className="text-[var(--text-secondary)] mb-6">
          Hubo un error al cargar esta página. Por favor, intenta de nuevo.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl bg-[var(--color-primary-500)] text-white font-medium hover:bg-[var(--color-primary-600)] transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
