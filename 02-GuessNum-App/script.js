function startGame(){

    let random = Math.floor(Math.random() * 100) + 1;

    while(true){

        let guess = prompt("Enter your guess:");

        if(guess == "quit"){

            document.getElementById("result").innerHTML =
            "You are leaving game 👋";

            break;

        }else if(Number(guess) === random){

            document.getElementById("result").innerHTML =
            "🎉 You are correct,random num was"+ guess;

            break;

        }else if(Number(guess) > random){

            alert("Too high! Try again");

        }else{

            alert("Too low! Try again");

        }
    }

}
