import Image from 'next/image';

export const metadata = {
  title: 'About | Yiting Liu',
  description: 'Learn more about Yiting Liu, an acclaimed XR Developer and Designer driving innovation in immersive tech.',
};

export default function AboutPage() {

  return (
    <div className="about-container">
      <div className="about-grid">
        <div className="about-left">
          <Image
            src="/profile_square.jpg"
            alt="Yiting Liu&apos;s about picture"
            width={400}
            height={400}
            className="about-image"
          />
        </div>
        
        <div className="about-right">
          <h1>About</h1>
          <p>
            Yiting Liu, an acclaimed XR Developer and Designer, is driving innovation in immersive tech with Fortune 500 clients like Accenture, Citibank, Disney, ESPN, and Comcast. Leading at Sia Partners, she expertly integrates XR with AI for multiplayer experiences. Her AR simulation project was notably featured in Unity, and she&apos;s a proud winner of the MIT Reality Hack 2022. Yiting&apos;s work has been highlighted at prestigious events such as the AIGA Conference and Games for Change, establishing her as a prominent figure in the field of immersive technology.
          </p>
          
          <h2>Speaking Engagements</h2>
          
          <h3>2024</h3>
          <ul>
            <li>
              <a 
                href="https://producersclubnynj.com/f/cathartic-queen?fbclid=PAZXh0bgNhZW0CMTEAAaa2FOcpz2TtysWgvTbEkxKscYUx5haD3XpU83K977G6EOBFydCSt7KZmTw_aem_mv2gRqtyPOn9SmeGKqhtQQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Interview for Producers Club NY NJ
              </a> - 2024 Oct
            </li>
            <li>
              XR Motion Podcast on Yiting&apos;s Career in XR{' '}
              <a 
                href="https://www.youtube.com/watch?v=lgeR_rfT2KY"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              /
              <a 
                href="https://open.spotify.com/episode/2YV393FBAPLIsXkukiMnBL?si=c3561ebff3804ee3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spotify
              </a> - 2024 Aug
            </li>
            <li>XR Motion - Greenpoint Film Festival - 2024 June</li>
            <li>Girls Inc. - Park East High Speaker Event - 2024 Mar</li>
          </ul>
          
          <h3>2023</h3>
          <ul>
            <li>AIGA 2023 Panel on Future of XR Design - 2023 Nov</li>
            <li>XR Guild - OG first speaking engagement - 2023 July</li>
          </ul>
          
          <div className="resume-download">
            <a href="/Yiting Liu Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="resume-button">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}