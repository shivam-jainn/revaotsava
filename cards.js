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