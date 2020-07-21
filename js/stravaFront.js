$(document).ready(function () {
    activitiesState()
});

function activitiesState() {
    if (sessionStorage.ActivitiesState != "resumeSeance") {
        sessionStorage.ActivitiesState = "list"
    }
    main(sessionStorage.ActivitiesState)
}

$("#backArrow").click(function () {
    sessionStorage.ActivitiesState = "list"
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

function main(state) {
    if (state == "list") {
        $("#main1").show();
        $("#main2").hide();
        $("#syncClose").hide();
        $("#syncBtnContenair").hide();
        $("#sync").show();
    }
    else if (state == "resumeSeance") {
        $("#main1").hide();
        $("#main2").show();
        $("#sync").hide();
        postData()
    }
}