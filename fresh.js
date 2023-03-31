import { eventData3Star, eventData4Star, eventData5Star } from "./eventData.js";

// const cardData = [
//   {
//     title: "Title 1",
//     description: "Description 1",
//     imageSrc: "images/a-l-ya631mqQ7Ng-unsplash.jpg",
//     badgeText: ["badge1", "badge2", "badge3"],
//   },
//   {
//     title: "Title 2",
//     description: "Description 2",
//     imageSrc: "images/a-l-ya631mqQ7Ng-unsplash.jpg",
//     badgeText: ["badge1", "badge2", "badge3"],
//   },
//   // add more card objects here
// ];

const cardsContainer = document.getElementById("card-container");

function createCard(cardData) {
  const cards = document.createElement("div");
  cards.classList.add("card");

  const cardImgContainer = document.createElement("div");
  cardImgContainer.classList.add("card-img-container");

  const cardImgDiv = document.createElement("div");
  cardImgDiv.classList.add("card-img");

  const cardImg = document.createElement("img");
  cardImg.src = cardData.imageSrc;
  cardImg.classList.add("card-img");

  cardImgDiv.appendChild(cardImg);
  cardImgContainer.appendChild(cardImgDiv);

  const cardBadges = document.createElement("div");
  cardBadges.classList.add("card-badges");

  cardData.badgeText.map((item) => {
    const badge = document.createElement("div");
    badge.classList.add("badge");
    badge.textContent = item;

    cardBadges.appendChild(badge);
  });

  cardImgContainer.appendChild(cardBadges);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = cardData.title;

  cardInfo.appendChild(cardTitle);

  const cardDesc = document.createElement("div");
  cardDesc.classList.add("card-desc");
  cardDesc.innerHTML = cardData.description;

  cardInfo.appendChild(cardDesc);

  cards.appendChild(cardImgContainer);
  cards.appendChild(cardInfo);

  cardsContainer.appendChild(cards);
}

function three(data) {
  data.forEach((cardData) => {
    createCard(cardData);
  });
}

function showPopup(cardData) {
  // create and display the popup here
  // for example:
  console.log(cardData);

  const popup = document.createElement("div");
  popup.classList.add("popup");

  const closeBtnDiv = document.createElement("div");
  closeBtnDiv.classList.add("close-btn-div");

  const CloseBtn = document.createElement("button");
  CloseBtn.classList.add("close");
  CloseBtn.innerHTML = "X";

  closeBtnDiv.appendChild(CloseBtn);

  popup.appendChild(closeBtnDiv);

  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");

  const popupTitle = document.createElement("h3");
  popupTitle.innerHTML = cardData.title;

  const popupDesc = document.createElement("p");
  popupDesc.innerHTML = cardData.desc;

  popup.appendChild(popupTitle);
  popup.appendChild(popupDesc);
  popup.appendChild(popupContent);

  CloseBtn.addEventListener("click", () => {
    // close the popup when the close button is clicked
    popup.remove();
  });

  document.body.appendChild(popup);
}

// idk wth is this , this is from chatgpt .
cardsContainer.addEventListener("click", (event) => {
  const eventdesc = event.target.closest(".card");
  // console.log(eventdesc);
  if (eventdesc) {
    const cardIndex = [...cardsContainer.children].indexOf(eventdesc);
    showPopup(cardData[cardIndex]);
  }
});

// mapping pages
const current_page = document.location.pathname;

console.log(current_page);
if (current_page === "/try.html") {
  three(eventData3Star);
} else if (current_page === "/star_4.html") {
  three(eventData4Star);
} else {
  three(eventData5Star);
}
