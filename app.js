const addListenersToNavBarBtns = () => {
    const sections = document.getElementsByTagName("section");
    const navbarBtns = document.querySelectorAll(".list-item a");
    let k = 0;
    for (let i = sections.length - 1; i > 0; i--) {
        const index = i;
        navbarBtns[k].addEventListener("click", () => {
            sections[index].scrollIntoView({
                behavior: "smooth"
            });
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
        slides[prevSlideIndex - 1].className = slides[prevSlideIndex - 1].className.replace("show-item", "hide-item");
        dots[prevSlideIndex - 1].className = dots[prevSlideIndex - 1].className.replace("active", "");
    }
    // when true that means its the end of the slides and we should reset to the first slide
    if (n > slides.length)
        currentSlideIndex = 1;
    // when true that means there is no previous slides and we should go to the last slide 
    if (n < 1)
        currentSlideIndex = slides.length;

    // show the expected slide to the client
    slides[currentSlideIndex - 1].className = slides[currentSlideIndex - 1].className.replace("hide-item", "show-item");
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
    slides[0].classList.add("show-item");
    for (let i = 1; i < slides.length; i++) {
        slides[i].classList.add("hide-item");
    }
};

showFirstSlideAndHideTheRest();
addListenersToSlideShowBtns();
showSlides(currentSlideIndex);



const addDropDownOnMobileSize = () => {
    let isWindowResized = false;
    let numTimesDropBtnClicked = 0;
    const dropBtn = document.querySelector(".dropbtn");
    const navbar = document.querySelector(".navbar");
    const navbarList = document.querySelector(".navbar ul");
    
    const addWindowResizingEvent = () => {
        if (window.innerWidth <= 850) {
            if (!isWindowResized) {
                navbar.classList.add("dropdown");
                navbarList.classList.add("hide-item");
                navbarList.classList.add("dropdown-content");
                dropBtn.className = dropBtn.className.replace("hide-item", "show-item");
            }
            isWindowResized = true;
        } else {
            navbar.classList.remove("dropdown");
            navbarList.classList.remove("hide-item");
            navbarList.classList.remove("dropdown-content");
            dropBtn.className = dropBtn.className.replace("show-item", "hide-item");
            isWindowResized = false;
            numTimesDropBtnClicked = 0;
        }
    };
    window.addEventListener("resize", addWindowResizingEvent);
    dropBtn.addEventListener("click", () => {
        if (numTimesDropBtnClicked % 2 === 0)
        navbarList.classList.remove("hide-item");
        else
        navbarList.classList.add("hide-item");
        numTimesDropBtnClicked++;
    });
    
};

addDropDownOnMobileSize();