let mode = document.querySelector("#mode");
let body = document.querySelector(".body");
let winner_msg = document.querySelector(".winner");

let ismode = true;
let isturnX = true;
let count = 0;

const winner = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]] ;

const checkwinner = () => {

 for (let pattern of winner) {
   
  let pos1 = cell[pattern[0]].innerText;
  let pos2 = cell[pattern[1]].innerText;
  let pos3 = cell[pattern[2]].innerText;  

  if(pos1 != "" && pos2 != "" && pos3 != "") {

    if(pos1 === pos2 && pos2 === pos3) {

      console.log("winner is", pos1);
      winner_msg.innerText = "Congratulations, winner is " + pos1 ;
      winner_msg.style.fontSize = "25px" ;
      winner_msg.style.color = "red" ;

      cell.forEach((singlebox) => {

     singlebox.disabled = true;
  
    })


  }
  }
 }

 if(count === 9 && winner_msg.innerText === "") {
   
      winner_msg.innerText = "Tough fight, draw.....try again " ; 
      winner_msg.style.fontSize = "25px" ;
      winner_msg.style.color = "red" ;

    }

}

mode.addEventListener("click", ()=> {
      
    if(ismode){
      document.body.style.backgroundColor = "#afa5c4";
      console.log("state first");
      ismode = false;


    }
    else {
     document.body.style.backgroundColor = "#F4F1BB";
      console.log("state second");
      ismode = true;
      
    }
} )

let boxes = document.querySelectorAll(".boxes");
let cell = document.querySelectorAll(".cell");


cell.forEach ((singlebox) => {
{
 singlebox.addEventListener("click", ()=> {
     
   if( isturnX ) {
     
    singlebox.innerText = "X";
    singlebox.style.fontSize = "30px";
    singlebox.style.color = "red";
    isturnX = false;
    singlebox.disabled = true;
  

   }

   else {
     
    singlebox.innerText = "O";
    singlebox.style.fontSize = "30px";
    singlebox.style.color = "red";
    isturnX = true;
    singlebox.disabled = true;
  

   }

   count ++ ;
   checkwinner();



})


}  } )




let sub = document.querySelector(".sub");


  sub.addEventListener("click", () => {
     
  isturnX = true;

  cell.forEach((singlebox) => {

    singlebox.innerText = "";
    singlebox.disabled = false;
    winner_msg.innerText = "" ;
    count = 0;


  })



  })








