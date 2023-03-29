$(window).load(function () {
  $(".preloader").fadeOut("slow");
});

/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {
  "use strict";

  //JQuery for about section
  $(document).ready(function() {
    // Function to check if an element is in view
    function isInView(elem) {
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).outerHeight();
      return ((elemBottom >= windowTop) && (elemTop <= windowBottom));
    }
  
    // Function to handle the scroll event
    function handleScroll() {
      var section = $('.responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.img-one');
      var img = $('.bg-image');
      if (isInView(section)) {
        section.addClass('in-view');
      } else {
        section.removeClass('in-view');
      }
    }
  
    // Bind the scroll event to the handleScroll function
    $(window).on('scroll', handleScroll);
  
    // Trigger the handleScroll function on page load
    handleScroll();
  });

  $(document).ready(function() {
    // Function to check if an element is in view
    function isInView(elem) {
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).outerHeight();
      return ((elemBottom >= windowTop) && (elemTop <= windowBottom));
    }
  
    // Function to handle the scroll event
    function handleScroll() {
      var section = $('.responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.content-one');
      
      if (isInView(section)) {
        section.addClass('in-view');
      } else {
        section.removeClass('in-view');
      }
    }
  
    // Bind the scroll event to the handleScroll function
    $(window).on('scroll', handleScroll);
  
    // Trigger the handleScroll function on page load
    handleScroll();
  });

  $(document).ready(function() {
    // Function to check if an element is in view
    function isInView(elem) {
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).outerHeight();
      return ((elemBottom >= windowTop) && (elemTop <= windowBottom));
    }
  
    // Function to handle the scroll event
    function handleScroll() {
      var section = $('.responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.img-two');
      var img = $('.bg-image2');
      if (isInView(section)) {
        section.addClass('in-view');
      } else {
        section.removeClass('in-view');
      }
    }
  
    // Bind the scroll event to the handleScroll function
    $(window).on('scroll', handleScroll);
  
    // Trigger the handleScroll function on page load
    handleScroll();
  });

  $(document).ready(function() {
    // Function to check if an element is in view
    function isInView(elem) {
      var windowTop = $(window).scrollTop();
      var windowBottom = windowTop + $(window).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).outerHeight();
      return ((elemBottom >= windowTop) && (elemTop <= windowBottom));
    }
  
    // Function to handle the scroll event
    function handleScroll() {
      var section = $('.responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-6.wk-ipadp-12.content-two');
      
      if (isInView(section)) {
        section.addClass('in-view');
      } else {
        section.removeClass('in-view');
      }
    }
  
    // Bind the scroll event to the handleScroll function
    $(window).on('scroll', handleScroll);
  
    // Trigger the handleScroll function on page load
    handleScroll();
  });
  

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
/* END ------------------------------------------------------- */

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

$("#countdown").countdown({
  date: "December 14, 2019 18:03:26",
  render: function (data) {
    var el = $(this.el);
    el.empty()
      //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
      .append(
        "<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div>"
      )
      .append(
        "<div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div>"
      )
      .append(
        "<div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div>"
      )
      .append(
        "<div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>"
      );
  },
});
const card = document.getElementById("cardWrap");

window.addEventListener("mousemove", (e) => {
  let x = e.pageX - innerWidth / 2;
  let y = e.pageY - innerHeight / 2;
  card.style.transform = `translate(${x / 40}px, ${y / 40}px)`;
});
