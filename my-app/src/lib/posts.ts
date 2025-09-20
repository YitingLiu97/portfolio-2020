import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

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
  contentHtml: string;
}

// Cache for processed posts to avoid re-reading files
let postsCache: PostData[] | null = null;
const postContentCache: Map<string, string> = new Map();

export function getSortedPostsData(): PostData[] {
  // Return cached result if available
  if (postsCache) {
    return postsCache;
  }

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.markdown'))
    .map((fileName) => {
      // Remove file extension to get id
      const id = fileName.replace(/\.(md|markdown)$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
        contentHtml: '', // We'll process this when needed
      } as PostData;
    });

  // Sort posts by date and cache the result
  postsCache = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return postsCache;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  // Check content cache first
  if (postContentCache.has(id)) {
    const cachedContent = postContentCache.get(id)!;
    const posts = getSortedPostsData();
    const post = posts.find(p => p.id === id);
    if (post) {
      return { ...post, contentHtml: cachedContent };
    }
  }

  // Try both .md and .markdown extensions
  let fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(postsDirectory, `${id}.markdown`);
  }

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${id}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Cache the processed content
  postContentCache.set(id, contentHtml);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as PostData;
}

export function getPostsByTag(tag: string): PostData[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => 
    post.tags && post.tags.includes(tag)
  );
}

export function getPostsByLanguage(lang: string): PostData[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter(post => 
    post.lang === lang || (!post.lang && lang === 'en')
  );
}