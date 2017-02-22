var ans = "";
var clear = false;
var calc = "";
$(document).ready(function() {
  $("button").click(function() {
    var text = $(this).attr("value");
    if(parseInt(text, 10) == text || text === "." || text === "/" || text === "*" || text === "-" || text === "+") {
      if(clear === false) {
        calc += text;
        $(".textbox").val(calc);
      } else {
        calc = text;
        $(".textbox").val(calc);
        clear = false;
      }
    } else if(text === "C") {
      calc = "";
      $(".textbox").val("");
    } else if(text === "=") {
      ans = eval(calc);
      $(".textbox").val(ans);
      clear = true;
    }
  });
});