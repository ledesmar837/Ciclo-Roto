import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
  className?: string;
  href?: string;
}

export default function Card({
  children,
  variant = 'default',
  className = '',
  href,
}: CardProps) {
  const baseStyles = 'rounded-2xl overflow-hidden transition-all duration-200';

  const variantStyles = {
    default: 'bg-white border border-[var(--border)] hover:border-[var(--border)]',
    elevated:
      'bg-white shadow-sm hover:shadow-md border border-[var(--border)]',
    bordered:
      'bg-white border border-[var(--border)] hover:border-[var(--color-primary-200)]',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
