---
layout: post
title: "Fullstack Web - Emotional Input Collage App"
date:   2020-11-28
permalink: moods-journal-emotional-collage-app
description: "Moods Journal is a mobile app for self-reflection, allowing users to collage their emotions and track their emotional journey over time."

tags: 
- Web 
preview: /assets/moods-journal/demo.png
author: Yiting Liu 

---
![Moods Journal mobile app for emotional input and self-reflection through digital collaging](assets/moods-journal/demo.png)

| Title                     | Details |
|---------------------------|-----------------------------------|
| Role                     | Full-Stack Developer|
| Tools                     | Javascript, HTML, CSS, Heroku, Pinterest, Photoshop, Illustrator, Figma |                     
| Length                    | 2 weeks |
| Project                   | Emotional input collage mobile app. |
| Features |Manipulating of images in terms of size, scale, rotation. Uploading images/ Camera capture from phone. Changing fonts for texts.|

<!-- **Emotional input collage mobile app.**

# **Concept**

A journal of my **material and color journey on emotions.** -->




# **[Demo](https://youtu.be/sKdJe8uR-dU)**

<div class="iframe-container">
<iframe class="responsive-iframe" src="https://www.youtube.com/embed/sKdJe8uR-dU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

# **[Play](https://moods101.herokuapp.com/)**

# **Research**

I did research on [ProjectLife](https://play.google.com/store/apps/details?id=com.beckyhiggins.projectlife&hl=en_US&gl=US) and [PicCollage](https://play.google.com/store/apps/details?id=com.cardinalblue.piccollage.google&hl=en_US&gl=US). Some of the pros and cons I learned from playing with them are as below:

1. You can search image on the web and input it to the canvas
2. They have grid system where you can put images to the chosen grid
3. Adaptable size for different social media platforms to share
4. Customizable in terms of color, patterns

# **UI**

I created the [UI interaction](https://www.figma.com/proto/ak6rx7JdfrHBLeLCZsGZS6/Moods-Diary-App_Final?node-id=102%3A2523&scaling=min-zoom) on Figma.

![https://github.com/YitingLiu97/moods/raw/master/assets/MoodsDiaryUI.png](https://github.com/YitingLiu97/moods/raw/master/assets/MoodsDiaryUI.png)

# **Elements**

This will be the study for materials and textures as a collection for my research on my phone.

- Mood/Material Diary for myself to keep track of.
- If I can make it public then you would create your own login and store that on the database?
- Be able to share with friends or other platforms to store them
- A quick tool to store your thoughts and view them
    - [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- One page per day
- Camera input
- Able to erase certain parts - mask the shape
    - [Trace on top to keep the element](https://candle.itch.io/flatpack)
    - Background removing API - paid
    - Image cropping algorithm
- Swipe to set the date and time and create (Inspo: [Card Diary - iOS App](https://www.behance.net/gallery/59120015/Card-Diary-iOS-App?isa0=1))

    [Pinterest Material Moodboard](https://www.pinterest.com/yliu557/thesis/material/)

![https://github.com/YitingLiu97/moods/raw/master/assets/pinterestInspo.png](https://github.com/YitingLiu97/moods/raw/master/assets/pinterestInspo.png)

# **Steps of creation**
1. make things in photoshop - constrains of how you make the thing
2. build the make and save part of the interface
3. ability to view all and save

*recommended by Max Bittker*

## **What is your app for?**

Collecting interesting materials related to moods for my thesis. My thesis is about translating feeling of being trapped and suffocation through objects or experiences.

## **How do users add images/text?**

Users can upload their images or capture with their camera in the app and edit the texts

## **How do they remove them?**

I will create a trash icon where they can move the item and delete it

## **What are the constraints?**

They are limited to the canvas of their phone since they can not scroll in the canvas.



# Features

- Manipulating of images in terms of size, scale, rotation
- Uploading images/ Camera capture from phone
- Changing fonts for texts  <br />

![https://github.com/YitingLiu97/moods/raw/master/assets/fonts.png](https://github.com/YitingLiu97/moods/raw/master/assets/fonts.png)

- minimalistic UI design [Inspiration: [Sanity Sketching kit](https://www.figma.com/community/file/898186441853776318)]
- Trash individual element upon click
- Savable HTML as an image using [html2canvas](http://html2canvas.hertzen.com/)
- Full stack development

# Lessons Learned

- Save the uploaded image to the canvas through [html2canvas](http://html2canvas.hertzen.com/). It has to do with **AllowTaint** and **useCORS**. For more details, see [here](https://github.com/niklasvh/html2canvas/issues/722).

- The problem of having the collections of posts showing up. Turns out I need to replace the script in package.json as below: 

     ```jsx
     "scripts": {
        "start": "node server.js"
      }
    ```


- From user testing, they wanted to have notification of the image being saved as well as seeing what they created in the collections section. So I incorporated the time code to make sure images are displayed in reverse-chronological order. I also added the image saved notification and reorienting them to the collection page once they hit the save button.

    ![assets/moods-journal/timecode.png](assets/moods-journal/timecode.png)

# **Tutorials**

1. [Possible saving text to canvas](https://stackoverflow.com/questions/31570798/how-to-make-html-div-with-text-over-image-downloadable-savable-for-users)
2. [Npm library to save html to canvas](http://html2canvas.hertzen.com/)
3. [For smoother touch](https://five.agency/cross-platform-javascript-touch-scrolling/)
4. [Merging dev to master in Github](https://medium.com/@amitmutrezas/git-replace-the-master-branch-with-a-feature-branch-eb30e984bd5c)

## **Tutorials for setting up a server**

I have to set up a server since I hosted this on Heroku before and I was told Heroku will occasionally delete stored files.

1. [Setting up a virtual host on digital ocean.](https://itp.nyu.edu/networks/setting-up-a-virtual-host/) Use ***passwd*** rather than ***ssh*** for easier access.
2. Make sure the code works and then git clone your repo to your server
3. Make sure server port is 8080. User [forever](https://www.npmjs.com/package/forever) to keep the server running.
4. GoDaddy setting up DNS to replace the virtual IP host name. Go to My Domains > Domain Settings > DNS. Under Records, add Type A following below.

    ![https://github.com/YitingLiu97/moods/raw/master/assets/godaddyDNS.png](https://github.com/YitingLiu97/moods/raw/master/assets/godaddyDNS.png)

# Next Steps

1. Potential background music 
2. Sharable to social media with friends
3. Allow users to draw on top
4. Background removability for uploaded images

## *Progress*

[For detailed progress, please see my github. ](https://github.com/YitingLiu97/moods)
