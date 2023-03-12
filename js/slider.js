function slidesPlugin(activeSlide = 3) {
    const slides = document.querySelectorAll(".slide");
  
    slides[activeSlide].classList.add("active");
  
    for (const slide of slides) {
      slide.addEventListener("click", () => {
        clearActiveClasses();
        slide.classList.add("active");
      });
    }
  
    function clearActiveClasses() {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
  }
  
  slidesPlugin()
  