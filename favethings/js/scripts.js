$(document).ready(function() {
  $("#example form").submit(function(event) {
    var example = ["input1", "input2", "input3"];

    example.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
      console.log(userInput);
      example.push(userInput);
    });

    $("#myOutPut").show();

    event.preventDefault();
  });
});
