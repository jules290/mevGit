$(document).ready(function () {
    activitiesState()
});

function activitiesState() {
    var url = window.location.href;
    var list = url.search("list");
    if (list != -1) {
        main("list");
    }
    else {
        if (sessionStorage.ActivitiesState != "resumeSeance") {
            sessionStorage.ActivitiesState = "list"
        }
        main(sessionStorage.ActivitiesState)
    }
}

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