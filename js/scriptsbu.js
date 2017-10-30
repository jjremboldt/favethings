$(document).ready(function() {
  $("#example form").submit(function(event) {
    var input1Input = $("input#input1").val();
    var input2Input = $("input#input2").val();
    var input3Input= $("input#input3").val();
    var input4Input = $("input#input4").val();
    var input5Input = $("input#input5").val();
    var input6Input = $("input#input6").val();

    $(".input1").append(input1Input);
    $(".input2").append(input2Input);
    $(".input3").append(input3Input);
    $(".input4").append(input4Input);
    $(".input5").append(input5Input);
    $(".input6").append(input6Input);

    $("#myOutPut").show();

    event.preventDefault();
  });
});
