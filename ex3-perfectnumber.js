const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number: ", (text) => {
  let result = `${text} is ${
    perfectNumber(parseFloat(text)) ? "" : "not "
  }a perfect number`;
  console.log(result);
  readline.close();
});

function perfectNumber(number) {
  if (!Number.isInteger(number)) return false;
  if (number <= 1) return false;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i !== 0) {
      return false;
    }
  }
  return true;
}
