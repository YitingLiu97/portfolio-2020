import { notFound } from 'next/navigation';
import { getPostData, getSortedPostsData, PostData } from '@/lib/posts-fast';
import { format } from 'date-fns';
import VideoLogoOverlay from '@/components/VideoLogoOverlay';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic routing - no static generation for faster builds

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params;
  
  try {
    const post = await getPostData(slug);
    
    return {
      title: `${post.title} | Yiting Liu`,
      description: post.description || post.title,
      openGraph: {
        title: post.title,
        description: post.description || post.title,
        images: post.preview ? [{ url: post.preview }] : [],
      },
    };
  } catch {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  
  try {
    // Only load English posts - skip Chinese translations
    const post = await getPostData(slug);
    
    // Skip Chinese translations (they have /zh/ in their permalink)
    if (post.permalink?.includes('/zh/')) {
      notFound();
    }
    
    return (
      <article className="post-article">
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
                    <span key={tag} className="tag">
                      {tag}
                    </span>
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
        
        <VideoLogoOverlay position="top-left" />
      </article>
    );
  } catch {
    notFound();
  }
}