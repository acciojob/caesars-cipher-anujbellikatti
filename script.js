avascript
Copy code
function rot13(encodedString) {
    // Regular expression to match uppercase letters
    var uppercaseLetters = /[A-Z]/;
    // Function to decode a single character
    function decodeChar(char) {
        var charCode = char.charCodeAt(0);
        var base = uppercaseLetters.test(char) ? 65 : 97;
        return String.fromCharCode((charCode - base + 13) % 26 + base);
    }
    // Decoding the input string
    var decodedArray = encodedString.split('').map(function(char) {
        // If the character is an uppercase letter, decode it, otherwise keep it unchanged
        return uppercaseLetters.test(char) ? decodeChar(char) : char;
    });
    // Joining the array back into a string and returning the result
    return decodedArray.join('');
}