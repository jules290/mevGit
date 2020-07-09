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
            label: 'watt moyen (w)',
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
                        beginAtZero: false
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
        xHover = event.offsetX;
        xHoverData = event.offsetX;

        if (xHover < 21) {
            xHover = 21;
        }
        if (xHover > (sessionStorage.ctxWidth - 9)) {
            xHover = (sessionStorage.ctxWidth - 9);
        }

        if (xHoverData < 21) {
            xHoverData = 21;
        }

        if (xHoverData > (sessionStorage.ctxWidth - 9)) {
            xHoverData = (sessionStorage.ctxWidth - 9);
        }

        selection = (extent.width.animVal.value) / (sessionStorage.ctxWidth - 30);
        selectionWidth = (extent.width.animVal.value)
        x = (extent.x.animVal.value);
        if (selection > 0) {
            xHover = ((xHoverData - 21) * selection) + x;
            if (xHover < 21) {
                xHover = 21;
            }
            if (xHover > (sessionStorage.ctxWidth - 9)) {
                xHover = (sessionStorage.ctxWidth - 9);
            }
        }

		baraltitude.setAttribute('x1', xHover);
		baraltitude.setAttribute('x2', xHover);
		barSpeed.setAttribute('x1', xHoverData);
		barSpeed.setAttribute('x2', xHoverData);
		barPower.setAttribute('x1', xHoverData);
        barPower.setAttribute('x2', xHoverData);

        fraction = (xHover - 21) / (sessionStorage.ctxWidth - 30);

        grade = Zoomgrade[ Math.round( fraction * Zoomgrade.length) ]
        if (grade != undefined) {
            document.getElementById("grade").innerText = document.getElementById("grade").innerText.slice(0, 6) + " " + grade + "%"
        }

        Altitude = Zoomaltitude[ Math.round( fraction * Zoomaltitude.length) ]
        if (Altitude != undefined) {
            document.getElementById("altitude").innerText = document.getElementById("altitude").innerText.slice(0, 10) + " " + Altitude + "m"
        }

        vitesse = Zoomvitesse[ Math.round( fraction * Zoomvitesse.length) ]
        if (vitesse != undefined) {
            document.getElementById("vitesse").innerText = document.getElementById("vitesse").innerText.slice(0, 8) + " " + vitesse + "km/h"
        }

        power = watt[ Math.round( fraction * watt.length) ]
        if (power != undefined) {
            document.getElementById("power").innerText = document.getElementById("power").innerText.slice(0, 10) + " " + power + "W"
        }

        setMarker(fraction, latlng)
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
                        beginAtZero: false
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