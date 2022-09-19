// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
//Stores the password as it is built.
var passwordBlueprint = ""
//Stores the possible characters for the password.
var characterPool = ""
 // Stores the amount of characters selected during the confirm prompts.
 var confirmedCharacters = 0
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Prompts the users to select the types of character to include in the password.
function characterSelection() {
  var includeLowercase = confirm("Would you like to include lowercase letters in your password?")

  var includeUppercase = confirm("Would you like to include uppercase letters in your password?")

  var includeNumbers = confirm ("Would you like to include numbers in your password?")

  var includeSpecialCharacters = confirm ("Would you like to include special characters in your password?");
  //These two lines allow the user to generate multiple passwords without having to refresh the page.
  confirmedCharacters = 0;
  passwordBlueprint = "";
  //Logic for what characters to include.
  if (includeLowercase === true || includeUppercase === true || includeNumbers === true || includeSpecialCharacters === true) {
    if (includeLowercase === true) {
      passwordBlueprint += lowercaseLetters[Math.floor(Math.random()*lowercaseLetters.length)]
      console.log(passwordBlueprint);
      characterPool += lowercaseLetters;
      confirmedCharacters++
    }
  
    if (includeUppercase === true) {
      passwordBlueprint += uppercaseLetters[Math.floor(Math.random()*uppercaseLetters.length)]
      console.log(passwordBlueprint);
      characterPool += uppercaseLetters;
      confirmedCharacters++
    }
   
    if (includeNumbers === true) {
      passwordBlueprint += numbers[Math.floor(Math.random()*numbers.length)]
      console.log(passwordBlueprint);
      characterPool += numbers;
      confirmedCharacters++
    }
  
    if (includeSpecialCharacters === true) {
      passwordBlueprint += specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
      console.log(passwordBlueprint);
      characterPool += specialCharacters;
      confirmedCharacters++
    }
    //If no characters are selected above then the user is told they must choose one.
  } else {
    alert("A strong password contains at least one of these four options. Please select at least one for your new password.");
    characterSelection();
  }
} 

// Initial prompt that asks for password length. Also checks to make sure the users is inputing the correct length and a number.
function generatePassword() {
  var characterCount = prompt("How many characters would you like your new password to be?", "Must be between 8 and 128 characters")
  console.log(characterCount)

  if (isNaN(characterCount)) {
    alert("You must input a number value.")
    return("Please press \"Generate Password\" button again.")
  }
  else if (characterCount < 8 || characterCount > 128) {
    alert("Please select a valid password length");

    return "A safe password is between 8 and 128 characters. Please press \"Generate Password\" button again."
  } else {
    characterSelection();
  }
  //Generates the remaining password characters.
  for (i = 0; i < characterCount - confirmedCharacters; i++){
    passwordBlueprint += characterPool[Math.floor(Math.random()*characterPool.length)]
  }
  console.log(passwordBlueprint)
  console.log(passwordBlueprint.length)
  return passwordBlueprint;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
