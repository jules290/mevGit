let Top;
let view;
$(document).ready(function() {
    Top = $('#mainTitle').offset().top;
    view = Top - $(window).scrollTop();
    viewSwitch()
    console.log(view)
  
    $(window).scroll(function() {
        view = Top - $(window).scrollTop();
        viewSwitch()
        console.log(view)
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

function viewSwitch() {
    if (view < -20) {
        document.getElementById("right").style.position = "fixed";
        document.getElementById("right").style.top = "0px"
    }
    else {
        document.getElementById("right").style.position = "absolute";
        document.getElementById("right").style.top = "100px"
    }
    if (view < - 10 && view > -720) {
        document.getElementById("section1").style.borderLeft = "6px solid rgb(66, 66, 66)";
        document.getElementById("section1").style.marginLeft = "-6px";

        document.getElementById("section2").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section2").style.marginLeft = "-2px";
        document.getElementById("section3").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section3").style.marginLeft = "-2px";
    }
    else if (view < -720 && view > -1300) {
        document.getElementById("section2").style.borderLeft = "6px solid rgb(66, 66, 66)";
        document.getElementById("section2").style.marginLeft = "-6px";

        document.getElementById("section1").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section1").style.marginLeft = "-2px";
        document.getElementById("section3").style.borderLeft = "2px solid rgb(66, 66, 66)";
        document.getElementById("section3").style.marginLeft = "-2px";
    }
    else if (view < -1300) {
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