function postActivitiesStreamsaltitudeChart(activitie, gear, latlng , altitude, vitesse, distance, grade) {
    let supprEnd;
    if (altitude.length.toString().charAt(altitude.length.toString().length - 1) == "0") {
        supprEnd = 0;
    }
    else {
        supprEnd = 1;
    }
    
    let ZoomVitesse2Hover = new Array()
	for (var i = 1; i <  (vitesse.length/5)-supprEnd; i++) {
		ZoomVitesse2Hover[i-1] = Math.round((vitesse[i*5] + vitesse[i*5+1] + vitesse[i*5+2] + vitesse[i*5+3] + vitesse[i*5+4])/0.5)/10
    }

    for (var i = 0; i <  ZoomVitesse2Hover.length; i++) {			
		if (i == 0) {
			ZoomVitesse2Hover[i] = ZoomVitesse2Hover[i]
		}
		else if (ZoomVitesse2Hover[i - 1] > 10) {
			ZoomVitesse2Hover[i] = ( ZoomVitesse2Hover[i] + ( ( ZoomVitesse2Hover[i] - ZoomVitesse2Hover[i - 1] ) * 0.1 ) ) * 0.99
		}
		else {
			ZoomVitesse2Hover[i] = ZoomVitesse2Hover[i]
		}
	}
    
    if (altitude.length.toString().charAt(altitude.length.toString().length - 1) == "0") {
        supprEnd = 0;
    }
    else {
        supprEnd = 1;
    }
            
    let Zoomaltitude = new Array()
    if (Math.round(activitie.moving_time / 60) < 30) {
        for (var i = 1; i <  (altitude.length/3)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*3] + altitude[i*3+1] + altitude[i*3+2])/0.3)/10
            }
    }
    else if (Math.round(activitie.moving_time / 60) < 60) {
        for (var i = 1; i <  (altitude.length/3)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*3] + altitude[i*3+1] + altitude[i*3+2])/0.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 90) {
        for (var i = 1; i <  (altitude.length/4)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*4] + altitude[i*4+1] + altitude[i*4+2] + altitude[i*4+3])/0.4)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 120) {
        for (var i = 1; i <  (altitude.length/5)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*5] + altitude[i*5+1] + altitude[i*5+2] + altitude[i*5+3] + altitude[i*5+4])/0.5)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 150) {
        for (var i = 1; i <  (altitude.length/6)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*6] + altitude[i*6+1] + altitude[i*6+2] + altitude[i*6+3] 
                + altitude[i*6+4] + altitude[i*6+5])/0.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 180) {
        for (var i = 1; i <  (altitude.length/8)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*8] + altitude[i*8+1] + altitude[i*8+2] + altitude[i*8+3] + altitude[i*8+4] 
                + altitude[i*8+5] +  altitude[i*8+6] + altitude[i*8+7])/0.8)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 210) {
        for (var i = 1; i <  (altitude.length/10)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*10] + altitude[i*10+1] + altitude[i*10+2] + altitude[i*10+3] 
                + altitude[i*10+4] + altitude[i*10+5] + altitude[i*10+6] + altitude[i*10+7] + altitude[i*10+8] 
                + altitude[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 240) {
        for (var i = 1; i <  (altitude.length/12)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*12] + altitude[i*12+1] + altitude[i*12+2] + altitude[i*12+3] 
                + altitude[i*12+4] + altitude[i*12+5] + altitude[i*12+6] + altitude[i*12+7] + altitude[i*12+8] + altitude[i*12+9] 
                + altitude[i*12+10] + altitude[i*12+11])/1.2)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 270) {
        for (var i = 1; i <  (altitude.length/14)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*14] + altitude[i*14+1] + altitude[i*14+2] + altitude[i*14+3] 
                + altitude[i*14+4] + altitude[i*14+5] +  altitude[i*14+6] + altitude[i*14+7] + altitude[i*14+8] + altitude[i*14+9] 
                + altitude[i*14+10] + altitude[i*14+11] + altitude[i*14+12] + altitude[i*14+13])/1.4)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 300) {
        for (var i = 1; i <  (altitude.length/16)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*16] + altitude[i*16+1] + altitude[i*16+2] + altitude[i*16+3] 
                + altitude[i*16+4] + altitude[i*16+5] +  altitude[i*16+6] + altitude[i*16+7] + altitude[i*16+8] + altitude[i*16+9] 
                + altitude[i*16+10] + altitude[i*16+11] + altitude[i*16+12] + altitude[i*16+13] + altitude[i*16+14] 
                + altitude[i*16+15])/1.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) > 300) {
        for (var i = 1; i <  (altitude.length/18)-supprEnd; i++) {
            Zoomaltitude[i-1] = Math.round((altitude[i*18] + altitude[i*18+1] + altitude[i*18+2] + altitude[i*18+3] 
                + altitude[i*18+4] + altitude[i*18+5] +  altitude[i*18+6] + altitude[i*18+7] + altitude[i*18+8] + altitude[i*18+9] 
                + altitude[i*18+10] + altitude[i*18+11] + altitude[i*18+12] + altitude[i*18+13] + altitude[i*18+14] 
                + altitude[i*18+15] + altitude[i*18+16] + altitude[i*18+17])/1.8)/10
        }
    }

    if (vitesse.length.toString().charAt(altitude.length.toString().length - 1) == "0") {
        supprEnd = 0;
    }
    else {
        supprEnd = 1;
    }

    let Zoomvitesse = new Array()
    if (Math.round(activitie.moving_time / 60) < 30) {
        for (var i = 1; i <  (vitesse.length/3)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*3] + vitesse[i*3+1] + vitesse[i*3+2])/0.3)/10
            }
    }
    else if (Math.round(activitie.moving_time / 60) < 60) {
        for (var i = 1; i <  (vitesse.length/3)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*3] + vitesse[i*3+1] + vitesse[i*3+2])/0.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 90) {
        for (var i = 1; i <  (vitesse.length/4)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*4] + vitesse[i*4+1] + vitesse[i*4+2] + vitesse[i*4+3])/0.4)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 120) {
        for (var i = 1; i <  (vitesse.length/5)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*5] + vitesse[i*5+1] + vitesse[i*5+2] + vitesse[i*5+3] + vitesse[i*5+4])/0.5)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 150) {
        for (var i = 1; i <  (vitesse.length/6)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*6] + vitesse[i*6+1] + vitesse[i*6+2] + vitesse[i*6+3] + vitesse[i*6+4] 
                + vitesse[i*6+5])/0.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 180) {
        for (var i = 1; i <  (vitesse.length/8)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*8] + vitesse[i*8+1] + vitesse[i*8+2] + vitesse[i*8+3] + vitesse[i*8+4] 
                + vitesse[i*8+5] +  vitesse[i*8+6] + vitesse[i*8+7])/0.8)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 210) {
        for (var i = 1; i <  (vitesse.length/10)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*10] + vitesse[i*10+1] + vitesse[i*10+2] + vitesse[i*10+3] + vitesse[i*10+4] 
                + vitesse[i*10+5] + vitesse[i*10+6] + vitesse[i*10+7] + vitesse[i*10+8] + vitesse[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 240) {
        for (var i = 1; i <  (vitesse.length/12)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*12] + vitesse[i*12+1] + vitesse[i*12+2] + vitesse[i*12+3] 
                + vitesse[i*12+4] + vitesse[i*12+5] + vitesse[i*12+6] + vitesse[i*12+7] + vitesse[i*12+8] 
                + vitesse[i*12+9] + vitesse[i*12+10] + vitesse[i*12+11])/1.2)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 270) {
        for (var i = 1; i <  (vitesse.length/14)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*14] + vitesse[i*14+1] + vitesse[i*14+2] + vitesse[i*14+3] + vitesse[i*14+4] 
                + vitesse[i*14+5] + vitesse[i*14+6] + vitesse[i*14+7] + vitesse[i*14+8] + vitesse[i*14+9] + vitesse[i*14+10] 
                + vitesse[i*14+11] + vitesse[i*14+12] + vitesse[i*14+13])/1.4)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 300) {
        for (var i = 1; i <  (vitesse.length/16)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*16] + vitesse[i*16+1] + vitesse[i*16+2] + vitesse[i*16+3] + vitesse[i*16+4] + vitesse[i*16+5] +  
                vitesse[i*16+6] + vitesse[i*16+7] + vitesse[i*16+8] + vitesse[i*16+9] + vitesse[i*16+10] + vitesse[i*16+11] + vitesse[i*16+12] + 
                vitesse[i*16+13] + vitesse[i*16+14] + vitesse[i*16+15])/1.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) > 300) {
        for (var i = 1; i <  (vitesse.length/18)-supprEnd; i++) {
            Zoomvitesse[i-1] = Math.round((vitesse[i*18] + vitesse[i*18+1] + vitesse[i*18+2] + vitesse[i*18+3] + vitesse[i*18+4] 
                + vitesse[i*18+5] +  vitesse[i*18+6] + vitesse[i*18+7] + vitesse[i*18+8] + vitesse[i*18+9] + vitesse[i*18+10] 
                + vitesse[i*18+11] + vitesse[i*18+12] + vitesse[i*18+13] + vitesse[i*18+14] + vitesse[i*18+15] 
                + vitesse[i*18+16] + vitesse[i*18+17])/1.8)/10
        }
    }

    if (grade.length.toString().charAt(altitude.length.toString().length - 1) == "0") {
        supprEnd = 0;
    }
    else {
        supprEnd = 1;
    }

    let Zoomgrade = new Array()
    if (Math.round(activitie.moving_time / 60) < 30) {
        for (var i = 1; i <  (grade.length/3)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*3] + grade[i*3+1] + grade[i*3+2])/0.3)/10
            }
    }
    else if (Math.round(activitie.moving_time / 60) < 60) {
        for (var i = 1; i <  (grade.length/3)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*3] + grade[i*3+1] + grade[i*3+2])/0.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 90) {
        for (var i = 1; i <  (grade.length/4)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*4] + grade[i*4+1] + grade[i*4+2] + grade[i*4+3])/0.4)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 120) {
        for (var i = 1; i <  (grade.length/5)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*5] + grade[i*5+1] + grade[i*5+2] + grade[i*5+3] + grade[i*5+4])/0.5)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 150) {
        for (var i = 1; i <  (grade.length/6)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*6] + grade[i*6+1] + grade[i*6+2] + grade[i*6+3] + grade[i*6+4] 
                + grade[i*6+5])/0.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 180) {
        for (var i = 1; i <  (grade.length/8)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*8] + grade[i*8+1] + grade[i*8+2] + grade[i*8+3] + grade[i*8+4] 
                + grade[i*8+5] + grade[i*8+6] + grade[i*8+7])/0.8)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 210) {
        for (var i = 1; i <  (grade.length/10)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*10] + grade[i*10+1] + grade[i*10+2] + grade[i*10+3] + grade[i*10+4] + grade[i*10+5] +  
                grade[i*10+6] + grade[i*10+7] + grade[i*10+8] + grade[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 240) {
        for (var i = 1; i <  (grade.length/12)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*12] + grade[i*12+1] + grade[i*12+2] + grade[i*12+3] 
                + grade[i*12+4] + grade[i*12+5] + grade[i*12+6] + grade[i*12+7] + grade[i*12+8] + grade[i*12+9] 
                + grade[i*12+10] + grade[i*12+11])/1.2)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 270) {
        for (var i = 1; i <  (grade.length/14)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*14] + grade[i*14+1] + grade[i*14+2] + grade[i*14+3] + grade[i*14+4] + grade[i*14+5] +  
                grade[i*14+6] + grade[i*14+7] + grade[i*14+8] + grade[i*14+9] + grade[i*14+10] + grade[i*14+11] + grade[i*14+12] + 
                grade[i*14+13])/1.4)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 300) {
        for (var i = 1; i <  (grade.length/16)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*16] + grade[i*16+1] + grade[i*16+2] + grade[i*16+3] + grade[i*16+4] + grade[i*16+5] +  
                grade[i*16+6] + grade[i*16+7] + grade[i*16+8] + grade[i*16+9] + grade[i*16+10] + grade[i*16+11] + grade[i*16+12] + 
                grade[i*16+13] + grade[i*16+14] + grade[i*16+15])/1.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) > 300) {
        for (var i = 1; i <  (grade.length/18)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*18] + grade[i*18+1] + grade[i*18+2] + grade[i*18+3] + grade[i*18+4] + grade[i*18+5] +  
                grade[i*18+6] + grade[i*18+7] + grade[i*18+8] + grade[i*18+9] + grade[i*18+10] + grade[i*18+11] + grade[i*18+12] + 
                grade[i*18+13] + grade[i*18+14] + grade[i*18+15] + grade[i*18+16] + grade[i*18+17])/1.8)/10
        }
    }

    let pressionValues = {
		zero: 1.01325,
		cinq_cent: 0.95461,
		mille: 0.89876,
		mille_cinq_cent: 0.84558,
		deux_mille: 0.79498,
	}

	let frotementValues = {
		vtt: 0.038,
		route: 0.004
	}

	let frotement
	switch(gear.frame_type) {
		case 1:
			frotement = frotementValues.vtt;
		  break;
		
		case 3:
			frotement = frotementValues.route;
		  break;

		default:
			frotement = frotementValues.route;
    }

	let aeroValues = {
		top: 0.445 * 3.6,
		cocottes: 0.388 * 3.6,
		bottom: 0.233 * 3.6,
		prolongateur: 0.200 * 3.6
	}

	let watt = new Array();
	let wattAir = new Array();
	let wattRoulement = new Array();
    let wattPente = new Array();
    let pression;
    let poids;
    if (sessionStorage.poids && sessionStorage.poids > 0) {
        poids = sessionStorage.poids + 7.5;
    }
    else {
        poids = 80;
    }

	for (let i = 0; i < ZoomVitesse2Hover.length; i++) {
        if (Zoomaltitude[i] < 500) {
            pression = pressionValues.zero;
        }
        else if(Zoomaltitude[i] < 1000) {
            pression = pressionValues.cinq_cent;
        }
        else if(Zoomaltitude[i] < 1500) {
            pression = pressionValues.mille;
        }
        else if(Zoomaltitude[i] < 2000) {
            pression = pressionValues.mille_cinq_cent;
        }
        else {
            pression = pressionValues.deux_mille;
        }

        wattAir[1] = pression / 2 * 0.45 * aeroValues.bottom * Math.pow(((ZoomVitesse2Hover[i]) / 3.6), 3);
	    wattRoulement[1] = frotement * 9.81 * poids * (ZoomVitesse2Hover[i] / 3.6);
		wattPente[1] = poids * 9.81 * (ZoomVitesse2Hover[i] / 3.6) * Zoomgrade[i] / 100;
		watt[i] = wattAir[1] + wattRoulement[1] + wattPente[1]
		if (watt[i] < 0) {
			watt[i] = 0
		}
		watt[i] = Math.round(watt[i] * 10) / 10
	}
    watt.splice(vitesse.length - 1, 1)
                
    var ctx = document.getElementById('graphaltitude');
    var svg = document.getElementById("svgaltitude");
    var bar = document.getElementById("baraltitude");
    let height;

    if (document.documentElement.clientWidth > 1200) {
        height = 120;
        svg.style.height = "120px";
        svg.style.marginTop = "-120px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 120);
    }
    else if (document.documentElement.clientWidth > 1000) {
        height = 120;
        svg.style.height = "120px";
        svg.style.marginTop = "-120px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 120);
    }
    else if (document.documentElement.clientWidth > 800) {
        height = 120;
        svg.style.height = "120px";
        svg.style.marginTop = "-120px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 120);
    }
    else if (document.documentElement.clientWidth > 600) {
        height = 100;
        svg.style.height = "100px";
        svg.style.marginTop = "-100px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 100);
    }
    else if (document.documentElement.clientWidth > 400) {
        height = 90;
        svg.style.height = "90px";
        svg.style.marginTop = "-90px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 90);
    }
    else if (document.documentElement.clientWidth > 300) {
        height = 80;
        svg.style.height = "80px";
        svg.style.marginTop = "-80px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 80);
    }
    else if (document.documentElement.clientWidth > 200) {
        height = 80;
        svg.style.height = "80px";
        svg.style.marginTop = "-80px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 80);
    }
    else {
        height = 80;
        svg.style.height = "80px";
        svg.style.marginTop = "-80px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 80);
    }

    ctx.height =  height;

    var kilometrage = new Array()
    for (let i = 0; i < Zoomaltitude.length; i++) {
        kilometrage[i] = "      "
    }

    var data = {
        labels: kilometrage,
        datasets: [{
            label: 'altitude (m)',
            data: altitude,
            borderColor: [
                'rgb(170, 170, 170)',
            ],
            backgroundColor: [
                'rgb(170, 170, 170)',
            ],
            borderWidth: 1
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
                        beginAtZero: false,
                    },
                    display: false,
                }]
            },
            legend: {
                labels: {
                    fontColor: 'black'
                },
                display: false,
            }
        }
    })

    let xHover;
    let ctxWidth = document.getElementById("graphaltitude").style.width;
    sessionStorage.ctxWidth = (ctxWidth.slice(0, ctxWidth.length - 2));
    let fraction;
    let Altitude;
    let position

    var baraltitude = document.getElementById("baraltitude");
	var barSpeed = document.getElementById("barSpeed");
	var barPower = document.getElementById("barPower");

    document.getElementById("svgaltitude").onmousemove = function (event) {
        xHover = event.offsetX;
		if (xHover >= 21 && xHover <= sessionStorage.ctxWidth - 9) {
			barSpeed.setAttribute('x1', xHover);
			barSpeed.setAttribute('x2', xHover);
			baraltitude.setAttribute('x1', xHover);
			baraltitude.setAttribute('x2', xHover);
			barSpeed.setAttribute('x1', xHover);
			barSpeed.setAttribute('x2', xHover);
			barPower.setAttribute('x1', xHover);
			barPower.setAttribute('x2', xHover);
        }
        fraction = (xHover - 23) / (sessionStorage.ctxWidth - 30);

        grade = Zoomgrade[ Math.round( fraction * Zoomgrade.length) ]
        if (grade != undefined) {
            document.getElementById("grade").innerText = document.getElementById("grade").innerText.slice(0, 6) + " " + grade + "%"
        }

        Altitude = Zoomaltitude[ Math.round( fraction * Zoomaltitude.length) ]
        if (Altitude != undefined) {
            document.getElementById("altitude").innerText = document.getElementById("altitude").innerText.slice(0, 10) + " " + Altitude + "m"
        }

        Vitesse = Zoomvitesse[ Math.round( fraction * Zoomvitesse.length) ]
        if (Vitesse != undefined) {
            document.getElementById("vitesse").innerText = document.getElementById("vitesse").innerText.slice(0, 8) + " " + Vitesse + "km/h"
        }

        power = watt[ Math.round( fraction * watt.length) ]
        if (power != undefined) {
            document.getElementById("power").innerText = document.getElementById("power").innerText.slice(0, 10) + " " + power + "W"
        }

        setMarker(fraction, latlng);
    }

    let extent = document.getElementById("extent")
    let resizeLeft = document.getElementById("resizeLeft")
    let resizeRight = document.getElementById("resizeRight")
    let xClic;
    let selection;
    
    $("#svgaltitude").mousedown(function(event) {
        extent.setAttribute('width', 0);
        resizeLeft.setAttribute('transform', `translate(0, 0)`);
        resizeRight.setAttribute('transform', `translate(0, 0)`);
        xClic = event.offsetX;
        sessionStorage.xClic = xClic;
        if (xClic >= 21) {
            extent.setAttribute('x', xClic);
        }
        else {
            extent.setAttribute('x', 21);
        }
        $("#svgaltitude").mousemove(function (event2) {
            xClic2 = event2.offsetX;
            if (xClic2 - xClic > 0) {
                if (xClic >= 21 && xClic2 <= sessionStorage.ctxWidth - 9) {
                    extent.setAttribute('width', xClic2 - xClic);
                    resizeLeft.setAttribute('transform', `translate(${xClic}, 0)`);
                    resizeRight.setAttribute('transform', `translate(${xClic2}, 0)`);
                }
                else if (xClic >= 21) {
                    extent.setAttribute('width', (sessionStorage.ctxWidth - 9) - xClic);
                    resizeLeft.setAttribute('transform', `translate(${xClick}, 0)`);
                    resizeRight.setAttribute('transform', `translate(${sessionStorage.ctxWidth - 9}, 0)`);
                }
                else if (xClic2 <= sessionStorage.ctxWidth - 9) {
                    extent.setAttribute('width', xClic2 - xClic);
                    resizeLeft.setAttribute('transform', `translate(21, 0)`);
                    resizeRight.setAttribute('transform', `translate(${xClic2}, 0)`);
                }
                else {
                    extent.setAttribute('width', (sessionStorage.ctxWidth - 9) - 21);
                    resizeLeft.setAttribute('transform', `translate(21, 0)`);
                    resizeRight.setAttribute('transform', `translate(${sessionStorage.ctxWidth - 9}, 0)`);
                }
            }
            else {
                if (xClic <= sessionStorage.ctxWidth - 9 && xClic2 >= 21) {
                    extent.setAttribute('x', xClic2);
                    extent.setAttribute('width', Math.abs(xClic2 - xClic) );
                    resizeLeft.setAttribute('transform', `translate(${xClic2}, 0)`);
                    resizeRight.setAttribute('transform', `translate(${xClic}, 0)`);
                }
                else if (xClic <= sessionStorage.ctxWidth - 9) {
                    extent.setAttribute('x', 21);
                    extent.setAttribute('width', Math.abs(xClic - 21));
                    resizeLeft.setAttribute('transform', `translate(21, 0)`);
                    resizeRight.setAttribute('transform', `translate(${xClic}, 0)`);
                }
                else if (xClic2 >= 21) {
                    extent.setAttribute('x', xClic2);
                    extent.setAttribute('width', Math.abs((sessionStorage.ctxWidth - 9) - xClic2));
                    resizeLeft.setAttribute('transform', `translate(${xClic2}, 0)`);
                    resizeRight.setAttribute('transform', `translate(${sessionStorage.ctxWidth - 9}, 0)`);
                }
                else {
                    extent.setAttribute('x', 21);
                    extent.setAttribute('width', Math.abs((sessionStorage.ctxWidth - 9) - 21) );
                    resizeLeft.setAttribute('transform', `translate(21, 0)`);
                    resizeRight.setAttribute('transform', `translate(${sessionStorage.ctxWidth - 9}, 0)`);
                }
            }

            selection = extent.width.animVal.value / (sessionStorage.ctxWidth - 30);
            x = (extent.x.animVal.value - 21) / sessionStorage.ctxWidth;
            
            console.log(selection)
    
            let dataSpeed = new Array();
            for (let i = Math.round(x * vitesse.length);( i - Math.round(x * vitesse.length)) <  Math.round(vitesse.length * selection); i++) {
                dataSpeed[i - Math.round(x * vitesse.length)] = vitesse[i]
            }
            console.log(dataSpeed)
            upsateSpeedChart(dataSpeed);
        });
    })
    .mouseup(function() {
        $("#svgaltitude").off("mousemove");
        selection = extent.width.animVal.value / (sessionStorage.ctxWidth - 30);
        x = (extent.x.animVal.value - 21) / sessionStorage.ctxWidth;
        
        console.log(selection)

        if (selection == 0) {
            selection = 1
            x = 0
        }
        let dataSpeed = new Array();
        for (let i = Math.round(x * vitesse.length);( i - Math.round(x * vitesse.length)) <  Math.round(vitesse.length * selection); i++) {
            dataSpeed[i - Math.round(x * vitesse.length)] = vitesse[i]
        }
        console.log(dataSpeed)
        upsateSpeedChart(dataSpeed);
    });
}