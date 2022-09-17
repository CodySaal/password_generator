// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"

var numbers = "0123456789"

var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

var passwordBlueprint = ""

var characterPool = ""

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function characterSelection() {
  var includeLowercase = confirm("Would you like to include lowercase letters in your password?")

  var includeUppercase = confirm("Would you like to include uppercase letters in your password?")

  var includeNumbers = confirm ("Would you like to include numbers in your password?")

  var includeSpecialCharacters = confirm ("Would you like to include special characters in your password?");

  if (includeLowercase === true || includeUppercase === true || includeNumbers === true || includeSpecialCharacters === true) {
    if (includeLowercase === true) {
      passwordBlueprint += lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)]
      console.log(passwordBlueprint);

      characterPool += lowercaseLetters;

      console.log(characterPool)
    }
  
    if (includeUppercase === true) {
      passwordBlueprint += uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)]
      console.log(passwordBlueprint);

      characterPool += uppercaseLetters;

      console.log(characterPool)
    }
   
    if (includeNumbers === true) {
      passwordBlueprint += numbers[Math.floor(Math.random()*numbers.length)]
      console.log(passwordBlueprint);

      characterPool += numbers;

      console.log(characterPool)
    }
  
    if (includeSpecialCharacters === true) {
      passwordBlueprint += specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
      console.log(passwordBlueprint);

      characterPool += specialCharacters;

      console.log(characterPool)
    }

  } else {
    alert("A strong password contains at least one of these four options. Please select at least one for your new password.");
    characterSelection();
  }
} 

// An Idea Function
function generatePassword() {
  var characterCount = prompt("How many characters would you like your new password to be?", "Must be between 8 and 128 characters")

  console.log(characterCount)

  if (characterCount < 8 || characterCount > 128) {
    alert("Please select a valid password length");
  } else {
    characterSelection();

  }

  console.log(passwordBlueprint.length, characterPool.length)

  console.log(characterCount - passwordBlueprint.length)

  console.log(passwordBlueprint + characterPool);
  
  // close to something here
  for (i = 0; i < characterCount - passwordBlueprint.length; i++){
    passwordBlueprint += characterPool[Math.floor(Math.random()*characterPool.length)]
  }
  console.log(passwordBlueprint)
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
