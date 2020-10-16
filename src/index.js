const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let decodedStr = "";
  for (let i = 0; i < expr.length; i = i + 10) {
    if (expr[i] == "*") {
      decodedStr += " ";
    } else {
      let encodedStrPart = expr.slice(i, i + 10);
      const decodedCharInMorse = encodedStrPart.replace(/11/g, "-").replace(/10/g, ".").replace(/00/g,"");
      decodedStr += MORSE_TABLE[decodedCharInMorse];  
    }
  }
  return decodedStr;
}

module.exports = {
  decode,
};
