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
                localStorage.access_token = data.access_token;
                localStorage.oauthStatus = "ok";
                document.getElementById("strava").innerText = "strava";
                document.getElementById("strava").href = "../strava/strava.html";
                getActivities(200)
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

$(document).ajaxError(function() {
    alert("erreur de chargement des données, veuillez réessayer plus tard.")
})

$("#backArrow").click(function () {
    sessionStorage.ActivitiesState = "list"
    window.location.reload();
});

$("#syncBtnTActivities").click(function () {
    getActivities(30);
    document.getElementById("syncImg").style.transform = "rotate(-360deg)";
    setTimeout(() => {
        document.getElementById("syncImg").style.transform = "rotate(360deg)";
    }, 800);
})

$("#syncImg").click(function () {
    document.getElementById("syncImg").style.transform = "rotate(360deg)";
    $("#sync").animate({height: "152px"}, 280)
    $("#sync").animate({width: "200px"}, 280)
    setTimeout(() => {
        $("#syncClose").show();
        $("#syncBtnContenair").show();
    }, 560);
})

$("#syncClose").click(function () {
    document.getElementById("syncImg").style.transform = "rotate(0deg)";
    $("#sync").animate({width: "40px"}, 280)
    $("#sync").animate({height: "40px"}, 280)
    $("#syncClose").hide();
    $("#syncBtnContenair").hide();
})

function getActivities(length) {
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
            // 'page': 3,
            "per_page": length,
        }
    }
    $.ajax(settings).done(function (response) {
        locastorageActivities(response)
        postListActivité()
        window.location.reload();
    });
}

function locastorageActivities(response) {
    rL = response.length;
    lCActivities = JSON.parse(localStorage.Activities)
    lCActivitiesL = lCActivities.length
    if (!localStorage.Activities) {
        array = new Array();
        localStorage.Activities = JSON.stringify(array)
    }
    let Activities
    let ancienne;
    let newActivities = new Array();
    for (var i = 0; i < rL; i++) {
        newActivities[i] = response[i];
    }
    let finalNewActivities = new Array();
    sessionStorage.nbAncienne = 0;
    sessionStorage.nbNew = 0;
    if (lCActivitiesL > 0) {
        for (var i = 0; i < rL; i++) {
            ancienne = 0;
            for (let y = 0; y < lCActivitiesL; y++) {
                if (response[i].id == lCActivities[y].id) {
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
        fL = finalNewActivities.length;
        for (let i = 0; i < fL; i++) {
            uptadeAll[i] = NaN;
        }

        if (sessionStorage.activityStream) {
            activityStream = uptadeAll.concat(JSON.parse(sessionStorage.activityStream));
            activitiesMoving = uptadeAll.concat(JSON.parse(sessionStorage.activitiesMoving));
            activitiesLatlng = uptadeAll.concat(JSON.parse(sessionStorage.activitiesLatlng));
            activitiesDistance = uptadeAll.concat(JSON.parse(sessionStorage.activitiesDistance));
            activitiesVitesse = uptadeAll.concat(JSON.parse(sessionStorage.activitiesVitesse));
            activitiesTime = uptadeAll.concat(JSON.parse(sessionStorage.activitiesTime));
            activitiesAltitude = uptadeAll.concat(JSON.parse(sessionStorage.activitiesAltitude));
            activitiesGrade = uptadeAll.concat(JSON.parse(sessionStorage.activitiesGrade));
            activitiesCadence = uptadeAll.concat(JSON.parse(sessionStorage.activitiesCadence));
            activitiesBpm = uptadeAll.concat(JSON.parse(sessionStorage.activitiesBpm));
            activitiesWatts = uptadeAll.concat(JSON.parse(sessionStorage.activitiesWatts));
            efforts = uptadeAll.concat(JSON.parse(localStorage.efforts));

            sessionStorage.activityStream = JSON.stringify(activityStream);
            sessionStorage.activitiesMoving = JSON.stringify(activitiesMoving);
            sessionStorage.activitiesLatlng = JSON.stringify(activitiesLatlng);
            sessionStorage.activitiesDistance = JSON.stringify(activitiesDistance);
            sessionStorage.activitiesVitesse = JSON.stringify(activitiesVitesse);
            sessionStorage.activitiesTime = JSON.stringify(activitiesTime);
            sessionStorage.activitiesAltitude = JSON.stringify(activitiesAltitude);
            sessionStorage.activitiesGrade = JSON.stringify(activitiesGrade);
            sessionStorage.activitiesCadence = JSON.stringify(activitiesCadence);
            sessionStorage.activitiesBpm = JSON.stringify(activitiesBpm);
            sessionStorage.activitiesWatts = JSON.stringify(activitiesWatts);
            localStorage.efforts = JSON.stringify(efforts);
        }

        lCActivities = JSON.parse(localStorage.Activities)
        Activities = finalNewActivities.concat(lCActivities);
    }
    else {
        Activities = response;
    }

    localStorage.Activities = JSON.stringify(Activities);
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
            sessionStorage.activityIndex = index;
            sessionStorage.ActivitiesState = "resumeSeance";
            sessionStorage.postData = 1;
            window.location.href ="activite.html"
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