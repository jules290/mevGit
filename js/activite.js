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
    postListActivité();
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

        }
    }
    $.ajax(settings).done(function (response) {
        let Name = new Array();
        let Id = new Array();
        let Date = new Array();
        let Time = new Array();
        let Dst = new Array();
        let Moyenne = new Array();
        let Polyline = new Array();
        for (var i = 0; i < response.length; i++) {
            Name[i] = response[i].name;
            Id[i] = response[i].id;
            Date[i] = response[i].start_date_local;
            Time[i] = response[i].moving_time;
            Dst[i] = response[i].distance;
            Moyenne[i] = response[i].average_speed * 3.6;
            Polyline[i] = response[i].map.summary_polyline;
        }

        localStorage.activitiesName = JSON.stringify(Name);
        localStorage.activitiesId = JSON.stringify(Id);
        localStorage.activitiesDate = JSON.stringify(Date);
        localStorage.activitiesTime = JSON.stringify(Time);
        localStorage.activitiesDst = JSON.stringify(Dst);
        localStorage.activitiesMoyenne = JSON.stringify(Moyenne);
        localStorage.activitiesPolyline = JSON.stringify(Polyline);
        localStorage.activitiesLength = response.length;

        postListActivité()
    });
}

function postListActivité() {
    let Name = JSON.parse(localStorage.activitiesName);
    let Date = JSON.parse(localStorage.activitiesDate);
    let Time = JSON.parse(localStorage.activitiesTime);
    let Dst = JSON.parse(localStorage.activitiesDst);

    for (var i = 0; i < localStorage.activitiesLength; i++) {
        var activities = document.createElement("div");
        activities.id = i
        activities.className = "activities";
        document.getElementById("activite").appendChild(activities);

        var activitiesD = document.createElement("p");
        activitiesD.className = "activitiesD";
        activitiesD.innerText = Date[i].slice(0, 10) + " " + Date[i].slice(11, 16)
        activities.appendChild(activitiesD);

        var activitiesT = document.createElement("a");
        if (Name[i].length > 25) {activitiesT.innerText = Name[i].substr(0, 21) + "..."}
        else {activitiesT.innerText = Name[i].substr(0, 25)}
        
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
        if (Time[i] / 60 >= 60) {
            let heure;
            let minute;
            if (Time[i] / 3600 >= 10) {
                heure = (Time[i] / 3600).toString().substr(0, 2);
                minute = (Math.round(Time[i] / 60)) % 60
            } else {
                heure = (Time[i] / 3600).toString().substr(0, 1);
                minute = (Math.round(Time[i] / 60)) % 60
            }
            activitiesTps.innerText = heure + "h " + minute + "min"
        }
        else {
            activitiesTps.innerText = (Math.round(Time[i] / 60)) + "min"
        }
        Time[i].toString().slice(11, 16)
        activities.appendChild(activitiesTps);

        var activitiesDst = document.createElement("p");
        activitiesDst.className = "activitiesDst";
        activitiesDst.innerText =  (Math.round(Dst[i] / 10)) / 100 + "km"
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