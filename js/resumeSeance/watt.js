function postWatt(activitie, latlng , altitude, vitesse, distance, grade) {
    let Zoomaltitude = ZoomAltitude(altitude, altitude.length);
    let Zoomvitesse = ZoomVitesse(vitesse, vitesse.length);
    let Zoomgrade = ZoomGrade(grade, grade.length);
    let watt = wattEstimation(Zoomaltitude, Zoomvitesse, Zoomgrade);
				
    var ctx = document.getElementById('graphPower');
    var svg = document.getElementById("svgPower");
    var bar = document.getElementById("barPower");

    if (document.documentElement.clientWidth > 1200) {
        ctx.height = 130;
        svg.style.height = "130px";
        svg.style.marginTop = "-130px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 130);
    }
    else if (document.documentElement.clientWidth > 1000) {
        ctx.height = 130;
        svg.style.height = "130px";
        svg.style.marginTop = "-130px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 130);
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

    var data = {
        labels: kilometrage,
        datasets: [{
            label: 'puissance (w)',
            data: watt,
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
                        max: Number(sessionStorage.wattMax)
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
    let ctxWidth = document.getElementById("graphPower").style.width;
    sessionStorage.ctxWidth = (ctxWidth.slice(0, ctxWidth.length - 2));
    let fraction;
    let Altitude;

    var baraltitude = document.getElementById("baraltitude");
	var barSpeed = document.getElementById("barSpeed");
    var barPower = document.getElementById("barPower");

    document.getElementById("svgPower").onmousemove = function (event) {
        chartLineHoverData(event, Zoomgrade, Zoomaltitude, Zoomvitesse, watt, latlng) 
    }
}

function updatePowerChart(dataPower) {
    var c = document.getElementById("graphPower");
    var ctx = c.getContext("2d");
    c.classList.remove("chartjs-render-monitor")
    ctx.clearRect(0, 0, c.width, c.height);

    var kilometrage = new Array()
    for (let i = 0; i < dataPower.length; i++) {
        kilometrage[i] = "      "
    }

    let wattMoy = 0;
    for (var i = 0; i <  dataPower.length; i++) {
        wattMoy += dataPower[i] / dataPower.length
    }

    document.getElementById("puissanceMoy").innerText = "moy:";
    document.getElementById("puissanceMoy").innerText += " " + Math.round(wattMoy * 10) / 10 + "w"

    let wattMoyData = new Array();
    for (var i = 0; i <  dataPower.length; i++) {
        wattMoyData[i] = wattMoy;
    }

    let wattMax = 0;
    for (var i = 0; i <  dataPower.length; i++) {
        if (dataPower[i] > wattMax) {
            wattMax = dataPower[i]
        }
    }
    sessionStorage.wattMax = wattMax;
    
	document.getElementById("puissanceMax").innerText = "max:";
	document.getElementById("puissanceMax").innerText += " " + Math.round(wattMax * 10) / 10 + "w"

    var data = {
        labels: kilometrage,
        datasets: [{
            label: 'puissance (w)',
            data: dataPower,
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
                        max: Number(sessionStorage.wattMax)
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