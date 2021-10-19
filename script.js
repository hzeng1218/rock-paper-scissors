function computerPlay(){
	const options = ['rock', 'paper', 'scissors'];
	return options[Math.floor(Math.random()*options.length)];
}
 
function playRound(playerSelection, computerSelection){
	if (playerSelection === computerSelection){
		console.log(`You and the computer played ${playerSelection}. It's a tie`);
	}
	else if ((playerSelection === 'rock' && computerSelection === 'scissors')
			||(playerSelection === 'scissors' && computerSelection === 'paper')
			 ||(playerSelection === 'paper' && computerSelection === 'rock')){
		console.log(`Computer played ${computerSelection}. You win!`);
			 }
	else
		console.log(`Computer played ${computerSelection}. You lose.`);
}	

