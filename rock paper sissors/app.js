let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscp=document.querySelector("#user-score")
const compscp=document.querySelector("#comp-score")


const genCompChoice = () => {

    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const drawGame = () => {
   
     msg.innerText="Game was draw! play again";
     msg.style.backgroundColor="#081b31";

}
const showWinner = (userWin,userChoice,compchoice) => {
    if (userWin) {
        userScore++;
        userscp.innerText=userScore;
        msg.innerText = `you Win! your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
      
    } else {
        compScore++;
        compscp.innerText=compScore;
        msg.innerText = `you lost! ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playgame = (userChoice) => {

   
    //computer genator choice
    const compchoice = genCompChoice();
   

    if (userChoice === compchoice) {

        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compchoice === "paper" ? false : true;

        }
        else if (userChoice === "paper") {
            userWin = compchoice === 'scissors' ? false : true;
        }

        else {
            userWin = compchoice === "rock" ? false : true;

        }
        showWinner(userWin,userChoice,compchoice);
    }

};







choices.forEach((choice) => {


    choice.addEventListener("click", () => {


        const userChoice = choice.getAttribute("id");


        playgame(userChoice);

    })
});