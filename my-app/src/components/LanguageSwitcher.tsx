'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LanguageSwitcherProps {
  currentLang?: string;
}

export default function LanguageSwitcher({ currentLang = 'en' }: LanguageSwitcherProps) {
  const pathname = usePathname();
  
  // Generate the alternate language URL
  const getAlternateUrl = (targetLang: string) => {
    if (targetLang === 'en') {
      // Remove /zh prefix for English
      return pathname.replace(/^\/zh/, '') || '/';
    } else {
      // Add /zh prefix for Chinese
      const cleanPath = pathname.replace(/^\/zh/, '');
      return `/zh${cleanPath === '/' ? '' : cleanPath}`;
    }
  };

  return (
    <div className="language-switcher">
      <Link 
        href={getAlternateUrl('en')}
        className={currentLang === 'en' ? 'active' : ''}
      >
        EN
      </Link>
      <Link 
        href={getAlternateUrl('zh')}
        className={currentLang === 'zh' ? 'active' : ''}
      >
        中文
      </Link>
    </div>
  );
}