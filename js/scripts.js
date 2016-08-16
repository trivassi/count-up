$(document).ready(function() {
  $("form#numbers").submit(function(event){

    var countUntil = parseInt($("#count-until").val());
    var countBy = parseInt($("#count-by").val());

    var array = [];

    if (countUntil < 0 || countBy < 0) {
      alert("Please use only positive numbers");
    } else if (countUntil < countBy){
      alert ("The number you'll count until should be bigger than the number you'll count by.");
    } else {
      for (var i = countBy; i <= countUntil; i += countBy) {
        array.push(i);
        var stringResult = array.join(", ");
        $("#display-count-to").text(countUntil);
        $("#display-count-by").text(countBy);
        $("#display-output").text(stringResult);
        $(".display-result").show();
      };
    }

    event.preventDefault();

  });
});
