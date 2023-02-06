// ** Problem 01 ----> mindGame
// This function take a number as an argument and first multiply it with 3 then add 10 then divided by 2 finally subtract 5 and return
function mindGame(num) {
  if (typeof num !== "number") {
    return "Please enter a valid number";
  } else {
    const multiply = num * 3;
    const sum = multiply + 10;
    const divide = sum / 2;
    const sub = divide - 5;
    return sub;
  }
}

// ** Problem 02 ----> evenOdd
// This function will take a number as an argument and return Even or Odd based on the string length that is passed in the argument
function evenOdd(str) {
  const strLength = str.split("").length;
  if (strLength % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// ** Problem 03 ----> isLGSeven
// This function will take a number as an argument and return a number based on the condition that the function given.
function isLGSeven(num) {
  if (typeof num !== "number") {
    return "Please enter a valid number";
  } else {
    const sub = num - 7;
    if (sub < 7) {
      return sub;
    } else {
      return sub * 2;
    }
  }
}

// ** Problem 04 ----> findingBadData
// This function will take an array as an argument and return valid numbers length from the array.
function findingBadData(arr) {
  return arr.filter((item) => item < 0).length;
}

// ** Problem 05 ----> gemsToDiamond
// This function will take three arguments and calculate these arguments and return a number. First check if the sum is greater than 2000 or not. If it is then multiply it by 2 otherwise return sum itself.
function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
  const firstMultiple = firstFriendGems * 21;
  const secondMultiple = secondFriendGems * 32;
  const thirdMultiple = thirdFriendGems * 43;
  let sum = firstMultiple + secondMultiple + thirdMultiple;
  if (sum > 2000) {
    return sum - 2000;
  } else {
    return sum;
  }
}
