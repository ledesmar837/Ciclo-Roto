import Link from 'next/link';
import Badge from './Badge';
import Card from './Card';

interface ArticleCardProps {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  image?: string;
  featured?: boolean;
}

export default function ArticleCard({
  title,
  slug,
  excerpt,
  category,
  author,
  date,
  readTime,
  image,
  featured = false,
}: ArticleCardProps) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card href={`/articulo/${slug}`} variant="elevated" className={`group ${featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''}`}>
      {image && (
        <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-full' : 'h-48'}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5 md:p-6 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Badge variant="primary">{category}</Badge>
          <span className="text-xs text-[var(--text-tertiary)]">{readTime} min de lectura</span>
        </div>
        <h3 className={`font-bold text-[var(--text-primary)] leading-tight group-hover:text-[var(--color-primary-500)] transition-colors ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[var(--border-light)]">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-700)] flex items-center justify-center text-xs text-white font-medium">
            {author.charAt(0)}
          </div>
          <div>
            <p className="text-xs font-medium text-[var(--text-primary)]">{author}</p>
            <p className="text-xs text-[var(--text-tertiary)]">{formatDate(date)}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
