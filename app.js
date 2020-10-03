/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundTotal, activePlayer;

start();

// Dice rolling

document.querySelector('.btn-roll').addEventListener('click',function(){

    dice=Math.floor((Math.random() * 6) +1);
    
    var selectorDice =document.querySelector('.dice');
    selectorDice.style.display='block';
    selectorDice.src="dice-" +dice+ ".png";

    if (dice!==1) {
        roundTotal+=dice;
        document.getElementById("current-"+activePlayer).textContent=roundTotal;
    } else {
        nextPlayer();
    } 
});

//Holding of Current Score

document.querySelector('.btn-hold').addEventListener('click',function(){
        
    scores[activePlayer]+=roundTotal;
        document.getElementById("score-"+activePlayer).textContent=scores[activePlayer];
        
        //if reaches the win Limit

        if(scores[activePlayer]>=100){

            document.querySelector('#name-'+ activePlayer).textContent= "Winner!";
            document.querySelector(".player-"+ activePlayer +"-panel").classList.add('winner');
            document.querySelector(".player-"+ activePlayer +"-panel").classList.remove('active');
            document.querySelector('.btn-roll').style.display='none';
            document.querySelector('.btn-hold').style.display='none';
            hideDice();
            
        }
        else{
            nextPlayer();
        }
        

});

document.querySelector('.btn-new').addEventListener('click',start);




// Initalization/Reset 

function start() {
    
    //Reseting Values
    
    scores=[0,0];
    roundTotal=0;
    activePlayer=0;

   

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector('.btn-roll').style.display='block';
    document.querySelector('.btn-hold').style.display='block';
    document.querySelector(".player-"+ activePlayer +"-panel").classList.add('active');
    hideDice();
}

//Hidding Dice at start as no one roll the dice yet.

function hideDice(){
    document.querySelector('.dice').style.display='none';
}

// Next Player  

function nextPlayer(){
    document.querySelector(".player-"+activePlayer+"-panel").classList.toggle('active');
    roundTotal = 0;
    document.getElementById("current-"+activePlayer).textContent=roundTotal;
    activePlayer === 0 ? activePlayer=1 : activePlayer=0;
        document.querySelector(".player-"+activePlayer+"-panel").classList.toggle('active');
        hideDice();
}