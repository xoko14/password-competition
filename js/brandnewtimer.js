var timer = false;

function go() {
  clearInterval(timer);
  i = 60;
  timer = setInterval(function() {
    $(".progress-bar").attr("aria-valuenow", i / 60 * 100);
    $(".progress-bar").css("width", i / 60 * 100 + "%");
    $("#timeleft").html(i);
    if (i == 0) {
      $("#timeleft").html("0");
      clearInterval(timer);
    }
    i--;
  }, 1000);
}
