const box = document.getElementsByClassName("box");

let positionX = 0;
let positionY = 0;

const move = () => {
  if (positionX <= 440 && positionY === 0) {
    positionX += 16;
    box[0].style.left = `${positionX}px`;
    setTimeout(move, 100);
  } else if (positionX >= 440 && positionY <= 440) {
    positionY += 16;
    box[0].style.top = `${positionY}px`;
    setTimeout(move, 100);
  } else if (positionX >= 0 && positionY >= 0){
    positionX -= 16;
    box[0].style.left = `${positionX}px`;
    setTimeout(move, 100);
  } else if (positionX <= 0 && positionY >= 0) {
    positionY -= 16;
    box[0].style.top = `${positionY}px`;
    setTimeout(move, 100);
  }

};
move();

///
var i = 0;

var interval = setInterval(
function(){
i++;
console.log("Прошло " + i + " сек");
if(i === 60){
clearInterval(interval);
}
},1000)
