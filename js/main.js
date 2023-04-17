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

//Nav bar

el_autohide = document.querySelector(".autohide");

if (el_autohide) {
  var last_scroll_top = 0;
  window.addEventListener("scroll", function () {
    let scroll_top = window.scrollY;
    if (scroll_top < last_scroll_top) {
      el_autohide.classList.remove("scrolled-down");
      el_autohide.classList.add("scrolled-up");
    } else {
      el_autohide.classList.remove("scrolled-up");
      el_autohide.classList.add("scrolled-down");
    }
    last_scroll_top = scroll_top;
  });
  // window.addEventListener
}

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
let progress = 50;
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
  let i = 0;
  for (i = 0; i < 10; i++) {
    if (i != active) {
      const anchor = document.getElementById(i.toString());
      anchor.classList.remove("clickable");
      anchor.classList.add("unclickable");
    } else {
      const anchor = document.getElementById(i.toString());
      anchor.classList.add("clickable");
    }
  }
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
});
nextBtn.addEventListener("click", (e) => {
  progress = progress + 10;
  animate();
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
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Meet the team cara-thingy

// $$("#carousel-1").carousel({ interval: 4000, wrap: true, keyboard: true });

/* 2 carousel */
// $("#carousel-2").carousel({
//   interval: 6000,
//   wrap: true,
//   keyboard: true,
// });

// FAQ
$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this).siblings(".card-header").find(".btn i").html("remove");
    $(this).prev(".card-header").addClass("highlight");
  });
  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this).parent().find(".card-header .btn i").html("remove");
    })
    .on("hide.bs.collapse", function () {
      $(this).parent().find(".card-header .btn i").html("add");
    });
});




var swiper = new Swiper(".team-swiper", {
  navigation: {
    nextEl: ".swiper-button-nexts",
    prevEl: ".swiper-button-prevs",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    250: {
      slidesPerView: 1.2,
      spaceBetween: 80
    },
    // when window width is &gt;= 320px
    300: {
      slidesPerView: 1.2,
      spaceBetween: 0
    },
    // when window width is &gt;= 480px
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    // when window width is &gt;= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    840: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});