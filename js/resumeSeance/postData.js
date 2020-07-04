function postData() {
    postAthleteName()
    postActivitiestempsDistance();
    postActivitiesZoom();
    getActivityStreams()
}

function getActivityStreams() {
    let Id = JSON.parse(localStorage.activitiesId)[sessionStorage.activityIndex];

    let moving;
    let latlng;
    let distance;
    let vitesse;
    let time;
    let altitude;
    let grade;
    let cadence;
    let bpm;
    let watts;

    if (localStorage.activityStream == "true") {
        
    }
    else {
        const activitiesStreams = `https://www.strava.com/api/v3/activities/${Id}/streams?access_token=${localStorage.access_token}`
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
                "keys": "time,latlng,distance,altitude,velocity_smooth,heartrate,cadence,watts,temp,moving,grade_smooth"
            }
        }
        $.ajax(settings).done(function (response) {
            // localStorage.activityStream = "true";
            console.log(response)
            let activitiesMoving;
            for (let i = 0; i < response.length; i++) {
                if (response[i].type == "moving") {
                    moving = response[i].data
                }
                else if (response[i].type == "latlng") {
                    latlng = response[i].data
                }
                else if (response[i].type == "distance") {
                    distance = response[i].data
                }
                else if (response[i].type == "velocity_smooth") {
                    vitesse = response[i].data
                }
                else if (response[i].type == "time") {
                    time = response[i].data
                }
                else if (response[i].type == "altitude") {
                    altitude = response[i].data
                }
                else if (response[i].type == "grade_smooth") {
                    grade = response[i].data
                }
                else if (response[i].type == "cadence") {
                    cadence = response[i].data
                }
                else if (response[i].type == "heartrate") {
                    bpm = response[i].data
                }
                else if (response[i].type == "watts") {
                    watts = response[i].data
                }
            }

            for (let i = 0; i < moving.length; i++) {
                if (moving[i] == false) {
                    distance.splice(i, 1);
                    altitude.splice(i, 1);
                    vitesse.splice(i, 1);
                    grade.splice(i, 1);
                }   
            }

            // postLegend(activitie, response, latlng , altitude, vitesse, distance, grade)
            // postWatt(activitie, response, latlng , altitude, vitesse, distance, grade)
            // postActivitiesStreams(activitie, response, latlng , altitude, vitesse, distance, grade)
            // postActivitiesStreamsaltitudeChart(activitie, response, latlng , altitude, vitesse, distance, grade)
            // postActivitiesStreamsSpeedChart(activitie, response, latlng , altitude, vitesse, distance, grade)
        })
    }
}