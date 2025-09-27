'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header visible">
      <div className="header-container">
        <Link href="/" className="site-logo">
          Yiting Liu
        </Link>
        
        <nav className="main-navigation">
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/archive">Work</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}