let dealerSum = 0;
let yourSum = 0;
let dealerAceCount = 0;
let yourAceCount = 0;
let hidden;
let deck;
let canHit = true;
let dealerCount = 0;
let chips = 50;
let poolChips = 0;
window.onload = function() {
    NextGame();
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);
    document.getElementById("new-game").addEventListener("click", NextGame);
    document.getElementById("start-game").addEventListener("click", startGame);
    document.getElementById("place-bet").addEventListener("click", PlaceBet);
    document.getElementById("your-chips").innerText = chips;
    document.getElementById("pool-chips").innerText = poolChips;
};
function NextGame() {
    buildDeck();
    shuffleDeck();
    ClearHands();
}
function PlaceBet() {
    if (chips <= 0) return;
    if (chips > 0) {
        chips += -5;
        poolChips += 5;
        document.getElementById("your-chips").innerText = chips;
        document.getElementById("pool-chips").innerText = poolChips;
    }
}
function ClearHands() {
    dealerhand = document.getElementById("dealer-cards");
    yourhand = document.getElementById("your-cards");
    while(dealerhand.lastChild.id != "hidden")dealerhand.removeChild(dealerhand.lastChild);
    while(yourhand.lastChild)yourhand.removeChild(yourhand.lastChild);
    dealerCount = 0;
    dealerSum = 0;
    yourSum = 0;
    dealerAceCount = 0;
    yourAceCount = 0;
    canHit = true;
    message = "";
    document.getElementById("hidden").src = "../cards/BACK.png";
    document.getElementById("hidden").hidden = true;
    document.getElementById("dealer-sum").innerText = "";
    document.getElementById("your-sum").innerText = "";
    document.getElementById("results").innerText = "";
}
function buildDeck() {
    let values = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K"
    ];
    let types = [
        "C",
        "D",
        "H",
        "S"
    ];
    deck = [];
    for(let i = 0; i < types.length; i++)for(let j = 0; j < values.length; j++)deck.push(values[j] + "-" + types[i]);
}
function shuffleDeck() {
    for(let i = 0; i < deck.length; i++){
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}
function startGame() {
    document.getElementById("hidden").hidden = undefined;
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    while(dealerCount < 1){
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "../cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
        dealerCount++;
    }
    console.log(dealerSum);
    for(let i = 0; i < 2; i++){
        let cardImg1 = document.createElement("img");
        let card1 = deck.pop();
        cardImg1.src = "../cards/" + card1 + ".png";
        yourSum += getValue(card1);
        yourAceCount += checkAce(card1);
        document.getElementById("your-cards").append(cardImg1);
    }
    console.log(yourSum);
}
function hit() {
    if (!canHit) return;
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "../cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);
    if (reduceAce(yourSum, yourAceCount) > 21) canHit = false;
}
function stay() {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    yourSum = reduceAce(yourSum, yourAceCount);
    canHit = false;
    document.getElementById("hidden").src = "../cards/" + hidden + ".png";
    while(dealerSum < 17){
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "../cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }
    let message1 = "";
    if (yourSum > 21) message1 = "You Lose!";
    else if (dealerSum > 21 || dealerSum > 16 && yourSum > dealerSum) {
        message1 = "You Win!";
        chips += poolChips * 2;
    } else if (dealerSum == yourSum) {
        message1 = "Tie!";
        chips += poolChips;
    } else if (yourSum < dealerSum) message1 = "You Lose!";
    poolChips = 0;
    document.getElementById("your-chips").innerText = chips;
    document.getElementById("pool-chips").innerText = poolChips;
    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("your-sum").innerText = yourSum;
    document.getElementById("results").innerText = message1;
}
function getValue(card) {
    let data = card.split("-");
    let value = data[0];
    if (isNaN(value)) {
        if (value == "A") return 11;
        return 10;
    }
    return parseInt(value);
}
function checkAce(card) {
    if (card[0] == "A") return 1;
    return 0;
}
function reduceAce(playerSum, playerAceCount) {
    while(playerSum > 21 && playerAceCount > 0){
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}

//# sourceMappingURL=index.65314c66.js.map
