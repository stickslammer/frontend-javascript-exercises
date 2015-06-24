module.exports.newArray = function(a, b, c, d) {
  var myNewArray =  new Array(4);
  myNewArray[0] = a;
  myNewArray[1] = b;
  myNewArray[2] = c;
  myNewArray[3] = d;
  return myNewArray;
}

module.exports.firstAndLast = function(myArray) {
// take one argument, an array with at least 3 elements

// return a new array with the first and last element of the passed array

  return [myArray[0], myArray[myArray.length -1]];

}