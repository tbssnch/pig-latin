var pigLatin = function(userInput) {
  
}



$(document).ready(function() {
  $("form#pig-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#pigLatin").val();
    var result = pigLatin(userInput);

  });
}
