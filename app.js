let userScore=0;
let compScore=0;
const userScore_span = document.getElementById("usr-score");
const compScore_span = document.getElementById("comp-score");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const computerchoose_div = document.querySelector(".result>h5")


function convert(x){
    if (x==="r") return "Rock";
    if (x === "p") return "Paper";
    return "Scissor";
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function win(user, computer){
    console.log(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convert(user)} beats ${convert(computer)}. YOU WON!`;
    computerchoose_div.innerHTML = `Computer : ${convert(computer)}`;
    document.getElementById(user).classList.add('green-glow'); 
    setTimeout(function() {document.getElementById(user).classList.remove('green-glow')}, 400);
    }
function lose(user, computer){
    compScore++;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convert(computer)} beats ${convert(user)}. You lost!`;
    computerchoose_div.innerHTML = `Computer : ${convert(computer)}`;
    document.getElementById(user).classList.add('red-glow'); 
    setTimeout(function() {document.getElementById(user).classList.remove('red-glow')}, 400);
}
function draw(user, computer){
    result_div.innerHTML = `It's a draw.`;
    computerchoose_div.innerHTML = `Computer : ${convert(computer)}`;
    document.getElementById(user).classList.add('gray-glow'); 
    setTimeout(function() {document.getElementById(user).classList.remove('gray-glow')}, 400);
}

function game(usrChoice){
    const computerChoice = getComputerChoice();
    
    switch(usrChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win (usrChoice, computerChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(usrChoice, computerChoice);
            break;
        
        case "rr":
        case "pp":
        case "ss":
            draw(usrChoice, computerChoice);
            break;
    }
}


function main (){
    rock_div.addEventListener('click', function() {
        game("r")
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })

    scissor_div.addEventListener('click', function() {
        game("s")
    })
}

main ();
