const emailInput = document.querySelector(".emailInput");
const emailCheck = document.querySelector(".emailCheck");
const emailResult = document.querySelector(".emailResult");

// console.log(emailCheck, emailInput, emailResult);

const regExp =  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

// @
emailCheck.addEventListener("click", () => {
  if (regExp.test(emailInput.value)) {
    emailResult.innerText = "ok";
    emailResult.style.color = "green";
  } else {
    emailResult.innerText = "not ok";
    emailResult.style.color = "red";
  }
});



////
let position = 0;
function recursionBox (){
    position ++;
    if (position > 400) return;
    document.querySelector(".bigBlock").style.left = position + "px";
    animation();
}
function animation (){
    setTimeout(recursionBox, 100);
}
animation();

const smallB = document.querySelector('.smallBlock')
const smallChange = smallB.style.left = '110px'
