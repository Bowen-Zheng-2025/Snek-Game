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
  if (Math.random() < .5 ) { xUse == true; }//determines if we are using x or y
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
    if (coord.y > width -2) {up = true;}
    if (up) {return {y: coord.y - 1, x : coord.x};}
    else {return {y: coord.y + 1, x: coord.x};}
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
/* placeFood(map, snake)
uses brute force to try to place food on the map. Rolls a random location, then
checks to see if it is in snake
@param map {array} an array of arrays
@param snake {array} an array of the cords of the snake
@return {array} a map with the food placed on it.
*/
/*
snek = [{x:2, y:3}, {x:3, y:3}]...
[["","O"]...]
length , width    0 - dimension-1
                    x & y
                    for (in snake) {
                      if (demX != snakeX && demY != snakeY)
                      place food
                    }
*/
function placeFood(map, snake, food="*") {
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
       map[coordTst.y][coordTst.x] = food;
      return map;
    }
  }
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
  snake[0] = ranCoord(width, height);

}
