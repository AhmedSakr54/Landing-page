let slideIndex = 1;
const showSlides = (n) => {
    const slides = document.getElementsByClassName("my-slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length)
        slideIndex = 1;
    if (n < 1)
        slideIndex = slides.length;
    
    for (const slide of slides) {
        slide.classList.remove("show-slide");
        slide.classList.add("hide-slide");
    }
    for (const dot of dots) {
        dot.className = dot.className.replace(" active", "");
    }
    slides[slideIndex-1].classList.remove("hide-slide");
    slides[slideIndex-1].classList.add("show-slide");
    dots[slideIndex-1].classList.add("active");
};
showSlides(slideIndex);
const changeSlide = (n) => {
    slideIndex += n;
    showSlides(slideIndex);
};
const currentSlide = (n) => {
    slideIndex = n;
    showSlides(slideIndex);
};
