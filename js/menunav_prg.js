$(document).ready(function() {
    $("#mySidenav").animate({marginLeft: '-131px'}, 0);
    if (localStorage.oauthStatus == "ok") {
        $("#stravaConnect").hide();
        $("#strava").show();
    }
    else {
        $("#stravaConnect").show();
        $("#strava").hide();
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

$("#strava").click(function() {
    $("#stravaActivite").toggle(300);
    $("#stravaMap").toggle(300);
})

$("#prgmy").hide();
$("#prgchc").hide();
$("#stravaActivite").hide();
$("#stravaMap").hide();

$("#prg").click(function() {
    $("#prgmy").toggle(300);
    $("#prgchc").toggle(200);
});