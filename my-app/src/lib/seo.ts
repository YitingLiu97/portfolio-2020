const DEFAULT_SITE_URL = 'https://www.yitingliu.com';

/**
 * Canonical site URL used across SEO helpers.
 * Trailing slashes are removed to keep URL joins predictable.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');

export const DEFAULT_OG_IMAGE = '/profile_square.jpg';
export const DEFAULT_PUBLISHER_LOGO = '/yiting-white-logo.png';

/**
 * Convert a relative path (e.g. `/about` or `images/hero.jpg`) into an absolute URL
 * using the configured site origin. Absolute URLs are returned untouched.
 */
export function absoluteUrl(value?: string | null): string | undefined {
  if (!value) {
    return undefined;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  const normalized = value.startsWith('/') ? value : `/${value}`;
  return `${SITE_URL}${normalized}`;
}

/**
 * Build the canonical URL for a page based on its front-matter permalink or slug.
 */
export function buildCanonicalUrl(permalink: string | undefined | null, slug: string): string {
  const baseValue = permalink && permalink.trim().length > 0 ? permalink : slug;

  if (/^https?:\/\//i.test(baseValue)) {
    return baseValue;
  }

  return absoluteUrl(baseValue) ?? `${SITE_URL}/${slug.replace(/^\/+/, '')}`;
}

/**
 * Safely convert a date string into ISO 8601 format. Returns undefined if parsing fails.
 */
export function safeDateIso(input?: string | Date | null): string | undefined {
  if (!input) {
    return undefined;
  }

  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return date.toISOString();
}
