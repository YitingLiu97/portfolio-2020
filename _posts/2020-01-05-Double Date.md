---
layout: post
title: "Interactive Installation - Double Date"
date:   2020-01-22
permalink: /double-date-device-and-human-attention/
description: "Double Date is an interactive video installation that explores the attention dynamics between devices and human interactions."
tags: 
- Installation 
preview: /assets/double-date/demo.png 
author: Yiting Liu 
lang: en

---

| Title                     | Details |
|---------------------------|-----------------------------------|
| Role                     | Developer, Fabricator, Post-Production|
| Tools                     | Arduino, Sprite, Projector, Laser-Cutter, After Effects, Premiere, Illustrator  |                     
| Length                    | 2 week |
| Project                   | An interactive video installation about attention between devices and people.|
| Features |  Projection, Experience and Interaction Design |

<!-- ## Highlights

 I fabricated the controller and programmed it with a media controller Sprite for the interaction.

**Tools:** Arduino, Sprite, Projector, Laser-Cutter, After Effects, Premiere, Illustrator

**Skills:** Projection, Experience and Interaction Design

**Time:** Jan. 2020 -->

<div class="iframe-container">
 <iframe title="vimeo-player" src="https://player.vimeo.com/video/416687791"  class="responsive-iframe" frameborder="0" allowfullscreen></iframe>
</div>



## Problem Statement
How might we make people aware of their relationships with loved ones and their phones?

![assets/double-date/presentation.jpg](assets/double-date/presentation.jpg)

## Concept

Instant gratification from phones seems to be more tempting than being present at face-to-face conversations. With constant access to the world in our pockets, where should we direct our attention while trying to be present in the moment?

<!-- ## Role

- Developer
- Fabricator
- Post-production -->

## Research

Most of us are guilty of being distracted by our phones during face-to-face conversations. Yet it seemed to be embedded in our culture. Even when we are not using our phones, we are being distracted. ([link](https://www.huffingtonpost.ca/2017/06/30/cellphones-distraction-study_a_23009948/))

We want to point out the digital culture of the phone in the form of interactive video sculpture to make people more aware of their relationships with loved ones and their phones.

## Ideation/Exploration

![assets/double-date/interaction-design-double-date.png](assets/double-date/interaction-design-double-date.png)

During our brainstorming process, we had several ideas, most of which are involved with people being controlled by the things they own.

Our goal is to create a portraiture in the form of interactive video sculpture. We then focused on telling a story of a modern relationship between people and their phones.

### Inspirations:

- [Model Citizen” Dystopian Animated Short Film (2020)](https://www.youtube.com/watch?v=mVLrBJYGxk4)
- [Stan Douglas – Doppelgänger](https://www.davidzwirner.com/exhibitions/stan-douglas-2020)

We then thought of using light as a way of representing the strength of their connection.

- When a couple is engaging in conversations, the light above them is bright.
- When one is looking at the phone, the light is half bright.
- When both are looking at the phones, the light dims.

## Development

We wanted to show how human interactions would change the relationship for the people in the video. For our concept, using a phone is very intuitive as the interaction device for the user. Different interactions such as swiping, picking the phone up, would indicate changes in the relationship depicted in the videos.

### Determine the interaction:

- Phone faced down 
    - Video 1 of the couple having a great time
- Phone flipped to face up
    - Video 2 of the girl playing on the phone
- Button pressed
    - Video 3 of the couple on the phones, giving attention to the digital others

### Determine the presentation form:

The video footage of the couple was created by Dina and Patrick. The background of the video was influenced by the following image from a game called the [Red Strings Club](https://store.steampowered.com/app/589780/The_Red_Strings_Club/).

We then created a modern dating environment using after effects as shown below.

![assets/double-date/video%201.jpg](assets/double-date/video%201.jpg)

*Still from video one when the couple is having a good time chatting.*

### Videos for Interactions

Dina and Patrick worked on filming and after effects to illustrate the idea.

## Refinement and Testing

### Programming & Fabrication

As the creative technologist in the team, I compiled the code for our hardware in Arduino, fabricated the phone/enclosure for the electronics, and worked with Sprite MedeaWiz (a triggered video repeater for compact video projection).

We chose to work with Sprite for our project for several reasons:

- It is compact for physical installation
- It can be controlled by Arduino

For the code, I used the Accelerometer and Arduino Uno to determine if the phone is up or down. I added the button as another condition to trigger the third video.

![assets/double-date/schematics-double-date.png](assets/double-date/schematics-double-date.png)

You can look at my [code here](https://drive.google.com/drive/folders/1M7i6hdTupYVWaKsjxRzlR7EvitTQZpEo?usp=sharing) . I used the library for the accelerometer [Arduino_LSM6DS3.h](https://www.arduino.cc/en/Reference/ArduinoLSM6DS3)

I fabricated the phone which functions as an enclosure as well using plywood and standoffs as below. I designed the phone in Illustrator and laser cutted it and assembled the pieces.


<div class="img-container">
<img class="img-responsive" src="assets/double-date/phone-paper.jpg">
<img class="img-responsive" src="assets/double-date/phone.jpg">
</div>

## Solution

Here is our take on how a modern relationship between a couple is portrayed.

*Special thanks to Patrick Warren, Dina Khalil, and Hyunseo Lee.*

[Check out my detailed documentation here.](https://yitingliu97.wordpress.com/2020/04/08/video-sculpture-double-date/)