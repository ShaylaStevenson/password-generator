// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
    
    window.alert("To create your password, certain criteria must be met. Please answer the following questions:");
    
   //prompts to obtain user choices 

    
   var pwLength = window.prompt("Your password must be:\nMINIMUM 8 characters long, and\nMAXIMUM 128 characters long\nHow many characters would you like your password to be?");
   validateLength()
   //if (pwLength >= 8 && pwLength <= 128) {
      //  window.alert("Great! Your password will be " + pwLength + " characters long.")
    //}else if (pwLength < 8 || pwLength > 128) {
      //  window.prompt("You must select desired length of password to continue.\nMINIMUM 8 characters long, and\nMAXIMUM 128 characters long\nHow many characters would you like your password to be?");
    //}
    
    function validateLength() {
        // Get the value of input field with id="numb"
        
        // If x is Not a Number or less than one or greater than 10, output "input is not valid"
        // If x is a number between 1 and 10, output "Input OK"
        
        if (number.isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
          alert("Input not valid");
          var pwLength = window.prompt("Your password must be:\nMINIMUM 8 characters long, and\nMAXIMUM 128 characters long\nHow many characters would you like your password to be?");
          validateLength();
        } else {
          alert("Great! Your password will be " + pwLength + " characters long.");
        }
      }
            

    var pwUpperCase = window.confirm("We recommend you use a combination of upper and lowercase characters.\nWould you like to include capitalized letters?\nIf not, select 'cancel'.");
    var pwLowerCase = window.confirm("Would you like to include lowercase letters?\nIf not, select 'cancel'.");
    var pwCharType = window.confirm("For added security, we suggest using special characters.\nWould you like to include special characters in your password?\nIf not, select 'cancel'.");



    //loop to try math
    for (i = 1; i < pwLength; i++) {
        var pw
    }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");//exports response to html

  passwordText.value = password;

}







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
