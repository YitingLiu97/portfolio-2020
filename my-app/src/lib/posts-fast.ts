import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');
const publicDirectory = path.join(process.cwd(), 'public');

// Helper function to find demo file (gif or png) in project folder
function findDemoFile(projectPath: string): string | null {
  try {
    const fullPath = path.join(publicDirectory, projectPath);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    // Check for demo.gif first, then demo.png
    const demoGif = path.join(fullPath, 'demo.gif');
    const demoPng = path.join(fullPath, 'demo.png');
    
    if (fs.existsSync(demoGif)) {
      return `/${projectPath}/demo.gif`;
    } else if (fs.existsSync(demoPng)) {
      return `/${projectPath}/demo.png`;
    }
    
    return null;
  } catch (error) {
    console.warn(`Error checking for demo file in ${projectPath}:`, error);
    return null;
  }
}

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
  const fileId = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Extract date from filename if not in frontmatter
    const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
    const fileDate = dateMatch ? dateMatch[1] : null;
    
    // Use permalink as ID if available, otherwise use filename
    const postId = data.permalink?.replace(/^\//, '') || fileId;
    
    // Fix preview path to work with Next.js public folder
    let previewPath = data.preview || 'default-preview.png';
    
    // Remove /assets/ prefix if it exists
    previewPath = previewPath.replace(/^\/assets\//, '');
    
    // If preview doesn't specify a full path, try to auto-detect demo file
    if (previewPath && !previewPath.includes('.') && !previewPath.startsWith('http')) {
      // Try to find demo.gif or demo.png in the project folder
      const autoDetectedDemo = findDemoFile(previewPath);
      if (autoDetectedDemo) {
        previewPath = autoDetectedDemo;
      }
    } else if (previewPath && previewPath.includes('/demo.')) {
      // Handle cases like "vibes/demo.png" - check if the specified file exists, if not try the other format
      const projectFolder = previewPath.split('/')[0];
      const fullPath = path.join(publicDirectory, previewPath);
      
      if (!fs.existsSync(fullPath)) {
        // File doesn't exist, try to auto-detect the correct demo file
        const autoDetectedDemo = findDemoFile(projectFolder);
        if (autoDetectedDemo) {
          previewPath = autoDetectedDemo;
        }
      } else {
        // File exists, just ensure it has the leading slash
        if (!previewPath.startsWith('/')) {
          previewPath = '/' + previewPath;
        }
      }
    } else {
      // Ensure it starts with / for Next.js public folder
      if (!previewPath.startsWith('/') && !previewPath.startsWith('http')) {
        previewPath = '/' + previewPath;
      }
    }

    return {
      id: postId,
      title: data.title || 'Untitled',
      date: data.date || fileDate || '2020-01-01',
      description: data.description || '',
      lang: data.lang || 'en',
      tags: data.tags || [],
      preview: previewPath,
      author: data.author || 'Yiting Liu',
      permalink: data.permalink || fileId,
    };
  } catch (error) {
    console.warn(`Error processing post ${fileName}:`, error);
    return {
      id: fileId,
      title: 'Error Loading Post',
      date: '2020-01-01',
      description: 'Could not load this post',
      lang: 'en',
      tags: [],
      preview: 'default-preview.png',
      author: 'Yiting Liu',
      permalink: fileId,
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
    
    // First, try to find by permalink match
    for (const fileName of fileNames) {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      
      // Check if permalink matches (with or without leading slash)
      const permalink = data.permalink?.replace(/^\//, '') || '';
      if (permalink === id || permalink === id.replace(/^\//, '')) {
        targetFile = fileName;
        break;
      }
      
      // Also check if the file ID matches
      const fileId = fileName.replace(/\.md$/, '');
      if (fileId === id || fileId.includes(id)) {
        targetFile = fileName;
        break;
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
    // Replace assets/ with direct paths (no /assets/ prefix)
    processedContent = processedContent.replace(
      /!\[([^\]]*)\]\(assets\//g, 
      '![$1]('
    );
    
    // Replace HTML img tags with assets/ 
    processedContent = processedContent.replace(
      /<img([^>]*)\s+src=['"]assets\//g,
      '<img$1 src="'
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
    
    // Fix preview path to work with Next.js public folder
    let previewPath = data.preview || 'default-preview.png';
    
    // Remove /assets/ prefix if it exists
    previewPath = previewPath.replace(/^\/assets\//, '');
    
    // If preview doesn't specify a full path, try to auto-detect demo file
    if (previewPath && !previewPath.includes('.') && !previewPath.startsWith('http')) {
      // Try to find demo.gif or demo.png in the project folder
      const autoDetectedDemo = findDemoFile(previewPath);
      if (autoDetectedDemo) {
        previewPath = autoDetectedDemo;
      }
    } else if (previewPath && previewPath.includes('/demo.')) {
      // Handle cases like "vibes/demo.png" - check if the specified file exists, if not try the other format
      const projectFolder = previewPath.split('/')[0];
      const fullPath = path.join(publicDirectory, previewPath);
      
      if (!fs.existsSync(fullPath)) {
        // File doesn't exist, try to auto-detect the correct demo file
        const autoDetectedDemo = findDemoFile(projectFolder);
        if (autoDetectedDemo) {
          previewPath = autoDetectedDemo;
        }
      } else {
        // File exists, just ensure it has the leading slash
        if (!previewPath.startsWith('/')) {
          previewPath = '/' + previewPath;
        }
      }
    } else {
      // Ensure it starts with / for Next.js public folder
      if (!previewPath.startsWith('/') && !previewPath.startsWith('http')) {
        previewPath = '/' + previewPath;
      }
    }
    
    return {
      id: fileId,
      title: data.title || 'Untitled',
      date: data.date || fileDate || '2020-01-01',
      description: data.description || '',
      lang: data.lang || 'en',
      tags: data.tags || [],
      preview: previewPath,
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
      preview: 'default-preview.png',
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