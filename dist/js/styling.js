const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
    imgWidth = images[i].getAttribute("img-width");
    images[i].style.maxWidth = imgWidth + 'px';
}