$(document).ready(function() {
    $("#mySidenav").animate({marginLeft: '-131px'}, 0);
    if (localStorage.oauthStatus == "ok") {
        document.getElementById("strava").innerText = "strava";
        document.getElementById("strava").href = "../strava/strava.html"
    }
})

$("#open").click(function() {
    if (document.getElementById("open").style.marginLeft == "130px") {
        $("#mySidenav").animate({marginLeft: '-131px'}, 200);
        $("#open").animate({marginLeft: '0px'}, 0);
    }
    else{
        $("#mySidenav").animate({marginLeft: '0px'}, 200);
        $("#open").animate({marginLeft: '130px'}, 100);
    }
})

$("#prgmy").hide();
$("#prgchc").hide();

$("#prg").click(function() {
    $("#prgmy").toggle(300);
    $("#prgchc").toggle(200);
});