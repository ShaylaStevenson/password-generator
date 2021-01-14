var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to collect user's input, concatinate options, generate random list, and apply length
function generatePassword() {
    //Prompts to obtain user input
    alert("Lets start creating your password! Please answer the following questions.");
    
    //Length prompt plus validation loop
    var length = Number(prompt("How many characters would you like your password to be?\nMinimum 8\nMaximum 128"));
    while (isNaN(length) || length < 8 || length > 128) length = 
        Number(prompt("Sorry, that is not a valid choice.\nMinimum characters: 8\nMaximum characters: 128\nHow many characters would you like your password to be?"));
    
    //Continue when length condition satisfied
    var uppers = confirm("Would you like to use uppercase letters?");
    var lowers = confirm("Would you like to use lowercase letters?");
    var numbers = confirm("Would you like to use numbers?");
    var symbols = confirm("Would you like to use special characters?");
    
    //Loop through prompts again if no characters selected
    while (!uppers && !lowers && !numbers && !symbols) {
        alert("You must select at least one character type!");
        uppers = confirm("Would you like to use uppercase letters?");
        lowers = confirm("Would you like to use lowercase letters?");
        numbers = confirm("Would you like to use numbers?");
        symbols = confirm("Would you like to use special characters?");
    }
    
    //Variables to store password in progress
    var password = "";
    var characterString = "";
    
    //Determine user choices and add character options to single string
    //for upper
    if (uppers) {
        var uppersOp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        characterString = characterString.concat(uppersOp);
    }
    //for lower
    if (lowers) {
        var lowersOp = "abcdefghijklmnopqrstuvwxyz";
        characterString = characterString.concat(lowersOp);
    }
    //for number
    if (numbers) {
        var numbersOp = "01223456789";
        characterString = characterString.concat(numbersOp);
    }
    //for symbol
    if (symbols) {
        var symbolsOp = "!@#$%^&*()=+";
        characterString = characterString.concat(symbolsOp);
    }

    //Creates random list and loops through until length met
    for (var i = 0; i < length; i++) {
        var randomList = Math.floor(Math.random() * characterString.length);
        var char = characterString.charAt(randomList);
        password = password.concat(char);
        console.log(password);
    }
    return password;
}

// Write password to the #password input
function writePassword() { 
    password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    return;
}
