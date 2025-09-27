import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
impoexport default async function Post({ params }: PostPageProps) {
  const { slug } = await params; { getPostData } from '@/lib/posts-fast';
import { format } from 'date-fns';
import TagLink from '@/components/TagLink';
import {
  absoluteUrl,
  buildCanonicalUrl,
  safeDateIso,
  SITE_URL,
  DEFAULT_OG_IMAGE,
  DEFAULT_PUBLISHER_LOGO,
} from '@/lib/seo';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic routing - no static generation for faster builds

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Skip processing for asset files
  if (slug.includes('.')) {
    return {
      title: 'Asset',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  
  try {
    const post = await getPostData(slug);
    const canonicalUrl = buildCanonicalUrl(post.permalink, slug);
    const ogImage = absoluteUrl(post.preview) ?? absoluteUrl(DEFAULT_OG_IMAGE)!;
    const publishedTime = safeDateIso(post.date);
    const description = post.description || post.title;
    const keywords = post.tags && post.tags.length > 0 ? post.tags : undefined;
    
    return {
      title: `${post.title} | Yiting Liu`,
      description,
      keywords,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        type: 'article',
        url: canonicalUrl,
        title: post.title,
        description,
        publishedTime,
        modifiedTime: publishedTime,
        authors: post.author ? [post.author] : ['Yiting Liu'],
        tags: post.tags,
        images: [
          {
            url: ogImage,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description,
        images: [ogImage],
        creator: '@yitingliu',
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch {
    return {
      title: 'Post Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  
  // Skip processing for asset files - return 404
  if (slug.includes('.')) {
    notFound();
  }
  
  try {
    // Only load English posts - skip Chinese translations
    const post = await getPostData(slug);
    
    // Skip Chinese translations (they have /zh/ in their permalink)
    if (post.permalink?.includes('/zh/')) {
      notFound();
    }
    
    const canonicalUrl = buildCanonicalUrl(post.permalink, slug);
    const ogImage = absoluteUrl(post.preview) ?? absoluteUrl(DEFAULT_OG_IMAGE)!;
    const publishedTime = safeDateIso(post.date);
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description || post.title,
      datePublished: publishedTime,
      dateModified: publishedTime,
      url: canonicalUrl,
      mainEntityOfPage: canonicalUrl,
      inLanguage: 'en',
      image: ogImage,
      keywords: post.tags?.join(', '),
      author: {
        '@type': 'Person',
        name: post.author || 'Yiting Liu',
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Person',
        name: 'Yiting Liu',
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl(DEFAULT_PUBLISHER_LOGO) ?? ogImage,
        },
      },
    };

    return (
      <article className="post-article">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <header className="post-header">
          <div className="post-header-content">
            <h1 className="post-title">{post.title}</h1>
            {post.description && (
              <p className="post-description">{post.description}</p>
            )}
            
            <div className="post-meta">
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
              {post.author && <span className="post-author">by {post.author}</span>}
              {post.tags && (
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <TagLink key={tag} tag={tag} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>
        
        <div 
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
        />
      </article>
    );
  } catch {
    notFound();
  }
}