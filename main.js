var cards = [
{
rank: 'queen',
suit: 'haerts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},

{
rank: 'king',
suit: 'haerts',
cardImage: "images/king-of-hearts.png"
},

{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
var cardThree =cards[1];
var cardFour =cards[3];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


// checkForMatch
function checkForMatch() {
	this.getAttribute(cards[cardId].cardImage);
if (cardsInPlay[0] === cardsInPlay[1]) 
{
  alert("You found a match!");
   } 
  else {
  alert("Sorry, try again.");
 }
}


// flipcard
function flipcard(cardId) {
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId]);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);

checkForMatch();
}


function createBoard()
{
	for (var i=0; i<cards.length; i++) 
	{
    var cardElement = document.createElement("img");
    document.getElementById("demo").setAttribute("src", "images/back.png");
    cardElement.setAttribute('data-id','');
    document.getElementById("game-board").appendChild(cardElement);  
    }
}

createBoard();
