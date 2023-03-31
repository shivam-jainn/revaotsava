
function createCard(event) {
  // console.log(event);
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id",event.id);
  
  // card.appendChild(style);


  const cardImgContainer = document.createElement("div");
  cardImgContainer.classList.add("card-img-container");

  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img");
  cardImg.src = event.imageSrc;

  const cardBadges = document.createElement("div");
  cardBadges.classList.add("card-badges");

  event.badges.forEach((badgeText) => {
    const badge = document.createElement("span");
    badge.classList.add("badge");
    badge.textContent = badgeText;
    cardBadges.appendChild(badge);
  });

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const title = document.createElement("h3");
  title.textContent = event.title;

  const description = document.createElement("p");
  description.textContent = event.description;

  cardContent.appendChild(title);
  cardContent.appendChild(description);

  cardImgContainer.appendChild(cardImg);
  cardImgContainer.appendChild(cardBadges);

  card.appendChild(cardImgContainer);
  card.appendChild(cardContent);

  let popup = document.createElement("div");
  popup.className = "popup";
  popup.style.display = "none";
  
  // Create the close button div element
  let closeBtnDiv = document.createElement("div");
  closeBtnDiv.className = "close-btn-div";
  
  // Create the close button element
  // let closeBtn = document.createElement("button");
  // closeBtn.className = "close";

// Create the button element
let closeButton = document.createElement("button");

// Set the text content of the button to "X"
closeButton.textContent = "X";

// Add a class to the button for styling (optional)
closeButton.className = "closebtn";

// Append the button to the body (or another element)
closeBtnDiv.appendChild(closeButton);

// Add an event listener to the button

// Append the icon to the close button

// Append the close button to the close button div

// Create the popup content div element
let popupContent = document.createElement("div");
popupContent.className = "popup-content";

// Create the h3 element
let h3 = document.createElement("h3");
h3.textContent = "Title 1";

// Create the p element
let p = document.createElement("p");
p.textContent = "DESCRIPTION 1";

// Append the h3 and p elements to the popup content div
popupContent.appendChild(h3);
popupContent.appendChild(p);

// Append the close button div and popup content div to the popup div
popup.appendChild(closeBtnDiv);
popup.appendChild(popupContent);

// Append the popup div to the body
document.getElementById("card-container").appendChild(popup);

// Add an event listener to the close button
// closeBtn.addEventListener("click", function() {
//     popup.style.display = "none";
// });

// Add an event listener to a card element

  card.appendChild(popup);

  return card;
  
}

function CloseListener(event){
  console.log(event.id);
  let popupcard = document.getElementById(event.id);
  let popup = popupcard.querySelector('.popup');
  let closeBtn = popup.querySelector('.closebtn');
  console.log("closed");
  closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

}

function ClickListener(event){

  let popupcard = document.getElementById(event.id);
  let popup = popupcard.querySelector('.popup');

  popupcard.addEventListener("click", function() {
    popup.style.display = "block";
  });
}


function createPopup(event) {
  console.log(event);
//   let popup = document.createElement("div");
//   popup.className = "popup";
//   popup.style.display = "none";
  
//   // Create the close button div element
//   let closeBtnDiv = document.createElement("div");
//   closeBtnDiv.className = "close-btn-div";
  
//   // Create the close button element
//   let closeBtn = document.createElement("button");
//   closeBtn.className = "close";

// // Create the icon element
// let icon = document.createElement("i");
// icon.className = "bi bi-x x-btn";

// // Append the icon to the close button
// closeBtn.appendChild(icon);

// // Append the close button to the close button div
// closeBtnDiv.appendChild(closeBtn);

// // Create the popup content div element
// let popupContent = document.createElement("div");
// popupContent.className = "popup-content";

// // Create the h3 element
// let h3 = document.createElement("h3");
// h3.textContent = "Title 1";

// // Create the p element
// let p = document.createElement("p");
// p.textContent = "DESCRIPTION 1";

// // Append the h3 and p elements to the popup content div
// popupContent.appendChild(h3);
// popupContent.appendChild(p);

// // Append the close button div and popup content div to the popup div
// popup.appendChild(closeBtnDiv);
// popup.appendChild(popupContent);

// // Append the popup div to the body
// document.getElementById("card-container").appendChild(popup);

// // Add an event listener to the close button
// closeBtn.addEventListener("click", function() {
//     popup.style.display = "none";
// });

// // Add an event listener to a card element

// document.getElementById(event.id).addEventListener("click", function() {
//   popup.style.display = "block";
// });


}




const eventdata = [
  {
    imageSrc: "images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    id:"one",
    badges: ["Badge 1", "Badge 2"],
    title: "Event Title",
    description: "Event description goes here.",
  },
  {
    imageSrc: "/images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "Event Title",
    description: "Event description goes here.",
  },
];

