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

function viewSwitch() {
    if (view < -20) {
        document.getElementById("right").style.position = "fixed";
        document.getElementById("right").style.top = "0px"
    }
    else {
        document.getElementById("right").style.position = "absolute";
        document.getElementById("right").style.top = "100px"
    }
}