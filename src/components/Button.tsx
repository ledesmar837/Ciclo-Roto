import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-2.5 text-sm gap-2',
    lg: 'px-8 py-3.5 text-base gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-600)] shadow-sm hover:shadow focus:ring-[var(--color-primary-500)]',
    secondary:
      'bg-[var(--surface-secondary)] text-[var(--text-primary)] hover:bg-[var(--surface-tertiary)] border border-[var(--border)] focus:ring-[var(--text-tertiary)]',
    outline:
      'bg-transparent text-[var(--color-primary-500)] border border-[var(--color-primary-500)] hover:bg-[var(--color-primary-50)] focus:ring-[var(--color-primary-500)]',
    ghost:
      'bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] focus:ring-[var(--text-tertiary)]',
    gold:
      'bg-gradient-to-r from-[var(--color-gold-400)] to-[var(--color-gold-500)] text-white hover:from-[var(--color-gold-500)] hover:to-[var(--color-gold-600)] shadow-sm hover:shadow focus:ring-[var(--color-gold-400)]',
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
