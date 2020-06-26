function getAthlete(res) {
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
        postAthleteName(response)
    });
}

function getActivity(res) {
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
        postActivitiestempsDistance(response);
        postActivitiesZoom(response)
        sessionStorage.polyline = response.map.summary_polyline;

        getActivityStreamLatLng(acces, sessionStorage.id, response);
    })
}

function getActivityStreamLatLng(res, id, activitie) {
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
            "keys": "latlng"
        }
    }
    $.ajax(settings).done(function (response) {
        getActivityStreamAltitude(res, id, activitie, response);
    })
}

function getActivityStreamAltitude(res, id, activitie, latlng) {
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
            "keys": "altitude",
        }
    }
    $.ajax(settings).done(function (response) {
        getActivityStreamVitesse(res, id, activitie, latlng, response[1].data)
    })
}

function getActivityStreamVitesse(res, id, activitie, latlng, altitude) {
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
            "keys": "velocity_smooth",
           " keyByType": true
        }
    }
    $.ajax(settings).done(function (response) {
        getActivityStreamGrade(res, id, activitie, latlng , altitude, response[0].data)
    })
}

function getActivityStreamGrade(res, id, activitie, latlng , altitude, vitesse) {
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
            "keys": "grade_smooth",
           " keyByType": true
        }
    }
    $.ajax(settings).done(function (response) {
        getActivityStreamMoving(res, id, activitie, activitie.gear.id, latlng , altitude, vitesse, response[1].data, response[0].data)
    })
}

function getActivityStreamMoving(res, id, activitie, gearId, latlng , altitude, vitesse, distance, grade) {
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
            "keys": "moving",
           " keyByType": true
        }
    }
    $.ajax(settings).done(function (response) {
        for (let i = 0; i < distance.length; i++) {
            if (response[0].data[i] == false) {
                distance.splice(i, 1);
                altitude.splice(i, 1);
                vitesse.splice(i, 1);
                grade.splice(i, 1);
            }
            
        }
        getGear(res, id, activitie, activitie.gear.id, latlng , altitude, vitesse, distance, grade)
    })
}

function getGear(res, id, activitie, gearId, latlng , altitude, vitesse, distance, grade) {
    const gear_link = `https://www.strava.com/api/v3//gear/${gearId}?access_token=${res.access_token}`
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": gear_link,
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
        for (let i = 0; i < vitesse.length; i++) {
            vitesse[i] = vitesse[i] * 3.6
        }
        postLegend(activitie, response, latlng , altitude, vitesse, distance, grade)
        postWatt(activitie, response, latlng , altitude, vitesse, distance, grade)
        postActivitiesStreams(activitie, response, latlng , altitude, vitesse, distance, grade)
        postActivitiesStreamsaltitudeChart(activitie, response, latlng , altitude, vitesse, distance, grade)
        postActivitiesStreamsSpeedChart(activitie, response, latlng , altitude, vitesse, distance, grade)
    })
}