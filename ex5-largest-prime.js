const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a list of numbers separated by space: ", (text) => {
  let numbers = text.split(" ").map((number) => parseFloat(number));
  let maxPrime = numbers.reduce((max, number) => {
    return isPrime(number) && number > max ? number : max;
  }, -1);
  if (maxPrime === -1) {
    console.log("No prime number found");
  } else {
    console.log(`The largest prime number is ${maxPrime}`);
  }
  readline.close();
});

let cache = [false, false, true];
let primeList = [2];
let maxChecked = 2;

function isPrime(number) {
  if (!Number.isInteger(number)) return false;
  if (maxChecked < number) {
    for (let i = maxChecked + 1; i <= number; i++) {
      cache[i] = true;
      for (let j = 0; j <= primeList.length; j++) {
        if (i % primeList[j] === 0) {
          cache[i] = false;
          break;
        }
      }
      if (cache[i]) {
        primeList.push(i);
      }
    }
    maxChecked = number;
  }
  return cache[number];
}
