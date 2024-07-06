let gameBtn = document.querySelectorAll(".game-btn");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".winner ");
let msg = document.querySelector("#msg");

let turnX = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

let newGame = () =>{
    let turnX = true;
    count = 0;
    enableBtn();
    msgContainer.classList.add("hide");
};


gameBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (turnX) {
        //playeX
        btn.innerHTML = "<h1>X</h1>";
        btn.style.color = "#545454";
        btn.style.fontSize = "40px";
        turnX = false;
      } else {
        //playerO
        btn.innerHTML = "<h1>O<h1>";
        btn.style.color = "#ffffff";
        btn.style.fontSize = "40px";
        turnX = true;
      }
      btn.disabled = true;
      count++;
  
      let isWinner = checkWinner();
  
      if (count === 9 && !isWinner) {
        gameDraw();
      }
    });
  });


const gameDraw = () => {
    msg.innerText = `Draw!`;
    msg.style.color = "#D3A32A";
    msgContainer.classList.remove("hide");
    disableBtn();
}

const disableBtn = () =>{
    for (let btn of gameBtn){
        btn.disabled = true;
    }
}

const enableBtn = () =>{
    for (let   btn of gameBtn){
        btn.disabled = false;
        btn.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `${winner}  Wins!`;
    msg.style.color = "#D3A32A";
    msgContainer.classList.remove("hide");
    disableBtn();

}
const checkWinner = () =>{
    for (let pattern of winPatterns){
        let pos1val = gameBtn[pattern[0]].innerText;
        let pos2val = gameBtn[pattern[1]].innerText;
        let pos3val = gameBtn[pattern[2]].innerText;

        if (pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){

                showWinner(pos1val);
                return true;
            }
        }
    }
}

newBtn.addEventListener("click", newGame);
