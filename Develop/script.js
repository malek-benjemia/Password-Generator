// Assignment code here
var checkspecial = function(randomstring, acceptarray){
  result = true;
  for (var i=0 ; i < randomstring.length ; i++){
    result = result && acceptarray.includes(randomstring[i]) ;
    //console.log(result);
  };
  return result;
};

var generatePassword = function(){

  var critleng = 0;
  while (critleng < 8 || critleng > 128 ) {
    critleng = window.prompt("Select the length of the password. Please chose a number between 8 and 128.");
    critleng = parseInt(critleng);
    //console.log(critleng);
    if (critleng >= 8 && critleng <= 128) {break;};
  };

  var critspec = 0;
  var acceptnumb =['1', '2', '3', '4'];
  var condition = false;
  while (condition ==false){
    critspec = window.prompt("Select character types to include in the password. Please type 1 for lowercase, 2 for uppercase, 3 for numeric, and/or 4 for special characters. Do not use space or comma.");
    //console.log(critspec);
    condition = checkspecial(critspec, acceptnumb);
    //console.log(condition);
    if (condition ==true) {break;};
  };

  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ !”#$%&’()*+,-./:;<=>?@[]^_`{|}~'
  var password = '';
  for (var i=0 ; i < critleng; i++){
    var additional = '';
    if (critspec.includes(1)) { additional += characters[Math.floor(Math.random()*26)].toLowerCase(); };
    if (critspec.includes(2)) { additional += characters[Math.floor(Math.random()*26)].toUpperCase();; };
    if (critspec.includes(3)) { additional +=  Math.floor(Math.random()*10) ;};
    if (critspec.includes(4)) { additional +=  characters[Math.floor(Math.random()*32)+26]; };
    password +=  additional [Math.floor(Math.random()*(additional.length)) ];
  };

  return password;
};

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

