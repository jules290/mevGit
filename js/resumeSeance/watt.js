var ctxWatt = document.getElementById('graphPower');

if (document.documentElement.clientWidth > 1200) {
    ctxWatt.height = 130;
}
else if (document.documentElement.clientWidth > 1000) {
    ctxWatt.height = 130;
}
else if (document.documentElement.clientWidth > 800) {
    ctxWatt.height = 120;
}
else if (document.documentElement.clientWidth > 600) {
    ctxWatt.height = 100;
}
else if (document.documentElement.clientWidth > 400) {
    ctxWatt.height = 90;
}
else if (document.documentElement.clientWidth > 300) {
    ctxWatt.height = 80;
}
else if (document.documentElement.clientWidth > 200) {
    ctxWatt.height = 80;
}
else {
    ctxWatt.height = 80;
}

var data = {
    labels: [],
    datasets: [{
        label: 'puissance (w)',
        data: [],
        borderColor: [
            'rgb(60, 60, 60)',
        ],
        backgroundColor: [
            'rgb(6, 141, 251, 0.0)',
        ],
        borderWidth: 1,
        showLine: true,
        lineTension: 0.0,
    },
    {
        label: 'watt moyen (w)',
        data: [],
        borderDash: [5, 3],
        borderColor: [
            'rgba(0, 0, 0, 0.3)',
        ],
        backgroundColor: [
            'rgba(170, 170, 170, 0.0)',
        ],
        borderWidth: 1,
        lineTension: 0.0,
    }]
}
            
var ChartWatt = new Chart(ctxWatt, {
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
                    max: 1200
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

function postWatt(activitie, latlng , altitude, vitesse, distance, grade) {
    let Zoomaltitude = ZoomAltitude(altitude, altitude.length);
    let Zoomvitesse = ZoomVitesse(vitesse, vitesse.length);
    let Zoomgrade = ZoomGrade(grade, grade.length);
    let watt = wattEstimation(Zoomaltitude, Zoomvitesse, Zoomgrade);
    
    var kilometrage = new Array()
    for (let i = 0; i < Zoomaltitude.length; i++) {
        kilometrage[i] = "      "
    }

    let wattMoy = 0;
    for (var i = 0; i <  watt.length; i++) {
        wattMoy += watt[i] / watt.length
    }

    let wattMoyData = new Array();
    for (var i = 0; i <  watt.length; i++) {
        wattMoyData[i] = wattMoy;
    }

    let wattMax = 0;
    for (var i = 0; i <  watt.length; i++) {
        if (watt[i] > wattMax) {
            wattMax = watt[i]
        }
    }
    sessionStorage.wattMax = wattMax;

    ChartWatt.data.datasets = [{
        data: watt,
        borderColor: [
            'rgb(60, 60, 60)',
        ],
        backgroundColor: [
            'rgb(6, 141, 251, 0.0)',
        ],
        borderWidth: 1,
        lineTension: 0.0,
    },
    {
        data: wattMoyData,
        borderDash: [5, 3],
        borderColor: [
            'rgba(0, 0, 0, 0.3)',
        ],
        backgroundColor: [
            'rgba(170, 170, 170, 0.0)',
        ],
        borderWidth: 1,
        lineTension: 0.0,
    }];
    ChartWatt.data.labels = kilometrage;
    ChartWatt.update();
}

function updatePowerChart(dataPower) {
    var c = document.getElementById("graphPower");
    var ctx = c.getContext("2d");
    c.classList.remove("chartjs-render-monitor")
    ctx.clearRect(0, 0, c.width, c.height);
    dataPowerLength = dataPower.length;

    var kilometrage = new Array()
    for (let i = 0; i < dataPowerLength; i++) {
        kilometrage[i] = "      "
    }

    let wattMoy = 0;
    for (var i = 0; i < dataPowerLength; i++) {
        wattMoy += dataPower[i] / dataPowerLength;
    }

    puissanceMoyCase = document.getElementById("puissanceMoy");
    puissanceMoyCase.innerText = "moy:";
    puissanceMoyCase.innerText += " " + Math.round(wattMoy * 10) / 10 + "w"

    let wattMax = 0;
    for (var i = 0; i < dataPowerLength; i++) {
        if (dataPower[i] > wattMax) {
            wattMax = dataPower[i]
        }
    }
    sessionStorage.wattMax = wattMax;
    
    puissanceMaxCase = document.getElementById("puissanceMax");
	puissanceMaxCase.innerText = "max:";
	puissanceMaxCase.innerText += " " + Math.round(wattMax * 10) / 10 + "w"

    ChartWatt.data.datasets = [{
        data: dataPower,
        borderColor: [
            'rgb(60, 60, 60)',
        ],
        backgroundColor: [
            'rgba(170, 170, 170, 0.0)',
        ],
        borderWidth: 1,
        lineTension: 0.0,
    }];
    ChartWatt.data.labels = kilometrage;
    ChartWatt.update();
}