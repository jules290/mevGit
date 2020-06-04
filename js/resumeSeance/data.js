function postAthleteName(response) {
    document.getElementById("resumeDeSeanceTitleName").innerText = response.firstname + " " + response.lastname;
}

function postActivitiestempsDistance(response) {
    document.getElementById("resumeDeSeanceTitleActivite").innerText = response.name;

        if (response.moving_time / 60 >= 60) {
            let heure;
            let minute;
            if (response.moving_time / 3600 >= 10) {
                heure = (response.moving_time / 3600).toString().substr(0, 2);
                minute = (Math.round(response.moving_time / 60)) % 60
            } else {
                heure = (response.moving_time / 3600).toString().substr(0, 1);
                minute = (Math.round(response.moving_time / 60)) % 60
            }
            document.getElementById("firstCaseDataTemps").innerText = heure + "h " + minute + "min"
        }
        else {
            document.getElementById("firstCaseDataTemps").innerText = (Math.round(response.moving_time / 60)) + "min"
        }
        document.getElementById("firstCaseDataDistance").innerText =  (Math.round(response.distance / 10)) / 100 + "km"
}

function postActivitiesStreams(response, activitie) {
        let vitesse = new Array()
        for (var i = 0; i < response.data.length; i++) {
            vitesse[i] = (Math.round(((response.data[i + 1] -response.data[i]) * response.data.length / activitie.moving_time) * 36))/10
        }
        vitesse.splice(vitesse.length - 1, 1)

        let totale = 0;
        for (var i = 0; i <  vitesse.length; i++) {
            totale += vitesse[i] / vitesse.length
        }

        moyenne = totale

        document.getElementById("firstCaseDataSpeed").innerText = Math.round(moyenne * 100) / 100 + "km/h"
}