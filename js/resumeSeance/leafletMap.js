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

function postActivitiesZoom(response) {
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
}