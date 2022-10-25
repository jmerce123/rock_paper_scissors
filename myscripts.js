
function getComputerChoice(){ 
    const randomChoice = Math.floor(Math.random() * 3); 
 if ( randomChoice === 0){return ('rock')}
    else if (randomChoice === 1){return ('paper')}
    else if (randomChoice === 2){return ('scissors')}}; 

    function playRound(playerSelection, computerSelection){
 if (playerSelection === 'rock' && computerSelection === "paper" ){return 'You lose! Paper beats rock'}
 else if (playerSelection === 'paper' && computerSelection === 'paper'){return 'Tie'}
 else if (playerSelection === 'scissors' && computerSelection === 'paper'){return 'You win! Scissors beats paper'}
 else if (playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'scissors'){return "Tie"
 } else if (playerSelection === 'paper' && computerSelection === 'rock'){return 'You Win! Paper beats rock'}
 else if (playerSelection === 'scissors' && computerSelection === 'rock'){return 'You lose! Rock beats scissors'}
 else if (playerSelection === 'rock' && computerSelection === 'scissors'){return 'You Win!, Rock beats Scissors'}
 else if (playerSelection === 'paper' && computerSelection === 'scissors'){return 'You lose!, Scissors beats paper'}

    } 

    const computerSelection = getComputerChoice();
