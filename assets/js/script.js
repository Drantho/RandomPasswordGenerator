// declare global variables for password criteria and set to user values
var passwordLength = parseInt(prompt("Enter password length."));
var lowerCaseCriteria = confirm("Use lower case digits.");
var upperCaseCriteria = confirm("Use upper case digits");
var numberCriteria = confirm("Use numeral digits.");
var specialCriteria = confirm("Use special character digits.");

// declare global array varialbles for possible digits
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", "+", "@"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// main function loops through getDigit() passwordLength times
function generatePassword() {
    var password = "";

    // Check to make sure user has selected at least 1 criteria and appropriate length 
    if (checkCriteria() && checkLength()) {
        console.log("passwordLength: ", passwordLength)

        // loop through and concat getDigit to password passwordLength times
        for (var i = 0; i < passwordLength; i++) {
            var tempDigit = getDigit();
            console.log("tempDigit: ", tempDigit);
            password = password.concat(tempDigit);
        }
        console.log("Password: ", password);

        // set html - passwordResult element's inner html to password
        document.getElementById("passwordResult").innerHTML = password;
    }

    // give user feedback on password requirements
    // 0 criteria and inappropriate length detected
    else if (!checkCriteria() && !checkLength()) {
        alert("Please select at least one criteria and a password length between 8 and 128 inclusive.");
    }

    // only 0 criteria aspect violated
    else if (!checkCriteria()) {
        alert("Please select at least one criteria.")
    }

    // only inappropriate length entered
    else {
        alert("Please select a password length between 8 and 128 inclusive.");
    }
}

// check if at least 1 criteria selected will return true if at least 1 criteria selected - false otherwise
function checkCriteria() {
    return lowerCaseCriteria || upperCaseCriteria || numberCriteria || specialCriteria;
}

// check if appropriate length entered - true if between 8 and 128 inclusive
function checkLength() {
    return passwordLength >= 8 && passwordLength <= 128;
}

// returns single digit based on set criteria
function getDigit() {

    // empty array will hold all digits from selected criteria
    var possibleDigits = [];

    // adds all lower case digits to possibleDigits if lowerCaseCriteria === true 
    if (lowerCaseCriteria) {
        console.log("lowerCaseCriteria: " + lowerCaseCriteria + " adding", lowerCase);
        possibleDigits = possibleDigits.concat(lowerCase);
    }

    // adds all upper case digits to possibleDigits if upperCaseCriteria === true
    if (upperCaseCriteria) {
        possibleDigits = possibleDigits.concat(upperCase);
    }

    // adds all numeral digits to possibleDigits if numberCriteria === true
    if (numberCriteria) {
        possibleDigits = possibleDigits.concat(numbers);
    }

    // adds all special character digits to possibleDigits if specialCriteria === true
    if (specialCriteria) {
        possibleDigits = possibleDigits.concat(specialCharacters);
    }

    console.log("possibleDigits: ", possibleDigits);

    // select random element from possible digits and return it
    return possibleDigits[Math.floor(Math.random() * possibleDigits.length)];
}

function reloadPage(){
    location.reload();
}

function showCriteria(){
    document.getElementById("passwordLength").innerHTML = passwordLength;
    document.getElementById("useLowerCase").innerHTML = lowerCaseCriteria;
    document.getElementById("useUpperCase").innerHTML = upperCaseCriteria;
    document.getElementById("useNumerals").innerHTML = numberCriteria;
    document.getElementById("useSpecialCharacters").innerHTML = specialCriteria;
}