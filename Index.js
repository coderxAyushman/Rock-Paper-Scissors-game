let randomNumber = Math.random();
let computerMove = null;
function Rock(){

	if (randomNumber >= 0 && randomNumber < 1 / 3){
		computerMove = 'Rock';
	}
	else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = 'Paper';
	}
	else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = 'Scissors';
	}
     
     let result1 = document.getElementById('result')

     
     if (computerMove === 'Rock') {
     	result1 = 'It is a Tie'
     }
     else if (computerMove === 'Paper') {
     	result1 = 'You lose'
     } 
      else if (computerMove === 'Scissors') {
     	result1 = 'You win'
     }

     result.textContent = `you picked Rock. Computer picked ${computerMove}. ${result1}` 
}



function Paper(){
	
	if (randomNumber >= 0 && randomNumber < 1 / 3){
		computerMove = 'Rock';
	}
	else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = 'Paper';
	}
	else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = 'Scissors';
	}
     
     let result1 = document.getElementById('result')

     
     if (computerMove === 'Paper') {
     	result1 = 'It is a Tie'
     }
     else if (computerMove === 'Scissors') {
     	result1 = 'You lose'
     } 
      else if (computerMove === 'Rock') {
     	result1 = 'You win'
     }

     result.textContent = `you picked Paper. Computer picked ${computerMove}. ${result1}` 
}




function Scissors(){

	if (randomNumber >= 0 && randomNumber < 1 / 3){
		computerMove = 'Rock';
	}
	else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
		computerMove = 'Paper';
	}
	else if (randomNumber >= 2 / 3 && randomNumber < 1) {
		computerMove = 'Scissors';
	}
     
     let result1 = document.getElementById('result')

     
     if (computerMove === 'Rock') {
     	result1 = 'You lose'
     }
     else if (computerMove === 'Paper') {
     	result1 = 'You win'
     } 
      else if (computerMove === 'Scissors') {
     	result1 = 'It is a Tie'
     }

     result.textContent = `you picked Scissors. Computer picked ${computerMove}. ${result1}` 
}