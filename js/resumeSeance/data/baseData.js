function postAthleteName() {
    if (localStorage.athleteName && localStorage.athleteName != undefined) {
        document.getElementById("resumeDeSeanceTitleName").innerText = localStorage.athleteName;
    }
    else {
        document.getElementById("resumeDeSeanceTitleName").innerText = "";
        document.getElementById("resumeDeSeanceTitleSpace").innerText = "";
    }
}

function postActivitiestempsDistance() {
    let Moyenne = JSON.parse(localStorage.Activities)[sessionStorage.activityIndex].average_speed * 3.6;
    let Name = JSON.parse(localStorage.Activities)[sessionStorage.activityIndex].name;
    let Time = JSON.parse(localStorage.Activities)[sessionStorage.activityIndex].moving_time;
    let Dst = JSON.parse(localStorage.Activities)[sessionStorage.activityIndex].distance;

    document.getElementById("resumeDeSeanceTitleActivite").innerText = Name;

        if (Time / 60 >= 60) {
            let heure;
            let minute;
            if (Time / 3600 >= 10) {
                heure = (Time / 3600).toString().substr(0, 2);
                minute = (Math.round(Time / 60)) % 60
            } else {
                heure = (Time / 3600).toString().substr(0, 1);
                minute = (Math.round(Time/ 60)) % 60
            }
            document.getElementById("firstCaseDataTemps").innerText = heure + "h " + minute + "min"
        }
        else {
            document.getElementById("firstCaseDataTemps").innerText = (Math.round(Time / 60)) + "min"
        }
        document.getElementById("firstCaseDataDistance").innerText =  (Math.round(Dst / 10)) / 100 + "km"

        document.getElementById("firstCaseDataSpeed").innerText = Math.round(Moyenne * 100) / 100 + "km/h"
}
