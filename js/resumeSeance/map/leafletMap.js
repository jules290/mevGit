var map = L.map('mapid', {
    center: [48.85, 2.35],
    zoom: 12.5,
    zoomSnap: 0.1,
});

map.touchZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();

var myIcon = L.icon({
    iconUrl: './img/markerIcon.png',
    iconSize: [12, 12],
    iconAnchor: [6, 6],
    popupAnchor: [-3, -76],
});

var mapbox = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';

L.tileLayer(mapbox, {
    format: 'jpg70',
    attribution: '',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamVjb3JjaGFyZCIsImEiOiJja2FpODFqdG4wNDVoMnJxcjBkczBxY3d2In0.XfYne734PhjUYVAGmTwUsw',
    style: 'mapbox://styles/mapbox/satellite-v9'
}).addTo(map);

var scale = L.control.scale();
scale.addTo(map);

var marker = L.marker([0, 0], {
    icon: myIcon,    
}).addTo(map);

function postActivitiesZoom() {
    let Polyline = JSON.parse(localStorage.Activities)[sessionStorage.activityIndex].map.summary_polyline;

    var coordonnés = L.Polyline.fromEncoded(Polyline).getLatLngs();
    

    let color = new Array();
        color[0] = "red";
        color[1] = "green";
        color[2] = "blue";
        color[3] = "orange";
        color[4] = "purple";
        color[5] = "yellow";

    let pColor = color[Math.floor(Math.random() * color.length)];
       
    var polyline = L.polyline(coordonnés, {
        color: pColor,
        weight: 5,
        opacity: 0.7,
        lineJoin: 'round',
        smoothFactor: 0.0,
    }).addTo(map);

    map.fitBounds(polyline.getBounds());
};

function setMarker(fraction, latlng) {
    if (fraction > 0 && fraction < 1) {
        marker.setLatLng([
            latlng[Math.round(fraction * latlng.length)][0], 
            latlng[Math.round(fraction * latlng.length)][1]
        ]);   
    }
};

$(document).ready(function () {
    $("#clearMap").hide();
});

$("#mapFilter").click(function () {
    $("#mapFilter").hide()
    $("#clearMap").show();

    var x = $("#mapid").offset();
    view = $(window).scrollTop();
    window.scrollTo(0, x.top);
    
    var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    document.getElementById("mapid").style.height = (h) + "px";
});