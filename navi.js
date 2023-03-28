// Get all the links in the navbar
const links = document.querySelectorAll('.nav-link');

const threestar = document.getElementById('3star');
const fourstar = document.getElementById('4star');
const fivestar = document.getElementById('5star');


// threestar.addEventListener('click',(e)=>{
//     for (let i = 0; i < eventdata.length; i++) {
//         const card = createCard(eventdata[i]);
//         cardContainer.appendChild(card1);           
//     }
// })


fivestar.addEventListener('click',(e)=>{
    console.log("clicked");
    for (let i = 0; i < eventdata.length; i++) {
        const card = createCard(eventdata[i]);
        cardContainer.appendChild(card);           
    }
})


fourstar.addEventListener('click',(e)=>{
    console.log("clicked");
    for (let i = 0; i < eventdata.length; i++) {
        const card = createCard(eventdata[i]);
        cardContainer.appendChild(card);           
    }
})

threestar.addEventListener('click',(e)=>{
    for (let i = 0; i < eventdata.length; i++) {
        const card = createCard(eventdata[i]);
        cardContainer.appendChild(card);           
    }
})