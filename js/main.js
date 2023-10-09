const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const userContador = document.getElementById("user-contador");
const userComputer = document.getElementById("computer-contador");
const userOption = document.getElementById("user-option");
const computerOption = document.getElementById("computer-option");
let user = 0;
let computer = 0;
let empate = 0;
let rockOption = "rock";
let paperOption = "paper";
let scissorOption = "scissor";

function reset(){
    user = 0;
    computer = 0;
    empate = 0;
    userContador.textContent = user;
    userComputer.textContent = computer;
    userOption.textContent = "";
    computerOption.textContent = "";
}

function resetAll(){
   if(user === 5){
      alert("YOU WIN!")
      reset();
     
     }else if(computer === 5){
      alert("YOU LOSE!")
      reset();
     }
}


rock.addEventListener("click", function() {
   const randomRock = Math.floor(Math.random() * 3) + 1;
   if(randomRock === 2){
    computer = computer + 1;
    userComputer.textContent = computer;
    userOption.textContent = rockOption;
    computerOption.textContent = paperOption;
   }else if(randomRock === 3){
    user = user + 1;
    userContador.textContent = user;
    userOption.textContent = rockOption;
    computerOption.textContent = scissorOption;
   }else{
      empate = empate + 1;
    userOption.textContent = rockOption;
    computerOption.textContent = rockOption;
   }
   console.log(`User ${user}`)
   console.log(`Computer ${computer}`)
   console.log(`empate ${empate}`)
   resetAll();
});

paper.addEventListener("click", function() {
   const randomPaper = Math.floor(Math.random() * 3) + 1;
   if(randomPaper === 1){
    user = user + 1;
    userContador.textContent = user;
    userOption.textContent = paperOption;
    computerOption.textContent = rockOption;
   }else if(randomPaper === 3){
    computer = computer + 1;
    userComputer.textContent = computer;
    userOption.textContent = paperOption;
    computerOption.textContent = scissorOption;
   }else{
    empate = empate + 1;
    userOption.textContent = paperOption;
    computerOption.textContent = paperOption;
   }
   console.log(`User ${user}`)
   console.log(`Computer ${computer}`)
   console.log(`empate ${empate}`)
   resetAll();
});

scissor.addEventListener("click", function() {
   const randomScissor = Math.floor(Math.random() * 3) + 1;
   if(randomScissor === 1){
    computer = computer + 1;
    userComputer.textContent = computer;
    userOption.textContent = scissorOption;
    computerOption.textContent = rockOption;
   }else if(randomScissor === 2){
    user = user + 1;
    userContador.textContent = user;
    userOption.textContent = scissorOption;
    computerOption.textContent = paperOption;
   }else{
    empate = empate + 1;
    userOption.textContent = scissorOption;
    computerOption.textContent = scissorOption;
   }
   console.log(`User ${user}`)
   console.log(`Computer ${computer}`)
   console.log(`empate ${empate}`)
   resetAll();
});





