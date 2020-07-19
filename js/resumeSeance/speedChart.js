function postActivitiesStreamsSpeedChart(activitie, latlng , altitude, vitesse, distance, grade) {
    console.log(vitesse.length)
    
    let Zoomaltitude = ZoomAltitude(altitude, altitude.length);
    let Zoomvitesse = ZoomVitesse(vitesse, vitesse.length);
    let Zoomgrade = ZoomGrade(grade, grade.length);
    let watt = wattEstimation(Zoomaltitude, Zoomvitesse, Zoomgrade);

    var ctx = document.getElementById('graphSpeed');
    var svg = document.getElementById("svgSpeed");
    var bar = document.getElementById("barSpeed");

    if (document.documentElement.clientWidth > 1200) {
        ctx.height = 120;
        svg.style.height = "120px";
        svg.style.marginTop = "-120px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 120);
    }
    else if (document.documentElement.clientWidth > 1000) {
        ctx.height = 120;
        svg.style.height = "120px";
        svg.style.marginTop = "-120px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 120);
    }
    else if (document.documentElement.clientWidth > 800) {
        ctx.height = 120;
        svg.style.height = "120px";
        svg.style.marginTop = "-120px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 120);
    }
    else if (document.documentElement.clientWidth > 600) {
        ctx.height = 100;
        svg.style.height = "100px";
        svg.style.marginTop = "-100px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 100);
    }
    else if (document.documentElement.clientWidth > 400) {
        ctx.height = 90;
        svg.style.height = "90px";
        svg.style.marginTop = "-90px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 90);
    }
    else if (document.documentElement.clientWidth > 300) {
        ctx.height = 80;
        svg.style.height = "80px";
        svg.style.marginTop = "-80px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 80);
    }
    else if (document.documentElement.clientWidth > 200) {
        ctx.height = 80;
        svg.style.height = "80px";
        svg.style.marginTop = "-80px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 80);
    }
    else {
        ctx.height = 80;
        svg.style.height = "80px";
        svg.style.marginTop = "-80px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 80);
    }

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

    var data = {
        labels: kilometrage,
        datasets: [{
            label: 'vitesse (km/h)',
            data: Zoomvitesse,
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
                labels: {
                    fontColor: 'black'
                },
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

    let xClic;
    let ctxWidth = document.getElementById("graphSpeed").style.width;
    sessionStorage.ctxWidth = (ctxWidth.slice(0, ctxWidth.length - 2));
    let fraction;
    let Altitude;

    var baraltitude = document.getElementById("baraltitude");
	var barSpeed = document.getElementById("barSpeed");
	var barPower = document.getElementById("barPower");

    document.getElementById("svgSpeed").onmousemove = function (event) {
        chartLineHoverData(event, Zoomgrade, Zoomaltitude, Zoomvitesse, watt, latlng)
    }
}

function updateSpeedChart(dataSpeed) {
    var c = document.getElementById("graphSpeed");
    var ctx = c.getContext("2d");
    c.classList.remove("chartjs-render-monitor")
    ctx.clearRect(0, 0, c.width, c.height);

    var kilometrage = new Array()
    for (let i = 0; i < dataSpeed.length; i++) {
        kilometrage[i] = "      "
    }

    let vitesseMoy = 0;
    for (var i = 0; i <  dataSpeed.length; i++) {
        vitesseMoy += dataSpeed[i] / dataSpeed.length
    }

    let vitesseMoyData = new Array();
    for (var i = 0; i <  dataSpeed.length; i++) {
        vitesseMoyData[i] = vitesseMoy;
    }

    document.getElementById("vitesseMoy").innerText = "moy:";
    document.getElementById("vitesseMoy").innerText += " " + Math.round(vitesseMoy * 10) / 10 + "km/h"

    let vitesseMax = 0;
    for (var i = 0; i <  dataSpeed.length; i++) {
        if (dataSpeed[i] > vitesseMax) {
            vitesseMax = dataSpeed[i]
        }
    }
    
	document.getElementById("vitesseMax").innerText = "max:";
    document.getElementById("vitesseMax").innerText += " " + Math.round(vitesseMax * 10) / 10 + "km/h"

    var data = {
        labels: kilometrage,
        datasets: [{
            label: 'vitesse (km/h)',
            data: dataSpeed,
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
            label: 'watt moyen (w)',
            data: vitesseMoyData,
            borderDash: [5, 3],
            borderColor: [
                'rgba(6, 141, 251, 0.8)',
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
                labels: {
                    fontColor: 'black'
                },
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
}