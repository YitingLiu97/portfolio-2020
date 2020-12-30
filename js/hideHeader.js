let headerContent = document.getElementById("headerContent");

// only show when work is clicked or first loaded 

// window.onload=function(){
//     headerContent.style.display="visible";

// }
if (window.location.pathname == "/") {
    //work selected 
 
    headerContent.style.display = "inline-block";
    console.log("work selected?")
} else {
    headerContent.style.display = "none";

}

//set random playhead time when refreshing 



let vidLength = headerContent.duration;


function getRandomInt(max) {
    // console.log("randomint",Math.floor(Math.random() * Math.floor(max)));

    return Math.floor(Math.random() * Math.floor(max));
}

function setCurTime() {
    headerContent.currentTime = getRandomInt(vidLength);
    // console.log("currenttime",headerContent.currentTime);
}

// headerContent.addEventListener('loadedmetadata', function () {
//     getRandomInt(vidLength);
//     setCurTime();
// });

headerContent.addEventListener('onload', function () {
    getRandomInt(vidLength);
    setCurTime();
});

