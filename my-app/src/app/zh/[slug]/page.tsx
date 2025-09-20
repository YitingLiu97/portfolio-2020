import { notFound } from 'next/navigation';
import { getPostData, PostData } from '@/lib/posts-fast';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import Header from '@/components/Header';
import LanguageSwitcher from '@/components/LanguageSwitcher';

interface ZhPostPageProps {
  params: Promise<{ slug: string }>;
}

// Dynamic routing - no static generation for faster builds

export async function generateMetadata({ params }: ZhPostPageProps) {
  const { slug } = await params;
  
  try {
    const post = await getPostData(slug);
    
    return {
      title: `${post.title} | 刘伊婷`,
      description: post.description || post.title,
      openGraph: {
        title: post.title,
        description: post.description || post.title,
        images: post.preview ? [{ url: post.preview }] : [],
      },
    };
  } catch {
    return {
      title: '未找到文章',
    };
  }
}

export default async function ZhPostPage({ params }: ZhPostPageProps) {
  const { slug } = await params;
  
  try {
    const post = await getPostData(slug);
    
    return (
      <>
        <LanguageSwitcher currentLang="zh" />
        <Header lang="zh" />
        
        <article className="post-article">
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