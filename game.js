/* makeMap(xVal, yVal)
makes an arry of array in the format of y number of arrays x long. each one should
contain a string with just a space in it.
@param xVal {int} the width of the map
@param yVal {int} the height of the map
@return a 2d array of y length of x length items all with spaces inside
*/
function makeMap(xVal, yVal) {
  var retArray = [];
  for (var i = 0; i < yVal; i++) {
    var line = [];
    for (var j = 0; j < xVal; j++) {
      line.push(" ");
    }
    retArray.push(line);
  }
  return retArray;
}
/* seeSnake(map, snake)
make a drawing of the snake on the map
the snake is represented by a large O for the head and a smaller o for the body
 @param array {map} 2d array
 @param {snake} array of coordnates
 @return [map] modded map
*/
function seeSnake(map, snake) {
  //put head on map
  map[snake[0].y][snake[0].x] = "O";
  //make rest of body
  for (var i = 1; i < snake.length; i++) {
    map[snake[i].y][snake[i].x] = "o";
  }
  return map;
}
/* implode(arr)
@param arr {array} an array to be converted to a string
@return {string} a string of the array
*/
function implode(array) {
  var retSring = "";
  var index = 0;
  while (index < array.length) {
    retSring=  retSring +array[index]
    index ++
  }
  return  retSring ;
    var retString = "";
    var index = 0;
    while (index < array.length) {
      retString += array[index];
      index ++;
    }
  return retString;
}

function ranCoord(xVal, yVal){
  var retObj = {};
    retObj.x = Math.floor(Math.random() * xVal);
    retObj.y = Math.floor(Math.random() * yVal);
  return retObj;
}

/*
neighborCoord(coord, width, height)
returns an coord obj next to coor constrained by width and heigth,
only retuns cardinal neighbors
 @param coord {obj} object with x & y keys
 @param width {int} max value for the x of return object
 @param height {int} max value for the y of the return object
*/
function neighborCoord(coord, width, height) {
  //want to chande x or y
  //want to be 0 or greater
  //want to be less than width or height
  var xUse = false;
  if (Math.random() < .5 ) { xUse = true; }//determines if we are using x or y
  if (xUse){
    var left = false;
    if (Math.random() < .5 && coord.x > 0) {left = true; }
    if (coord.x > width -2) {left = true;}
    if (left) {return {x: coord.x - 1, y : coord.y};}
    else {return {x: coord.x + 1, y: coord.y};}
  }
  else{
    var up = false;
    if (Math.random() < .5 && coord.y > 0) {up = true; }
    if (coord.y > height -2) {up = true;}
    if (up) {return {x: coord.x , y : coord.y -1};}
    else {return {x: coord.x, y: coord.y +1};}
  }
}
/* borderMap(text)
a function to take a 2 dimensional array and turn it into a single string of
text, making each inner array a line of text. Also decorates with a text border
@param source {array} a 2d array filled with strings.
@return {string} a string as described above
*/
function borderMap(text) {
  var retStr = "+";
  var width= text[0].length;
    for (var i = 0; i < width ; i++) {retStr+="-"}
      retStr+="+ <br>";
    for (var i = 0; i < text.length; i++) {
      retStr+= "|"+ implode(text[i]) + "|<br>";
    }
     retStr+="+";
      for (var i = 0; i < width ; i++) {retStr+="-"}
        retStr+="+";
        return retStr;
        var width = text[0].length;
        for (var i = 0; i < width; i++) { retStr += "-"; }
          retStr += "+<br>";
        for (var i = 0; i < text.length; i++) {
          retStr += "|" + implode(text[i]) + "|<br>";
        }
        retStr += "+";
        for (var i = 0; i < width; i++) { retStr += "-"; }
      retStr += "+";
  return retStr;
}

/* makeFood(map, snake)
uses brute force to try to place food on the map. Rolls a random location, then
checks to see if it is in snake
@param map {array} an array of arrays
@param snake {array} an array of the cords of the snake
@return {object} an object with x and y coordinates that are good for
food placement and a food key with the icon for the food.
*/
function makeFood(map, snake, food="*") {
  var width = map[0].length;
  var length = map.length;
  var placed = false;
  while (!placed) {
    var coordTst = ranCoord(width, length);
    var matched = false;
      for (obj in snake) {
          if (coordTst.x == snake[obj].x && coordTst.y == snake[obj].y) {
            matched = true;
          }
        }
    if (!matched) {
      coordTst.food = food;
      return coordTst;
    }
  }
}

