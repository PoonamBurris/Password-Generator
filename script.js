// Assignment code here
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
console.log(generateBtn)

//User input variables
var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "#$%&()*+<=>?@,.'[]\/^_|{}`~"
var possible = "";
  
//Function to generate password
function generatePassword() {
    console.log("btn was clicked")
   
    //Prompt questions and validation
    var numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
    if (numberOfCharacters < 8 || numberOfCharacters > 128) {
      alert( "Please choose between 8-128 characters.");
    } else if (isNaN(numberOfCharacters)) {
        numberOfCharacters = prompt("Please enter a valid number.");
    }
    else {
      alert("Your password will be " + numberOfCharacters + " characters long.");
      
    }
  
    var includeLowercase = confirm("Do you want lowercase characters included in password?");
    if (includeLowercase) {
      alert("Your password will include lowercase characters.");
      possible += lowerCase
    }
    else {
      alert("Your password will NOT include lowercase characters.");
    };
  
    var includeUppercase = confirm("Do you want uppercase characters included in password??");
    if (includeUppercase) {
      alert("Your password include will include uppercase characters.");
      possible += upperCase
    }
    else {
      alert("Your password will NOT include uppercase characters.");
    };
  
   var includeNumbers = confirm("Do you want to include numbers in password?");
    if (includeNumbers) {
      alert("Your password will include numbers.");
      possible += numbers
    }
    else {
      alert("Your password will NOT include numbers.");
    };
  
    var includeSpecial = confirm("Do you want special characters in password?");
    if (includeSpecial) {
      alert("Your password will include special characters.");
      possible += special
    }
    else {
      alert("Your password will NOT include special characters.");
    };
  
    if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial  === false) 
    {
      alert("Please select to include at least one character type in password.");
      generatePassword();
    }
  
    // Random password generation of all selected variables
    var randomPassword = "";
    for (var i = 0; i < numberOfCharacters; i++) {
     
      var rng =[Math.floor(Math.random() * possible.length)];
      
      randomPassword = randomPassword + possible[rng];
    }
    return randomPassword
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
     var passwordText = document.querySelector("#password");
   
     passwordText.value = password;
   
  }

   // Add event listener to generate button
   generateBtn.addEventListener("click", writePassword);
   console.log(generateBtn)


