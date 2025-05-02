import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Components } from 'react-markdown';
import type { CSSProperties } from 'react';
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const components: Components = {
    code({ node, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      if (match) {
        const syntaxHighlighterProps: Partial<SyntaxHighlighterProps> = {
          style: vscDarkPlus as any,
          language: match[1],
          PreTag: "div",
          ...props
        };
        return (
          <SyntaxHighlighter {...syntaxHighlighterProps}>
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      } else {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }
    },
  };

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
} 