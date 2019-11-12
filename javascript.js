const width = 30;
const length = 30;

var snake = [];
//Test code
var map = makeMap(width, length);
 snake = placeSnake(map);
 map = seeSnake(map, snake);
var score = snake.length -2;
document.getElementById("map").innerHTML = borderMap(map);
document.getElementById("score").innerHTML = "score =" + score;

document.addEventListener('keydown', function(event) {
  if (event.key == 'w') {
    document.getElementById("wKey").style.background = "#FFFF00";
  }
  if (event.key == "a") {
    document.getElementById("aKey").style.background = "#FFFF00";
  }
  if (event.key == "s") {
    document.getElementById("sKey").style.background = "#FFFF00";
  }
  if (event.key == "d") {
    document.getElementById("dKey").style.background = "#FFFF00";
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key == 'w') {
    document.getElementById("wKey").style.background = "#f0f0f2";
    //Make the snake move
    //add the new coordinates to the front of the snake array
    //Remove the last item in the array
    //Redraw the map
  }
  if (event.key == "a") {
    document.getElementById("aKey").style.background = "#f0f0f2";
  }
  if (event.key == "s") {
    document.getElementById("sKey").style.background = "#f0f0f2";
  }
  if (event.key == "d") {
    document.getElementById("dKey").style.background = "#f0f0f2";
  }
});
