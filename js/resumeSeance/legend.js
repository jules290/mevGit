function postLegend(activitie, gear, latlng , altitude, vitesse, distance, grade) {
	let supprEnd;
	if (vitesse.length.toString().charAt(vitesse.length.toString().length - 1) == "0") {
		supprEnd = 0;
	}
	else {
		supprEnd = 1;
	}
	
	let ZoomVitesse = new Array()
	for (var i = 1; i <  (vitesse.length/5)-supprEnd; i++) {
		ZoomVitesse[i-1] = Math.round((vitesse[i*5] + vitesse[i*5+1] + vitesse[i*5+2] + vitesse[i*5+3] + vitesse[i*5+4])/0.5)/10
	}
	
    for (var i = 0; i <  ZoomVitesse.length; i++) {			
		if (i == 0) {
			ZoomVitesse[i] = ZoomVitesse[i]
		}
		else if (ZoomVitesse[i - 1] > 10) {
			ZoomVitesse[i] = ( ZoomVitesse[i] + ( ( ZoomVitesse[i] - ZoomVitesse[i - 1] ) * 0.1 ) ) * 0.99
		}
		else {
			ZoomVitesse[i] = ZoomVitesse[i]
		}
	}

	let ZoomVitesse2 = new Array()
	for (var i = 1; i <  (vitesse.length/11)-supprEnd; i++) {
		ZoomVitesse2[i-1] = Math.round((vitesse[i*11] + vitesse[i*11+1] + vitesse[i*11+2] + vitesse[i*11+3] + vitesse[i*11+4] + vitesse[i*11+5] 
		+ vitesse[i*11+6] + vitesse[i*11+7] + vitesse[i*11+8] + vitesse[i*11+9] + vitesse[i*11+10])/1.1)/10
	}


    let vitesseMoy = 0;
    for (var i = 0; i <  vitesse.length; i++) {
        vitesseMoy += vitesse[i] / vitesse.length
	}
	
	document.getElementById("vitesseMoy").innerText += " " + Math.round(vitesseMoy * 10) / 10 + "km/h"

	let vitesseMax = 0;
    for (var i = 0; i <  ZoomVitesse2.length; i++) {
        if (ZoomVitesse2[i] > vitesseMax) {
            vitesseMax = ZoomVitesse2[i]
        }
	}
	
	document.getElementById("vitesseMax").innerText += " " + Math.round(vitesseMax * 10) / 10 + "km/h"


	let ZoomGrade = new Array()
	for (var i = 1; i <  (grade.length/5)-supprEnd; i++) {
		ZoomGrade[i-1] = Math.round((grade[i*5] + grade[i*5+1] + grade[i*5+2] + grade[i*5+3] + grade[i*5+4])/0.5)/10
	}

    let altitudeMax = 0;
    for (var i = 0; i <  altitude.length - 1; i++) {
        if (altitude[i] > altitudeMax) {
			altitudeMax = altitude[i];
		}
	}

	document.getElementById("altitudeMax").innerText += " " + Math.round(altitudeMax * 10) / 10 + "m"

	let altitudeMin = 10000;
    for (var i = 0; i <  altitude.length - 1; i++) {
        if (altitude[i] < altitudeMin) {
			altitudeMin = altitude[i];
		}
	}

	document.getElementById("altitudeMoy").innerText += " " + Math.round(altitudeMin * 10) / 10 + "m"


    let pressionValues = {
		zero: 1.01325,
		cinq_cent: 0.95461,
		mille: 0.89876,
		mille_cinq_cent: 0.84558,
		deux_mille: 0.79498,
		deux_mille_cinq_cent: 0.74686,
		trois_mille: 0.79498,
		trois_mille_cinq_cent: 0.74686,
		quatre_mille: 0.79498,
		quatre_mille_cinq_cent: 0.74686,
		cinq_mille: 0.79498,
		cinq_mille_cinq_cent: 0.74686,
		six_mille: 0.79498,
		six_mille_cinq_cent: 0.74686,
		sept_mille: 0.79498,
		sept_mille_cinq_cent: 0.74686,
		huit_mille: 0.79498,
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
	for (let i = 0; i < ZoomVitesse.length; i++) {
        wattAir[1] = 1.013 / 2 * 0.45 * aeroValues.bottom * Math.pow(((ZoomVitesse[i]) / 3.6), 3);
	    wattRoulement[1] = frotement * 9.81 * 65 * (ZoomVitesse[i] / 3.6);
		wattPente[1] = 65 * 9.81 * (ZoomVitesse[i] / 3.6) * ZoomGrade[i] / 100;
		watt[i] = wattAir[1] + wattRoulement[1] + wattPente[1]
		if (watt[i] < 0) {
			watt[i] = 0
		}
		watt[i] = Math.round(watt[i] * 10) / 10
	}
    watt.splice(ZoomVitesse.length - 1, 1)

    let wattMoy = 0;
    for (var i = 0; i <  watt.length; i++) {
        wattMoy += watt[i] / watt.length
    }

    document.getElementById("puissanceMoy").innerText += " " + Math.round(wattMoy * 10) / 10 + "w"

    let wattMax = 0;
    for (var i = 0; i <  watt.length; i++) {
        if (watt[i] > wattMax) {
            wattMax = watt[i]
        }
	}
	
	document.getElementById("puissanceMax").innerText += " " + Math.round(wattMax * 10) / 10 + "w"


	let xClic;
	let ctxWidth = document.getElementById("graphaltitude").style.width;
	ctxWidth = (ctxWidth.slice(0, ctxWidth.length - 2));
	let fraction;

	var baraltitude = document.getElementById("baraltitude");
	var barSpeed = document.getElementById("barSpeed");
	var barPower = document.getElementById("barPower");

	$("#svgaltitude").hover(function () {
		document.getElementById("baraltitude").classList.add("bar")
		document.getElementById("barSpeed").classList.add("bar")
		document.getElementById("barPower").classList.add("bar")
	}, function () {
		document.getElementById("baraltitude").classList.remove("bar")
		document.getElementById("barSpeed").classList.remove("bar")
		document.getElementById("barPower").classList.remove("bar")
	})

	$("#svgSpeed").hover(function () {
		document.getElementById("baraltitude").classList.add("bar")
		document.getElementById("barSpeed").classList.add("bar")
		document.getElementById("barPower").classList.add("bar")
	}, function () {
		document.getElementById("baraltitude").classList.remove("bar")
		document.getElementById("barSpeed").classList.remove("bar")
		document.getElementById("barPower").classList.remove("bar")
	})

	$("#svgPower").hover(function () {
		document.getElementById("baraltitude").classList.add("bar")
		document.getElementById("barSpeed").classList.add("bar")
		document.getElementById("barPower").classList.add("bar")
	}, function () {
		document.getElementById("baraltitude").classList.remove("bar")
		document.getElementById("barSpeed").classList.remove("bar")
		document.getElementById("barPower").classList.remove("bar")
	})
}