function getAthleteName(res) {
    const athlete_link = `https://www.strava.com/api/v3/athlete?access_token=${res.access_token}`
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": athlete_link,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "35.188.171.173:8080",
            "x-rapidapi-key": "d9838faf1bmsh3dab1c5f99f54f4p14a909jsn374e4006fed0",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {

        }
    }
    
    $.ajax(settings).done(function (response) {
        document.getElementById("resumeDeSeanceTitleName").innerText = response.firstname + " " + response.lastname;
    });
}

function getActivitiestempsDistance(res) {
    const acces = res;
    let positionId = window.location.href.indexOf("id=") + 3;
    
    if (positionId != -1) {
        let id = window.location.href.slice(positionId);
        sessionStorage.id = id;
    }

    const activities_link = `https://www.strava.com/api/v3/activities/${sessionStorage.id}?access_token=${res.access_token}`
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": activities_link,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "35.188.171.173:8080",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            'includeAllEfforts': true
        }
    }
    $.ajax(settings).done(function (response) {
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

        getActivitiesStreams(acces, sessionStorage.id, response)
    });
}

function getActivitiesStreams(res, id, activitie) {
    const activitiesStreams = `https://www.strava.com/api/v3/activities/${id}/streams?access_token=${res.access_token}`
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": activitiesStreams,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "35.188.171.173:8080",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            
        }
    }
    $.ajax(settings).done(function (response) {
        let vitesse = new Array()
        for (var i = 0; i < response[0].data.length; i++) {
            vitesse[i] = (Math.round(((response[0].data[i + 1] -response[0].data[i]) * response[0].data.length / activitie.moving_time) * 36))/10
        }
        vitesse.splice(vitesse.length - 1, 1)

        let totale = 0;
        for (var i = 0; i <  vitesse.length; i++) {
            totale += vitesse[i] / vitesse.length
        }

        moyenne = totale

        document.getElementById("firstCaseDataSpeed").innerText = Math.round(moyenne * 100) / 100 + "km/h"
    })
}