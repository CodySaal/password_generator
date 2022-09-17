// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"

var numbers = "0123456789"

var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// An Idea Function
// function generatePassword() {
//   var characterCount = prompt("How many characters would you like your new password to be?", "Must be between 8 and 128 characters")

//   if (characterCount < 8 || characterCount > 128) {
//     alert("Please select a valid password length");
//   } else {
//     characterSelection();
//   }

//   if (confirm() === true) {

//   }

// }

// function characterSelection() {

// }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
