
const addListenersToNavBarBtns = () => {
    const sections = document.getElementsByTagName("section");
    const navbarBtns = document.querySelectorAll(".list-item a");
    let k = 0;
    for (let i = sections.length-1; i > 0; i--) {
        const index = i;
        navbarBtns[k].addEventListener("click", () => {
            sections[index].scrollIntoView({behavior: "smooth"});
        });
        k++;
    }
};

addListenersToNavBarBtns();

// slideshow javascript
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slides = document.querySelectorAll(".my-slide");
const dots = document.querySelectorAll(".dot");

let currentSlideIndex = 1;
let prevSlideIndex = 0;
/**
 * Show the next slide in line to the client and hide all other slides
 * @param {int} n 
 */
const showSlides = (n) => {
    // when true that means the next or prev buttons were pressed 
    // Then hide the previous slide
    if (prevSlideIndex > 0) {
        slides[prevSlideIndex - 1].className = slides[prevSlideIndex - 1].className.replace("show-slide", "hide-slide");
        dots[prevSlideIndex - 1].className = dots[prevSlideIndex - 1].className.replace("active", "");
    }
    // when true that means its the end of the slides and we should reset to the first slide
    if (n > slides.length)
        currentSlideIndex = 1;
    // when true that means there is no previous slides and we should go to the last slide 
    if (n < 1)
        currentSlideIndex = slides.length;

    // show the expected slide to the client
    slides[currentSlideIndex - 1].className = slides[currentSlideIndex - 1].className.replace("hide-slide", "show-slide");
    dots[currentSlideIndex - 1].classList.add("active");
    prevSlideIndex = currentSlideIndex;
};

/**
 * Change the currentSlideIndex to the next or prev slide depending on the button pressed (next/prev)
 * @param {int} n 
 */
const changeSlide = (n) => {
    currentSlideIndex += n;
    showSlides(currentSlideIndex);
};

/**
 * Change the currentSlideIndex to the corresponding dot pressed
 * @param {int} n 
 */
const currentSlide = (n) => {
    currentSlideIndex = n;
    showSlides(currentSlideIndex);
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

/**
 * show the first slide in the html and hide the rest
 */
const showFirstSlideAndHideTheRest = () => {
    slides[0].classList.add("show-slide");
    for (let i = 1; i < slides.length; i++) {
        slides[i].classList.add("hide-slide");
    }
};

showFirstSlideAndHideTheRest();
addListenersToSlideShowBtns();
showSlides(currentSlideIndex);