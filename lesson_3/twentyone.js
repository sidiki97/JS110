
const readline = require('readline-sync');
/*

Dealer and Player

Dealer - have two randoms cards (one visible, one not visible)
Player - two randoms cards

randomness of cards - 52 deck of cards
(4 types, 2 - 10 value, JACK Queen King - 10s, Ace - 1 or 11)

deck = [
  [Ace (Spacdes), 2-10, JQK],
  [Ace (Club), 2-10, JQK],
  [Ace (Diamond), 2-10, JQK],
  [Ace (Hearts), 2-10, JQK]
]



initialize deck
deal cards
for loop till 2: (x2)
  random card from deck
    save random indices
  and remove that card from deck
    to remove use splice
  add that to array

Checking sums - test
- Adding Ace val check
- this Ace can be either 1 or 11 value
Avoid bust
check sum of cards with 11, if will bust then keep ace as 1


let decision; => HIT or STAY
While decision === HIT:
  hit + sum
  Check your sum
  if bust over 21 - game over - dealer wins
  decision input
If Stay:
  dealer turn
  while sum less than 17
    hit + sum
    check sum
    If bust - game over - player wins


Compare sums:
  Greater wins


Data Structures:
- list for dealer and player
-


*/

const deck = [
  ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
  ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
  ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
  ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
];

let playerCards = [];
let dealerCards = [];

function prompt (message) {
  console.log(`=> ${message}`);
}

function deal(deck, personCards, numCards) {
  for (let deal = 0; deal < numCards; deal += 1) {
    let type = Math.floor(Math.random() * deck.length);
    let number = Math.floor(Math.random() * deck[type].length);
    // add
    personCards.push(deck[type][number]);
    // remove
    deck[type].splice(number, 1);

  }
}

// Deal to players


// console.log(playerCards);
// console.log(dealerCards);

function sumUp(cards) {
  return cards.reduce((accumulator, currentValue) => {
    if (currentValue === 'Ace') {
      if (accumulator + 11 > 21) {
        return accumulator + 1;
      } else {
        return accumulator + 11;
      }
    }

    return accumulator + currentValue;
  }, 0);
}

// someone loss

/*


*/

function loser(cards) {
  if (sumUp(cards) > 21) return true;

  return false;
}

let answer = 'y';

while (answer === 'y') {
  while (!loser(dealerCards) || !loser(playerCards)) {
    deal(deck, playerCards, 2);
    deal(deck, dealerCards, 2);

    console.log(`Dealer has ${dealerCards[0]} and unknown card.`);
    console.log(`You have ${playerCards[0]} and ${playerCards[1]}.`);

    let playerSum = sumUp(playerCards);

    // console.log(playerSum);

    let dealerSum = sumUp(dealerCards);

    // console.log(dealerSum);

    // player move

    prompt('HIT or STAY');
    let decision = readline.question().trim();


    while (decision === 'HIT') {
      deal(deck, playerCards, 1);
      console.log(sumUp(playerCards));
      if (sumUp(playerCards) > 21) {
        console.log('Player lost');
        break;
      }
      prompt('HIT or STAY');
      decision = readline.question().trim();
    }

    if (loser(playerCards)) break;

    while (sumUp(dealerCards) < 17) {
      deal(deck, dealerCards, 1);
      console.log(sumUp(dealerCards));
      if (sumUp(dealerCards) > 21) {
        console.log('Dealer lost');
        break;
      }
    }

    if (loser(dealerCards)) break;

    console.log(`Dealer sum: ${sumUp(dealerCards)}`);
    prompt('HIT or STAY');
    let dealDecision = readline.question().trim();

    while (dealDecision === 'HIT') {
      deal(deck, dealerCards, 1);
      console.log(sumUp(dealerCards));
      if (sumUp(dealerCards) > 21) {
        console.log('Dealer lost');
      }
      prompt('HIT or STAY');
      dealDecision = readline.question().trim();
    }

    if (loser(dealerCards)) break;

    console.log(sumUp(playerCards) >= sumUp(dealerCards) ? 'Player wins' : 'Dealer wins');


  }
  prompt('Play again? (y/n)');
  answer = readline.question().trim();

}


