// Simple in-memory posts data - no file system operations during runtime
export const postsData = [
  {
    id: "vibes-ai-music-video-generator-app",
    title: "Vibes: AI Music Video Generator App",
    date: "2023-08-01",
    description: "An AI-powered music video generator that creates stunning visuals synchronized to music using machine learning algorithms.",
    lang: "en",
    tags: ["AI", "Music", "Video", "Machine Learning"],
    preview: "/assets/vibes/demo.png",
    author: "Yiting Liu",
    permalink: "/vibes-ai-music-video-generator-app"
  },
  {
    id: "sixth-sense-ar-schizophrenia-simulation-app",
    title: "SixthSense: AR Schizophrenia Simulation App",
    date: "2022-07-11",
    description: "An AR application that simulates the experience of schizophrenia to build empathy and understanding.",
    lang: "en",
    tags: ["AR", "Mental Health", "Unity", "Simulation"],
    preview: "/assets/sixthsense/demo.png",
    author: "Yiting Liu",
    permalink: "/sixth-sense-ar-schizophrenia-simulation-app"
  },
  {
    id: "lifelines-mit-reality-hackathon-ar-therapy-tool",
    title: "Lifelines: MIT Reality Hackathon AR Therapy Tool",
    date: "2022-03-25",
    description: "Winner of MIT Reality Hack 2022 - An AR therapy tool for mental health support.",
    lang: "en",
    tags: ["AR", "Mental Health", "Hackathon", "Therapy"],
    preview: "/assets/lifelines/demo.png",
    author: "Yiting Liu",
    permalink: "/lifelines-mit-reality-hackathon-ar-therapy-tool"
  },
  // Add more posts as needed - this is just a sample for faster loading
];

export interface PostData {
  id: string;
  title: string;
  date: string;
  description?: string;
  lang?: string;
  tags?: string[];
  preview?: string;
  author?: string;
  permalink?: string;
  contentHtml?: string;
}

export function getSortedPostsData(): PostData[] {
  return postsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostsByLanguage(lang: string): PostData[] {
  return postsData.filter(post => 
    post.lang === lang || (!post.lang && lang === 'en')
  );
}

export async function getPostData(id: string): Promise<PostData> {
  const post = postsData.find(p => p.id === id);
  if (!post) {
    throw new Error(`Post not found: ${id}`);
  }
  
  return {
    ...post,
    contentHtml: `<h1>${post.title}</h1><p>${post.description}</p><p>Content loading...</p>`
  };
}

export function getPostsByTag(tag: string): PostData[] {
  return postsData.filter(post => 
    post.tags && post.tags.includes(tag)
  );
}

export function getAllPostIds() {
  return postsData.map((post) => ({
    params: {
      id: post.id,
    },
  }));
}