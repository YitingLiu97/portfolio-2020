import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostData } from '@/lib/posts-fast';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import {
  absoluteUrl,
  buildCanonicalUrl,
  safeDateIso,
  DEFAULT_OG_IMAGE,
  DEFAULT_PUBLISHER_LOGO,
  SITE_URL,
} from '@/lib/seo';

interface ZhPostPageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic routing - no static generation for faster builds

export async function generateMetadata({ params }: ZhPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const post = await getPostData(slug);
    const canonicalUrl = buildCanonicalUrl(post.permalink, slug);
    const ogImage = absoluteUrl(post.preview) ?? absoluteUrl(DEFAULT_OG_IMAGE)!;
    const publishedTime = safeDateIso(post.date);
    const description = post.description || post.title;
    const keywords = post.tags && post.tags.length > 0 ? post.tags : undefined;
    const englishAlternate = post.permalink?.startsWith('/zh/')
      ? absoluteUrl(post.permalink.replace(/^\/zh\//, ''))
      : undefined;
    
    return {
      title: `${post.title} | 刘伊婷`,
      description,
      keywords,
      alternates: {
        canonical: canonicalUrl,
        languages: englishAlternate
          ? {
              zh: canonicalUrl,
              en: englishAlternate,
            }
          : {
              zh: canonicalUrl,
            },
      },
      openGraph: {
        type: 'article',
        locale: 'zh_CN',
        url: canonicalUrl,
        title: post.title,
        description,
        publishedTime,
        modifiedTime: publishedTime,
        authors: post.author ? [post.author] : ['刘伊婷'],
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
      title: '未找到文章',
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function ZhPostPage({ params }: ZhPostPageProps) {
  const { slug } = await params;
  
  try {
    const post = await getPostData(slug);
    const canonicalUrl = buildCanonicalUrl(post.permalink, slug);
    const ogImage = absoluteUrl(post.preview) ?? absoluteUrl(DEFAULT_OG_IMAGE)!;
    const publishedTime = safeDateIso(post.date);
    const englishAlternate = post.permalink?.startsWith('/zh/')
      ? absoluteUrl(post.permalink.replace(/^\/zh\//, ''))
      : undefined;
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description || post.title,
      datePublished: publishedTime,
      dateModified: publishedTime,
      url: canonicalUrl,
      mainEntityOfPage: canonicalUrl,
      inLanguage: 'zh',
      image: ogImage,
      keywords: post.tags?.join(', '),
      author: {
        '@type': 'Person',
        name: post.author || '刘伊婷',
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
      alternateName: englishAlternate,
    };
    
    return (
      <>
        <LanguageSwitcher currentLang="zh" />
        
        <article className="post-article">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <header className="post-header">
            <h1 className="post-title">{post.title}</h1>
            {post.description && (
              <p className="post-description">{post.description}</p>
            )}
            
            <div className="post-meta">
              <time dateTime={post.date}>
                {format(new Date(post.date), 'yyyy年M月d日', { locale: zhCN })}
              </time>
              {post.author && <span className="post-author">作者: {post.author}</span>}
              {post.tags && (
                <div className="post-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>
          
          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />
        </article>
      </>
    );
  } catch {
    notFound();
  }
}