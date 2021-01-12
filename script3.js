// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperOptions = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowerOptions = ("abcdefghijklmnopqrstuvwxyz");
var numberOptions = ("0123456789");
var symbolOptions = ("!@#$%&");


    // Write password to the #password input
    function writePassword() {

    window.alert("To create your password, certain criteria must be met. Please answer the following questions:");
    var pwLength = window.prompt("To start, how many characters long would you like your password to be?\nMinimum: 8 characters, and\nMaximum: 128 characters");
    var userUpper = window.confirm("We recommend you use a combination of upper and lowercase characters.\nWould you like to include capitalized letters?\nIf not, select 'cancel'.");
    var userLower = window.confirm("Would you like to include lowercase letters?\nIf not, select 'cancel'.");
    var userNumber = window.confirm("Would you like to include numeric characters in your password? If not, select 'cancel'.");
    var userSymbol = window.confirm("For added security, we suggest using special characters.\nWould you like to include special characters in your password?\nIf not, select 'cancel'.");

  
    //var pwd = "",
    //for (var i=0; i<1; i++) {
    //    pwd += characters.choreAt(Math.floor(Math.random() + characters.length));
    //}
    //return pwd;

    


    




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
