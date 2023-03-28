
function showPopup() {
    document.getElementById("popup").style.display = "block";
}


function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function createCard(event) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.onclick = showPopup;
  
    const cardImgContainer = document.createElement("div");
    cardImgContainer.classList.add("card-img-container");
  
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img");
    cardImg.src = event.imageSrc;
    
    const cardBadges = document.createElement("div");
    cardBadges.classList.add("card-badges");
  
    event.badges.forEach(badgeText => {
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
  
    return card;
  }

  const eventdata = [{
    imageSrc: "images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "Event Title",
    description: "Event description goes here."
  },
  {

    imageSrc: "src/public/images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
    badges: ["Badge 1", "Badge 2"],
    title: "Event Title",
    description: "Event description goes here."
  },
  

  
]
  
  const cardContainer = document.getElementById("card-container");
  const card = createCard(eventdata[0]);
  cardContainer.appendChild(card);
  
  const card1 = createCard(eventdata[1]);
  cardContainer.appendChild(card1);

