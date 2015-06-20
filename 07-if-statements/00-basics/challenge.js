module.exports.favoriteNumber = function (fav, guess) {
  if (guess > fav) {
    return "Too high";
  }
  if (guess < fav) {
    return "Too low";
  }
  if (fav === guess) {
    return "You got it!";
  }
};

module.exports.checkLock = function (a, b, c, d) {
  var test1 = null; // the first number is a 3, 5, or 7
  var test2 = null;
  var test3 = null;
  var test4 = null;
  var result = null; // result is true if all tests are true, otherwise false;

  // Set test1 correctly, to a true or false value
  if (a == 3 || a == 5 || a == 7) {
    test1 = true;
  }

  // Set test2
  if (b == 2) {
    test2 = true;
  }

  // Set test3
  if (c >= 5 && c <= 100) {
    test3 = true;
  }

  // Set test4
  if (d < 9 || d >20) {
    test4 = true;
  }

  // Set the final result
  if (test1 && test2 && test3 && test4) {
    result = "correct";
  }
  else {
    result = "incorrect";
  }

  return result;

};

module.exports.canIGet = function (item, money) {
  if (item === "MacBook Air" && money >= 999) {
    return true;
  }
  if (item === "MacBook Pro" && money >= 1299) {
    return true;
  }
  if (item === "Mac Pro" && money >=2499) {
    return true;
  }
  if (item === "Apple Sticker" && money >= 1) {
    return true;
  }
  else {
    return false;
  }
};