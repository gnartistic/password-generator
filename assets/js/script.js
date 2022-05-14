// Assignment code here
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userInput;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// upper case var ----
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

// number and special character var ----
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "?", ">", "<", "@", "^", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//start function -------------------------------------------
function generatePassword() {
  //ask for password required length -----------------------
  passwordLength = prompt("How many characters does your password require? Please choose between 8 and 128");
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    alert("Required value");

    //alert if required input for passwordLength isnt met ----
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose a between a length of 8 and 128");
    console.log("Password lenght " + passwordLength);
    //ask for required password characteristics ---------------
  } else {
    confirmLower = confirm("Does this password require lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Does this password require upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Does this password require Numbers?");
    console.log("Numbers " + confirmNumber);
    confirmSpecial = confirm("Does this password require special characters?");
    console.log("Special character " + confirmSpecial);
  };

  //if no user input ----------------------------------------
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userInput = alert("You must choose a criteria!");

    // 4 confirmed options ----------------------------------
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userInput = lowerCase.concat(upperCase, numbers, special);
    console.log(userInput);

    // 3 confirmed combination options -----------------------
  } else if (confirmLower && confirmUpper && confirmNumber) {
    userInput = lowerCase.concat(upperCase, numbers);
    console.log(userInput);

  } else if (confirmLower && confirmUpper && confirmSpecial) {
    userInput = lowerCase.concat(upperCase, special);
    console.log(userInput);

  } else if (confirmLower && confirmNumber && confirmSpecial) {
    userInput = lowerCase.concat(numbers, special);

  } else if (confirmUpper && confirmNumber && confirmSpecial) {
    userInput = upperCase.concat(numbers, special);
    console.log(userInput);

    //2 confirmed combination options ---------------------------
  } else if (confirmLower && confirmUpper) {
    userInput = lowerCase.concat(upperCase);
    console.log(userInput);
  }
  else if (confirmLower && confirmNumber) {
    userInput = lowerCase.concat(numbers);
    console.log(userInput);
  }
  else if (confirmLower && confirmSpecial) {
    userInput = lowerCase.concat(special);
    console.log(userInput);
  }
  else if (confirmUpper && confirmNumber) {
    userInput = upperCase.concat(numbers);
    console.log(userInput);
  }
  else if (confirmUpper && confirmSpecial) {
    userInput = upperCase.concat(special);
    console.log(userInput);
  }
  else if (confirmNumber && confirmSpecial) {
    userInput = numbers.concat(special);
    console.log(userInput);

    //1 confirmed option only ----------------------------------------
  } else if (confirmLower) {
    userInput = lowerCase;
    console.log(userInput)

  } else if (confirmUpper) {
    userInput = upperCase;
    console.log(userInput);

  } else if (confirmNumber) {
    userInput = numbers;
    console.log(userInput);

  } else if (confirmSpecial) {
    userInput = special;
    console.log(userInput);
  };

  //creating an empty variable for the password length ---------------
  var passwordContainer = [];

  //loop for random selection ----------------------------------------
  for (var i = 0; i < passwordLength; i++) {
    var allInput = userInput[Math.floor(Math.random() * userInput.length)];
    passwordContainer.push(allInput);
    console.log(allInput);
  }

  //return generated password --------------------------------------
  
  var password = passwordContainer.join("");
  console.log("Your new password is: " + password);
  return password;

}
