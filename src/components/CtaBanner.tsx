'use client';

interface CtaBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant?: 'primary' | 'gold';
}

export default function CtaBanner({
  title,
  description,
  buttonText,
  buttonHref,
  variant = 'primary',
}: CtaBannerProps) {
  const isPrimary = variant === 'primary';

  return (
    <section className={`relative overflow-hidden rounded-3xl ${isPrimary ? 'bg-gradient-to-br from-[#1e3a8a] to-[#0f172a]' : 'bg-gradient-to-br from-[var(--color-gold-500)] to-[var(--color-gold-700)]'} p-8 md:p-12 lg:p-16`}>
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/80 mb-8 leading-relaxed">
          {description}
        </p>
        <a
          href={buttonHref}
          className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
            isPrimary
              ? 'bg-[var(--color-gold-400)] text-white hover:bg-[var(--color-gold-500)] shadow-lg shadow-[var(--color-gold-400)]/25'
              : 'bg-white text-[var(--color-gold-700)] hover:bg-[var(--color-gold-50)] shadow-lg'
          }`}
        >
          {buttonText}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
