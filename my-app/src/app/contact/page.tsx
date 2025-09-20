export const metadata = {
  title: 'Contact | Yiting Liu',
  description: 'Get in touch with Yiting Liu for XR development and creative technology projects.',
};

export default function ContactPage() {

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      
      <div className="contact-content">
        <p>
          Ready to create something amazing together? Let&apos;s connect and bring your vision to life through immersive technology.
        </p>
        
        <div className="contact-methods">
          <div className="contact-method">
            <h3>Email</h3>
            <a href="mailto:yiting@yitingliu.com">yiting@yitingliu.com</a>
          </div>
          
          <div className="contact-method">
            <h3>Social Media</h3>
            <ul className="social-links">
              <li>
                <a 
                  href="https://www.linkedin.com/in/yitingliu97"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Yitingliu97"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/yitingintech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://soundcloud.com/yitingliu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SoundCloud
                </a>
              </li>
            </ul>
          </div>
          
          <div className="contact-method">
            <h3>Collaboration</h3>
            <p>
              I&apos;m always interested in discussing:
            </p>
            <ul>
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