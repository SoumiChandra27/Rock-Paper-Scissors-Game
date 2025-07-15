let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const message=document.querySelector(".message");

const user_Score = document.querySelector("#user");
const comp_Score = document.querySelector("#comp");

const genCompChoice=() => {
    const option=["rock","paper","scissors"];
    //rock,paper,scissors
    const randomIndex=Math.floor(Math.random() * 3);
    return option[randomIndex];
}

const drawGame= () => {
    console.log("Game is draw");
    msg.innerText="..Draw..Play Again.."
    msg.style.backgroundColor="#e9f5db";
    message.style.backgroundColor="#e9f5db";
}

const showWinner= (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        userScore++; //increase the score for user
        user_Score.innerText = userScore;
        console.log("User win!!");
        msg.innerText = `You win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#90a955";
        message.style.backgroundColor="#90a955";
    }
    else{
        compScore++; //increase the score for computer
        comp_Score.innerText = compScore;
        console.log("Computer win!!");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#9e2a2b";
        message.style.backgroundColor="#9e2a2b";
    }
}
const playGame=(userChoice) => {
    //generate user choice -> modular
    console.log("user choice =",userChoice);
    //generate computer choice -> modular
    const compChoice=genCompChoice();
    console.log("computer choice =",compChoice);

    if(userChoice===compChoice) {
        //draw game
        drawGame();
    }
    else {
        let userWin=true;
        if(userChoice=== "rock")
        {
            //paper,scissors
            userWin=compChoice=== "paper" ? false : true ;
        }
        else if(userChoice=== "paper")
        {
            //rock,scissors
            userWin=compChoice=== "scissors" ? false : true ;
        }
        else{
            //rock,paper
            userWin=compChoice=== "rock" ? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});