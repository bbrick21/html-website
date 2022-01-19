function askUserQuestion(){
    let username = prompt('What\'s your name?');

    //console.log(username)

    if(username.toLowerCase == "Bryce"){document.write("You're the man, " + username + ".")}
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