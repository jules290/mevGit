function postData() {
    postAthleteName();
    postActivitiestempsDistance();
    postActivitiesZoom();
    getActivityStreams();
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

    let array = new Array();
    if (!localStorage.activityStream) {localStorage.activityStream = JSON.stringify(array)}

    if (sessionStorage.activityStream == sessionStorage.activityIndex) {
        let storage = sessionStorage;
        let Activities = JSON.parse(localStorage.Activities);
        let LatLng = JSON.parse(storage.activitiesLatlng);
        let Altitude = JSON.parse(storage.activitiesAltitude);
        let Vitesse = JSON.parse(storage.activitiesVitesse);
        let Distance = JSON.parse(storage.activitiesDistance);
        let Grade = JSON.parse(storage.activitiesGrade);

        postLegend(
            Activities, 
            LatLng, 
            Altitude, 
            Vitesse, 
            Distance, 
            Grade
        );
        postWatt( 
            Activities, 
            LatLng, 
            Altitude, 
            Vitesse, 
            Distance, 
            Grade
        );
        postActivitiesStreamsaltitudeChart(
            Activities, 
            LatLng, 
            Altitude, 
            Vitesse, 
            Distance, 
            Grade
        );
        postActivitiesStreamsSpeedChart(
            Activities, 
            LatLng, 
            Altitude, 
            Vitesse, 
            Distance, 
            Grade
        );
        svg(
            Activities, 
            LatLng, 
            Altitude, 
            Vitesse, 
            Distance, 
            Grade
        );
        segmentStorage();
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
                "keys": "time,latlng,distance,altitude,velocity_smooth,heartrate,cadence,watts,temp,moving,grade_smooth",
            }
        }
        $.ajax(settings).done(function (response) {
            if (!sessionStorage.activityStream) {sessionStorage.activityStream = JSON.stringify(array)}
            if (!sessionStorage.activitiesMoving) {sessionStorage.activitiesMoving = JSON.stringify(array)}
            if (!sessionStorage.activitiesLatlng) {sessionStorage.activitiesLatlng = JSON.stringify(array)}
            if (!sessionStorage.activitiesDistance) {sessionStorage.activitiesDistance = JSON.stringify(array)}
            if (!sessionStorage.activitiesVitesse) {sessionStorage.activitiesVitesse = JSON.stringify(array)}
            if (!sessionStorage.activitiesTime) {sessionStorage.activitiesTime = JSON.stringify(array)}
            if (!sessionStorage.activitiesAltitude) {sessionStorage.activitiesAltitude = JSON.stringify(array)}
            if (!sessionStorage.activitiesGrade) {sessionStorage.activitiesGrade = JSON.stringify(array)}
            if (!sessionStorage.activitiesCadence) {sessionStorage.activitiesCadence = JSON.stringify(array)}
            if (!sessionStorage.activitiesBpm) {sessionStorage.activitiesBpm = JSON.stringify(array)}
            if (!sessionStorage.activitiesWatts) {sessionStorage.activitiesWatts = JSON.stringify(array)}

            let activityStream = JSON.parse(sessionStorage.activityStream);
            let activitiesMoving = JSON.parse(sessionStorage.activitiesMoving);
            let activitiesLatlng = JSON.parse(sessionStorage.activitiesLatlng);
            let activitiesDistance = JSON.parse(sessionStorage.activitiesDistance);
            let activitiesVitesse = JSON.parse(sessionStorage.activitiesVitesse);
            let activitiesTime = JSON.parse(sessionStorage.activitiesTime);
            let activitiesAltitude = JSON.parse(sessionStorage.activitiesAltitude);
            let activitiesGrade = JSON.parse(sessionStorage.activitiesGrade);
            let activitiesCadence = JSON.parse(sessionStorage.activitiesCadence);
            let activitiesBpm = JSON.parse(sessionStorage.activitiesBpm);
            let activitiesWatts = JSON.parse(sessionStorage.activitiesWatts);

            activityStream = sessionStorage.activityIndex;
            let responseLength = response.length;
            for (let i = 0; i < responseLength; i++) {
                if (response[i].type == "moving") {
                    moving = response[i].data;
                    activitiesMoving = moving;
                }
                else if (response[i].type == "latlng") {
                    latlng = response[i].data;
                    activitiesLatlng = latlng;
                }
                else if (response[i].type == "distance") {
                    distance = response[i].data;
                    activitiesDistance = distance;
                }
                else if (response[i].type == "velocity_smooth") {
                    vitesse = response[i].data;
                    for (let i = 0; i < vitesse.length; i++) {
                        vitesse[i] = vitesse[i] * 3.6
                    }        
                    activitiesVitesse = vitesse;
                }
                else if (response[i].type == "time") {
                    time = response[i].data;
                    activitiesTime = time;
                }
                else if (response[i].type == "altitude") {
                    altitude = response[i].data;
                    activitiesAltitude = altitude;
                }
                else if (response[i].type == "grade_smooth") {
                    grade = response[i].data;
                    activitiesGrade = grade;
                }
                else if (response[i].type == "cadence") {
                    cadence = response[i].data;
                    activitiesCadence = cadence;
                }
                else if (response[i].type == "heartrate") {
                    bpm = response[i].data;
                    activitiesBpm = bpm;
                }
                else if (response[i].type == "watts") {
                    watts = response[i].data;
                    activitiesWatts = watts;
                }
            }

            if (!cadence) {
                activitiesCadence = "false";
            }

            if (!bpm) {
                activitiesBpm = "false";
            }

            if (!watts) {
                watts = wattEstimation(
                    altitude,
                    vitesse, 
                    grade
                );

                activitiesWatts = watts;
            }

            sessionStorage.activityStream = JSON.stringify(activityStream);
            sessionStorage.activitiesMoving = JSON.stringify(activitiesMoving);
            sessionStorage.activitiesLatlng = JSON.stringify(activitiesLatlng);
            sessionStorage.activitiesDistance = JSON.stringify(activitiesDistance);
            sessionStorage.activitiesVitesse = JSON.stringify(activitiesVitesse);
            sessionStorage.activitiesTime = JSON.stringify(activitiesTime);
            sessionStorage.activitiesAltitude = JSON.stringify(activitiesAltitude);
            sessionStorage.activitiesGrade = JSON.stringify(activitiesGrade);
            sessionStorage.activitiesCadence = JSON.stringify(activitiesCadence);
            sessionStorage.activitiesWatts = JSON.stringify(activitiesWatts);
            sessionStorage.activitiesBpm = JSON.stringify(activitiesBpm);

            postLegend(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postWatt(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postActivitiesStreamsaltitudeChart(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postActivitiesStreamsSpeedChart(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            svg(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            segmentStorage();
        })
    }
}