function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

var upperCase = "HELLO!"
 
uppercase.toUpperCase() === uppercase // true
 
var lowerCase = 'hello!'
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'I love you Grandma!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase

function sayHiToGrandma(string) {
  if (string === lowerCase) {
    return "I can't hear you!";
  } if (string === upperCase) {
    return "YES INDEED!";
  } if (string === mixedCase) {
    return "I love you, Grandma."
  }
}