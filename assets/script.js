//Link to btn in HTML
var generateBtn = document.querySelector("#generate");

//Event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Display final output in HTML-NEEDS ATTENTION
var passwordText = document.querySelector("#password");

//Main Function called when generate btn clicked
function writePassword() {

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

    //Function to create random variables for true prompts
    function generatePassword() {
        var password = "";
        passwordText.value = password;
        var allowed = {};
        if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
        if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
        if (numbers) password += rando(allowed.numbers = "1234567890");
        if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");
        
        //loop through allowed values until length met
        for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

        //This is where it gets messy! This seems redundant to queryselector in head
        document.getElementById("password").value = randoSequence(password).join("");
        
        console.log(password); //display random password
        console.log(passwordText);//display cooresponding HTML section
        console.log(passwordText.value);//displays different random password that shows in HTML
    }
    //Call to run function
    generatePassword()
}
