function postAthleteName() {
    document.getElementById("resumeDeSeanceTitleName").innerText = localStorage.athleteName;
}

function postActivitiestempsDistance() {
    let Moyenne = JSON.parse(localStorage.activitiesMoyenne)[sessionStorage.activityIndex];
    let Name = JSON.parse(localStorage.activitiesName)[sessionStorage.activityIndex];
    let Time = JSON.parse(localStorage.activitiesTime)[sessionStorage.activityIndex];
    let Dst = JSON.parse(localStorage.activitiesDst)[sessionStorage.activityIndex];

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
