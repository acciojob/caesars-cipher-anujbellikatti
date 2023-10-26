
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
function rot13(str) {

// str = "Ara"; // "Ara" => "ARA"

str = str.toUpperCase(); // "M*D" => // "Z" + undefined + "Q" => ZundefinedQ

let output = ""; // "" + "N" => "N"

for (let i = 0; i < str.length; i++){

if(lookup(str[i]]){

output += lookup(str[i]] // str[0] => "A }
				}
else {
output+= str[i];
}
}


return output;
}


window.rot13 = rot13;