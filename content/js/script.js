$(function () {
  $("#datepicker").datepicker();

  $("#slider1").slider({
    range: "min",
    animate: "fast",
    value: 1000,
    min: 1000,
    max: 3000000,
    step: 1,
    slide: function (event, ui) {
      $("#sum").val("" + ui.value);
    }
  });
  $("#sum").val("" + $("#slider1").slider("value"));

  $("#slider2").slider({
    range: "min",
    animate: "fast",
    value: 1000,
    min: 1000,
    max: 3000000,
    step: 1,
    slide: function (event, ui) {
      $("#refill-sum").val("" + ui.value);
    }
  });
  $("#refill-sum").val("" + $("#slider2").slider("value"));

  $("#calculatorForm").submit(function(e){
    e.preventDefault();
    $.ajax({
      url: "calc.php",
      method: "POST",
      dataType: "html",
      data: $(this).serialize(),
      success: function(data){
        $("#calcSum").html(data);
      }
    });
  });
});