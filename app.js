/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var dice=[0,0];

var diceVal=0;

var score=[document.querySelector('#score-0'),document.querySelector('#score-1')];

var btnRoll = document.querySelector('.btn-roll');

var btnHold = document.querySelector('.btn-hold');

var btnNew = document.querySelector('.btn-new');

var diceImg = document.querySelector('.dice');

var current0=document.querySelector('#current-0');
var current1=document.querySelector('#current-1');

var playerPanel=[document.querySelector('.player-0-panel'),document.querySelector('.player-1-panel')];


btnRoll.onclick = ()=>{
	console.log('called');
	
	//console.log(playerPanel[0].classList.contains('active'));

	diceVal = (Math.floor(Math.random()*6)) + 1;
	
	if(playerPanel[0].classList.contains('active'))
	{
		
		if(diceVal == 1){
			dice[0]=0;
			current0.textContent=diceVal;
			playerPanel[0].classList.remove('active');
			playerPanel[1].classList.add('active');
		}
		else{
			dice[0] += diceVal;
			diceImg.src = `dice-${diceVal}.png`;
			current0.textContent=diceVal;
		}
		
	} 
	else if(playerPanel[1].classList.contains('active')){
		
		if(diceVal == 1){
			dice[1]=0;
			current1.textContent=diceVal;
			playerPanel[1].classList.remove('active');
			playerPanel[0].classList.add('active');
		}
		else{
			dice[1] += diceVal;
			diceImg.src = `dice-${diceVal}.png`;
			current1.textContent=diceVal;
		}
	}
		
};


btnHold.onclick = ()=>{
	if(playerPanel[0].classList.contains('active')){
		
		score[0].textContent = dice[0];
		if(dice[0]>100){
			document.querySelector('#name-0').textContent = "Winner";
			btnHold.disabled = true;
			btnRoll.disabled = true;
			}
		playerPanel[0].classList.remove('active');
		playerPanel[1].classList.add('active');
	}
	else{
		score[1].textContent = dice[1];
		if(dice[1]>100){
			document.querySelector('#name-1').textContent = "Winner";
			btnHold.disabled = true;
			btnRoll.disabled = true;
			}
		playerPanel[1].classList.remove('active');
		playerPanel[0].classList.add('active');
	}
	
	
};


btnNew.onclick = ()=>{
	diceVal=0;
	current0.textContent = 0;
	current1.textContent = 0;	
	score[0].textContent = 0;
	score[1].textContent = 0;
	dice=[0,0];
	
	document.querySelector('#name-0').textContent = "PLAYER 1";
	document.querySelector('#name-1').textContent = "PLAYER 2";
	
	btnHold.disabled = false;
	btnRoll.disabled = false;
}