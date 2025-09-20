'use client';

import Link from 'next/link';
import { getTranslation } from '@/lib/translations';

interface HeaderProps {
  lang?: string;
}

export default function Header({ lang = 'en' }: HeaderProps) {
  const isZh = lang === 'zh';
  
  const t = (key: string) => getTranslation(key, lang);

  return (
    <header>
      <div className="site-header">
        <h1>{t('site.title')}</h1>
        <p>{t('site.description')}</p>
      </div>
      
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link href={isZh ? '/zh/' : '/'}>
              {t('nav.work')}
            </Link>
          </li>
          <li className="nav-item">
            <Link href={isZh ? '/zh/about' : '/about'}>
              {t('nav.about')}
            </Link>
          </li>
          <li className="nav-item">
            <Link href={isZh ? '/zh/contact' : '/contact'}>
              {t('nav.contact')}
            </Link>
          </li>
          <li className="nav-item">
            <Link href={isZh ? '/zh/archive' : '/archive'}>
              {t('nav.archive')}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}