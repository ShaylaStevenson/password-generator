// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//Generate Random Values

//for upper
function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

//for lower
function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

//for number
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

//for symbol
function getRandomSymbol() {
    var symbol = "!@#$%^&*()=+";
    return symbol[Math.floor(Math.random()*symbol.length)];
}

//Store Users Answers

var answersObject = {
    askFunction: function() {
        window.alert("To create your password, certain criteria must be met. Please answer the following questions:");
        userPwLength = window.prompt("To start, how many characters long would you like your password to be?\nMinimum: 8 characters, and\nMaximum: 128 characters");
        userUpper = window.confirm("We recommend you use a combination of upper and lowercase characters.\nWould you like to include capitalized letters?\nIf not, select 'cancel'.");
        userLower = window.confirm("Would you like to include lowercase letters?\nIf not, select 'cancel'.");
        userNumber = window.confirm("Would you like to include numeric characters in your password? If not, select 'cancel'.");
        userSymbol = window.confirm("For added security, we suggest using special characters.\nWould you like to include special characters in your password?\nIf not, select 'cancel'.");
    },
};
answersObject.askFunction();

//Store Generated Random Function
const randomFunction = {
    upper: getRandomUpperCase,
    lower: getRandomLowerCase,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

//Script from original js
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);