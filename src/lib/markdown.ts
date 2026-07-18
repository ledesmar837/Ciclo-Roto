/**
 * Convierte contenido markdown simple a HTML.
 * Soporta: headings (##, ###), párrafos, listas, blockquotes, bold, itálico, enlaces.
 * No usa librerías externas para mantener el bundle pequeño.
 */
export function markdownToHtml(md: string): string {
  if (!md) return '';

  let html = md
    // Escape HTML entities first
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Headings
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // Bold and italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`(.+?)`/g, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // Blockquotes
    .replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // Ordered lists
    .replace(/^\d+\.\s(.+)$/gm, '<li>$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/((?:<li>.*?<\/li>\n?)+)/g, '<ul>$1</ul>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr />')
    // Disclaimer block
    .replace(/^_(.+)_$/gm, '<em>$1</em>');

  // Split by double newlines for paragraph handling
  const paragraphs = html.split(/\n\n+/);
  html = paragraphs
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      // Skip if already wrapped in block-level tags
      if (
        trimmed.startsWith('<h') ||
        trimmed.startsWith('<ul') ||
        trimmed.startsWith('<ol') ||
        trimmed.startsWith('<blockquote') ||
        trimmed.startsWith('<li') ||
        trimmed.startsWith('<hr') ||
        trimmed.startsWith('<div')
      ) {
        return trimmed;
      }
      // Wrap remaining text in paragraphs
      return `<p>${trimmed}</p>`;
    })
    .join('\n');

  // Clean up empty paragraphs
  html = html.replace(/<p>\s*<\/p>/g, '');

  // Add structured disclaimer at the end if one exists in the markdown
  return html;
}
