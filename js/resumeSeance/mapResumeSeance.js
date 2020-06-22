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

    let positionId = window.location.href.indexOf("id=") + 3;
    
    if (positionId != -1) {
        let id = window.location.href.slice(positionId);
        sessionStorage.id = id;
    }
        
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiamVjb3JjaGFyZCIsImEiOiJja2FpODFqdG4wNDVoMnJxcjBkczBxY3d2In0.XfYne734PhjUYVAGmTwUsw'
    }).addTo(map);

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

        }
    }
    $.ajax(settings).done(function (response) {
        var coordonnés = L.Polyline.fromEncoded(response.map.summary_polyline).getLatLngs()
            
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
    })
}