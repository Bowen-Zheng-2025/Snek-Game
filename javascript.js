const width = 30;
const length = 30;

var snake = [];
//Test code
var map = makeMap(width, length);
var score = snake.length -2;
document.getElementById("map").innerHTML = borderMap(map);
document.getElementById("score").innerHTML = "score =" + score;

document.addEventListener('keydown', function(event) {
  if (event.code == 'z') {
    console.log("Adrian has no smarts");
  }
});
