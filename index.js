let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item')
const totalSlides = slides.length;

document.getElementById('btn-pre--prev')
.addEventListener("click", function() {
    moveToPrevSlide();
});

document.getElementById('btn-next--next')
.addEventListener("click", function() {
    moveToNextSlide();
})

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('first-item--visible');
        slide.classList.add('first-item--hidden');
    }

    slides[slidePosition].classList.add('first-item--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition() 
}
function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides -1;
    } else {
        slidePosition--;
    }
    updateSlidePosition() 
}