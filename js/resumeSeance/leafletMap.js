$("#mapFilter").click(function () {
    let positionId = window.location.href.indexOf("id=") + 3;
    
    if (positionId != -1) {
        let id = window.location.href.slice(positionId);
        sessionStorage.id = id;
    }
    window.location.href = `mapResumeSeance.html?id=${sessionStorage.id}`;
})

var map = L.map('mapid', {
    center: [48.85, 2.35],
    zoom: 12.5,
    zoomSnap: 0.1,
    attributionControl: false,
    zoomControl: false,
})

var myIcon = L.icon({
    iconUrl: './img/markerIcon.png',
    iconSize: [12, 12],
    iconAnchor: [6, 6],
    popupAnchor: [-3, -76],
});


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamVjb3JjaGFyZCIsImEiOiJja2FpODFqdG4wNDVoMnJxcjBkczBxY3d2In0.XfYne734PhjUYVAGmTwUsw'
}).addTo(map);

var marker = L.marker([0, 0], {
    icon: myIcon,    
}).addTo(map)

function postActivitiesZoom(response) {
    sessionStorage.polyline = response.map.summary_polyline;
    var coordonnés = L.Polyline.fromEncoded(sessionStorage.polyline).getLatLngs();

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

function setMarker(fraction, latlng) {
    marker.setLatLng([
        latlng[0].data[Math.round(fraction * latlng[0].data.length)][0], 
        latlng[0].data[Math.round(fraction * latlng[0].data.length)][1]
    ])
}