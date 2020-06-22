function postLegend(response, activitie, gear) {
    let vitesse = new Array()
    for (var i = 0; i < response[0].data.length; i++) {
        vitesse[i] = (Math.round(((response[0].data[i + 1] - response[0].data[i]) * response[0].data.length / activitie.moving_time) * 36))/10
    }
	vitesse.splice(vitesse.length - 1, 1)

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


	let Grade = new Array()
    for (var i = 0; i < response[0].data.length; i++) {
		Grade[i] = ((response[1].data[i + 1] - response[1].data[i]) / (response[1].data.length / activitie.distance)) * 0.5
	}
	Grade.splice(vitesse.length - 1, 1)

	let ZoomGrade = new Array()
	for (var i = 1; i <  (Grade.length/5)-supprEnd; i++) {
		ZoomGrade[i-1] = Math.round((Grade[i*5] + Grade[i*5+1] + Grade[i*5+2] + Grade[i*5+3] + Grade[i*5+4])/0.5)/10
	}

    let elevationMax = 0;
    for (var i = 0; i <  response[0].data.length - 1; i++) {
        if (response[1].data[i] > elevationMax) {
			elevationMax = response[1].data[i];
		}
	}

	document.getElementById("elevationMax").innerText += " " + Math.round(elevationMax * 10) / 10 + "m"

	let elevationMin = 10000;
    for (var i = 0; i <  response[0].data.length - 1; i++) {
        if (response[1].data[i] < elevationMin) {
			elevationMin = response[1].data[i];
		}
	}

	document.getElementById("elevationMoy").innerText += " " + Math.round(elevationMin * 10) / 10 + "m"


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
	let ctxWidth = document.getElementById("graphElevation").style.width;
	ctxWidth = (ctxWidth.slice(0, ctxWidth.length - 2));
	let fraction;

	var barElevation = document.getElementById("barElevation");
	var barSpeed = document.getElementById("barSpeed");
	var barPower = document.getElementById("barPower");

	$("#graphElevation").click(function(event) {
		xClic = event.offsetX - 21;
		fraction = xClic / ctxWidth;
		console.log(fraction)
	});

	$("#svgElevation").hover(function () {
		document.getElementById("barElevation").classList.add("bar")
		document.getElementById("barSpeed").classList.add("bar")
		document.getElementById("barPower").classList.add("bar")
	}, function () {
		document.getElementById("barElevation").classList.remove("bar")
		document.getElementById("barSpeed").classList.remove("bar")
		document.getElementById("barPower").classList.remove("bar")
	})

	$("#svgSpeed").hover(function () {
		document.getElementById("barElevation").classList.add("bar")
		document.getElementById("barSpeed").classList.add("bar")
		document.getElementById("barPower").classList.add("bar")
	}, function () {
		document.getElementById("barElevation").classList.remove("bar")
		document.getElementById("barSpeed").classList.remove("bar")
		document.getElementById("barPower").classList.remove("bar")
	})

	$("#svgPower").hover(function () {
		document.getElementById("barElevation").classList.add("bar")
		document.getElementById("barSpeed").classList.add("bar")
		document.getElementById("barPower").classList.add("bar")
	}, function () {
		document.getElementById("barElevation").classList.remove("bar")
		document.getElementById("barSpeed").classList.remove("bar")
		document.getElementById("barPower").classList.remove("bar")
	})
}