const eventdata4star = [
  {
    imageSrc: "images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "4 star 1",
    description: "Event description goes here.",
  },
  {
    imageSrc: "src/public/images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "4star 2",
    description: "Event description goes here.",
  },
];

let data = [
    {
        title: 'Card 1',
        text: 'This is the text for card 1.',
        updated: 'Last updated 1 min ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    {
        title: 'Card 2',
        text: 'This is the text for card 2.',
        updated: 'Last updated 2 mins ago'
    },
    
    // ...
];

// let imgsrc = './images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg'

// for (let i = 0; i < data.length; i++) {
//     let card = document.createElement('div');
//     card.className = 'card';

  
//     let img = document.createElement('img');
//     img.className = 'card-img-top';
//     img.src = imgsrc;
//     img.alt = 'Card image cap';
//     card.appendChild(img);

//     let cardBody = document.createElement('div');
//     cardBody.className = 'card-body';
//     card.appendChild(cardBody);

//     let cardTitle = document.createElement('h5');
//     cardTitle.className = 'card-title';
//     cardTitle.textContent = data[i].title;
//     cardBody.appendChild(cardTitle);

//     let cardText1 = document.createElement('p');
//     cardText1.className = 'card-text';
//     cardText1.textContent = data[i].text;
//     cardBody.appendChild(cardText1);

//     let cardText2 = document.createElement('p');
//     cardText2.className = 'card-text';
//     let smallText = document.createElement('small');
//     smallText.className = 'text-muted';
//     smallText.textContent = data[i].updated;
//     cardText2.appendChild(smallText);
//     cardBody.appendChild(cardText2);

//     document.body.appendChild(card);
// }


const all_start_event_data = [
  {
    stars: 3,
    imageSrc: "images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "Title goes here 3",
    description: "Event description goes here 3.",
  },
  {
    stars: 3,
    imageSrc: "images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "Title goes here 3",
    description: "Event description goes here 3.",
  },
  {
    stars: 4,
    imageSrc: "images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "Title goes here 4",
    description: "Event description goes here 4.",
  },
  {
    stars: 5,
    imageSrc: "images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "Title goes here 5",
    description: "Event description goes here 5.",
  },
  {
    stars: 4,
    imageSrc: "images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "Title goes here 4",
    description: "Event description goes here 4.",
  },
  {
    stars: 3,
    imageSrc: "images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "Title goes here 3",
    description: "Event description goes here 3.",
  },
];

const cardContainer = document.getElementById("card-container");

const current_page = document.location.pathname;

// if (current_page === "/try.html") {
//   let data = all_start_event_data.filter((item) => item.stars === 3);
//   data.map((item) => cardContainer.appendChild(createCard(item)));
// } else if (current_page === "/star_4.html") {
//   let data = all_start_event_data.filter((item) => item.stars === 4);
//   data.map((item) => cardContainer.appendChild(createCard(item)));
// } else if (current_page === "/star_5.html") {
//   let data = all_start_event_data.filter((item) => item.stars === 5);
//   data.map((item) => cardContainer.appendChild(createCard(item)));
// }



// createPopup(all_start_event_data[0]);


// function createCardPopup(event) {
  //   const popup = document.createElement("div");
  //   popup.classList.add("popup");
  //   popup.style.display = "none";
  //   popup.style.position = "fixed";
  //   popup.style.top = "50%";
  //   popup.style.left = "50%";
  //   popup.style.transform = "translate(-50%, -50%)";
  //   popup.style.width = "80%";
  //   popup.style.height = "80%";
  //   popup.style.backgroundColor = "#fff";
  //   popup.style.padding = "20px";
  //   popup.style.boxSizing = "border-box";
    
  //   const styleatt = document.createAttribute("style");
  //   styleatt.value = "display: none";
  //   popup.setAttributeNode(styleatt);
  
  //   const closeButton = document.createElement("button");
  //   closeButton.textContent = "Close";
  //   closeButton.onclick = () => {
  //     popup.style.display = "none";
  //   };
    
  //   const navbar = document.createElement("ul");
  //   navbar.style.listStyleType = "none";
  //   navbar.style.margin = "0";
  //   navbar.style.padding = "0";
    
  //   const infoItem = document.createElement("li");
  //   infoItem.textContent = "Info";
  //   const rulesItem = document.createElement("li");
  //   rulesItem.textContent = "Rules";
    
  //   navbar.appendChild(infoItem);
  //   navbar.appendChild(rulesItem);
    
  //   const title = document.createElement("h3");
  //   title.textContent = event.title;
    
  //   const description = document.createElement("p");
  //   description.textContent = event.description;
    
  //   popup.appendChild(closeButton);
  //   popup.appendChild(navbar);
  //   popup.appendChild(title);
  //   popup.appendChild(description);
    
  //   return popup;
  // }


cardContainer.appendChild(createCard(eventdata[0]));

ClickListener(eventdata[0]);
CloseListener(eventdata[0]);

