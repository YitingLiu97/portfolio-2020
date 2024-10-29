---
layout: default
title: About Us
permalink: /about/
---
<div class="post">
  <div class="about-container">
    <div class="about-grid">
      <!-- Left Column -->
      <div class="about-left">
        <!-- <div class="decorative-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12,0 L14,8 L22,12 L14,16 L12,24 L10,16 L2,12 L10,8 Z" />
          </svg>
        </div> -->
        <h1 class="about-heading">About</h1>
        <img src="/assets/profile_square.jpg" alt="About me" class="about-image">
      </div>
      <!-- Right Column -->
      <div class="about-right">
        <div >
		<p>
Yiting Liu, an acclaimed XR Developer and Designer, is driving innovation in immersive tech with Fortune 500 clients like Accenture, Citibank, Disney, ESPN, and Comcast. Leading at Sia Partners, she expertly integrates XR with AI for multiplayer experiences. Her AR simulation project was notably featured in Unity, and she's a proud winner of the MIT Reality Hack 2022. Yiting's work has been highlighted at prestigious events such as the AIGA Conference and Games for Change, establishing her as a prominent figure in the field of immersive technology.</p>
        </div>
        
        <!-- Social Links -->
        <div class="social-links">
          {% if site.twitter_username %}
            <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank">
              <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          {% endif %}
          {% if site.facebook_username %}
            <a href="https://facebook.com/{{ site.facebook_username }}" target="_blank">
              <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          {% endif %}
          {% if site.instagram_username %}
            <a href="https://instagram.com/{{ site.instagram_username }}" target="_blank">
              <svg class="social-icon" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          {% endif %}
        </div>
      </div>
    </div>
  </div>
</div>

# [Resume](/assets/Yiting Liu Resume.pdf)
