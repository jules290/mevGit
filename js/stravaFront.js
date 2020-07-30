$(document).ready(function () {
    activitiesState()
});

function activitiesState() {
    if (sessionStorage.ActivitiesState != "resumeSeance") {
        sessionStorage.ActivitiesState = "list"
    }
    main(sessionStorage.ActivitiesState)
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