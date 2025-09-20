import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), '..', '_posts');

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

// Cache for processed posts
let postsCache: PostData[] | null = null;

function getAllPostFiles(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Posts directory not found:', postsDirectory);
      return [];
    }
    return fs.readdirSync(postsDirectory).filter((name) => name.endsWith('.md'));
  } catch (error) {
    console.warn('Error reading posts directory:', error);
    return [];
  }
}

async function processMarkdown(content: string): Promise<string> {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}

function createPostDataFromFile(fileName: string): PostData {
  const id = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Extract date from filename if not in frontmatter
    const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
    const fileDate = dateMatch ? dateMatch[1] : null;
    
    return {
      id,
      title: data.title || 'Untitled',
      date: data.date || fileDate || '2020-01-01',
      description: data.description || '',
      lang: data.lang || 'en',
      tags: data.tags || [],
      preview: data.preview || '/assets/default-preview.png',
      author: data.author || 'Yiting Liu',
      permalink: data.permalink || id,
    };
  } catch (error) {
    console.warn(`Error processing post ${fileName}:`, error);
    return {
      id,
      title: 'Error Loading Post',
      date: '2020-01-01',
      description: 'Could not load this post',
      lang: 'en',
      tags: [],
      preview: '/assets/default-preview.png',
      author: 'Yiting Liu',
      permalink: id,
    };
  }
}

export function getSortedPostsData(): PostData[] {
  if (postsCache) {
    return postsCache;
  }

  const fileNames = getAllPostFiles();
  const allPostsData = fileNames.map(createPostDataFromFile);

  // Sort posts by date
  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  postsCache = sortedPosts;
  return sortedPosts;
}

export function getPostsByLanguage(lang: string): PostData[] {
  const posts = getSortedPostsData();
  return posts.filter((post) => 
    post.lang === lang || (!post.lang && lang === 'en')
  );
}

export async function getPostData(id: string): Promise<PostData> {
  const posts = getSortedPostsData();
  const post = posts.find((p) => p.id === id || p.permalink === id);
  
  if (!post) {
    throw new Error(`Post not found: ${id}`);
  }

  // If content is already loaded, return it
  if (post.contentHtml) {
    return post;
  }

  // Load and process content
  try {
    const fullPath = path.join(postsDirectory, `${post.id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content } = matter(fileContents);
    const contentHtml = await processMarkdown(content);
    
    return {
      ...post,
      contentHtml,
    };
  } catch (error) {
    console.warn(`Error loading content for post ${id}:`, error);
    return {
      ...post,
      contentHtml: '<p>Content could not be loaded.</p>',
    };
  }
}

export function getPostsByTag(tag: string): PostData[] {
  const posts = getSortedPostsData();
  return posts.filter((post) => 
    post.tags && post.tags.includes(tag)
  );
}

export function getAllPostIds() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    params: {
      id: post.id,
    },
  }));
}