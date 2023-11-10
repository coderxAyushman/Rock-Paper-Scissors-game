
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

    const scores = {
	  wins: 0,
	  looses: 0,
	  ties: 0,
     }
     
    if(result1 === 'You win') {scores.wins++;}
    else if (result1 === 'You loose') {scores.looses++;}
    else if (result1 === 'It is a Tie') {scores.ties++;}
     var score = document.getElementById('score');
     result.textContent = `you picked ${playerMove}. Computer picked ${computerMove}. ${result1}.`
      score.textContent = `Wins: ${scores.wins}, Losses: ${scores.looses}, Ties: ${scores.ties}.`                          
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
