document.addEventListener('DOMContentLoaded', function() {
    let headerContent = document.getElementById("headerContent");

    // Adjust display based on the current path
    if (window.location.pathname == "/") {
        headerContent.style.display = "inline-block"; // Corrected from 'visible' to 'inline-block'
        console.log("Home page selected?");
    } else {
        headerContent.style.display = "none";
    }

    // Set random playhead time when refreshing
    // This event ensures that we access video duration only after it's available
    headerContent.addEventListener('loadedmetadata', function () {
        let vidLength = headerContent.duration; // Moved inside to ensure duration is available

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        function setCurTime() {
            headerContent.currentTime = getRandomInt(vidLength);
        }

        setCurTime(); // Call setCurTime() to adjust the video's current time
    });
});
