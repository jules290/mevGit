var mymap = L.map('mapid', {
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
}).addTo(mymap);

function getActivitiesZoom(res) {
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
        var coordonnés = L.Polyline.fromEncoded(response.map.summary_polyline).getLatLngs()

        L.polyline(
            coordonnés,
            {
                color: "green",
                weight: 5,
                opacity: .7,
                lineJoin: 'round'
            }
        ).addTo(mymap)

        let maxLat = coordonnés[0].lat;
        let minLat = coordonnés[0].lat;
        let maxLng = coordonnés[0].lng;
        let minLng = coordonnés[0].lng;
        for (var i = 1; i < coordonnés.length; i++) {
            if (coordonnés[i].lat > maxLat) {
                maxLat = coordonnés[i].lat;
            }

            if (coordonnés[i].lat < minLat) {
                minLat = coordonnés[i].lat;
            }

            if (coordonnés[i].lng > maxLng) {
                maxLng = coordonnés[i].lng;
            }

            if (coordonnés[i].lng < minLng) {
                minLng = coordonnés[i].lng;
            }
        }

        let ecart;
        if ((maxLat - minLat) > (maxLng - minLng)) {
            ecart = Math.round((maxLat - minLat) * 100);
        }
        else {
            ecart = Math.round((maxLng - minLng) * 100);
        }

        console.log(ecart)

        let zoom;
        switch (ecart) {
            case 0:
                zoom = 12.3;
                break;

            case 1:
                zoom = 12.2;
                break;

            case 2:
                zoom = 12.1;
                break;

            case 3:
                zoom = 12;
                break;

            case 4:
                zoom = 11.9;
                break;
                
            case 5:
                zoom = 11.8;
                break;
                
            case 6:
                zoom = 11.7;
                break;

            case 7:
                zoom = 11.6;
                break;
                
            case 8:
                zoom = 11.5;
                break;

            case 9:
                zoom = 11.4;
                break;

            case 10:
                zoom = 11.3;
                break;

            case 11:
                zoom = 11.2;
                break;

            case 12:
                zoom = 11.1;
                break;

            case 13:
                zoom = 11;
                break;

            case 14:
                zoom = 10.9;
                break;

            case 15:
                zoom = 10.8;
                break;

            case 16:
                zoom = 10.7;
                break;

            case 17:
                zoom = 10.6;
                break;

            case 18:
                zoom = 10.5;
                break;

            case 19:
                zoom = 10.4;
                break;
                
            case 20:
                zoom = 10.3;
                break;
                
            case 21:
                zoom = 10.2;
                break;
                
            case 22:
                zoom = 10.1;
                break;
                
            case 23:
                zoom = 10;
                break;

            case 24:
                zoom = 9.9;
                break;

            case 25:
                zoom = 9.8;
                break;

            case 26:
                zoom = 1;
                break;

            case 27:
                zoom = 1;
                break;

            case 28:
                zoom = 1;
                break;

            case 29:
                zoom = 1;
                break;

            case 30:
                zoom = 1;
                break;

            case 31:
                zoom = 1;
                break;

            case 32:
                zoom = 1;
                break;

            case 33:
                zoom = 1;
                break;

            case 34:
                zoom = 1;
                break;
                
            case 35:
                zoom = 1;
                break;
                
            case 36:
                zoom = 1;
                break;
                
            case 37:
                zoom = 1;
                break;
                
            case 38:
                zoom = 1;
                break;

            case 39:
                zoom = 1;
                break;

            case 40:
                zoom = 1;
                break;

            case 41:
                zoom = 1;
                break;

            case 42:
                zoom = 1;
                break;

            case 43:
                zoom = 1;
                break;

            case 44:
                zoom = 1;
                break;

            case 45:
                zoom = 1;
                break;

            case 46:
                zoom = 1;
                break;

            case 47:
                zoom = 1;
                break;

            case 48:
                zoom = 1;
                break;

            case 49:
                zoom = 1;
                break;
                
            case 50:
                zoom = 1;
                break;

            case 51:
                zoom = 1;
                break;
                
            case 52:
                zoom = 1;
                break;
                
            case 53:
                zoom = 1;
                break;

            case 54:
                zoom = 1;
                break;

            case 55:
                zoom = 1;
                break;

            case 56:
                zoom = 1;
                break;

            case 57:
                zoom = 1;
                break;

            case 58:
                zoom = 1;
                break;

            case 59:
                zoom = 1;
                break;

            case 60:
                zoom = 1;
                break;

            default:
                zoom = 1;
                break;
        }
        
        mymap.setView([(maxLat + minLat) / 2, (maxLng + minLng) / 2], zoom);
    });
}