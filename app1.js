function askUserQuestion(){
    let username = prompt('What\'s your name?');

    //console.log(username)

    if(username.toLowerCase == "Bryce"){document.write("You're the man, " + username + ".")}
    else {
        document.write("Hey, " + username + "!")
    }
    return username;
}

let OutsideName = askUserQuestion()
console.log(OutsideName)