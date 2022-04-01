---
layout: post
title:  "All Connecting"
date:   2020-03-05
description: An interactive video sculpture that exposes the systems of the Internet in real-time.
permalink: all-connect
category: sculpture
tags: [interactive, projection, storytelling, video sculpture, processing]
preview: assets/all-connecting/demo.png 
author: Yiting Liu 

---

<!-- collaborator: Wenjing Liu; Stefan Skripak. -->

![assets/all-connecting/demo.png](assets/all-connecting/demo.png)

**An interactive video sculpture that exposes the systems of the Internet in real-time.**

## Highlights

Inspired by The Wave(1965) by Hans Haacke, we aim to expose the digital systems of a simple web request. It looks effortless to search anything. However, the system covered up shows multiple packets retrieving information from different servers.

I worked as a creative technologist splitting the packets into 16 strings given the sender’s IP addresses and receiver’s IP addresses. The content of the packets are then projected onto the wall with mapped paths when the performer or user interacts with the computer.

**Skills:** Video Sculpture, Projection, Real-Time, MadMapper, Processing, Synphon Recorder, Max/MSP

**Time:** Mar. 2020

<div class="iframe-container">
<iframe class="responsive-iframe" src="https://player.vimeo.com/video/416693709" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>



## Problem Statement
How might we reinterpret the system in the digital world?

## Concept

All Connecting is an interactive video sculpture that exposes the systems to the users when they make search requests online in real-time. It visualizes the flow of packets transmitting between performers in the video and servers in real-time. This project is a reinterpretation for The Wave (1965) by Hans Haacke.

## Role

Creative technologist working with Carnivore library in Processing to fetch and section packets into 16 strings.

## Research

Inspired by the artwork, The Wave by Hans Haacke (1965), in which he captured and analyzed the physical systems and presented them in a museum setting. We brainstormed in terms of the representations for the systems in the digital world in terms of information exchange and attention exchange.

![assets/all-connecting/hans.png](assets/all-connecting/hans.png)

We started off by the recent exhibition of his [All Connected at the New Museum](https://www.newmuseum.org/exhibitions/view/hans-haacke).

It was mentioned that Haacke was inspired by the ‘System Esthetics’ by Jack Burnham that analyzed the influence of Ludwig von Bertalanffy’s General System Theory (1968) on 20th century sculpture. [[Source]](https://www.theartstory.org/movement/institutional-critique/history-and-concepts/)

> *“inspired me to continue with my kinetic, process-oriented works, and also to expand into biological and – toward the late 1960s – to deal with social ‘systems.”[–Hans Haacke](https://www.theartstory.org/movement/institutional-critique/history-and-concepts/)*

## Ideation/Exploration
<!-- remake mood board again -->

![assets//all-connecting/moodboard-all-connecting.png](assets//all-connecting/moodboard-all-connecting.png)

We then started to branch out from here to think of forms such as

- telepole and wires underground
- fiber optics that are for information transfer
- black tubes that collect the wires
- ethernet cables

We were talking about how each request from the web browser generated several packages on the back-end. We wanted to visualize the amount of packages through projection mapping since this digital system is always happening yet not being presented as is to the users.

### Rough Idea

![assets/all-connecting/Interaction-design-all-connecting.png](assets/all-connecting/Interaction-design-all-connecting.png)

- A user enters a room with a computer in it
- He/she is prompted to do something to a computer – web browser
- We gather the packages generated
- Shows the packages generated in the room through video projection and video mapping

## Testing

I was looking to get the packets from Max and I tried several methods: OSC and external CNMET, Node for Max, MaxURL. However, it didn’t work for me to get the packet data from any website.

OSC and external CNMET don’t work with my Max which was unfortunate. I used Node for Max and tried several npm libraries such as curl, http, request, and pcap (sort of work). MaxURL is good for getting the html content from a certain website.

**[Learn more about my struggles](https://yitingliu97.wordpress.com/2020/04/01/video-sculpture-all-connecting/)**

## Development

I worked mainly on getting the packet data from the computer to processing. I then started working with processing using Carnivore library to get the packet data. I worked on getting the IP address of the receiver and sender address and compare if it is processed through my computer’s ip address. We will have 16 pipes, 8 pipes of information will be going from the sender to the receiver while the rest will be vice versa.

![assets/all-connecting/elements-all-connecting.png](assets/all-connecting/elements-all-connecting.png)

I wrote some code to help divide the ip address into 8 sections. Since the first part of the IP address has a range of 0-255(reference), I made sure each part has the range of 255/8. I wrote a function in processing to get all the information needed to return the text as a string which will be transported into madmapper. Below shows the packet information in the console in Processing. [My code can be found here](https://drive.google.com/drive/folders/10VUQl0vsMkciVnkXINt0KHBGixaJ4sCt?usp=sharing) . The final combined code can be found [here](https://drive.google.com/open?id=1he5iUf8QqjOFdluyKZK_ZKAvk9P1Ll2C).

![assets//all-connecting/get-packet-1.png](assets//all-connecting/get-packet-1.png)

We used Syphon to project the processing content and used MadMapper to map different pipes of corresponding sections of packet data.

![assets//all-connecting/madmapper.png](assets//all-connecting/madmapper.png)

## Solution

Here is our interpretation of Hans Haacke's The Wave.

<div class="iframe-container">
<iframe class="responsive-iframe" src="https://player.vimeo.com/video/416693709" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>

## Conclusion

I like how we still managed to work with each other and achieve an ideal end goal during COVID-19. We plan to keep working on it when we are able to fabricate things in our workplace.

## Moving forward

- Refine video sculpture to be represented in the installation
- Refine the type of data being exposed to the users
- Think about ways to represent the data in terms of fading, overlapping and more

*Special thanks to Wenjing Liu, and Stefan Skripak.*

[Check out my detailed documentation here.](https://yitingliu97.wordpress.com/2020/04/01/video-sculpture-all-connecting/)