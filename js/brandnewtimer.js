var timer = false;

function resetTimer(){
  document.getElementById("stress").classList.remove('progress-bar-animated');
  $(".progress-bar").attr("aria-valuenow", 100);
  $(".progress-bar").css("width", 100 + "%");
}

function go() {
  document.getElementById("stress").classList.add('progress-bar-animated');
  clearInterval(timer);
  i = 59;
  timer = setInterval(function() {
    $(".progress-bar").attr("aria-valuenow", i / 60 * 100);
    $(".progress-bar").css("width", i / 60 * 100 + "%");
    $("#timeleft").html(i);
    if (i == 0) {
      $("#timeleft").html("60");
      clearInterval(timer);
      resetTimer();
    }
    i--;
  }, 1000);
}
