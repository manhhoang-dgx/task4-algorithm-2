const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter main text: ", (text) => {
  readline.question("Enter sub text: ", (subtext) => {
    let result = `${text} ${
      isContain(text, subtext) ? "contains" : "does not contain"
    } ${subtext}`;
    console.log(result);
    readline.close();
  });
});

function isContain(text, subtext) {
  for (let i = 0; i < text.length - subtext.length + 1; i++) {
    let contain = true;
    for (let j = 0; j < subtext.length; j++) {
      if (text[i + j] != subtext[j]) {
        contain = false;
        break;
      }
    }
    if (contain) return true;
  }
  return false;
}
