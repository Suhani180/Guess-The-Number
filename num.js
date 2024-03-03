// NUMBER GUESSING GAME

const MinNum = 0;
const MaxNum = 1000;
const answer = Math.floor(Math.random() * (MaxNum - MinNum +1 )) + MinNum ;

let attempts = 0;
let guess;
let running ;

while(running =true )
{
    guess = window .prompt('Guess a number between ${MinNum}  - ${MaxNum}');
    guess = Number(guess);
    if(isNaN(guess))
    {
window.alert("Please enter a valid number");
    }
    else if(guess < MinNum || guess > MaxNum){
        window.alert ("Please enter a valid number ");
    }
    else{
        attempts++;
        if(guess<answer){
            window.alert("TOO LOW! TRY AGAIN");
        }
        else if(guess>answer){
            window.alert("TOO HIGH! TRY AGAIN");
        }
        else {
            window.alert("CORRECT !! The answer was ${answer} and it took you ${attempts} attempts to get the answer");
            running = false;
        }
    }
    
}