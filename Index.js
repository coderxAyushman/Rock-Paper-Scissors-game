 let scores = JSON.parse(localStorage.getItem('scores')) || {
      wins: 0,
      losses: 0,
      ties: 0
 } 

function resetScore(){
	scores.wins = 0
	scores.losses = 0
	scores.ties = 0
	localStorage.removeItem('scores');
	document.location.reload(); 
}

function playGame(playerMove){
	let computerMove = pickcomputerMove();

	 let result1 = document.getElementById('result');
     
     if (playerMove === 'Rock') {
     	if (computerMove === 'Rock') {result1 = 'It is a Tie'}
     	else if (computerMove === 'Paper') {result1 = 'You loose'}
        else if (computerMove === 'Scissors') {result1 = 'You win'}
     }


    else if (playerMove === 'Paper') {
     	if (computerMove === 'Paper') {result1 = 'It is a Tie'}
     	else if (computerMove === 'Scissors') {result1 = 'You loose'}
        else if (computerMove === 'Rock') {result1 = 'You win'}
     }


    else if (playerMove === 'Scissors') {
     	if (computerMove === 'Scissors') {result1 = 'It is a Tie'}
     	else if (computerMove === 'Rock') {result1 = 'You loose'}
        else if (computerMove === 'Paper') {result1 = 'You win'}
     }

    if(result1 === 'You win') {scores.wins++;}
    else if (result1 === 'You loose') {scores.losses++;}
    else if (result1 === 'It is a Tie') {scores.ties++;}
    
    localStorage.setItem('scores', JSON.stringify(scores));

     var score = document.getElementById('score');
     var score1 = document.getElementById('score1');
     var score2 = document.getElementById('score2');
     result.textContent = `you picked ${playerMove}. Computer picked ${computerMove}. ${result1}.`;
      score.textContent = `${scores.wins},`;
      score1.textContent = `${scores.losses},`;
      score2.textContent = `${scores.ties}.`;                          
}

function pickcomputerMove(){
	const randomNumber = Math.random();
    let computerMove = '';


	if (randomNumber >= 0 && randomNumber < 1 / 3){
		computerMove = 'Rock';
	}
	else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = 'Paper';
	}
	else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = 'Scissors';
	}

	return computerMove;
}
