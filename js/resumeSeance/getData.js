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
        getActivityStream(res, id, activitie, response);
    })
}

function getActivityStream(res, id, activitie, latlng) {
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
            "keys": "altitude"
        }
    }
    $.ajax(settings).done(function (response) {
        postActivitiesStreams(response, activitie);
        postActivitiesStreamsElevationChart(response, activitie, latlng);
        postActivitiesStreamsSpeedChart(response, activitie, latlng)
        getGear(res, response, activitie, activitie.gear.id, latlng)
    })
}

function getGear(res, activityStream, activitie, id, latlng) {
    const gear_link = `https://www.strava.com/api/v3//gear/${id}?access_token=${res.access_token}`
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
        postLegend(activityStream, activitie, response)
        postWatt(activityStream, activitie, response, latlng)
    })
}