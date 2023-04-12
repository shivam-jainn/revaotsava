const html = `
<!DOCTYPE html>
<!-- Created By CodingNepal -->
<html lang="en" dir="ltr">
   <head>
      <meta charset="utf-8">
      <title>3D Social Media Buttons | CodingNepal</title>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
   </head>
   <body>
      <div class="buttons">
         <div class="row">
            <button class="facebook">
            <span><i class="fab fa-facebook-f"></i></span>
            Facebook</button>
            <button class="instagram">
            <span><i class="fab fa-instagram"></i></span>
            Instagram</button>
         </div>
         <div class="row">
            <button class="twitter">
            <span><i class="fab fa-twitter"></i></span>
            Twitter</button>
            <button class="youtube">
            <span><i class="fab fa-youtube"></i></span>
            YouTube</button>
         </div>
      </div>
   </body>
</html>`;

const parser = new DOMParser();
const doc = parser.parseFromString(html, "text/html");
console.log(doc);
