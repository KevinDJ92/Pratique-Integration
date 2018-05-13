document.addEventListener("DOMContentLoaded", function (event) {
   
     // initialise
    let slideTimer = null;
    let boolStart = false;
    let currentSlide = 1;

    let leftArrow = document.getElementById("left-arrow");
    let rightArrow = document.getElementById("right-arrow");

    leftArrow.addEventListener('click', sliderLeft);
    rightArrow.addEventListener('click', sliderRight);

     let slides = document.getElementsByClassName("slides");
     let slideText = document.getElementsByClassName("slide-text");
     let slideBtn = document.getElementsByClassName("slide-btn");
   
    for (let i = 0; i < slideBtn.length; i++){
        slideBtn[i].addEventListener('click', sliderButtons);
    }

    // Partir le carousel
    slideTimer = autoSlide(false);

    boolStart = true;
    manuallyChangeSlide(currentSlide);

    // --- START slider functions //
    // ----- Boutons et flèches pour le slider ---- //
    function sliderLeft() {
        currentSlide -= 1;
        
        manuallyChangeSlide(currentSlide);
    }

    function sliderRight() {
        currentSlide += 1;

        manuallyChangeSlide(currentSlide);
    }

     function manuallyChangeSlide(currentSlide){
         // Empacher une erreur lors de l'initialization 
        if (boolStart) {
            // Arrêter et repartir le carousel
            slideTimer = autoSlide(true);
            renderSlides(currentSlide);
        }
     }

    function sliderButtons(e){
        let elementId = e.target.id;

        let commonIdString = "slide-btn-";
        let startIndex = commonIdString.length;

        let currentSlide = elementId.substring(startIndex, startIndex + 1);
       
        if (boolStart) {
            slideTimer = autoSlide(true);
            renderSlides(currentSlide);
        }
    }

    function renderSlides(index) {
        // Cacher toutes les images et les textes
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slideText[i].style.display = "none";
            slideBtn[i].style.backgroundColor = "#ffffff";
        }

        let currentSlide = adjustForSlideLimits(slides, index);

        slides[currentSlide - 1].style.display = "block";
        slideText[currentSlide - 1].style.display = "block";
        slideBtn[currentSlide - 1].style.backgroundColor = "#f26223";
    }

    function adjustForSlideLimits(slides, index) {
        currentSlide = index;

        if (index > slides.length) {
            currentSlide = 1;
        }
        else if (index < 1) {
            currentSlide = slides.length;
        }

        return currentSlide;
    }

    function autoSlide(isRestart) { 
        if (isRestart){
            clearInterval(slideTimer);
            slideTimer = null;
            slideTimer = autoSlide();
        }
        else {
            slideTimer = setInterval(function () {
                sliderRight();
            }, 3000);
        }
    
        return slideTimer;
    }
      // --- END slider functions --- //
});