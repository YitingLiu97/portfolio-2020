import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

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
  const processedContent = await remark()
    .use(remarkGfm) // Enable GitHub Flavored Markdown (tables, strikethrough, etc.)
    .use(html, { sanitize: false }) // Allow HTML in markdown (for iframes, divs, etc.)
    .process(content);
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
  // Load and process content directly from file system
  try {
    // Try to find the file by checking different patterns
    const fileNames = getAllPostFiles();
    let targetFile: string | null = null;
    
    // First, try to find by exact ID match
    targetFile = fileNames.find(fileName => {
      const fileId = fileName.replace(/\.md$/, '');
      return fileId === id || fileId.includes(id);
    }) || null;
    
    // If not found, try to find by permalink match
    if (!targetFile) {
      for (const fileName of fileNames) {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        if (data.permalink === id) {
          targetFile = fileName;
          break;
        }
      }
    }
    
    if (!targetFile) {
      throw new Error(`Post file not found for: ${id}`);
    }

    const fullPath = path.join(postsDirectory, targetFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Process markdown content with proper image path fixing
    let processedContent = content;
    
    // Fix image paths to work with Next.js public folder
    // Replace assets/ with /assets/
    processedContent = processedContent.replace(
      /!\[([^\]]*)\]\(assets\//g, 
      '![' + '$1' + '](/assets/'
    );
    
    // Replace HTML img tags with assets/ 
    processedContent = processedContent.replace(
      /<img([^>]*)\s+src=['"]assets\//g,
      '<img$1 src="/assets/'
    );
    
    // Fix relative paths in markdown images (but not http/https or already absolute paths)
    processedContent = processedContent.replace(
      /!\[([^\]]*)\]\((?!http|\/|#)/g,
      '![' + '$1' + '](/'
    );
    
    // Fix relative paths in HTML img tags
    processedContent = processedContent.replace(
      /<img([^>]*)\s+src=['"](?!http|\/|#)/g,
      '<img$1 src="/'
    );
    
    const contentHtml = await processMarkdown(processedContent);
    
    // Extract date from filename if not in frontmatter
    const dateMatch = targetFile.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
    const fileDate = dateMatch ? dateMatch[1] : null;
    const fileId = targetFile.replace(/\.md$/, '');
    
    return {
      id: fileId,
      title: data.title || 'Untitled',
      date: data.date || fileDate || '2020-01-01',
      description: data.description || '',
      lang: data.lang || 'en',
      tags: data.tags || [],
      preview: data.preview || '/assets/default-preview.png',
      author: data.author || 'Yiting Liu',
      permalink: data.permalink || fileId,
      contentHtml,
    };
  } catch (error) {
    console.warn(`Error loading content for post ${id}:`, error);
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