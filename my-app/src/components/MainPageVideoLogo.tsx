'use client';

import { useEffect, useState } from 'react';

interface MainPageVideoLogoProps {
  position?: 'bottom-full-width' | 'bottom-left' | 'bottom-right';
  logoSrc?: string;
  logoAlt?: string;
}

export default function MainPageVideoLogo({ 
  position = 'bottom-left',
  logoSrc = '/yiting-white-logo.png',
  logoAlt = 'Yiting Liu'
}: MainPageVideoLogoProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const addLogoToMainVideo = () => {
      // Target the main page hero video specifically
      const heroSection = document.querySelector('.humaan-hero');
      const videoContainer = heroSection?.querySelector('.hero-video-container');
      
      if (!videoContainer || videoContainer.querySelector('.main-video-logo-overlay')) {
        return; // Already exists or container not found
      }

      // Create logo overlay element
      const overlay = document.createElement('div');
      overlay.className = `main-video-logo-overlay ${position}`;
      overlay.style.cssText = `
        position: absolute;
        ${position.includes('bottom') ? 'bottom: 32px' : 'top: 32px'};
        ${position.includes('left') ? 'left: 32px' : 'right: 32px'};
        z-index: 15;
        pointer-events: none;
        opacity: 0.85;
        transition: all 0.4s ease;
        background: rgba(0, 0, 0, 0.15);
        padding: 12px 16px;
        border-radius: 12px;
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
      `;
      
      const logo = document.createElement('img');
      logo.src = logoSrc;
      logo.alt = logoAlt;
      logo.style.cssText = `
        height: 28px;
        width: auto;
        filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.3));
        transition: all 0.3s ease;
      `;
      
      // Handle image load error with fallback paths
      logo.onerror = () => {
        console.log('Logo image failed to load from:', logo.src);
        if (logo.src.includes('/yiting-white-logo.png')) {
          logo.src = 'yiting-white-logo.png'; // Try fallback path
        } else {
          // Hide overlay if logo can't be loaded
          overlay.style.display = 'none';
          console.log('Logo overlay hidden due to load failure');
        }
      };
      
      logo.onload = () => {
        console.log('Main page logo loaded successfully');
      };
      
      overlay.appendChild(logo);
      videoContainer.appendChild(overlay);
      
      console.log('Main page video logo overlay added');

      // Add scroll-based animation
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.min(scrollY / windowHeight, 1);
        
        // Fade out logo as user scrolls
        const opacity = Math.max(0.85 - (scrollProgress * 0.6), 0.25);
        overlay.style.opacity = opacity.toString();
        
        // Slight movement animation
        const translateY = scrollProgress * 10;
        overlay.style.transform = `translateY(${translateY}px)`;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      
      // Store cleanup function
      (overlay as any)._cleanup = () => {
        window.removeEventListener('scroll', handleScroll);
      };

      // Add hover effects on the video container
      videoContainer.addEventListener('mouseenter', () => {
        overlay.style.opacity = '0.95';
        logo.style.transform = 'scale(1.05)';
      });
      
      videoContainer.addEventListener('mouseleave', () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.min(scrollY / windowHeight, 1);
        const baseOpacity = Math.max(0.85 - (scrollProgress * 0.6), 0.25);
        
        overlay.style.opacity = baseOpacity.toString();
        logo.style.transform = 'scale(1)';
      });
    };

    // Wait for DOM to be ready and try multiple times for reliability
    const initLogo = () => {
      addLogoToMainVideo();
    };

    // Try immediately
    initLogo();

    // Also try after small delays to catch dynamic content loading
    const timers = [
      setTimeout(initLogo, 100),
      setTimeout(initLogo, 500),
      setTimeout(initLogo, 1000)
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      
      // Clean up scroll listeners
      const overlay = document.querySelector('.main-video-logo-overlay');
      if (overlay && (overlay as any)._cleanup) {
        (overlay as any)._cleanup();
      }
    };
  }, [position, logoSrc, logoAlt]);

  return null; // This component doesn't render anything directly
}