function secretMessage(){
    let userAnswer = prompt('Tryna see a secret message? (yay or nay)')
    
    if(userAnswer.toLowerCase() == 'yay') {
        document.write('Cap\'n crunch is the most elite cereal in the game')
    }    
    return userAnswer
}

let SecretAnswer = secretMessage();
console.log(SecretAnswer)
