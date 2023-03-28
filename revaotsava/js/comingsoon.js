// $(".email").on("change keyup paste", function () {
//   if ($(this).val()) {
//     $(".icon-paper-plane").addClass("next");
//   } else {
//     $(".icon-paper-plane").removeClass("next");
//   }
// });

// $(".next-button").hover(function () {
//   $(this).css("cursor", "pointer");
// });

// $(".next-button.email").click(function () {
//   console.log("Something");
//   $(".email-section").addClass("fold-up");
//   $(".password-section").removeClass("folded");
// });

// $(".password").on("change keyup paste", function () {
//   if ($(this).val()) {
//     $(".icon-lock").addClass("next");
//   } else {
//     $(".icon-lock").removeClass("next");
//   }
// });

// $(".next-button").hover(function () {
//   $(this).css("cursor", "pointer");
// });

// $(".next-button.password").click(function () {
//   console.log("Something");
//   $(".password-section").addClass("fold-up");
//   $(".repeat-password-section").removeClass("folded");
// });

// $(".repeat-password").on("change keyup paste", function () {
//   if ($(this).val()) {
//     $(".icon-repeat-lock").addClass("next");
//   } else {
//     $(".icon-repeat-lock").removeClass("next");
//   }
// });

// $(".next-button.repeat-password").click(function () {
//   console.log("Something");
//   $(".repeat-password-section").addClass("fold-up");
//   $(".success").css("marginTop", 0);
// });

// let index = 0,
//   interval = 1000;

// const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// const animate = (star) => {
//   star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
//   star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

//   star.style.animation = "none";
//   star.offsetHeight;
//   star.style.animation = "";
// };

// let timeouts = [],
//   intervals = [];

// const magic = document.querySelector(".magic");

// magic.onmouseenter = () => {
//   let index = 1;

//   for (const star of document.getElementsByClassName("magic-star")) {
//     timeouts.push(
//       setTimeout(() => {
//         animate(star);

//         intervals.push(setInterval(() => animate(star), 1000));
//       }, index++ * 300)
//     );
//   }
// };

// magic.onmouseleave = onMouseLeave = () => {
//   for (const t of timeouts) clearTimeout(t);
//   for (const i of intervals) clearInterval(i);

//   timeouts = [];
//   intervals = [];
// };
