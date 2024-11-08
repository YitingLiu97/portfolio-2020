---
layout: post
title:  "Interactive Web - Sun and Us"
date:   2020-12-17
permalink: sun-and-us-interactive-symphony-sun
description: "Sun and Us is an interactive art piece where participants perform a symphony with the sun, blending music and natural rhythms in real-time."
lang: en
tags: 
- Web
preview: /assets/sun-and-us/demo.png
author: Yiting Liu 
---

| Title                     | Details |
|---------------------------|-----------------------------------|
| Roles                     | Web Developer, Visual Designer |
| Tools                     | Html, CSS, Javascript |                     
| Length                    | 4 weeks |
| Project                   | An interactive audio experience that creates a symphony of field recordings from the sun and us. |
| Features | ml5.js, tone.js, API|
| Exhibitions | [2020 ITP Winter Show](https://itp.nyu.edu/shows/winter2020/sun-and-us/), [One Mile Gallery-Electric Feelings](http://onemilegallery.com/electric-feelings/),  [2021 Museum of Wild and Newfangled Art Biennial](https://www.mowna.org/biennial),  [ITP Buds](https://www.instagram.com/itpbuds/) |
|Special Thanks to | Udo Noll, founder for [Radio Aporee](https://aporee.org/maps/), [Luke Dubois](http://lukedubois.com/), [Max Bittker](https://maxbittker.com/), [Luisa Pereira](http://www.luisapereira.net/projects/) [Yotam Mann](https://yotammann.info/)  [Schuyler De Vos](https://lazordiak.github.io/)|


# Demo

<div class="iframe-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/UaJVQnPlFGE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


# Concept

To make an installation that touches you the deepest and purest emotion by letting nature and you perform a symphony together.

Nature has always been a part I want to explore. When I was little, I went to the park near our home with my grandma frequently. The wind blowing through the willows, the birds bringing their music while flying, and the people chatting and laughing are so interesting to me. They are like a symphony. Yet, as I grow older, I spend less time in the park, or with the nature. I want to forever remember the memory I had when I was little, with my grandma, playing, and listening to the sounds.

That's why I want to recreate that experience for me, for you, and for all of us who yearns for connections with people, nature, and within.

# [Play](https://sunanus.netlify.app/)

<!-- ![assets/sun-and-us/demo1.png](assets/sun-and-us/demo1.png) -->

# APIs

[Radio Aporee](https://aporee.org/) to get the field recording around the world. 

[IPGeolocation.io](http://ipgeolocation.io/) to get the altitude of the sun 

[International Space Station](http://open-notify.org/Open-Notify-API/ISS-Location-Now/) to get the longitude and altitude 

# JS libraries

[Tone.js](https://tonejs.github.io/) to manipulate the recording 

[p5.js](https://p5js.org/) to use since it is more user friendly 

[ml5.js](ml5js.org) to use the PoseNet

<!-- # Major Issues

p5.js has the tendency to block websites that do not satisfy the CORS policy. 

> Access to fetch at 
'[https://aporee.org/maps/files/MuenzfernsprecherHermannplatz
Hasenheideundefinierbarefluessigkeit.mp3](https://aporee.org/maps/files/MuenzfernsprecherHermannplatzHasenheideundefinierbarefluessigkeit.mp3)' from origin '[https://editor.p5js.org](https://editor.p5js.org/)' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

Max helped me to solve so by adding the no-cors in the header as below:

```jsx
fetch(url, {
      "headers": {
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
      },
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "omit"
    }).then(response => response.json())
    .then(myBlob => {
      console.log("do something to do myBlob", myBlob);
    });
```

I also forked the amazing [repo by Rob Wu](https://github.com/Rob--W/cors-anywhere) to create my own proxy server just in case to call the Aporee Radio API 

I was having so much trouble with tone.js since I could not play the URL from Aporee's API. Then I realized that I need to write down the whole link of the URL in the buffer rathre than using the variable. 

I contacted with Luisa and Yotam Mann, who built the amazing Tone.js when I was stuck for a while. He then pointed out it was the CORS I need to deal with. I then moved around my code and call the player in setup but update the link in the draw function and it PLAYS! 

So in setup, I wrote: 

```jsx
player = new Tone.Player({
    "onload": Tone.noOp,
    "autostart": true,
    "loop": true, //set the loop to be true to use loopstart and loopend
    "loopStart": loopStart,
    "loopEnd": loopEnd,
    "reverse": false,
    "duration": 2, //changed by the sun altitude in draw; 
    "fadeIn": fadeInTime,
    "fadeOut": fadeOutTime

  });
```

I took out certain parts in draw to update the value as below:

```jsx
player.duration = sunToDur;//variables to map the altitude of sun to the duration of the field recording clip
player.autostart = true;
player.loopEnd = loopEnd;
```

In order to fetch all data every two seconds, I set the audio_url, which is the URL for tone.js to play, to be determined by the latitude and longitude from the ISS API. And I didn't forget to add my proxy URL so that it can work around the CORS policy. 

```jsx
let url = proxy.concat(recordingLink);
player.load(url);
```

The most important lesson I learned is to have a clear picture of the steps of the process:

1. Fetch all API 
2. Update the API constantly - I set the interval to be each 2 seconds 
3. Update the link to get the recording link
4. Update the player link constantly in the function getAllData(); -->

# Visuals

I want to create a simple user interface and minimal look for my experience. What is more simple than lines and circles.The left image is from my [original creative coding](https://www.openprocessing.org/sketch/927956)  and the right one is the adapted visuals for this interactive audio experience. 

<!-- While looking back at my creative coding practices, I picked [the one](https://www.openprocessing.org/sketch/927956) that used times tables cardioid with my own music. I followed the [tutorial](https://thecodingtrain.com/CodingChallenges/133-times-tables-cardioid.html) by the amazing Daniel Shiffman, a.k.a., The Coding Train. -->

<div class="img-container">
<img class="img-responsive" src="assets/sun-and-us/timestable.png">
<img class="img-responsive" src="assets/sun-and-us/demo.png">
</div>

# Resources

Since I already know basic CSS and I do not want to focus too much on writing CSS from scratch. If you are like me, here is a list of awesome resources to generate CSS:

p.s.: it works with DOM elements created inside p5.js. 
- [grid generator](https://cssgrid-generator.netlify.com/)
- [button](https://www.bestcssbuttongenerator.com/)
- [slider](https://doodlenerd.com/html-control/css-input-range-generator)
- [input](http://danielstern.ca/range.css/#/)
- [button - pretty UI](https://neumorphism.io/#55b9f3)

<!-- # Next Steps

Originally I wanted to use Kinect and tone.js but it was giving me trouble composing the data to the same canvas so I used [ml5.js](https://ml5js.org/) which I am more familiar with. But in the future, I would love to still use [Kinectron](https://kinectron.github.io/#/) to try it out with Tone.js or Max/MSP.  -->

# Previous Documentations

1. [sound studio final project plan](https://yitingliu97.wordpress.com/2020/10/20/sound-studio-project-plan/) 
2. [installation plan](https://yitingliu97.wordpress.com/2020/10/27/sound-studio-installation-plan/) 
3. [process update](https://yitingliu97.wordpress.com/2020/11/29/nature-and-us-process-update/) 

<!-- # Special thanks to

Udo Noll, founder for [Radio Aporee](https://aporee.org/maps/) 

[Luke Dubois](http://lukedubois.com/) for Tone.js trouble shooting 

[Max Bittker](https://maxbittker.com/) for CORS and fetch API support 

[Luisa Pereira](http://www.luisapereira.net/projects/) for code debugging in Tone.js

[Yotam Mann](https://yotammann.info/) for code debugging in Tone.js

[Schuyler De Vos](https://lazordiak.github.io/) for spending more than an hour helping to debug during stressful finals week! -->