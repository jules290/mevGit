var ctx = document.getElementById('graphSpeed');

if (document.documentElement.clientWidth > 1200) {
    ctx.height = 130;
}
else if (document.documentElement.clientWidth > 1000) {
    ctx.height = 130;
}
else if (document.documentElement.clientWidth > 800) {
    ctx.height = 120;
}
else if (document.documentElement.clientWidth > 600) {
    ctx.height = 100;
}
else if (document.documentElement.clientWidth > 400) {
    ctx.height = 90;
}
else if (document.documentElement.clientWidth > 300) {
    ctx.height = 80;
}
else if (document.documentElement.clientWidth > 200) {
    ctx.height = 80;
}
else {
    ctx.height = 80;
}

var data = {
    labels: [],
    datasets: [{
        label: 'vitesse (km/h)',
        data: [],
        borderColor: [
            'rgb(6, 141, 251)',
        ],
        backgroundColor: [
            'rgb(6, 141, 251, 0.1)',
        ],
        borderWidth: 1,
        showLine: true,
        lineTension: 0.0,
    },
    {
        label: 'vitesse (km/h)',
        data: [],
        borderDash: [5, 3],
        borderColor: [
            'rgba(6, 141, 251, 0.3)',
        ],
        backgroundColor: [
            'rgba(170, 170, 170, 0.0)',
        ],
        borderWidth: 1,
        lineTension: 0.0,
    }]
}
    
var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        maintainAspectRatio: false,
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: Number(sessionStorage.vitesseMax)
                },
                display: false,
            }]
        },
        legend: {
            display: false,
        },
        layout: {
            padding: {
                left: 21,
                right: 9,
                top: 0,
                bottom: 0
            }
        }
    }
})

function postActivitiesStreamsSpeedChart(activitie, latlng , altitude, vitesse, distance, grade) {
    let Zoomaltitude = ZoomAltitude(altitude, altitude.length);
    let Zoomvitesse = ZoomVitesse(vitesse, vitesse.length);
    let Zoomgrade = ZoomGrade(grade, grade.length);
    let watt = wattEstimation(Zoomaltitude, Zoomvitesse, Zoomgrade);

    var kilometrage = new Array()
    for (let i = 0; i < Zoomaltitude.length; i++) {
        kilometrage[i] = "      "
    }

    let vitesseMoy = 0;
    for (var i = 0; i <  vitesse.length; i++) {
        vitesseMoy += vitesse[i] / vitesse.length
    }

    let vitesseMoyData = new Array();
    for (var i = 0; i <  vitesse.length; i++) {
        vitesseMoyData[i] = vitesseMoy;
    }

    let vitesseMax = 0;
    for (var i = 0; i <  vitesse.length; i++) {
        if (vitesse[i] > vitesseMax) {
            vitesseMax = vitesse[i]
        }
    }
    sessionStorage.vitesseMax = vitesseMax;

    myChart.data.datasets = [{
        data: Zoomvitesse,
        borderColor: [
            'rgb(6, 141, 251)',
        ],
        backgroundColor: [
            'rgb(6, 141, 251, 0.1)',
        ],
        borderWidth: 1,
        lineTension: 0.0,
    },
    {
        data: vitesseMoyData,
        borderDash: [5, 3],
        borderColor: [
            'rgba(6, 141, 251, 0.3)',
        ],
        backgroundColor: [
            'rgba(170, 170, 170, 0.0)',
        ],
        borderWidth: 1,
        lineTension: 0.0,
    }];
    myChart.data.labels = kilometrage;
    myChart.update();
}

function updateSpeedChart(dataSpeed) {
    var c = document.getElementById("graphSpeed");
    var ctx = c.getContext("2d");
    c.classList.remove("chartjs-render-monitor")
    ctx.clearRect(0, 0, c.width, c.height);
    dataSpeedLength = dataSpeed.length

    var kilometrage = new Array()
    for (let i = 0; i < dataSpeedLength; i++) {
        kilometrage[i] = "      "
    }

    let vitesseMoy = 0;
    for (var i = 0; i <  dataSpeedLength; i++) {
        vitesseMoy += dataSpeed[i] / dataSpeedLength
    }

    vitesseMoyCase = document.getElementById("vitesseMoy");
    vitesseMoyCase.innerText = "moy:";
    vitesseMoyCase.innerText += " " + Math.round(vitesseMoy * 10) / 10 + "km/h"

    let vitesseMax = 0;
    for (var i = 0; i < dataSpeedLength; i++) {
        if (dataSpeed[i] > vitesseMax) {
            vitesseMax = dataSpeed[i]
        }
    }
    
    vitesseMaxCase = document.getElementById("vitesseMax");
	vitesseMaxCase.innerText = "max:";
    vitesseMaxCase.innerText += " " + Math.round(vitesseMax * 10) / 10 + "km/h"

    myChart.data.datasets = [{
        data: dataSpeed,
        borderColor: [
            'rgb(6, 141, 251)',
        ],
        backgroundColor: [
            'rgb(6, 141, 251, 0.1)',
        ],
        borderWidth: 1,
        lineTension: 0.0,
    }];
    // {
    //     label: 'vitesse (km/h)',
    //     data: vitesseMoyData,
    //     borderDash: [5, 3],
    //     borderColor: [
    //         'rgba(6, 141, 251, 0.3)',
    //     ],
    //     backgroundColor: [
    //         'rgba(170, 170, 170, 0.0)',
    //     ],
    //     borderWidth: 1,
    //     lineTension: 0.0,
    // }
    myChart.data.labels = kilometrage;
    myChart.update();
}