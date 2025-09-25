'use client';

// export const metadata = {
//   title: 'Contact | Yiting Liu',
//   description: 'Get in touch with Yiting Liu for XR development and creative technology projects.',
// };

export default function ContactPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Here you can integrate with your preferred form service like Formspree, Netlify Forms, etc.
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };
    
    console.log('Form submission:', data);
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">Let&apos;s Connect</h1>
        <p className="contact-description">
          Ready to create something amazing together? Let&apos;s connect and bring your vision to life through immersive technology.
        </p>
      </div>
      
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-section">
          <h2>Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="form-input form-textarea"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Methods */}
        <div className="contact-methods">
          <div className="contact-method">
            <h3>Direct Contact</h3>
            <div className="contact-info">
              <a href="mailto:yiting@yitingliu.com" className="contact-email">
                yiting@yitingliu.com
              </a>
              <p>I typically respond within 24 hours</p>
            </div>
          </div>
          
          <div className="contact-method">
            <h3>Social Media</h3>
            <ul className="social-links-page">
              <li>
                <a 
                  href="https://www.linkedin.com/in/yitingliu97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Yitingliu97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/yitingintech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://soundcloud.com/yitingliu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-item"
                >
                  SoundCloud
                </a>
              </li>
            </ul>
          </div>
          
          <div className="contact-method">
            <h3>Let&apos;s Collaborate On</h3>
            <ul className="collaboration-list">
              <li>XR/AR/VR Development Projects</li>
              <li>Creative Technology Consulting</li>
              <li>Speaking Opportunities</li>
              <li>Mentorship and Educational Programs</li>
              <li>Innovative Tech Collaborations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}