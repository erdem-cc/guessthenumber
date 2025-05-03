var input = $("#myinput");
var gameStart = false;
var randomNumber;

function guessNumber() {

  $("h1").text("Guess the number");
  $("body").css("background-color","black");
  gameStart = true;
  randomNumber = Math.floor(Math.random() * 100 + 1);

}


$(document).on("keydown", function (e) {
  if(gameStart == false){
    guessNumber();
  }
  if (e.key === "Enter") {
    const value = input.val();
    if (value !== "") {

      checkAnswer(value);


      //alert(randomPassword(15));
      //alert(reverseString(input.val()));
      input.val("");
    }
  }
});

function wrong() {

  $('body').addClass("wrong-number");
  setTimeout(() => {
    $('body').removeClass("wrong-number");
  }, 200);
}

function checkAnswer(input) {
  if (input == randomNumber) {
    $("h1").text("Vous avez deviné !");
    gameStart = false;
    $("body").css('background-color', 'green');

  } else if (input > randomNumber) {
    $("h1").text("Nombre trop grand !");

    wrong();
  } else if (input < randomNumber) {
    $("h1").text("Nombre trop petit !");
    wrong();
  } else {
    $("h1").text("Nombre incorrect !");
    wrong();
  }
}

//Reverse string method
/*function reverseString(string) {
  var array = [];
  var result = "";
  var index = string.length - 1;
  for (let i = index; i >= 0; i--) {
    array.push(string[i]);
  }

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}

//random password exercice
function randomPassword(n) {
  var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890$:;,!?&é";
  var password = "";
  for (let i = 0; i < n; i++) {
    var randomNumber = Math.floor(Math.random() * string.length);
    password += string[randomNumber];
  }


  return password;
}*/

