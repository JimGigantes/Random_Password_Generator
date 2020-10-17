// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", function(){
  writePassword()
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  //passwordText.value = password;
}

function generatePassword() {

  var possiblecharacters = {
    uppercaseLetters:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowercaseLetters:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbers:["1","2","3","4","5","6","7","8","9","0"],
    specialCharacters:["!","@","#","$","%","^","&","*","(",")","{","[","}","]","`","~",";",":","'",",","<",".",">","/","?","+","="]
  };
  var upperbool = false;
  var lowerbool = false;
  var numbersbool = false;
  var specialbool = false;
  var passwordlength = 0
 // passwordlength = prompt("how many characters would you like your password to be? (numbers only please)")

  while ( passwordlength <= 8 || passwordlength >= 128){
  passwordlength = prompt("how many characters would you like your password to be? (numbers only please)");
  }


  while ((upperbool === false && lowerbool === false && specialbool === false && numbersbool === false)){;
  upperbool = confirm("Do you need Uppercase Letters in your password?");
  lowerbool = confirm("Do you need Lowercase Letters in your password?");
  specialbool = confirm("Do you need Special Characters in your password?");
  numbersbool = confirm("Do you need Numbers in your password?");

    if (upperbool === false && lowerbool === false && specialbool === false && numbersbool === false){;
      alert("you cant select false for everything. Be happy and include some variety in your life.");
    };
  }

    var passwordText = "";

    while ( passwordText.length < passwordlength) {

      if (upperbool && passwordText.length < passwordlength){
        passwordText = passwordText + possiblecharacters.uppercaseLetters[Math.floor(Math.random() * possiblecharacters.uppercaseLetters.length)]
        //console.log(passwordText)
      } 
      if (lowerbool && passwordText.length < passwordlength){
        passwordText = passwordText + possiblecharacters.lowercaseLetters[Math.floor(Math.random() * possiblecharacters.lowercaseLetters.length)]
        //console.log(passwordText)
      }
      if (specialbool && passwordText.length < passwordlength){
        passwordText = passwordText + possiblecharacters.specialCharacters[Math.floor(Math.random() * possiblecharacters.specialCharacters.length)]
        //console.log(passwordText)
      }
      if (numbersbool && passwordText.length < passwordlength){
        passwordText = passwordText + possiblecharacters.numbers[Math.floor(Math.random() * possiblecharacters.numbers.length)]
        
      }

        console.log(passwordText)

        var shuffled = passwordText.split('').sort(function(){return 0.5-Math.random()}).join('')
        document.getElementById("password").innerText = shuffled 

      }



      



  // Add event listener to generate buttonpasswordText
}
