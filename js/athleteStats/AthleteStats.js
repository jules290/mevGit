$(document).ready(function () {
    $("#yearStatsData2nd").hide();
    if (localStorage.Activities) {
        Activities = JSON.parse(localStorage.Activities);
        console.log(Activities);
        postYearStats(Activities);
        postWeekStats(Activities);
        postBestVitesse(Activities)
        postBestPuissance(Activities)
    }
    else {

    }
})

if (localStorage.prInterval) {
    var prInterval = JSON.parse(localStorage.prInterval);
}