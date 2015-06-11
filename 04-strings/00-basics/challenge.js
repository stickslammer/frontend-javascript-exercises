module.exports.formLetter = function(firstName, senderName, message) {
  return ("Hello " + firstName + ",\n\n" + message  + "\n\nSincerely,"  + "\nJoe");
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  return bigString.substring(7, 10); + " " + bigString.substring( 14, 20);
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);

};

module.exports.findLastMatch = function(text, searchString) {
  return text.indexOf(searchString, 10);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  return text.substring(17, 41);
};