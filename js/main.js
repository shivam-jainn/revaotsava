$(window).load(function () {
  $(".preloader").fadeOut("slow");
});

/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {
  "use strict";
  // js FOR GYRO
  //OUTLINE DIMENSION AND CENTER
  (function () {
    function centerInit() {
      var sphereContent = $(".sphere"),
        sphereHeight = sphereContent.height(),
        parentHeight = $(window).height(),
        topMargin = (parentHeight - sphereHeight) / 2;

      sphereContent.css({
        "margin-top": topMargin + "px",
      });

      var heroContent = $(".hero"),
        heroHeight = heroContent.height(),
        heroTopMargin = (parentHeight - heroHeight) / 2;

      heroContent.css({
        "margin-top": heroTopMargin + "px",
      });
    }

    $(document).ready(centerInit);
    $(window).resize(centerInit);
  })();

  // Init effect
  $("#scene").parallax();
}

/* END OF GYRO ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function () {
  initializeSite();
  (function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
  })();
});
/* END ------------------------------------------------------- */

///FAQ section JS

let question = document.querySelectorAll(".questionfaq");

question.forEach((question) => {
  question.addEventListener("click", (event) => {
    const active = document.querySelector(".questionfaq.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

// //JQuery for about section
// $(document).ready(function() {
//   // Function to check if an element is in view
//   function isInView(elem) {
//     var windowTop = $(window).scrollTop();
//     var windowBottom = windowTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).outerHeight();
//     return ((elemBottom >= windowTop) && (elemTop <= windowBottom));
//   }

//   // Function to handle the scroll event
//   function handleScroll() {
//     var section = $('.responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.img-one');
//     var img = $('.bg-image');
//     if (isInView(section)) {
//       section.addClass('in-view');
//     } else {
//       section.removeClass('in-view');
//     }
//   }

// Bind the scroll event to the handleScroll function
//   $(window).on('scroll', handleScroll);

//   // Trigger the handleScroll function on page load
//   handleScroll();
// });

// $(document).ready(function () {
//   // Function to check if an element is in view
//   function isInView(elem) {
//     var windowTop = $(window).scrollTop();
//     var windowBottom = windowTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).outerHeight();
//     return elemBottom >= windowTop && elemTop <= windowBottom;
//   }

//   // Function to handle the scroll event
//   function handleScroll() {
//     var section = $(
//       ".responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.content-one"
//     );

//     if (isInView(section)) {
//       section.addClass("in-view");
//     } else {
//       section.removeClass("in-view");
//     }
//   }

//   // Bind the scroll event to the handleScroll function
//   $(window).on("scroll", handleScroll);

//   // Trigger the handleScroll function on page load
//   handleScroll();
// });

// $(document).ready(function () {
//   // Function to check if an element is in view
//   function isInView(elem) {
//     var windowTop = $(window).scrollTop();
//     var windowBottom = windowTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).outerHeight();
//     return elemBottom >= windowTop && elemTop <= windowBottom;
//   }

//   // Function to handle the scroll event
//   function handleScroll() {
//     var section = $(
//       ".responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.img-two"
//     );
//     var img = $(".bg-image2");
//     if (isInView(section)) {
//       section.addClass("in-view");
//     } else {
//       section.removeClass("in-view");
//     }
//   }

//   // Bind the scroll event to the handleScroll function
//   $(window).on("scroll", handleScroll);

//   // Trigger the handleScroll function on page load
//   handleScroll();
// });

// $(document).ready(function () {
//   // Function to check if an element is in view
//   function isInView(elem) {
//     var windowTop = $(window).scrollTop();
//     var windowBottom = windowTop + $(window).height();
//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).outerHeight();
//     return elemBottom >= windowTop && elemTop <= windowBottom;
//   }

//   // Function to handle the scroll event
//   function handleScroll() {
//     var section = $(
//       ".responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.content-two"
//     );

//     if (isInView(section)) {
//       section.addClass("in-view");
//     } else {
//       section.removeClass("in-view");
//     }
//   }

//   // Bind the scroll event to the handleScroll function
//   $(window).on("scroll", handleScroll);

//   // Trigger the handleScroll function on page load
//   handleScroll();
// });

//OUTLINE DIMENSION AND CENTER

/* END ------------------------------------------------------- */

// const card = document.getElementById("cardWrap");

// window.addEventListener("mousemove", (e) => {
//   let x = e.pageX - innerWidth / 2;
//   let y = e.pageY - innerHeight / 2;
//   card.style.transform = `translate(${x / 40}px, ${y / 40}px)`;
// });
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

/*--------------------
EVENT SLIDER JS
--------------------*/

/*--------------------
Vars
--------------------*/
let progress = 10;
let startX = 10;
let active = 0;
let isDown = false;
let windowWidth = window.innerWidth;
var WIDTH_LIMIT = 820;
/*--------------------
Contants
--------------------*/
const speedWheel = 0.02;
const speedDrag = -0.1;

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) =>
  array.map((_, i) =>
    index === i ? array.length : array.length - Math.abs(index - i)
  );

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll(".epic-carousel-item");
const $cursors = document.querySelectorAll(".cursor");

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index];
  item.style.setProperty("--zIndex", zIndex);
  item.style.setProperty("--active", (index - active) / $items.length);
};

/*--------------------
Control Buttons
--------------------*/
const prevBtn = document.getElementById("slider-previous");
const nextBtn = document.getElementById("slider-next");

/*--------------------
Animate
--------------------*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100));
  active = Math.floor((progress / 100) * ($items.length - 1));

  $items.forEach((item, index) => displayItems(item, index, active));
};
animate();

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
  item.addEventListener("click", () => {
    progress = (i / $items.length) * 100 + 10;
    animate();
    // console.log("progress=" + progress);
  });
});

/*--------------------
Control buttanssss 😎
--------------------*/

prevBtn.addEventListener("click", (e) => {
  progress = progress - 10;
  animate();
  if (progress <= 0) {
    progress = 10;
  }

  console.log("progress=" + progress);
  console.log(windowWidth);
});
nextBtn.addEventListener("click", (e) => {
  progress = progress + 10;
  animate();
  console.log("progress=" + progress);
});

/*--------------------
Handlers
--------------------*/
const handleWheel = (e) => {
  if (windowWidth <= WIDTH_LIMIT) {
    const wheelProgress = e.deltaY * speedWheel;
    progress = progress + wheelProgress;
    animate();
  }
};

const handleMouseMove = (e) => {
  if (windowWidth <= WIDTH_LIMIT) {
    if (e.type === "mousemove") {
      $cursors.forEach(($cursor) => {
        $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }
    if (!isDown) return;
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX) * speedDrag;
    progress = progress + mouseProgress;
    startX = x;
    animate();
  }
};

const handleMouseDown = (e) => {
  if (windowWidth <= WIDTH_LIMIT) {
    isDown = true;
    startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  }
};

const handleMouseUp = () => {
  if (windowWidth <= WIDTH_LIMIT) {
    isDown = false;
  }
};

/*--------------------
Listeners
--------------------*/
document.addEventListener("mousewheel", handleWheel);
document.addEventListener("mousedown", handleMouseDown);
document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("mouseup", handleMouseUp);
document.addEventListener("touchstart", handleMouseDown);
document.addEventListener("touchmove", handleMouseMove);
document.addEventListener("touchend", handleMouseUp);
/*----------------------------------------------------------------------------------*/

// Animate on scroll JS:
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Meet the team cara-thingy

// $$("#carousel-1").carousel({ interval: 4000, wrap: true, keyboard: true });

/* 2 carousel */ $("#carousel-2").carousel({
  interval: 6000,
  wrap: true,
  keyboard: true,
});