/* seeFood(map, food)
makes the food visable on the map
@param map {array} an 2d array of strings of text
@param food {object} a food object with x, y, and food keys
@return {array}a modified map
*/
function seeFood(map, food) {
  map[food.y][food.x] = food.food;
  return map;
}
/*placeSnake(map)
 function to place snake on a map. A snake is an array of locations.
 It does not actually reside on the map, so this function simply makes an array of two side by side locations.
 @peram map {array} 2d rray od text
 @return {array} an array of objects containing coords
*/
function placeSnake(map) {
  var width = map[0].length;
  var length = map.length;
  var snake = [];
  snake[0] = ranCoord(width, length);
  snake[1] = neighborCoord(snake[0], width, length);
  return snake;
}

/* moveSnake(snake, dir, food=false)
takes a snake array and adds a new item to the front of it in direction dir. (n, s, e w)
removes last item from the snake array as well, if food is equal to false
does the remove before the addition
@param snake {array} an array represeting a snake
@param dir {string} the string "w", "a", "s", or "d"
@param food {bool} if there is a food
@return the new location for the snake
*/
/* moveSnake(snake, dir, food)
takes a snake array and adds a new item to the front of it in direction dir. (n, s, e w)
removes last item from the snake array as well, if food is equal to false
does the remove before the addition
@prama snake {array} an array represeting a snake
@prama dir {string} the string "w", "a", "s", or "d"
@param food {object} the location of the food
@return {array}the new location for the snake
*/
function moveSnake(snake, dir, food) {
  if (dir == "w"){
    snake.unshift({x: snake[0].x, y: snake[0].y -1});
  }
  if (dir == "a") {
    snake.unshift({x: snake[0].x -1, y: snake[0].y});
  }
  if (dir == "s") {
    snake.unshift({x: snake[0].x, y: snake[0].y +1});
  }
  if (dir == "d") {
    snake.unshift({x: snake[0].x +1, y: snake[0].y});
  }
  if (!(snake[0].x == food.x && snake[0].y == food.y)) {
    snake.pop();
  }
  return  snake;
}
/*updateMap(snake, key, food, width, length)
is a wrapper function that has all of the asignments
 @param snake {array} an array of x and y key objects
 @param key {string} a single character string that is w, a, s, or d
 @param food {object} a food object with x, y, and food keys
 @param width {int} the max x value for the map
 @param length {int} the max y value for the map
 @return {array} the updated version of the map with the snake and food on it
*/
function updateMap(snake, key, food, width, length) {
  snake = moveSnake(snake, key, food);
  if (checkCollision(snake, width, length)) {return true;}
  map = makeMap(width, length);
  map = seeSnake(map, snake);
  food = checkAte(map, snake, food);
  map = seeFood(map, food);
  document.getElementById("map").innerHTML = borderMap(map);
  return food;
}

/* checkAte(map, snake, food)
A function to see if the current food location is the location of the snake head
if so, makes a new location for the food
@param map {array} a 2d array of elements that are single string characters
@param snake {array} an array of x & y keyed objects
@param food {object} an object with x, y, & food keys that is the location of
the food.
@return {object} the new or same location of the food.
*/
function checkAte(map, snake, food) {
  if (snake[0].x == food.x && snake[0].y == food.y) {
    return makeFood(map, snake, food.food)
  }
  return food;
}

/*checkCollision(snake, width, length)
@param {array}  an array of x & y keyed objects
@param width {int} the max x value for the map
@param length {int} the max y value for the map
@return {bool} true if colision
*/
function checkCollision(snake, width, length) {
  if (snake[0].x >= width) {
    return true;
  }
  if (snake[0].x < 0) {
    return true;
  }
  if (snake[0].y >= length) {
    return true;
  }
  if (snake[0].y < 0) {
    return true;
  }
  for (var i = 1; i < snake.length; i++) {
    if ((snake[0].x == snake[i].x) && (snake[0].y == snake[i].y)) {
      return true;
    }
  }
  return false;
}
