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
function placeFood(map, snake) {
  var retArr = [];
  var food = "*";
  for (var i = 0; i < map; i++) {
    if (i < map) {
      return Math.random(food);
    }
  }
  for (var j = 0; j < snake; j++) {
    if () {

    }
  }
}
