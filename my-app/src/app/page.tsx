import ClientHomePageHumaan from './ClientHomePageHumaan';
import { getPostsByLanguage } from '@/lib/posts-fast';

// Static posts data for now - can be replaced with dynamic loading later
const mockPosts = [
  {
    id: 'vibes-ai-music-video-generator-app',
    title: 'Vibes: Music Video Generation',
    description: 'AI-powered music video creation with real-time generation',
    date: '2023-08-01',
    preview: '/vibes/demo.png',
    tags: ['AI', 'Music', 'Video Generation']
  },
  {
    id: 'sixth-sense-ar-schizophrenia-simulation-app',
    title: 'SixthSense: Spatial Computing',
    description: 'AR interface for spatial interaction and gesture recognition',
    date: '2022-07-11',
    preview: '/sixthsense/demo.png',
    tags: ['AR', 'Spatial Computing', 'Gestures']
  },
  {
    id: 'acceture-innovation-hives-new-york',
    title: 'ACE Hives: Innovation Network',
    description: 'Interactive installation for collaborative innovation spaces',
    date: '2022-02-01',
    preview: '/ace-hives/demo.jpg',
    tags: ['Installation', 'Collaboration', 'Innovation']
  },
  {
    id: 'mit-reality-hackathon-ar-therapy-tool-lifelines',
    title: 'Lifelines: Data Visualization',
    description: 'Personal data storytelling through interactive visualization',
    date: '2022-03-25',
    preview: '/lifelines/demo.jpg',
    tags: ['Data Viz', 'Personal', 'Interactive']
  },
  {
    id: 'vr-dear-nobody',
    title: 'Dear Nobody: Mental Health VR',
    description: 'VR experience for mental health support and therapy',
    date: '2021-04-20',
    preview: '/dear-nobody/demo.png',
    tags: ['VR', 'Mental Health', 'Therapy']
  },
  {
    id: 'amnh-spatial-audio-museum-app',
    title: 'AMNH Spatial Audio App',
    description: 'Museum audio guide with spatial sound technology',
    date: '2021-04-10',
    preview: '/spatial-sound/demo.JPG',
    tags: ['Spatial Audio', 'Museum', 'App']
  }
];

export default function HomePage() {
  // Get English posts only - filter out Chinese translations
  const englishPosts = getPostsByLanguage('en').filter(post => !post.id.includes('/zh/'));
  
  // Use real posts, fallback to mock data if none found
  const postsToShow = englishPosts.length > 0 ? englishPosts : mockPosts;
  
  return <ClientHomePageHumaan posts={postsToShow} />;
}
