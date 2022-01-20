function askUserQuestion(){
    let username = prompt('What\'s your name?');

    if(username.toLowerCase == "bryce"){document.write("You're the man, " + username + ".")}
    else {
        document.write("Hey, " + username + "!")
    }
    console.log(username)
}

function secretMessage(){
    let userAnswer = prompt('Tryna see a secret message? (yay or nay)')
    
    if(userAnswer.toLowerCase() == 'yay') {
        document.write('Cap\'n crunch is the most elite cereal in the game')
    }    
    console.log(userAnswer)
}

function likeCheese(){
    let preference = prompt('Do you like cheese? (yay or nay)')

    if(preference.toLowerCase() == 'yay'){document.write('Learn about cheese')}
    else{
        document.write('Don\'t learn about cheese')
    }
    console.log(preference)
}

function addTwoNumbers(num1, num2){
    let total = num1 + num2
    console.log(total);
    document.write(total)
}

addTwoNumbers(5, 10)

function guessNumber(){
    let userGuess = prompt('Enter a number 1-100');
    let correctGuess = 79;
    let attempts = 8;

for(let i = 1; i < attempts; i++){
    while(guessNumber < 1 || guessNumber > 100){
        guessNumber = prompt('Try again, 1-100');
    }
    if(userGuess == correctGuess){
        alert('You got it fam');
        break;
    } else if (userGuess > correctGuess){
        userGuess = prompt('Nah fam, too high. Try again.');
    } else if (userGuess < correctGuess){
        userGuess = prompt('Too low, try again')
    }
    if(i == 7){
        alert('The correct answer was ' + correctGuess);
        document.write('(person who couldn\'t guess the number)');
    }
}
}

function imageMultiply(){
    let userChoice = prompt('Rate cheese on a scale of 1-5')
    let maxImages = 5
    let imagePath = "https://images.all-free-download.com/images/graphiclarge/cheese_picture_167134.jpg"
    

for(let i = 1; i <= userChoice; i++){
    if(userChoice > 5){
        userChoice = prompt('Not more than 5. Try again.')
    }
    if(userChoice > 1){
        document.write('<img src="' + imagePath + '">')}
}
}
