---
layout: post
title:  "AR - Sixth Sense"
date:   2022-07-11
permalink: zh/sixth-sense-ar-schizophrenia-simulation-app
description: Sixth Sense is an augmented reality app that simulates schizophrenia symptoms to foster empathy and understanding, providing a realistic experience of auditory hallucinations.
tags: 
- XR
- Unity
preview: /assets/sixthsense/demo.png
author: Yiting Liu 
lang: en
---
| Title                     | Details |
|---------------------------|-----------------------------------|
| Role                   | Lead Developer |
| Tools                     | <br>Platform: Magic Leap 1 (spatial audio, digital objects) <br><br>Dynamic dialogue: Google Dialogflow v2 <br><br>Pulse Sensor: Heart rate monitor<br><br> |
| Length                    | 25 hours  |
|Features | AI companion, Text-to-Speech, Dialogflow, Sound Design, & 3D Assets|
| Project                   |Sixth Sense is an AR app to simulate schizophrenia symptoms in an authentic and respectful way to foster understanding and empathy.|
|Collaborators | <br>[Destiny Guzmán](https://www.linkedin.com/in/destiny-guzm%C3%A1n-414596119/), [Julia Scott](https://www.linkedin.com/in/julia-scott-phd/), [Tingru Lian](https://www.linkedin.com/in/tingru-lian-ab77a51aa/), [Lucas Wozniak](https://www.linkedin.com/in/lucaswozniak/)<br><br> |


# Demo
<div class="iframe-container">

<iframe class="responsive-iframe" src="https://www.youtube.com/embed/a_Ka7RNQJqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


# Motivation

Building empathy and awareness around psychosis is crucial to effective allyship and safe interaction with affected individuals. This project aims to immerse users in the experiences of someone with schizophrenia, bringing greater understanding to a wider audience.


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
To experience the app, download [The Lab](https://developer.magicleap.com/en-us/learn/guides/lab) and use Device Bridge to load the [application](assets/sixthsense/AllScene.mpk) on your Magic Leap One device. 

## User Journey 
In the app, the user embarks on a journey in the shoes of someone living with schizophrenia, guided by a supportive friend. Routine encounters of daily life spark auditory hallucinations, and the player must rely on their friend’s guidance to navigate these unsettling experiences.

## Key Features
<ul>
<li> <strong>Spatial Audio for Auditory Hallucinations:</strong> We used spatial audio to simulate auditory hallucinations, making everyday sounds like an alarm, book, or TV feel immersive and disturbing. This feature mirrors common symptoms of schizophrenia, where auditory hallucinations affect over 70% of patients. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2525988/">source</a>
</li>
<li> <strong>Augmented Reality Elements:</strong> Simple AR objects placed in the real world—such as an alarm, book, and TV—add a layer of realism, enhancing the immersive experience.
</li>
</ul>
# Development Process
I led the app’s development using Magic Leap and Unity, which included troubleshooting and optimizing our workflow for AR on Magic Leap. This involved:
- **Testing Templates & Toolkits:** Initially, I experimented with different example templates. I discovered that the original repository lacked the Magic Leap Toolkit (MLTK), which I then sourced from GitHub. I reviewed MLTK example scenes to find the most suitable fit and settled on the Controller Input scene, which was ideal for our experience.
- **Spatial Mapping Exploration:** I explored spatial mapping features and plan to further refine this functionality to enhance adaptability across various physical spaces in future iterations.
- **Spatial Audio Implementation:** Testing spatial audio was integral to crafting realistic auditory hallucinations that could anchor users in the experience.
Successful Build: After around 20 hours of troubleshooting, I was thrilled to finally build the application successfully!


## Storyboard + Content Creation 

**Event 1: Alarm**
<ul>
	<li>"Look at what the hell you did! You ruined everything."</li>
	<li>"Run! Run!"</li>
	<li>"You're always messing up. You need to leave before security finds you."</li>
</ul>

**Event 2: Book**
<ul>	
	<li> "THROW THE BOOK. THROW IT NOW." </li>
	<li> "There is no hope for someone as meaningless as you." </li>
	<li> "Everyone is watching you. Put it down right now, or else." </li>
</ul>

**Event 3: Video on TV**
<ul>
	<li>"You’re so weak; they’re talking about you on TV!"</li>
	<li> "If you weren’t such a snowflake, maybe you’d be better off."</li>
	<li>[Laughter] "Did that hurt your feelings?"</li>
</ul>

<!-- <img src="assets/sixthsense/storyboard.jpg"> -->
<!-- ![assets/sixthsense/storyboard.jpg](assets/sixthsense/storyboard.jpg) -->


# Challenges & Solutions
<ol>
<li> 
Mabu and manifest.xml Issues: Working with Mabu and manifest.xml proved challenging, as the documentation on the Magic Leap site was sometimes confusing. I found more effective support and templates on GitHub to address these issues. </li>
<li> Device Registration Constraints: Although we had three Magic Leap devices, registration limitations restricted us to one device during development, which required careful planning and collaboration. </li>
<li> Time Constraints: We agreed on the final storyboard just 15 hours before the end of the jam, necessitating quick implementation and prioritization to meet our goals. </li>
<li> First-Time Use of Magic Leap: I familiarized myself with the Magic Leap device within 24 hours, quickly adapting to ensure efficient development. </li>
</ol>

<!-- Challenges & Solutions

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
</details> -->

# Read more
[Presentation](https://docs.google.com/presentation/d/1wq3NtwOT-2fhaL747sAz3skCfQv02TOGwHAtR6VAfaM/edit#slide=id.g3a1c092384_0_0)

[Github](https://github.com/YitingLiu97/SixthSenseMagicLeap2.git)
Special Thanks to 
[Destiny Guzmán](https://www.linkedin.com/in/destiny-guzm%C3%A1n-414596119/)
[Julia Scott](https://www.linkedin.com/in/julia-scott-phd/)
[Tingru Lian](https://www.linkedin.com/in/tingru-lian-ab77a51aa/)
[Lucas Wozniak](https://www.linkedin.com/in/lucaswozniak/)
  



