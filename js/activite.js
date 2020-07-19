let positionCode = window.location.href.indexOf("code=") + 5;
let endPositionCode = window.location.href.indexOf("&scope");

let positionScope = window.location.href.indexOf("scope=") + 6;

if (positionCode != -1) {
    let code = window.location.href.slice(positionCode, endPositionCode);
    localStorage.scope = window.location.href.substr(positionScope);
    
    const auth_link = `https://www.strava.com/oauth/token?client_id=46262&client_secret=d10fe947c04ec802caa34e8f54f631090d305a77&code=${code}&grant_type=authorization_code`
    if (!localStorage.oauthStatus || localStorage.oauthStatus == "non") {
        $.post(auth_link,
            function(data){
                localStorage.refresh_token = data.refresh_token;
                localStorage.oauthStatus = "ok";
                document.getElementById("strava").innerText = "strava";
                document.getElementById("strava").href = "../strava/strava.html";
                getActivities(data)
            });
    }
}

function reAuthorize() {
    const auth_linkRefresh = "https://www.strava.com/oauth/token";
    fetch(auth_linkRefresh,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: '46262',
            client_secret: 'd10fe947c04ec802caa34e8f54f631090d305a77',
            refresh_token: localStorage.refresh_token,
            grant_type: 'refresh_token'
        })
    })
    .then((res) => res.json())
    .then(res => {
        localStorage.access_token = res.access_token;
    })
}

$(document).ready(function () {
    postListActivité()
})

if (localStorage.oauthStatus || localStorage.oauthStatus == "ok") {
    reAuthorize();
}

if (localStorage.oauthStatusMap || localStorage.oauthStatusMap == "ok") {
    document.getElementById("activitieMapLink").href = "../strava/activityMap.html"
}

$(document).ajaxError(function() {
    alert("erreur de chargement des données, veuillez réessayer plus tard.")
})

$("#syncBtnTActivities").click(function () {
    getActivities();
    document.getElementById("syncImg").style.transform = "rotate(-360deg)";
    setTimeout(() => {
        document.getElementById("syncImg").style.transform = "rotate(360deg)";
    }, 800);
})

function getActivities() {
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${localStorage.access_token}`
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
            'includeAllEfforts': true,
        }
    }
    $.ajax(settings).done(function (response) {
        if (!localStorage.Activities) {
            array = new Array();
            localStorage.Activities = JSON.stringify(array)
        }
        let Activities
        let ancienne;
        let newActivities = new Array();
        for (var i = 0; i < response.length; i++) {
            newActivities[i] = response[i];
        }
        let finalNewActivities = new Array();
        sessionStorage.nbAncienne = 0;
        sessionStorage.nbNew = 0;
        if (JSON.parse(localStorage.Activities).length > 0) {
            for (var i = 0; i < response.length; i++) {
                ancienne = 0;
                for (let y = 0; y < JSON.parse(localStorage.Activities).length; y++) {
                    if (response[i].id == JSON.parse(localStorage.Activities)[y].id) {
                        ancienne = 1;
                    }
                }
                if (ancienne == 1) {
                    newActivities = newActivities.splice(i +  sessionStorage.nbAncienne, 1);
                    sessionStorage.nbAncienne++;
                }
                else {
                    finalNewActivities[sessionStorage.nbNew] = response[i];
                    sessionStorage.nbNew++;
                }
            }
            let uptadeAll = new Array();
            for (let i = 0; i < newActivities.length; i++) {
                uptadeAll[i] = NaN;
            }
    
            if (localStorage.activityStream) {
                console.log(uptadeAll)
                uptadeAll.concat(JSON.parse(localStorage.activityStream))
                uptadeAll.concat(JSON.parse(localStorage.activitiesMoving))
                uptadeAll.concat(JSON.parse(localStorage.activitiesLatlng))
                uptadeAll.concat(JSON.parse(localStorage.activitiesDistance))
                uptadeAll.concat(JSON.parse(localStorage.activitiesVitesse))
                uptadeAll.concat(JSON.parse(localStorage.activitiesTime))
                uptadeAll.concat(JSON.parse(localStorage.activitiesAltitude))
                uptadeAll.concat(JSON.parse(localStorage.activitiesGrade))
                uptadeAll.concat(JSON.parse(localStorage.activitiesCadence))
                uptadeAll.concat(JSON.parse(localStorage.activitiesBpm))
                uptadeAll.concat(JSON.parse(localStorage.activitiesWatts))
            }
    
            var lCActivities = JSON.parse(localStorage.Activities)
            Activities = finalNewActivities.concat(lCActivities);
        }
        else {
            Activities = response;
        }

        localStorage.Activities = JSON.stringify(Activities);

        postListActivité()
        // window.location.reload();
    });
}

function postListActivité() {
    if (!localStorage.Activities) {
        array = new Array();
        localStorage.Activities = JSON.stringify(array)
    }
    let Activities = JSON.parse(localStorage.Activities);

    for (var i = 0; i < Activities.length; i++) {
        var activities = document.createElement("div");
        activities.id = i
        activities.className = "activities";
        document.getElementById("activite").appendChild(activities);

        var activitiesD = document.createElement("p");
        activitiesD.className = "activitiesD";
        activitiesD.innerText = Activities[i].start_date_local.slice(0, 10) + " " + Activities[i].start_date_local.slice(11, 16)
        activities.appendChild(activitiesD);

        var activitiesT = document.createElement("a");
        if (Activities[i].name.length > 25) {activitiesT.innerText = Activities[i].name.substr(0, 21) + "..."}
        else {activitiesT.innerText = Activities[i].name.substr(0, 25)}
        
        let index = i;
        activitiesT.className = "activitiesT";
        activitiesT.onclick = function () {
            $("#main1").hide();
            $("#main2").show();
            $("#sync").hide();
            sessionStorage.activityIndex = index;
            postData();
        }
        activities.appendChild(activitiesT);

        var activitiesTps = document.createElement("p");
        activitiesTps.className = "activitiesTps";
        if (Activities[i].moving_time / 60 >= 60) {
            let heure;
            let minute;
            if (Activities[i].moving_time / 3600 >= 10) {
                heure = (Activities[i].moving_time / 3600).toString().substr(0, 2);
                minute = (Math.round(Activities[i].moving_time / 60)) % 60
            } else {
                heure = (Activities[i].moving_time / 3600).toString().substr(0, 1);
                minute = (Math.round(Activities[i].moving_time / 60)) % 60
            }
            activitiesTps.innerText = heure + "h " + minute + "min"
        }
        else {
            activitiesTps.innerText = (Math.round(Activities[i].moving_time / 60)) + "min"
        }
        Activities[i].toString().slice(11, 16)
        activities.appendChild(activitiesTps);

        var activitiesDst = document.createElement("p");
        activitiesDst.className = "activitiesDst";
        activitiesDst.innerText =  (Math.round(Activities[i].distance / 10)) / 100 + "km"
        activities.appendChild(activitiesDst);
    }
}

$("#syncBtnTAthlete").click(function () {
    getAthlete()
    document.getElementById("syncImg").style.transform = "rotate(-360deg)";
    setTimeout(() => {
        document.getElementById("syncImg").style.transform = "rotate(360deg)";
    }, 800);
})

function getAthlete() {
    const athlete_link = `https://www.strava.com/api/v3/athlete?access_token=${localStorage.access_token}`
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
        localStorage.athleteName = response.firstname + " " + response.lastname
    });
}