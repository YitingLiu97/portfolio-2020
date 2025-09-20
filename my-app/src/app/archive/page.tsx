import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/posts';
import { getTranslation } from '@/lib/translations';
import { format } from 'date-fns';

export const metadata = {
  title: 'Archive | Yiting Liu',
  description: 'Explore the complete archive of Yiting Liu\'s projects and creative works.',
};

export default function ArchivePage() {
  const posts = getSortedPostsData();
  const t = (key: string) => getTranslation(key, 'en');

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<number, typeof posts>);

  const years = Object.keys(postsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="archive-container">
      <header className="archive-header">
        <h1>Archive</h1>
        <p>{t('archive.welcome')}</p>
      </header>

      <div className="archive-content">
        <div className="archive-stats">
          <p>
            <strong>{posts.length}</strong> projects across{' '}
            <strong>{years.length}</strong> years
          </p>
        </div>

        {years.map((year) => (
          <section key={year} className="year-section">
            <h2 className="year-heading">{year}</h2>
            
            <div className="posts-list">
              {postsByYear[year].map((post) => (
                <article key={post.id} className="archive-post">
                  <Link href={`/${post.permalink || post.id}`}>
                    <div className="archive-post-content">
                      {post.preview && (
                        <div className="archive-post-image">
                          <Image
                            src={post.preview}
                            alt={post.title}
                            width={120}
                            height={80}
                            className="archive-thumbnail"
                          />
                        </div>
                      )}
                      
                      <div className="archive-post-info">
                        <h3 className="archive-post-title">{post.title}</h3>
                        {post.description && (
                          <p className="archive-post-description">
                            {post.description}
                          </p>
                        )}
                        
                        <div className="archive-post-meta">
                          <time dateTime={post.date}>
                            {format(new Date(post.date), 'MMM d, yyyy')}
                          </time>
                          
                          {post.tags && (
                            <div className="archive-post-tags">
                              {post.tags.map((tag) => (
                                <span key={tag} className="archive-tag">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}