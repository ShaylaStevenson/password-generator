// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
    
    window.alert("To create your secure password, certain criteria must be met. Please answer the following prompts:");
    
    
    var pwLength = window.prompt("Your password must be:\nMINIMUM 8 characters long, and\nMAXIMUM 128 characters long\nHow many characters would you like your password to be?");
    var pwUpperCase = window.confirm("We recommend you use a combination of upper and lowercase characters. Would you like to include capitalized letters?");
    var pwLowerCase = window.confirm("Would you like to include lowercase letters?")


    
    var pwCharType = window.prompt("")
    




  var password = generatePassword();
  var passwordText = document.querySelector("#password");//exports response to html

  passwordText.value = password;

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
