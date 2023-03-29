
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function createCard(event) {
  // console.log(event);
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

  return card;
}

const eventdata = [
  {
    imageSrc: "images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg",
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

let imgsrc = './images/anya-rokenroll-yZ-yNUYXEp0-unsplash.jpg'

for (let i = 0; i < data.length; i++) {
    let card = document.createElement('div');
    card.className = 'card';

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = imgsrc;
    img.alt = 'Card image cap';
    card.appendChild(img);

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    card.appendChild(cardBody);

    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = data[i].title;
    cardBody.appendChild(cardTitle);

    let cardText1 = document.createElement('p');
    cardText1.className = 'card-text';
    cardText1.textContent = data[i].text;
    cardBody.appendChild(cardText1);

    let cardText2 = document.createElement('p');
    cardText2.className = 'card-text';
    let smallText = document.createElement('small');
    smallText.className = 'text-muted';
    smallText.textContent = data[i].updated;
    cardText2.appendChild(smallText);
    cardBody.appendChild(cardText2);

    document.body.appendChild(card);
}


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

if (current_page === "revaotsava/try.html") {
  let data = all_start_event_data.filter((item) => item.stars === 3);
  data.map((item) => cardContainer.appendChild(createCard(item)));
} else if (current_page === "revaotsava/star_4.html") {
  let data = all_start_event_data.filter((item) => item.stars === 4);
  data.map((item) => cardContainer.appendChild(createCard(item)));
} else if (current_page === "revaotsava/star_5.html") {
  let data = all_start_event_data.filter((item) => item.stars === 5);
  data.map((item) => cardContainer.appendChild(createCard(item)));
}
