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
    const addLogoToElement = (element: HTMLElement) => {
      // Ensure element is positioned relative
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative';
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
        background: rgba(0, 0, 0, 0.2);
        padding: 8px;
        border-radius: 8px;
        backdrop-filter: blur(4px);
      `;
      
      const logo = document.createElement('img');
      logo.src = logoSrc;
      logo.alt = logoAlt;
      logo.style.cssText = `
        height: 32px;
        width: auto;
        filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
      `;
      
      // Handle image load error
      logo.onerror = () => {
        console.log('Logo image failed to load, trying alternative path');
        logo.src = '/assets/logo_yiting.png'; // Try alternative path
      };
      
      logo.onload = () => {
        console.log('Logo image loaded successfully');
      };
      
      overlay.appendChild(logo);
      element.appendChild(overlay);
      
      console.log('Logo overlay added successfully');
      
      // Add hover effect to fade logo
      element.addEventListener('mouseenter', () => {
        overlay.style.opacity = '0.6';
      });
      
      element.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0.9';
      });
    };

    const addLogoToFirstVideo = () => {
      console.log('Searching for first video...');
      
      // Find the first iframe container (this wraps the video iframes)
      const firstIframeContainer = document.querySelector('.post-content .iframe-container');
      
      if (!firstIframeContainer) {
        console.log('No iframe container found');
        // Fallback: try to find iframe directly
        const firstIframe = document.querySelector('.post-content iframe[src*="vimeo"], .post-content iframe[src*="youtube"]');
        if (!firstIframe) {
          console.log('No video iframe found at all');
          return;
        }
        
        // Use iframe parent as container
        const parent = firstIframe.parentElement;
        if (!parent) {
          console.log('No parent element found for iframe');
          return;
        }
        
        if (parent.querySelector('.video-logo-overlay')) {
          console.log('Logo overlay already exists on iframe parent');
          return;
        }
        
        addLogoToElement(parent);
        return;
      }
      
      if (firstIframeContainer.querySelector('.video-logo-overlay')) {
        console.log('Logo overlay already exists on iframe container');
        return;
      }
      
      console.log('Found iframe container, adding logo overlay');
      addLogoToElement(firstIframeContainer as HTMLElement);
    };
    // Try immediately first
    addLogoToFirstVideo();
    
    // Then try again after delays to catch late-loading content
    const timers = [
      setTimeout(addLogoToFirstVideo, 100),
      setTimeout(addLogoToFirstVideo, 500),
      setTimeout(addLogoToFirstVideo, 1000),
      setTimeout(addLogoToFirstVideo, 2000),
      setTimeout(addLogoToFirstVideo, 3000)
    ];
    
    // Also try when window loads
    const handleLoad = () => {
      setTimeout(addLogoToFirstVideo, 100);
    };
    
    window.addEventListener('load', handleLoad);
    
    // Try when DOM content is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(addLogoToFirstVideo, 100);
      });
    }
    
    // Also try when DOM content changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Check if any added nodes contain iframes
          const hasIframe = Array.from(mutation.addedNodes).some(node => {
            return node.nodeType === Node.ELEMENT_NODE && 
                   (((node as Element).tagName === 'IFRAME') || 
                    (node as Element).querySelector('iframe') ||
                    (node as Element).classList?.contains('iframe-container'));
          });
          if (hasIframe) {
            setTimeout(addLogoToFirstVideo, 200);
          }
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      window.removeEventListener('load', handleLoad);
      observer.disconnect();
    };
  }, [position, logoSrc, logoAlt]);

  return null;
}