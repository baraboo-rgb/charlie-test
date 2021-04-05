function largestOfFour(arr) {
    let arrSplit = arr.split(' ');
    let greatestNum = 0;
    for (let i = 0; i < arrSplit.length; i++) {
      if(arrSplit[i].length < greatestNum) {
        greatestNum  = arrSplit[i].length;
      }
    } 
    return greatestNum;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);