let positionCode = window.location.href.indexOf("code=") + 5;
let endPositionCode = window.location.href.indexOf("&scope");

let positionScope = window.location.href.indexOf("scope=") + 6;

if (positionCode != -1) {
    let code = window.location.href.slice(positionCode, endPositionCode);
    localStorage.scope = window.location.href.substr(positionScope);
    
    const auth_link = `https://www.strava.com/oauth/token?client_id=49195&client_secret=8ac3297d1930bede81d5f8215d6c84d0c32354f9&code=${code}&grant_type=authorization_code`
    if (!localStorage.oauthStatusMap || localStorage.oauthStatusMap == "non") {

        $.post(auth_link,
            function(data){
                localStorage.refresh_tokenMap = data.refresh_token;
                localStorage.oauthStatusMap = "ok";
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
            client_id: '49195',
            client_secret: '8ac3297d1930bede81d5f8215d6c84d0c32354f9',
            refresh_token: localStorage.refresh_tokenMap,
            grant_type: 'refresh_token'
        })
    })
    .then((res) => res.json())
    .then(res => {
        localStorage.access_tokenMap = res.access_token;
        getActivities(res)
    })
}

if (localStorage.oauthStatusMap || localStorage.oauthStatusMap == "ok") {
    reAuthorize();
}

$(document).ajaxError(function() {
    alert("erreur de chargement des données, veuillez réessayer plus tard.")
})

function getActivities(res) {
    var map = L.map('mapid', {
        center: [51.505, -0.09],
        zoom: 13,
        zoomSnap: 0.1,
    })
        
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiamVjb3JjaGFyZCIsImEiOiJja2FpODFqdG4wNDVoMnJxcjBkczBxY3d2In0.XfYne734PhjUYVAGmTwUsw'
    }).addTo(map);

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
        var pol = new Array()
        for (let i = 0; i < response.length; i++) {
            pol[i] = response[i]
            var coordonnés = L.Polyline.fromEncoded(pol[i].map.summary_polyline).getLatLngs()
        
            let color = new Array()
            color[0] = "red"
            color[1] = "green"
            color[2] = "blue"
            color[3] = "orange"
            color[4] = "purple"
            color[5] = "yellow"
        
            let pColor = color[Math.floor(Math.random() * color.length)]
               
            var polyline = L.polyline(coordonnés, {
                color: pColor,
                weight: 5,
                opacity: 0.7,
                lineJoin: 'round',
                smoothFactor: 0.0,
            }).addTo(map);
        
            map.fitBounds(polyline.getBounds());
        }
    })
}