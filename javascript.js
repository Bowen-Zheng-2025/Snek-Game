const width = 30;
const length = 30;

var snake = [];
var food = null;
var alive = true;
//Test code
var map = makeMap(width, length);
snake = placeSnake(map);
map = seeSnake(map, snake);
food = makeFood(map, snake);
map = seeFood(map, food);
var score = snake.length -2;
document.getElementById("map").innerHTML = borderMap(map);
document.getElementById("score").innerHTML = "score =" + score;

document.addEventListener('keydown', function(event) {
  if (event.key == 'w') {
    document.getElementById("wKey").style.background = "#ff00ff";
  }
  if (event.key == "a") {
    document.getElementById("aKey").style.background = "#ff00ff";
  }
  if (event.key == "s") {
    document.getElementById("sKey").style.background = "#ff00ff";
  }
  if (event.key == "d") {
    document.getElementById("dKey").style.background = "#ff00ff";
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key == 'w' && alive) {
    document.getElementById("wKey").style.background = "#f0f0f2";
    //Make the snake move
    //add the new coordinates to the front of the snake array
    //Remove the last item in the array
    //Redraw the map
    food = updateMap(snake, "w", food, width, length);
    if (typeof food === "boolean") {alive = false;}
    var score = snake.length -2;
    document.getElementById("score").innerHTML = "score =" + score;
  }
  if (event.key == "a" && alive) {
    document.getElementById("aKey").style.background = "#f0f0f2";
    food = updateMap(snake, "a", food, width, length);
    if (typeof food === "boolean") {alive = false;}
    var score = snake.length -2;
    document.getElementById("score").innerHTML = "score =" + score;
  }
  if (event.key == "s" && alive) {
    document.getElementById("sKey").style.background = "#f0f0f2";
    food = updateMap(snake, "s", food, width, length);
    if (typeof food === "boolean") {alive = false;}
    var score = snake.length -2;
    document.getElementById("score").innerHTML = "score =" + score;
  }
  if (event.key == "d" && alive) {
    document.getElementById("dKey").style.background = "#f0f0f2";
    food = updateMap(snake, "d", food, width, length);
    if (typeof food === "boolean") {alive = false;}
    var score = snake.length -2;
    document.getElementById("score").innerHTML = "score =" + score;
  }
});
