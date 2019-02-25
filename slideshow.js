let slideNum = 0; // Will be used to cycle through images
let images = []; // Array for holding images

images[0] = "pup1.jpeg";
images[1] = "pup2.jpeg";
images[2] = "pup3.jpeg";
images[3] = "pup4.jpeg";
images[4] = "pup5.jpeg";

document.slide.src = images[0];

function moveForward() {
    if (slideNum == 4) {
        slideNum = 0;
        document.slide.src = images[slideNum];
    }
    else {
        slideNum++;
        document.slide.src = images[slideNum];
    }
    
}

function moveBack() {
    if (slideNum == 0) {
        slideNum = 4
        document.slide.src = images[slideNum];
    }
    else {
        slideNum--;
        document.slide.src = images[slideNum];
    }
    
}