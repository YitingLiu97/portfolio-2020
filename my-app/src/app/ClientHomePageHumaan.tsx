'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PostData {
  id: string;
  title: string;
  description?: string;
  date: string;
  preview?: string;
  tags?: string[];
}

interface ClientHomePageProps {
  posts: PostData[];
}

export default function ClientHomePageHumaan({ posts }: ClientHomePageProps) {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Get all unique tags from posts
  const allTags = ['All'];
  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        if (!allTags.includes(tag)) {
          allTags.push(tag);
        }
      });
    }
  });

  useEffect(() => {
    if (selectedTag === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.tags?.includes(selectedTag)));
    }
  }, [selectedTag, posts]);

  // Video management effects
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      setVideoError(false);
    };

    const handleError = () => {
      setVideoError(true);
      setVideoLoaded(false);
    };

    const handleCanPlayThrough = () => {
      // Ensure video starts playing when it's ready
      video.play().catch(err => {
        console.warn('Video autoplay failed:', err);
      });
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('canplaythrough', handleCanPlayThrough);

    // Preload the video
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  // Re-initialize video when component mounts (for navigation back)
  useEffect(() => {
    const video = videoRef.current;
    if (video && videoLoaded) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(err => {
          console.warn('Video restart failed:', err);
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [videoLoaded]);

  return (
    <>
      {/* Minimal Hero Section with Video */}
      <section className="humaan-hero">
        <div className="hero-video-container">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="" // We'll skip poster for now since video loads quickly
            style={{ 
              opacity: videoLoaded ? 1 : 0, 
              transition: 'opacity 0.5s ease-in-out' 
            }}
          >
            <source src="/Small-Reel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Loading state */}
          {!videoLoaded && !videoError && (
            <div className="video-loading-state">
              <div className="loading-spinner"></div>
              <p>Loading video...</p>
            </div>
          )}
          
          {/* Error state */}
          {videoError && (
            <div className="video-error-state">
              <div className="error-placeholder">
                <Image
                  src="/yiting-white-logo.png"
                  alt="Yiting Liu"
                  width={200}
                  height={60}
                  className="fallback-logo"
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="hero-overlay">
          <div className="hero-content-minimal">
            <div className="hero-logo-center">
              <Image
                src="/yiting-white-logo.png"
                alt="Yiting Liu"
                width={400}
                height={120}
                className="hero-main-logo"
                priority
              />
            </div>
            <p className="hero-subtitle-minimal">
              Award-winning Creative Technologist specializing in XR, AI, and Interactive Design
            </p>
          </div>
          
          <div className="scroll-indicator-minimal">
            {/* <div className="scroll-line">
              <p>scroll down</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="humaan-main">
        {/* Brief Introduction */}
        <section className="intro-section">
          <div className="container">
            <div className="intro-content">
              <h2>Creating meaningful digital experiences that blend art and technology</h2>
              <p>
                With expertise in XR development and creative technology, I craft 
                interactive experiences for Fortune 500 clients including Accenture, 
                Disney, ESPN, and Citibank. From VR mental health tools to AI-driven 
                music video generation, every project focuses on meaningful impact.
              </p>
            </div>
          </div>
        </section>

        {/* Work Section with Humaan-style Layout */}
        <section className="work-section-humaan">
          <div className="container">
            {/* Tag Filter */}
            <div className="tag-filter-humaan">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`tag-button-humaan ${selectedTag === tag ? 'active' : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Masonry Grid - Humaan Style */}
            <div className="masonry-grid-humaan">
              {filteredPosts.map((post, index) => (
                <Link 
                  href={`/${post.id}`} 
                  key={post.id}
                  className={`project-card-humaan ${
                    index === 0 ? 'large' : 
                    index === 1 || index === 2 ? 'small' :
                    index === 3 ? 'large' :
                    'small'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--index': index 
                  } as React.CSSProperties}
                >
                  <div className="project-image-container">
                    {post.preview && (
                      <Image
                        src={post.preview}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="project-image"
                      />
                    )}
                    <div className="project-overlay">
                      <div className="project-info">
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <div className="project-year">
                          {new Date(post.date).getFullYear()}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section-humaan">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <h2>Driving innovation in immersive technology</h2>
                <p>
                  Creating the future of AI-generated music visuals with Vibes — real-time, reactive, and built for creators.
                  Winner of MIT Reality Hack 2022, with 
                  work featured at Unity, AIGA Conference, MIT Reality Hack, and Games for Change.
                </p>
                <Link href="/about" className="btn-minimal">
                  Learn more about me
                </Link>
              </div>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Fortune 500 Clients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta-humaan">
          <div className="container">
            <h2>Let's create something extraordinary</h2>
            <p>Ready to bring your vision to life with cutting-edge technology?</p>
            <Link href="/contact" className="btn-cta">
              Start a project
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}