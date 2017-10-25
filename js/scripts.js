var pigLatin = function(userInput) {
  var vowels = ["a","e", "i", "o", "u", "A","E", "I", "O", "U"]
  var firstLetter = "";
  var firstLast = "";
  var twoLetter = "";
  var twoLetterLast = "";
  var threeLetter = "";
  var firstLast = "";

  for (var index = 0; index < firstLetter.length; index++){
      for (var vowelIndex =0; vowelIndex < vowels.length; vowelIndex++) {
        if (firstLetter[index] === vowels[vowelIndex]){
          result[index] = userInput + "way";
  // if (firstLetter === vowel) {
  //   result = (userInput + way)
  // } else if ( firstLetter !== vowel) {
  //   result = (userInput + firstLetter + ay)
        };
      };
    };
  };



$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#pigLatin").val();
    var firstLetter = userInput.substring(0,1);
    var firstLast = userInput.substring(1, userInput.length);
    var twoLetter = userInput.substring(0,2);
    var twoLetterLast = userInput.substring(2, userInput.length);
    var threeLetter = userInput.substring(0,3);
    var firstLast = userInput.substring(3, userInput.length);
    var result = pigLatin(userInput);

    $(".pigLatinResult").text(result);
  });
});





  //
  // // Back End

// var firstLetter = []
