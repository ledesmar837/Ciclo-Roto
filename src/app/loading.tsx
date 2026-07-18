export default function LoadingPage() {
  return (
    <div className="pt-24 pb-16 flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[var(--color-primary-500)] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-[var(--text-tertiary)]">Cargando...</p>
      </div>
    </div>
  );
}
