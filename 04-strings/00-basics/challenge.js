module.exports.formLetter = function(firstName, senderName, message) {
  return ("Hello " + firstName + ",\n\n" + message  + "\n\nSincerely,"  + "\nJoe");
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  // return bigString.substring(7, 10);

  // (1) Make a substring from `bigString` bounded by startA and endA
  var substringA = bigString.substring(startA, endA);

  // (2) Make a substring from the string bounds startB and endB
   var substringB = bigString.substring(startB, endB);

  // (3) Then concat both strings
    var substringC = substringA + substringB;
    return substringC;
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);

};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  
  var newSub = text.indexOf(searchString);
  var newSubEnd = text.lastIndexOf(searchString);
  var searchTermLength = searchString.length;
  var result = text.substring(newSub, newSubEnd);

  return result.substring(searchTermLength, newSubEnd);
};