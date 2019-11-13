const width = 30;
const length = 30;

var snake = [];
var food = null;
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
  if (event.key == 'w') {
    document.getElementById("wKey").style.background = "#f0f0f2";
    //Make the snake move
    //add the new coordinates to the front of the snake array
    //Remove the last item in the array
    //Redraw the map
    snake = moveSnake(snake, "w", food);
    map = makeMap(width, length);
    map = seeSnake(map, snake);
    map = seeFood(map, food);
    var score = snake.length -2;
    document.getElementById("map").innerHTML = borderMap(map);
    document.getElementById("score").innerHTML = "score =" + score;
  }
  if (event.key == "a") {
    document.getElementById("aKey").style.background = "#f0f0f2";
    snake = moveSnake(snake, "a", food);
    map = makeMap(width, length);
    map = seeSnake(map, snake);
    map = seeFood(map, food);
    var score = snake.length -2;
    document.getElementById("map").innerHTML = borderMap(map);
    document.getElementById("score").innerHTML = "score =" + score;
  }
  if (event.key == "s") {
    document.getElementById("sKey").style.background = "#f0f0f2";
    snake = moveSnake(snake, "s", food);
    map = makeMap(width, length);
    map = seeSnake(map, snake);
    map = seeFood(map, food);
    var score = snake.length -2;
    document.getElementById("map").innerHTML = borderMap(map);
    document.getElementById("score").innerHTML = "score =" + score;
  }
  if (event.key == "d") {
    document.getElementById("dKey").style.background = "#f0f0f2";
    snake = moveSnake(snake, "d", food);
    map = makeMap(width, length);
    map = seeSnake(map, snake);
    map = seeFood(map, food);
    var score = snake.length -2;
    document.getElementById("map").innerHTML = borderMap(map);
    document.getElementById("score").innerHTML = "score =" + score;
  }
});
