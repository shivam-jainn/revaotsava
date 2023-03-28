/*---------------------------------------
GALLERY JS
-----------------------------------------*/
const container = document.querySelector(".gallery-container");
const mainSlide = document.querySelector(".main-slide");
const sidebar = document.querySelector(".sidebar");
const downButton = document.querySelector(".down-button");
const upButton = document.querySelector(".up-button");
const slidesCount = mainSlide.querySelectorAll("div").length;
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

const changeSlide = (direction) => {
  const height = container.clientHeight;

  if (direction === "up") {
    activeSlideIndex === slidesCount - 1
      ? (activeSlideIndex = 0)
      : activeSlideIndex++;
  } else if (direction === "down") {
    activeSlideIndex < 1
      ? (activeSlideIndex = slidesCount - 1)
      : activeSlideIndex--;
  }

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
};

downButton.addEventListener("click", () => {
  changeSlide("down");
});

upButton.addEventListener("click", () => {
  changeSlide("up");
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "ArrowDown") {
    changeSlide("down");
  } else if (e.key === "ArrowUp") {
    changeSlide("up");
  }
});
