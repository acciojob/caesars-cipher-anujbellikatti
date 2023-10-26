
// function rot13(encodedString) {
//     // Regular expression to match uppercase letters
//     var uppercaseLetters = /[A-Z]/;
//     // Function to decode a single character
//     function decodeChar(char) {
//         var charCode = char.charCodeAt(0);
//         var base = uppercaseLetters.test(char) ? 65 : 97;
//         return String.fromCharCode((charCode - base + 13) % 26 + base);
//     }
//     // Decoding the input string
//     var decodedArray = encodedString.split('').map(function(char) {
//         // If the character is an uppercase letter, decode it, otherwise keep it unchanged
//         return uppercaseLetters.test(char) ? decodeChar(char) : char;
//     });
//     // Joining the array back into a string and returning the result
//     return decodedArray.join('');
// }

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

let A = "A".charCodeAt(0); /// 65

let Z= "Z".charCodeAt(0); // 90

function rot13(str) {

let ans = ""; // "" => "$N#A" // str = "$A#N" => "SN#A" for (let i = 0; i < str.length; i++){

// 4 = 0 let currentChar = str[i].charCodeAt( if(currentChar <= 2 && currentChar > ans lookup[str[i]]

}

else {

ans += str[i];

}

return ans

window.rot13 = rot13;