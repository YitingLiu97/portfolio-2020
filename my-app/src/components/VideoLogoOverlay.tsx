'use client';

import { useEffect } from 'react';

interface VideoLogoOverlayProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  logoSrc?: string;
  logoAlt?: string;
}

export default function VideoLogoOverlay({ 
  position = 'top-left',
  logoSrc = '/logo_yiting.png',
  logoAlt = 'Yiting Liu'
}: VideoLogoOverlayProps) {
  
  useEffect(() => {
    const addLogoToFirstVideo = () => {
      // Find the first iframe in the post content (main demo video)
      const firstIframe = document.querySelector('.post-content iframe[src*="vimeo.com"], .post-content iframe[src*="youtube.com"]');
      
      if (!firstIframe) return;
      
      const parent = firstIframe.parentElement;
      if (!parent || parent.querySelector('.video-logo-overlay')) return;
      
      // Ensure parent is positioned relative
      if (getComputedStyle(parent).position === 'static') {
        parent.style.position = 'relative';
      }
      
      // Create logo overlay element
      const overlay = document.createElement('div');
      overlay.className = `video-logo-overlay ${position}`;
      overlay.style.cssText = `
        position: absolute;
        ${position.includes('top') ? 'top: 24px' : 'bottom: 24px'};
        ${position.includes('left') ? 'left: 24px' : 'right: 24px'};
        z-index: 10;
        pointer-events: none;
        opacity: 0.9;
        transition: opacity 0.3s ease;
      `;
      
      const logo = document.createElement('img');
      logo.src = logoSrc;
      logo.alt = logoAlt;
      logo.style.cssText = `
        height: 32px;
        width: auto;
        filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
      `;
      
      overlay.appendChild(logo);
      parent.appendChild(overlay);
      
      // Add hover effect to fade logo
      parent.addEventListener('mouseenter', () => {
        overlay.style.opacity = '0.6';
      });
      
      parent.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0.9';
      });
    };

    // Wait for content to load then add logo
    const timer = setTimeout(addLogoToFirstVideo, 500);
    
    return () => clearTimeout(timer);
  }, [position, logoSrc, logoAlt]);

  return null;
}