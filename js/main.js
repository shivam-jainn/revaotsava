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
