import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/posts-fast';
import { format } from 'date-fns';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: TagPageProps) {
  const { tag } = await params;
  const displayTag = decodeURIComponent(tag).replace(/-/g, ' ');
  
  return {
    title: `${displayTag} Projects | Yiting Liu`,
    description: `Explore projects tagged with ${displayTag} by Yiting Liu.`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const displayTag = decodeURIComponent(tag).replace(/-/g, ' ');
  
  const allPosts = getSortedPostsData();
  
  // Filter posts by tag (case insensitive matching)
  const postsWithTag = allPosts.filter(post => 
    post.tags?.some(postTag => 
      postTag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === tag.toLowerCase()
    ) && !post.id.includes('-zh') && !post.permalink?.includes('/zh/')
  );

  if (postsWithTag.length === 0) {
    notFound();
  }

  return (
    <div className="tag-page-container">
      <header className="tag-page-header">
        <h1 className="tag-page-title">
          Projects tagged with <span className="tag-highlight">{displayTag}</span>
        </h1>
        <p className="tag-page-description">
          {postsWithTag.length} project{postsWithTag.length !== 1 ? 's' : ''} found
        </p>
      </header>

      <div className="tag-page-content">
        <div className="projects-grid">
          {postsWithTag.map((post) => (
            <article key={post.id} className="project-card">
              <Link href={`/${post.id}`} className="project-link">
                {post.preview && (
                  <div className="project-image">
                    <Image
                      src={post.preview}
                      alt={post.title}
                      width={400}
                      height={240}
                      className="project-thumbnail"
                    />
                  </div>
                )}
                
                <div className="project-content">
                  <h3 className="project-title">{post.title}</h3>
                  {post.description && (
                    <p className="project-description">
                      {post.description}
                    </p>
                  )}
                  
                  <div className="project-meta">
                    <time dateTime={post.date} className="project-date">
                      {format(new Date(post.date), 'MMM yyyy')}
                    </time>
                    
                    {post.tags && (
                      <div className="project-tags">
                        {post.tags.slice(0, 3).map((tagName) => (
                          <span key={tagName} className="tag">
                            {tagName}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        <div className="back-to-work">
          <Link href="/archive" className="btn btn-secondary">
            ← Back to All Work
          </Link>
        </div>
      </div>
    </div>
  );
}