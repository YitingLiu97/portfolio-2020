# Detailed Progress

**Accomplishments by 11/15**

1. Manipulating of size, scale, rotation
2. Uploading images from phone
3. Changing fonts for texts

    ![https://github.com/YitingLiu97/moods/raw/master/assets/fonts.png](https://github.com/YitingLiu97/moods/raw/master/assets/fonts.png)

**Process on 11/21/2020 + Problems**

1. Finally achieved to fixe the server and client-side through npm installing express and npm install the rest of the packages
2. Replaced the

    ```jsx
     process.env.PORT 
    ```

    with 

    ```jsx
    const port = process.env.PORT||3000
    ```

     But still do not understand why that is undefined.

3. Added in server.js. Otherwise, it keeps showing 

    ```jsx
    cannot GET app.get('/', function(req, res){ res.sendFile(__dirname+'/'); // change the path });
    ```

**Next Steps From 11/21, Done by 12/5**

1. Allow user to draw on top
2. Save to the canvas (done)
3. localStorage solution to check other saved creations in collections
4. sharable with friends
5. better UI (done)
6. potential for music in the bg
7. Need to fix mobile touch problem for the collections. They can not touch to scroll.

**Accomplishments by 12/5**

1. Able to trash indivial element upon click
2. Save the uploaded image to canvas through [html2canvas](http://html2canvas.hertzen.com/). It has to do with AllowTaint and useCORS. For more details, see [here](https://github.com/niklasvh/html2canvas/issues/722).
3. Change the UI completely to make it minimalistic. Inspiration is originally from the template of [Sanity Sketching kit](https://www.figma.com/community/file/898186441853776318)
4. 
5. The problem of having the collections of posts showing up. Turns out I need to replace the script in package.json

 `"scripts": {
    "start": "node server.js"
  }`

# Updated Notes for Portfolio

# Features

- Manipulating of images in terms of size, scale, rotation
- Uploading images/ Camera capture from phone
- Changing fonts for texts

    ![https://github.com/YitingLiu97/moods/raw/master/assets/fonts.png](https://github.com/YitingLiu97/moods/raw/master/assets/fonts.png)

- minimalistic UI design [Inspiration: [Sanity Sketching kit](https://www.figma.com/community/file/898186441853776318)]
- Trash individual element upon click
- Savable HTML as an image using [html2canvas](http://html2canvas.hertzen.com/)
- Full stack development

# Lessons Learned

- Save the uploaded image to the canvas through [html2canvas](http://html2canvas.hertzen.com/). It has to do with **AllowTaint** and **useCORS**. For more details, see [here](https://github.com/niklasvh/html2canvas/issues/722).
- The problem of having the collections of posts showing up. Turns out I need to replace the script in package.json

     `"scripts": {
        "start": "node server.js"
      }`

### ***Tutorials***

1. [Possible saving text to canvas](https://stackoverflow.com/questions/31570798/how-to-make-html-div-with-text-over-image-downloadable-savable-for-users)
2. [npm library to save html to canvas](http://html2canvas.hertzen.com/)
3. [For smoother touch](https://five.agency/cross-platform-javascript-touch-scrolling/)
4. [Merging dev to master in Github](https://medium.com/@amitmutrezas/git-replace-the-master-branch-with-a-feature-branch-eb30e984bd5c)

# Next Steps

1. potential for music in the bg
2. sharable with friends
3. Allow user to draw on top