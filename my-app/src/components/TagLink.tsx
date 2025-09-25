import Link from 'next/link';

interface TagLinkProps {
  tag: string;
  className?: string;
}

export default function TagLink({ tag, className = 'tag' }: TagLinkProps) {
  // Create a URL-friendly slug from the tag
  const tagSlug = tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  
  return (
    <Link href={`/tags/${tagSlug}`} className={className}>
      {tag}
    </Link>
  );
}