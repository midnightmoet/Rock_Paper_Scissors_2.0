const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // this was to test if the buttons were working
        // console.log('User choice!', button.id, "computer choice!", computerPlay());
         playRound(button.id, computerPlay());

    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            console.log('You lose! Paper beats rock!');
        } else {
            console.log('You win! Rock beats scissors!');
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You win! Paper beats rock!');
        } else {
            console.log('You lose! Scissors beats paper!');
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            console.log('You lose! Rock beats scissors!');
        } else {
            console.log('You win! Scissors beats paper!');
        }
    } else {
        console.log('Invalid input!');
    }
}

