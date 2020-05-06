let Top;
let view;
$(document).ready(function() {
    Top = $('#mainTitle').offset().top;
    view = Top - $(window).scrollTop();
    viewSwitch()
  
    $(window).scroll(function() {
        view = Top - $(window).scrollTop();
        viewSwitch()
    });
});

$("#section1").click(function () {
    window.location.href = "#mainDiv1";
})

$("#section2").click(function () {
    window.location.href = "#mainDiv2";
})

$("#section3").click(function () {
    window.location.href = "#mainDiv3";
})

$("#section1").hover(function () {
    $("#section1").css("border-left", "4px solid rgb(66, 66, 66)");
    $("#section1").css("margin-left", "-4px");
},
function () {
    $("#section1").css("border-left", "2px solid rgb(66, 66, 66)");
    $("#section1").css("margin-left", "-2px");
})

$("#section2").hover(function () {
    $("#section2").css("border-left", "4px solid rgb(66, 66, 66)");
    $("#section2").css("margin-left", "-4px");
},
function () {
    $("#section2").css("border-left", "2px solid rgb(66, 66, 66)");
    $("#section2").css("margin-left", "-2px");
})

$("#section3").hover(function () {
    $("#section3").css("border-left", "4px solid rgb(66, 66, 66)");
    $("#section3").css("margin-left", "-4px");
},
function () {
    $("#section3").css("border-left", "2px solid rgb(66, 66, 66)");
    $("#section3").css("margin-left", "-2px");
})

function viewSwitch() {
    if (view < -20) {
        document.getElementById("right").style.position = "fixed";
        document.getElementById("right").style.top = "0px"
    }
    else {
        document.getElementById("right").style.position = "absolute";
        document.getElementById("right").style.top = "100px"
    }
    if (view < - 10 && view > -794) {
        document.getElementById("section1").style.borderLeft = "6px solid rgb(66, 66, 66)";
        document.getElementById("section1").style.marginLeft = "-6px";

        document.getElementById("section2").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section2").style.marginLeft = "-2px";
        document.getElementById("section3").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section3").style.marginLeft = "-2px";
    }
    else if (view < -794 && view > -894) {
        document.getElementById("section2").style.borderLeft = "6px solid rgb(66, 66, 66)";
        document.getElementById("section2").style.marginLeft = "-6px";

        document.getElementById("section1").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section1").style.marginLeft = "-2px";
        document.getElementById("section3").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section3").style.marginLeft = "-2px";
    }
    else if (view < -894) {
        document.getElementById("section3").style.borderLeft = "6px solid rgb(66, 66, 66)";
        document.getElementById("section3").style.marginLeft = "-6px";

        document.getElementById("section1").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section1").style.marginLeft = "-2px";
        document.getElementById("section2").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section2").style.marginLeft = "-2px";
    }
    else {
        document.getElementById("section1").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section1").style.marginLeft = "-2px";
        document.getElementById("section2").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section2").style.marginLeft = "-2px";
        document.getElementById("section3").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section3").style.marginLeft = "-2px";
    }
}