const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number: ", (number) => {
  let result = `${number} is ${
    isAmstrong(parseFloat(number)) ? "" : "not "
  }an Amstrong number`;
  console.log(result);
  readline.close();
});

function isAmstrong(number) {
  if (!Number.isInteger(number)) return false;
  let length = number.toString().length;
  let tmp = number;
  let sum = 0;
  while (tmp > 0) {
    sum += Math.pow(tmp % 10, length);
    tmp = Math.floor(tmp / 10);
  }
  return sum === number;
}
