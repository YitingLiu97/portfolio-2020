'use client';

import { useState } from 'react';
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

export default function ClientHomePage({ posts }: ClientHomePageProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayDemo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      {/* Full-screen video hero - always visible */}
      <div className="hero-fullscreen-persistent">
        <div className="hero-video-container">
          {isVideoPlaying ? (
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/assets/Small-Reel.mp4" type="video/mp4" />
            </video>
          ) : (
            <div className="hero-placeholder" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              width: '100%',
              height: '100%'
            }} />
          )}
        </div>
        
        <div className="hero-content">
          <h1 className="hero-title">YITING LIU</h1>
          <p className="hero-subtitle">
            Award-winning Creative Technologist<br />
            XR • AI • Interactive Design
          </p>
          
          {!isVideoPlaying && (
            <button className="play-button" onClick={handlePlayDemo}>
              <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          )}
          
          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42z"/>
            </svg>
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>

      {/* Main content - scrollable below video */}
      <main className="main-content-scrollable">
        {/* About Section */}
        <section className="content-section section-centered animate-fade-in">
          <h2 className="section-title">Creating the Future</h2>
          <p className="section-subtitle">
            With a background in XR development and creative technology, I create 
            interactive experiences that blend art and technology. My work ranges 
            from VR mental health tools to AI-driven music video generation, always 
            focusing on meaningful and memorable experiences.
          </p>
        </section>

        {/* Featured Work */}
        <section className="content-section">
          <div className="section-centered">
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle">
              A showcase of award-winning projects in XR, AI, and interactive design
            </p>
          </div>

          <div className="work-grid">
            {posts.map((post, index) => (
              <Link 
                href={`/${post.id}`} 
                key={post.id}
                className="work-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="work-card-image">
                  {post.preview && (
                    <Image
                      src={post.preview}
                      alt={post.title}
                      width={400}
                      height={300}
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
                <div className="work-card-content">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <div className="work-meta">
                    <span>{new Date(post.date).getFullYear()}</span>
                    {post.tags && post.tags.length > 0 && (
                      <div className="work-tags">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="work-tag">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred form service
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Let's Create Something Amazing</h2>
        <p className="section-subtitle">
          Ready to bring your vision to life? Let's discuss your next project.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="company" className="form-label">Company (Optional)</label>
            <input
              type="text"
              id="company"
              name="company"
              className="form-input"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Project Details</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}