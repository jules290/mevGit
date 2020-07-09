function postData() {
    postAthleteName()
    postActivitiestempsDistance();
    postActivitiesZoom();
    getActivityStreams()
}

function getActivityStreams() {
    let Id = JSON.parse(localStorage.Activities)[sessionStorage.activityIndex].id;

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

    if (localStorage.activityStream == "") {
        
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
            let array = new Array();

            if (!localStorage.activityStream) {localStorage.activityStream = JSON.stringify(array)}
            if (!localStorage.activitiesMoving) {localStorage.activitiesMoving = JSON.stringify(array)}
            if (!localStorage.activitiesLatlng) {localStorage.activitiesLatlng = JSON.stringify(array)}
            if (!localStorage.activitiesDistance) {localStorage.activitiesDistance = JSON.stringify(array)}
            if (!localStorage.activitiesVitesse) {localStorage.activitiesVitesse = JSON.stringify(array)}
            if (!localStorage.activitiesTime) {localStorage.activitiesTime = JSON.stringify(array)}
            if (!localStorage.activitiesAltitude) {localStorage.activitiesAltitude = JSON.stringify(array)}
            if (!localStorage.activitiesGrade) {localStorage.activitiesGrade = JSON.stringify(array)}
            if (!localStorage.activitiesCadence) {localStorage.activitiesCadence = JSON.stringify(array)}
            if (!localStorage.activitiesBpm) {localStorage.activitiesBpm = JSON.stringify(array)}
            if (!localStorage.activitiesWatts) {localStorage.activitiesWatts = JSON.stringify(array)}

            let activityStream = JSON.parse(localStorage.activityStream);
            let activitiesMoving = JSON.parse(localStorage.activitiesMoving);
            let activitiesLatlng = JSON.parse(localStorage.activitiesLatlng);
            let activitiesDistance = JSON.parse(localStorage.activitiesDistance);
            let activitiesVitesse = JSON.parse(localStorage.activitiesVitesse);
            let activitiesTime = JSON.parse(localStorage.activitiesTime);
            let activitiesAltitude = JSON.parse(localStorage.activitiesAltitude);
            let activitiesGrade = JSON.parse(localStorage.activitiesGrade);
            let activitiesCadence = JSON.parse(localStorage.activitiesCadence);
            let activitiesBpm = JSON.parse(localStorage.activitiesBpm);
            let activitiesWatts = JSON.parse(localStorage.activitiesWatts);

            activityStream[sessionStorage.activityIndex] = "true";
            for (let i = 0; i < response.length; i++) {
                if (response[i].type == "moving") {
                    moving = response[i].data;
                    activitiesMoving[sessionStorage.activityIndex] = moving;
                }
                else if (response[i].type == "latlng") {
                    latlng = response[i].data;
                    activitiesLatlng[sessionStorage.activityIndex] = latlng;
                }
                else if (response[i].type == "distance") {
                    distance = response[i].data;
                    activitiesDistance[sessionStorage.activityIndex] = distance;
                }
                else if (response[i].type == "velocity_smooth") {
                    vitesse = response[i].data;
                    activitiesVitesse[sessionStorage.activityIndex] = vitesse;
                }
                else if (response[i].type == "time") {
                    time = response[i].data;
                    activitiesTime[sessionStorage.activityIndex] = time;
                }
                else if (response[i].type == "altitude") {
                    altitude = response[i].data;
                    activitiesAltitude[sessionStorage.activityIndex] = altitude;
                }
                else if (response[i].type == "grade_smooth") {
                    grade = response[i].data;
                    activitiesGrade[sessionStorage.activityIndex] = grade;
                }
                else if (response[i].type == "cadence") {
                    cadence = response[i].data;
                    activitiesCadence[sessionStorage.activityIndex] = cadence;
                }
                else if (response[i].type == "heartrate") {
                    bpm = response[i].data;
                    activitiesBpm[sessionStorage.activityIndex] = bpm;
                }
                else if (response[i].type == "watts") {
                    watts = response[i].data;
                    activitiesWatts[sessionStorage.activityIndex] = watts;
                }
            }

            localStorage.activityStream = JSON.stringify(activityStream);
            localStorage.activitiesMoving = JSON.stringify(activitiesMoving);
            localStorage.activitiesLatlng = JSON.stringify(activitiesLatlng);
            localStorage.activitiesDistance = JSON.stringify(activitiesDistance);
            localStorage.activitiesVitesse = JSON.stringify(activitiesVitesse);
            localStorage.activitiesTime = JSON.stringify(activitiesTime);
            localStorage.activitiesAltitude = JSON.stringify(activitiesAltitude);
            localStorage.activitiesGrade = JSON.stringify(activitiesGrade);
            localStorage.activitiesCadence = JSON.stringify(activitiesCadence);
            localStorage.activitiesWatts = JSON.stringify(activitiesWatts);

            for (let i = 0; i < vitesse.length; i++) {
                vitesse[i] = vitesse[i] * 3.6
            }

            postLegend(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postWatt(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postActivitiesStreamsaltitudeChart(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postActivitiesStreamsSpeedChart(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
        })
    }
}