import Link from 'next/link';
import Image from 'next/image';
import { getPostsByLanguage } from '@/lib/posts-fast';
import { getTranslation } from '@/lib/translations';

export default function Home() {
  const posts = getPostsByLanguage('en').slice(0, 6); // Limit to first 6 posts for faster loading
  const t = (key: string) => getTranslation(key, 'en');

  return (
    <div>
      <section className="hero-section">
        <div className="header-heading">
          <h2>{t('preview.tagline')}</h2>
          <p>{t('preview.intro')}</p>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="post-grid-parent">
          {posts.map((post) => (
            <article key={post.id} className="preview-panel">
              <Link href={`/${post.permalink || post.id}`}>
                {post.preview && (
                  <Image
                    src={post.preview}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="preview-image"
                  />
                )}
                <h3 className="post-title">{post.title}</h3>
                {post.description && (
                  <p className="post-description">{post.description}</p>
                )}
                <div className="post-meta">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
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
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
