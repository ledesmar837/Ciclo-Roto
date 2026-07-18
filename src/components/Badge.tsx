interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'gold' | 'success' | 'warning' | 'info' | 'neutral';
  size?: 'sm' | 'md';
}

export default function Badge({ children, variant = 'primary', size = 'sm' }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]',
    gold: 'bg-[var(--color-gold-50)] text-[var(--color-gold-600)]',
    success: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-700',
    info: 'bg-sky-50 text-sky-700',
    neutral: 'bg-[var(--surface-tertiary)] text-[var(--text-secondary)]',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );
}
