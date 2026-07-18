'use client';

interface AlertProps {
  type: 'info' | 'warning' | 'success' | 'danger';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ALERT_STYLES = {
  info: {
    bg: 'bg-sky-50 border-sky-200',
    icon: 'text-sky-500',
    title: 'text-sky-800',
    text: 'text-sky-700',
  },
  warning: {
    bg: 'bg-amber-50 border-amber-200',
    icon: 'text-amber-500',
    title: 'text-amber-800',
    text: 'text-amber-700',
  },
  success: {
    bg: 'bg-emerald-50 border-emerald-200',
    icon: 'text-emerald-500',
    title: 'text-emerald-800',
    text: 'text-emerald-700',
  },
  danger: {
    bg: 'bg-red-50 border-red-200',
    icon: 'text-red-500',
    title: 'text-red-800',
    text: 'text-red-700',
  },
};

export default function Alert({ type, title, children, className = '' }: AlertProps) {
  const styles = ALERT_STYLES[type];

  return (
    <div className={`rounded-xl border p-4 ${styles.bg} ${className}`} role="alert">
      <div className="flex gap-3">
        <div className={`flex-shrink-0 mt-0.5 ${styles.icon}`}>
          {type === 'info' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {type === 'warning' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          )}
          {type === 'success' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {type === 'danger' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <div>
          {title && <p className={`font-semibold text-sm ${styles.title}`}>{title}</p>}
          <div className={`text-sm mt-1 ${styles.text}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}
