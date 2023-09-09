// let r = ['rock', 'Rock', 'ROCK'];
// let s = ['scissors', 'Scissors', 'SCISSORS'];
// let p = ['paper', 'Paper', 'PAPER'];
let r = 'rock';
let s = 'scissors';
let p = 'paper';
let start;
let user1;
let user2;
let resultUser1 = 0;
let resultUser2 = 0;
let contExit;

start = alert('Let us start the game!');

while (resultUser1 < 3 && resultUser2 < 3) {
    
    while (true) {

        user1 = prompt('User1, your choise: rock, scissors, paper.').toLowerCase();

        if (user1 !== r && user1 !== s && user1 !== p) {
            console.log('Incorrectly entered data');
            alert('Incorrectly entered data');
            continue;
        } else {
            break;
        }
    }

    while (true) {

        user2 = prompt('User2, your choise: rock, scissors, paper.').toLowerCase();

        if (user2 !== r && user2 !== s && user2 !== p) {
            console.log('Incorrectly entered data');
            alert('Incorrectly entered data');
            continue;
        } else {
            break;
        }
    }

    if (user1 === s && user2 === s) {
        console.log('Dead heat. Try again.');
        alert('Dead heat. Try again.');
    } else if (user1 === s && user2 === p) {
        resultUser1 += 1;
        console.log('Round winner - User1! Score:' + resultUser1 + ':' + resultUser2);
        alert('Round winner - User1! Score:' + resultUser1 + ':' + resultUser2);
    } else if (user1 === p && user2 === s) {
        resultUser2 += 1;
        console.log('Round winner - User2!. Score:' + resultUser1 + ':' + resultUser2);
        alert('Round winner - User2! Score:' + resultUser1 + ':' + resultUser2);
    } else if (user1 === p && user2 === p) {
        console.log('Dead heat. Try again.');
        alert('Dead heat. Try again.');
    } else if (user1 === p && user2 === r) {
        resultUser1 += 1;
        console.log('Round winner - User1! Score:' + resultUser1 + ':' + resultUser2);
        alert('Round winner - User1! Score:' + resultUser1 + ':' + resultUser2);
    } else if (user1 === r && user2 === p) {
        resultUser2 += 1;
        console.log('Round winner - User2! Score:' + resultUser1 + ':' + resultUser2);
        alert('Round winner - User2! Score:' + resultUser1 + ':' + resultUser2);
    } else if (user1 === r && user2 === r) {
        console.log('Dead heat. Try again.');
        alert('Dead heat. Try again.');
    } else if (user1 === r && user2 === s) {
        resultUser1 += 1;
        console.log('Round winner - User1! Score:' + resultUser1 + ':' + resultUser2);
        alert('Round winner - User1! Score:' + resultUser1 + ':' + resultUser2);
    } else if (user1 === s && user2 === r) {
        resultUser2 += 1;
        console.log('Round winner - User2! Score:' + resultUser1 + ':' + resultUser2);
        alert('Round winner - User2! Score:' + resultUser1 + ':' + resultUser2);
    }

    if (resultUser1 === 3 && resultUser2 < 3) {
        console.log('Game over! Winner - User1! Congratulations!');
        alert('Game over! Winner - User1! Congratulations!');
        break;
    } else if (resultUser2 === 3 && resultUser1 < 3) {
        console.log('Game over! Winner - User2! Congratulations!');
        alert('Game over! Winner - User2! Congratulations!');
        break;
    }
}

contExit = prompt('Start a new game? Yes or no.').toLowerCase();
    
    if (contExit === 'yes') {
        console.log('Choice:', contExit);
        location.reload();
    } else if (contExit === 'no') {
        console.log('Choice:', contExit);
        alert('There will be time, come to the game again!');
    } 





// Ножиці ріжуть папір
// Папір накриває камінь
// Камінь затупляє ножиці

// Однакові жести - нічия
// Виграє той, хто тричі виграє