let slideIndex = 1;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slides = document.querySelectorAll(".my-slide");
const dots = document.querySelectorAll(".dot");

const showSlides = (n) => {
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
    slides[slideIndex - 1].classList.remove("hide-slide");
    slides[slideIndex - 1].classList.add("show-slide");
    dots[slideIndex - 1].classList.add("active");
};

const changeSlide = (n) => {
    slideIndex += n;
    showSlides(slideIndex);
};

const currentSlide = (n) => {
    slideIndex = n;
    showSlides(slideIndex);
};

const addListenersToSlideShowBtns = () => {

    nextBtn.addEventListener("click", () => {
        changeSlide(1);
    });
    prevBtn.addEventListener("click", () => {
        changeSlide(-1);
    });
    for (let i = 0; i < dots.length; i++) {
        const index = i + 1;
        dots[i].addEventListener("click", () => {
            currentSlide(index);
        });
    }
};


addListenersToSlideShowBtns();
showSlides(slideIndex);