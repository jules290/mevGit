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
                getSegment(data);
                getSegmentRef(data);
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
        getActivities(res)
    })
}

if (localStorage.oauthStatus || localStorage.oauthStatus == "ok") {
    reAuthorize();
}

$(document).ajaxError(function() {
    alert("erreur de chargement des données, veuillez réessayer plus tard.")
})

function getActivities(res) {
    const resGetactPlace = res;
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
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
        console.log(response)
        for (var i = 0; i < response.length; i++) {
            var activities = document.createElement("div");
            activities.id = i
            activities.className = "activities";
            document.getElementById("activite").appendChild(activities);
            var activitiesD = document.createElement("p");
            activitiesD.className = "activitiesD";
            activitiesD.innerText = response[i].start_date_local.slice(0, 10) + " " +
            response[i].start_date_local.slice(11, 16)
            activities.appendChild(activitiesD);
            var activitiesT = document.createElement("a");
            if (response[i].name.length > 25) {activitiesT.innerText = response[i].name.substr(0, 21) + "..."}
            else {activitiesT.innerText = response[i].name.substr(0, 25)}
            activitiesT.className = "activitiesT";
            activitiesT.href = `resumeSeance.html?id=${response[i].id}`;
            activities.appendChild(activitiesT);
            var activitiesTps = document.createElement("p");
            activitiesTps.className = "activitiesTps";
            if (response[i].moving_time / 60 >= 60) {
                let heure;
                let minute;
                if (response[i].moving_time / 3600 >= 10) {
                    heure = (response[i].moving_time / 3600).toString().substr(0, 2);
                    minute = (Math.round(response[i].moving_time / 60)) % 60
                } else {
                    heure = (response[i].moving_time / 3600).toString().substr(0, 1);
                    minute = (Math.round(response[i].moving_time / 60)) % 60
                }
                activitiesTps.innerText = heure + "h " + minute + "min"
            }
            else {
                activitiesTps.innerText = (Math.round(response[i].moving_time / 60)) + "min"
            }
            response[i].start_date_local.slice(11, 16)
            activities.appendChild(activitiesTps);
            var activitiesDst = document.createElement("p");
            activitiesDst.className = "activitiesDst";
            activitiesDst.innerText =  (Math.round(response[i].distance / 10)) / 100 + "km"
            activities.appendChild(activitiesDst);
        }
    });
}