const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter text: ", (text) => {
  let result = `${text} is ${isPalindrome(text) ? "" : "not "}a palindrome`;
  console.log(result);
  readline.close();
});

function isPalindrome(text) {
  for (let i = 0; i < text.length / 2; i++) {
    if (text[i] != text[text.length - i - 1]) {
      return false;
    }
  }
  return true;
}
