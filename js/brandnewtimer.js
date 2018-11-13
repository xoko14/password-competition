function go() {
    i = 60;
    var myInterval = setInterval(function() {
        $(".progress-bar").attr("aria-valuenow", i/60*100);
        $(".progress-bar").css("width",i/60*100 + "%");
        $("#timeleft").html(i);
        if (i == 0) {
            $("#timeleft").html("Complete!");
            clearInterval(myInterval);
        }
        i--;
    }
    ,1000);
}
