const addBtn = document.querySelector('.add');
const cardsContainer = document.querySelector('.cards-container');

let cards = [];

function cardId() {
    return Math.floor(Math.random() * 50);
}


function cardRender() {
    let result = '';
    for (let i = 0; i < cards.length; i++) {
        result += `<div class="card-container">
                         <div class="card-style"></div>
                         <img class="image" src="https://random.imagecdn.app/500/500"> 
                         <p class="cn">Card <br> Name </p>                      
                         <p class="cd">card <br> description</p> 
                             <div class="effect"><button class="delete" onclick="deleteCard(${cards[i].id})">
                            </button>                          
                             </div>                                                
                   </div>`
    }
    cardsContainer.innerHTML = result;

}

addBtn.addEventListener('click', () => {
    cards.push(getRandomCard())
    cardRender()
});


function getRandomCard() {
    const name = 'Card Name';
    const secondName = 'card description';
    return {
        cn: name,
        cd: secondName,
        id: cardId(),
    }


}

function deleteCard(cardId) {
    cards = cards.filter(el => el.id !== cardId);
    cardRender();

}

// <img class="urna" alt="" src="delete.png">