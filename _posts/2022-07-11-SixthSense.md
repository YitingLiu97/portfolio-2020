---
layout: post
title:  "AR - Sixth Sense"
date:   2022-07-11
permalink: sixthsense
description: An AR app to simulate schizophrenia symptoms in an authentic and respectful way to foster understanding and empathy.
tags: 
- XR
- Unity

preview: /assets/sixthsense/demo.png
author: Yiting Liu 
---

![assets/sixthsense/demo.png](assets/sixthsense/demo.png)

<!-- **Sixth Sense is an AR app to simulate schizophrenia symptoms in an authentic and respectful way to foster understanding and empathy.**  -->
<!-- 
  “When the term empathy was initially coined in the early 1900s, it was primarily discussed as a state of mind, an act of “feeling into” another person. In recent years it has increasingly come to also be seen as a skill that can—and arguably must—be learned and practiced.”  
― Kaitlin Ugolik Phillips, [The Future of Feeling: Building Empathy in a Tech-Obsessed World](https://www.goodreads.com/work/quotes/69419100) -->


| Title                     | Details |
|---------------------------|-----------------------------------|
| Role                   | Lead Developer |
| Tools                     | <br>Platform: Magic Leap 1 (spatial audio, digital objects) <br><br>Dynamic dialogue: Google Dialogflow v2 <br><br>Pulse Sensor: Heart rate monitor<br><br> |
| Length                    | 25 hours  |
|Features | AI companion, Text-to-Speech, Dialogflow, Sound Design, & 3D Assets|
| Project                   |Sixth Sense is an AR app to simulate schizophrenia symptoms in an authentic and respectful way to foster understanding and empathy.|
|Collaborators | <br>[Destiny Guzmán](https://www.linkedin.com/in/destiny-guzm%C3%A1n-414596119/), [Julia Scott](https://www.linkedin.com/in/julia-scott-phd/), [Tingru Lian](https://www.linkedin.com/in/tingru-lian-ab77a51aa/), [Lucas Wozniak](https://www.linkedin.com/in/lucaswozniak/)<br><br> |


# Teaser

<div class="iframe-container">

<iframe class="responsive-iframe" src="https://www.youtube.com/embed/a_Ka7RNQJqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


# Motivation

Understanding psychosis is critical to effective allyship and interfacing safely with affected persons.

# **Exhibitions**
- Games for Change Festival 2022 
- XR Brain Jam 2022 Live Demo 

<!-- # Embodied Schizophrenia Experience 

## The Users 
### Who this is for: 
-   First responders 
-   Mental health professionals
-   Community members

### Impact on practice:
-  Increased understanding of the daily challenges
-  Increase awareness and hopefully break the stigma of the disorder as a lived experience
-  Validate the personal experience for those with schizophrenia  -->

# The App 
To open the app, download [The Lab](https://developer.magicleap.com/en-us/learn/guides/lab) and use Device Bridge to load the [app](assets/sixthsense/AllScene.mpk) on your Magic Leap One device. 

## User Journey 
The player takes a walk in the shoes of someone with schizophrenia under the guidance of a benevolent friend. Typical encounters of daily life trigger auditory hallucinations. The player turns to their friend to help find their way through.

## The Features 
  
We delivered our first iteration of our product for the XR Brain Jam. We focused on spatial audio to create auditory hallucination with simple AR objects in the real world: alarm, book, TV. 

"Auditory hallucinations are among the most common symptoms in schizophrenia, affecting more than 70% of the patients." [source](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2525988/)

  
<!-- ## Testimonial 

- “It is quite intense.”  
- “I can see how it can be useful for the medical staff to experience for better undertsanding”
- “You can only learn so much by reading. This is a wonderful tool to train empathy.”   -->

# Development Process
<details>
 <p> <summary> Click to expand</summary></p>

<p> I enjoyed developing for Magic Leap with Unity. Although, at first, I spent around 20 hours troubleshooting: </p>
<ul>
	<li> Trying out different example templates</li>
	<li>The original repo didn't have MLTK tool embedded and I found the MLTK package on github </li>
	<li>Explored the example scenes of the MLTK</li>
	<li> Decided the Controller Input was the one that fits our experience the most </li>
	<li>I also explored the spatial map and would love to explore more in the future</li>
<br>
<img src="assets/sixthsense/spatial-map.png">
<!-- ![assets/sixthsense/spatial-map.png](assets/sixthsense/spatial-map.png) -->
<br>
<br>
<li> It is include in the Control Input scene and I would love to dive into it more to be more calibratable to different physical scenes </li>
<li> I was so happy when I finally succeeded  in building our application!</li>
<br>
<img src="assets/sixthsense/built-scene.png">
<br>
<br>
<!-- ![assets/sixthsense/built-scene.png](assets/sixthsense/built-scene.png) -->
<li> Testing out spatial audio</li> 
</ul>
<div class="iframe-container">
<iframe class="responsive-iframe" src="https://player.vimeo.com/video/731181493" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</div>
</details>
<br>

# Storyboard + Content Creation 
<details>
 <p> <summary> Click to expand</summary></p>
<h2> Storyboard </h2>
<img src="assets/sixthsense/storyboard.jpg">
<!-- ![assets/sixthsense/storyboard.jpg](assets/sixthsense/storyboard.jpg) -->

<h2> Script for Inner Voices </h2>
<h3> Event1: Alarm </h3>
<ul>
<li> Look at what the hell you did! You ruined everything. </li> 
<li>Run! Run!  </li>
<li>You're always messing up. You need to leave before security finds you.  </li>
<li>Voice A: If you weren’t so stupid you wouldn’t get caught.  </li>
<li> Voice B: Exactly! What a fucking idiot </li>
</ul>

<h3>  Event2: Book </h3>
<ul>
<li> THROW THE BOOK. THROW IT NOW. (Repeat)  </li>
<li>  What’s the point of reading this  </li>
<li> There is no hope for someone as meaningless as you.  </li>
<li>  Everyone is watching you, you look so pathetic!  </li>
<li> Put it down right now, or else.  </li>
</ul>

<h3>  Event3: Video  </h3>
<a href="https://www.youtube.com/watch?v=4VJBZlvqTfc">The Video on TV</a>
<!-- [The Video on TV](https://www.youtube.com/watch?v=4VJBZlvqTfc "https://www.youtube.com/watch?v=4VJBZlvqTfc"): (1:28 - 1:44)  -->
<ul>
<li> You’re so weak, you’re so sensitive - Look they’re talking about you on TV!  </li>
<li> They’re watching you  </li>
<li> If you weren’t such a snowflake maybe you’d be better off  </li>
<li> _crazy laughter_  </li>
<li> Did that hurt your feelings? I don’t give a shit  </li>
</ul>
</details>
<br>

<!-- <h2> Voice Overs </h2>
<img src="assets/sixthsense/Me-and-Tina-in-the-makeshift-recording-studio.png"> -->


# Challenges
<details>
 <p> <summary> Click to expand</summary></p>

<p> Life without troubleshooting is dull. </p>

<p> I have encountered the following challenges while working with Magic Leap:</p> 

<ul>
<li> Issue with Mabu, manifest.xml</li>

<img src="assets/sixthsense/Mabu-issue.png">
<br>

<li> I enjoyed the documentation on Magic Leap’s official website. Yet there is one website that has confusing most up to date templates. Luckily github comes to the rescue. Here is the image showing that zero iteration works with the Magic Leap Unity Exmamples repo. </li>
<br>
<br>
<img src="assets/sixthsense/zero-iteration-working.png">
<br><br>
<li>Registering issues with Magic Leap. We have three Magic Leap devices to develop for yet due to the registering issue, we ended up working with one registered magic leap for our development. </li>
<br>
<li>First time using magic leap. Learned how to use it in less than 24 hours.</li>
<br>
<li> Limited developing time since we agreed with our storyboard 15 hours before the end of the Jam. </li>
</ul>
<br>
</details>

<!-- # Feedback from demoing 

1. To create an engaging storyline for user to immerse 
2. Add more AR objects for longer experience  
3. Make the spatial audio clear. Or have fewer audio playing at the same time to create the effect of spatialization.  -->
<!--     
# Next Steps

- Expand library of trigger events
	- Diversify scenarios for the AR experience 
- Spatial audio + Visual FX 
	- Incorporate visual hallucinations 
- AI Companion 
	- Hard coded dialogue → Conversational AI 
	- Integrate Dialogflow for dynamic dialogue between the player and companion
	- Image recognition in the physical world to generate responses in the Spatial Audio content 
- Post-experience biofeedback → Real time visualization
- Improved design of the heart rate graph for easier readability and engagement
- Incoporate Hand Tracking  -->

<br>

# Read more
[Presentation](https://docs.google.com/presentation/d/1wq3NtwOT-2fhaL747sAz3skCfQv02TOGwHAtR6VAfaM/edit#slide=id.g3a1c092384_0_0)

[Github](https://github.com/YitingLiu97/SixthSenseMagicLeap2.git)


Special Thanks to 
[Destiny Guzmán](https://www.linkedin.com/in/destiny-guzm%C3%A1n-414596119/)
[Julia Scott](https://www.linkedin.com/in/julia-scott-phd/)
[Tingru Lian](https://www.linkedin.com/in/tingru-lian-ab77a51aa/)
[Lucas Wozniak](https://www.linkedin.com/in/lucaswozniak/)
  



