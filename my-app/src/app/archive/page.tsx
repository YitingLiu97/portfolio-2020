import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData } from '@/lib/posts-fast';
import { format } from 'date-fns';

export const metadata = {
  title: 'Work | Yiting Liu',
  description: 'Explore the complete archive of Yiting Liu\'s projects and creative works.',
};

export default function ArchivePage() {
  const allPosts = getSortedPostsData();
  
  // Filter for English posts only - exclude Chinese translations
  const posts = allPosts.filter(post => 
    !post.id.includes('-zh') && 
    !post.permalink?.includes('/zh/')
  );

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
    <div className="work-container">
      <header className="work-header">
        <h1 className="work-title">Selected Work</h1>
        <p className="work-description">
          A collection of creative projects spanning interactive media, UX design, and digital experiences.
        </p>
      </header>

      <div className="work-content">
        <div className="work-stats">
          <p>
            <strong>{posts.length}</strong> projects across{' '}
            <strong>{years.length}</strong> years
          </p>
        </div>

        {years.map((year) => (
          <section key={year} className="year-section">
            <h2 className="year-heading">{year}</h2>
            
            <div className="projects-grid">
              {postsByYear[year].map((post) => (
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
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="tag">
                                {tag}
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
          </section>
        ))}
      </div>
    </div>
  );
}