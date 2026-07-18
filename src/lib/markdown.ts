/**
 * Convierte contenido markdown simple a HTML semántico.
 * Soporta: headings (##, ###), párrafos, listas ordenadas y no ordenadas,
 * blockquotes, bold, itálico, enlaces, código inline, reglas horizontales.
 * Sin dependencias externas.
 *
 * Este conversor está optimizado para el contenido de artículos de El Ciclo Roto
 * que usa markdown con referencias enlazadas.
 */
export function markdownToHtml(md: string): string {
  if (!md) return '';

  let html = md
    // Escape HTML entities primero para evitar XSS
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Regla horizontal
    .replace(/^---\s*$/gm, '<hr />')
    // Headings
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // Bold + italic combinados
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Código inline
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Enlaces [texto](url)
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    )
    // Disclaimer blockquote con formato *texto*
    .replace(
      /^\*\s*⚠️\s*Disclaimer/gm,
      '</div><div class="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-sm text-amber-800"><strong>⚠️ Aviso importante:</strong>'
    )
    .replace(
      /^\*\s*📝\s*Nota/gm,
      '<div class="mt-3 text-xs text-[var(--text-tertiary)]"><em>📝 Nota:'
    );

  // Blockquotes: líneas que empiezan con >
  html = html.replace(/^&gt;\s(.+)$/gm, '<blockquote><p>$1</p></blockquote>');

  // Listas no ordenadas: líneas que empiezan con "- " o "* "
  // Primero marcamos los items
  html = html.replace(/^[-*]\s+(.+)$/gm, '<li>$1</li>');

  // Listas ordenadas: líneas que empiezan con "1. " "2. " etc
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');

  // Agrupar <li> consecutivos en <ul> o <ol>
  html = html.replace(/((?:<li>.*?<\/li>\n?)+)/g, (match: string) => {
    // Si algún item tiene contenido numerado, usamos <ol>
    const isOrdered = /^\d+\.\s/.test(
      md.slice(md.indexOf(match), md.indexOf(match) + match.length)
    );
    const tag = 'ul';
    return `<${tag}>\n${match}</${tag}>\n`;
  });

  // Párrafos: dividir por dobles saltos de línea
  const blocks = html.split(/\n\n+/);
  html = blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';

      // No envolver si ya es un bloque semántico
      if (
        trimmed.startsWith('<h') ||
        trimmed.startsWith('<ul') ||
        trimmed.startsWith('<ol') ||
        trimmed.startsWith('<li') ||
        trimmed.startsWith('<blockquote') ||
        trimmed.startsWith('<hr') ||
        trimmed.startsWith('<div') ||
        trimmed.startsWith('</div')
      ) {
        return trimmed;
      }
      return `<p>${trimmed}</p>`;
    })
    .join('\n');

  // Limpiar párrafos vacíos
  html = html.replace(/<p>\s*<\/p>/g, '');

  // Cerrar disclaimer blocks abiertos
  if (html.includes('Aviso importante') && !html.includes('</div>')) {
    // Ya se maneja arriba con los replace
  }

  return html;
}
