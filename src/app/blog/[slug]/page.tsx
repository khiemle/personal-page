import { getBlogPostBySlug } from '@/utils/blog';
import { MarkdownContent } from '@/components/MarkdownContent';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 dark:text-gray-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <p className="mt-4 text-xl text-gray-700 dark:text-gray-300">
          {post.description}
        </p>
      </header>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MarkdownContent content={post.content} />
      </div>
    </article>
  );
} 