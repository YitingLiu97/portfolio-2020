import Link from 'next/link';
import Image from 'next/image';
import { getPostsByLanguage } from '@/lib/posts-fast';
import { getTranslation } from '@/lib/translations';

export default function Home() {
  const posts = getPostsByLanguage('en').slice(0, 6); // Limit to first 6 posts for faster loading
  const t = (key: string) => getTranslation(key, 'en');

  return (
    <div>
      <section className="hero-section animate-fade-in">
        <div className="header-heading">
          <h2 className="title-large">FUTURE.<br />TECHNOLOGY.</h2>
          <p>Award-winning immersive experiences, interactive design & emerging technology solutions.</p>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="demo-video-section animate-fade-in">
        <div className="demo-video-title">
          <h3 className="animate-float">EXPERIENCE THE FUTURE</h3>
          <p>A showcase of cutting-edge interactive experiences and immersive technologies</p>
        </div>
        <div className="demo-video-container animate-glow">
          <video 
            className="demo-video" 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/assets/demo-poster.jpg"
          >
            <source src="/assets/Small-Reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="portfolio-section animate-fade-in">
        <h2>SELECTED WORK</h2>
        <div className="post-grid-parent">
          {posts.map((post, index) => (
            <article key={post.id} className="preview-panel" style={{animationDelay: `${index * 0.1}s`}}>
              <Link href={`/${post.permalink || post.id}`}>
                {post.preview && (
                  <Image
                    src={post.preview}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="preview-image"
                  />
                )}
                <div className="preview-panel-content">
                  <h3>{post.title}</h3>
                  {post.description && (
                    <p>{post.description}</p>
                  )}
                  <div className="post-meta">
                    <time dateTime={post.date}>
                      {new Date(post.date).getFullYear()}
                    </time>
                    {post.tags && (
                      <div className="post-tags">
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
    </div>
  );
}
