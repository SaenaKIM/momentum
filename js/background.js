const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
]

const todaysImage = images[Math.floor(images.length * Math.random())];// round, ceil

const bgImage = document.createElement("img");
bgImage.src = `img/${todaysImage}`;

document.body.style.backgroundImage = `url(img/${todaysImage})`// ; (bgImage);