---
layout: post
title: "All Connecting"
date: 2020-03-05
permalink: all-connect
description: "A collaborative video sculpture that makes live internet traffic visible through projection mapping."
category: sculpture
tags:
- Installation
preview: /assets/all-connecting/demo.png
author: Yiting Liu
---

![All Connecting video sculpture with packet data projected across the installation](/assets/all-connecting/demo.png)

**A web search sets data in motion. All Connecting makes that movement visible.**

Created with Wenjing Liu and Stefan Skripak, this video sculpture interprets network activity as moving text and mapped projection. My role was creative technologist: I researched ways to capture traffic, built the Processing logic that read packet addresses, and organized those addresses into visual paths for the installation.

<div class="iframe-container">
<iframe class="responsive-iframe" src="https://player.vimeo.com/video/416693709" title="All Connecting video sculpture demo" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>

*The recorded study shows the projected result. The team developed it remotely during the COVID-19 shutdown.*

## Situation and task

Inspired by Hans Haacke’s *The Wave* (1965), we asked how an invisible digital system could become a physical experience. A browser request appears simple on screen, while data moves between a computer and remote servers. Our task was to reveal some of that exchange in the room as it happened.

![Research moodboard exploring cables, pipes, and network connections](/assets/all-connecting/moodboard-all-connecting.png)

*Early visual research explored cables and pipes as a way to give the data a spatial form.*

![Early interaction sketch showing a visitor, browser request, and projected response](/assets/all-connecting/Interaction-design-all-connecting.png)

*The interaction sketch starts with someone using a browser and ends with information appearing around them.*

## How the system developed

The first experiments tried to bring web request data into Max/MSP through OSC, Node for Max, MaxURL, and a packet capture prototype. These tests helped clarify the problem: page content was not the packet flow we wanted to show, and the packet capture approach did not work reliably in that setup. We moved the capture and routing work to Processing with the Carnivore library.

<picture>
  <source media="(max-width: 600px)" srcset="/assets/all-connecting/system-architecture-mobile.svg">
  <img src="/assets/all-connecting/system-architecture.svg" alt="All Connecting architecture progression: an early Max/MSP experiment gives way to a Processing, Syphon, and MadMapper projection pipeline">
</picture>

*Architecture of the experiments and the recorded study. The Max/MSP path was a prototype; the lower path shows the working visual pipeline.*

In Processing, I compared sender and receiver IP addresses with the computer’s network address, then grouped address data into eight sections for each direction. Those sixteen paths gave the team a structure for moving strings of packet information. Wenjing developed the moving text; Stefan brought the projection into MadMapper and mapped it to the installation space.

![Processing console showing captured packet information](/assets/all-connecting/get-packet-1.png)

*Processing test: packet information captured and prepared for the visual system.*

![Original tool-flow diagram showing Processing, Syphon Recorder, and MadMapper](/assets/all-connecting/elements-all-connecting.png)

*An earlier tool-flow sketch shows how the team planned to move visuals from Processing into the projection mapper.*

![MadMapper interface with paths arranged for the projection](/assets/all-connecting/madmapper.png)

*Syphon carried the Processing output into MadMapper, where the visual paths were placed in the room.*

## Result

The team produced a recorded video sculpture study that exposes live packet activity through moving text and mapped projection. It demonstrates the full experience from browser interaction to spatial output, while leaving room to refine the physical installation and visual treatment in a future version.

[Read my detailed process notes](https://yitingliu97.wordpress.com/2020/04/01/video-sculpture-all-connecting/) · [Explore my current portfolio](https://www.yitingliu.com/){:target="_blank" rel="noopener noreferrer"}

*Created with Wenjing Liu and Stefan Skripak.*
