var pigLatin = "";
var toPigLatin = function(sentence) {
  var firstLetter = sentence.substring(0,1);
  var firstLast = sentence.substring(1, sentence.length);
  var twoLetter = sentence.substring(0,2);
  var twoLetterLast = sentence.substring(2, sentence.length);
  var threeLetter = sentence.substring(0,3);
  var threeLast = sentence.substring(3, sentence.length);
  var vowels = ["a","e", "i", "o", "u", "A","E", "I", "O", "U", "y", "Y"];
  var qu = "qu"
  for (var index = 0; index < firstLetter.length; index++){
      for (var vowelIndex =0; vowelIndex < vowels.length; vowelIndex++)
      { if (firstLetter === "y"){
        return firstLast + firstLetter + "ay"
      } else if (firstLetter[index] === vowels[vowelIndex]){
         return sentence + "way";
       }
     }
   };
  for (var index = 0; index < twoLetter.length; index++){
    for (var vowelIndex =0; vowelIndex < vowels.length; vowelIndex++) {
      if (twoLetter === qu ){
        return twoLetterLast + twoLetter + "ay"
      } else if (twoLetter[index] === vowels[vowelIndex]){
        return firstLast + firstLetter + "ay"
      }
      }
    };
  for (var index = 0; index < threeLetter.length; index++){
    for (var vowelIndex =0; vowelIndex < vowels.length; vowelIndex++) {
      if (threeLetter[index] === vowels[vowelIndex]){
        return twoLetterLast + twoLetter + "ay"
      }
       else {
       return sentence
      }
      }
    };
    };


$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#pigLatin").val();
    var stringInput = userInput.slice();
    // var splt = userInput.split("");
    var pigLatin = toPigLatin(userInput.slice());

    $("#result").append("<p>" + pigLatin + "</p>")



  });
});
