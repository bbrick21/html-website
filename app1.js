function guessNumber(){
    let userGuess = prompt('Enter a number 1-100');

    while(userGuess < 1 || userGuess > 100){
        userGuess = prompt('Nah, try again')
    }
}

for(let i = 1; i < attempts; i++){
    while(userGuess > 100 || userGuess < 100){
        userGuess = prompt('Try again, 1-100');
    }
    if(userGuess == correctGuess){
        alert('You got it fam');
        break;
    } else if(userGuess > correctGuess){
        userGuess = prompt('Too much, try again');
    } else if(userGuess < correctGuess){
        userGuess = prompt('Not enough, try again');
    }
    if(i = 8){
        alert('It was 79.');
    }
}