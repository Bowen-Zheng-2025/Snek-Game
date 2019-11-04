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
