var pigLatin = "";
var toPigLatin = function(sentence) {
  var firstLetter = sentence.substring(0,1);
  var firstLast = sentence.substring(1, sentence.length);
  var twoLetter = sentence.substring(0,2);
  var twoLetterLast = sentence.substring(2, sentence.length);
  var threeLetter = sentence.substring(0,3);
  var firstLast = sentence.substring(3, sentence.length);
  var vowels = ["a","e", "i", "o", "u", "A","E", "I", "O", "U"];
  for (var index = 0; index < firstLetter.length; index++){
      for (var vowelIndex =0; vowelIndex < vowels.length; vowelIndex++) {
        if (firstLetter[index] === vowels[vowelIndex]){
         return sentence + "way";
        };
      };
    };
};


$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#pigLatin").val();
    var splt = userInput.split("");
    var pigLatin = toPigLatin(userInput);

    $("#result").append("<p>" + pigLatin + "</p>")



  });
});
