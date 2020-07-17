$(document).ready(function () {
    $("#main2").hide();
    $("#syncClose").hide();
    $("#syncBtnContenair").hide();
});

$("#backArrow").click(function () {
    window.location.reload();
});

$("#syncImg").click(function () {
    document.getElementById("syncImg").style.transform = "rotate(360deg)";
    $("#sync").animate({height: "152px"}, 280)
    $("#sync").animate({width: "200px"}, 280)
    setTimeout(() => {
        $("#syncClose").show();
        $("#syncBtnContenair").show();
    }, 560);
})

$("#syncClose").click(function () {
    document.getElementById("syncImg").style.transform = "rotate(0deg)";
    $("#sync").animate({width: "40px"}, 280)
    $("#sync").animate({height: "40px"}, 280)
    $("#syncClose").hide();
    $("#syncBtnContenair").hide();
})