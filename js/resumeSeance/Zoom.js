let supprEnd = 1;

function ZoomAltitude(altitude, ArrayLength) {
    let Zoomaltitude = new Array()
    if (ArrayLength < 500) {
        for (var i = 0; i <  (altitude.length)-supprEnd; i++) {
            Zoomaltitude = altitude
        }
    }
    else if (ArrayLength < 1000) {
        for (var i = 0; i <  (altitude.length/2)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*2] + altitude[i*2+1])/0.2)/10
        }
    }
    else if (ArrayLength < 2000) {
        for (var i = 0; i <  (altitude.length/3)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*3] + altitude[i*3+1] + altitude[i*3+2])/0.3)/10
        }
    }
    else if (ArrayLength < 3000) {
        for (var i = 0; i <  (altitude.length/5)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*5] + altitude[i*5+1] + altitude[i*5+2] + altitude[i*5+3] + altitude[i*5+4])/0.5)/10
        }
    }
    else if (ArrayLength < 4000) {
        for (var i = 0; i <  (altitude.length/5)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*5] + altitude[i*5+1] + altitude[i*5+2] + altitude[i*5+3] + altitude[i*5+4])/0.5)/10
        }
    }
    else if (ArrayLength < 5000) {
        for (var i = 0; i <  (altitude.length/6)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*6] + altitude[i*6+1] + altitude[i*6+2] + altitude[i*6+3] 
                + altitude[i*6+4] + altitude[i*6+5])/0.6)/10
        }
    }
    else if (ArrayLength < 6000) {
        for (var i = 0; i <  (altitude.length/8)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*8] + altitude[i*8+1] + altitude[i*8+2] + altitude[i*8+3] + altitude[i*8+4] 
                + altitude[i*8+5] +  altitude[i*8+6] + altitude[i*8+7])/0.8)/10
        }
    }
    else if (ArrayLength < 7000) {
        for (var i = 0; i <  (altitude.length/10)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*10] + altitude[i*10+1] + altitude[i*10+2] + altitude[i*10+3] 
                + altitude[i*10+4] + altitude[i*10+5] + altitude[i*10+6] + altitude[i*10+7] + altitude[i*10+8] 
                + altitude[i*10+9])/1.0)/10
        }
    }
    else if (ArrayLength < 8000) {
        for (var i = 0; i <  (altitude.length/12)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*12] + altitude[i*12+1] + altitude[i*12+2] + altitude[i*12+3] 
                + altitude[i*12+4] + altitude[i*12+5] + altitude[i*12+6] + altitude[i*12+7] + altitude[i*12+8] + altitude[i*12+9] 
                + altitude[i*12+10] + altitude[i*12+11])/1.2)/10
        }
    }
    else if (ArrayLength < 9000) {
        for (var i = 0; i <  (altitude.length/14)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*14] + altitude[i*14+1] + altitude[i*14+2] + altitude[i*14+3] 
                + altitude[i*14+4] + altitude[i*14+5] +  altitude[i*14+6] + altitude[i*14+7] + altitude[i*14+8] + altitude[i*14+9] 
                + altitude[i*14+10] + altitude[i*14+11] + altitude[i*14+12] + altitude[i*14+13])/1.4)/10
        }
    }
    else if (ArrayLength < 10000) {
        for (var i = 0; i <  (altitude.length/16)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*16] + altitude[i*16+1] + altitude[i*16+2] + altitude[i*16+3] 
                + altitude[i*16+4] + altitude[i*16+5] +  altitude[i*16+6] + altitude[i*16+7] + altitude[i*16+8] + altitude[i*16+9] 
                + altitude[i*16+10] + altitude[i*16+11] + altitude[i*16+12] + altitude[i*16+13] + altitude[i*16+14] 
                + altitude[i*16+15])/1.6)/10
        }
    }
    else if (ArrayLength > 10000) {
        for (var i = 0; i <  (altitude.length/18)-supprEnd; i++) {
            Zoomaltitude[i] = Math.round((altitude[i*18] + altitude[i*18+1] + altitude[i*18+2] + altitude[i*18+3] 
                + altitude[i*18+4] + altitude[i*18+5] +  altitude[i*18+6] + altitude[i*18+7] + altitude[i*18+8] + altitude[i*18+9] 
                + altitude[i*18+10] + altitude[i*18+11] + altitude[i*18+12] + altitude[i*18+13] + altitude[i*18+14] 
                + altitude[i*18+15] + altitude[i*18+16] + altitude[i*18+17])/1.8)/10
        }
    }

    return Zoomaltitude;
}

function ZoomVitesse(vitesse, ArrayLength) {
    let Zoomvitesse = new Array()
    if (ArrayLength < 500) {
        for (var i = 0; i <  (vitesse.length)-supprEnd; i++) {
            Zoomvitesse = vitesse
        }
        console.log(vitesse.length)
        console.log(Zoomvitesse.length)
    }
    else if (ArrayLength < 1000) {
        for (var i = 0; i <  (vitesse.length/2)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*2] + vitesse[i*2+1])/0.2)/10
        }
    }
    else if (ArrayLength < 2000) {
        for (var i = 0; i <  (vitesse.length/3)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*3] + vitesse[i*3+1] + vitesse[i*3+2])/0.3)/10
        }
    }
    else if (ArrayLength < 3000) {
        for (var i = 0; i <  (vitesse.length/5)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*5] + vitesse[i*5+1] + vitesse[i*5+2] + vitesse[i*5+3] + vitesse[i*5+4])/0.5)/10
        }
    }
    else if (ArrayLength < 4000) {
        for (var i = 0; i <  (vitesse.length/5)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*5] + vitesse[i*5+1] + vitesse[i*5+2] + vitesse[i*5+3] + vitesse[i*5+4])/0.5)/10
        }
    }
    else if (ArrayLength < 5000) {
        for (var i = 0; i <  (vitesse.length/6)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*6] + vitesse[i*6+1] + vitesse[i*6+2] + vitesse[i*6+3] + vitesse[i*6+4] 
                + vitesse[i*6+5])/0.6)/10
        }
    }
    else if (ArrayLength < 6000) {
        for (var i = 0; i <  (vitesse.length/8)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*8] + vitesse[i*8+1] + vitesse[i*8+2] + vitesse[i*8+3] + vitesse[i*8+4] 
                + vitesse[i*8+5] +  vitesse[i*8+6] + vitesse[i*8+7])/0.8)/10
        }
    }
    else if (ArrayLength < 7000) {
        for (var i = 0; i <  (vitesse.length/10)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*10] + vitesse[i*10+1] + vitesse[i*10+2] + vitesse[i*10+3] + vitesse[i*10+4] 
                + vitesse[i*10+5] + vitesse[i*10+6] + vitesse[i*10+7] + vitesse[i*10+8] + vitesse[i*10+9])/1.0)/10
        }
    }
    else if (ArrayLength < 8000) {
        for (var i = 0; i <  (vitesse.length/12)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*12] + vitesse[i*12+1] + vitesse[i*12+2] + vitesse[i*12+3] 
                + vitesse[i*12+4] + vitesse[i*12+5] + vitesse[i*12+6] + vitesse[i*12+7] + vitesse[i*12+8] 
                + vitesse[i*12+9] + vitesse[i*12+10] + vitesse[i*12+11])/1.2)/10
        }
    }
    else if (ArrayLength < 9000) {
        for (var i = 0; i <  (vitesse.length/14)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*14] + vitesse[i*14+1] + vitesse[i*14+2] + vitesse[i*14+3] + vitesse[i*14+4] 
                + vitesse[i*14+5] + vitesse[i*14+6] + vitesse[i*14+7] + vitesse[i*14+8] + vitesse[i*14+9] + vitesse[i*14+10] 
                + vitesse[i*14+11] + vitesse[i*14+12] + vitesse[i*14+13])/1.4)/10
        }
    }
    else if (ArrayLength < 10000) {
        for (var i = 0; i <  (vitesse.length/16)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*16] + vitesse[i*16+1] + vitesse[i*16+2] + vitesse[i*16+3] + vitesse[i*16+4] + vitesse[i*16+5] +  
                vitesse[i*16+6] + vitesse[i*16+7] + vitesse[i*16+8] + vitesse[i*16+9] + vitesse[i*16+10] + vitesse[i*16+11] + vitesse[i*16+12] + 
                vitesse[i*16+13] + vitesse[i*16+14] + vitesse[i*16+15])/1.6)/10
        }
    }
    else if (ArrayLength > 10000) {
        for (var i = 0; i <  (vitesse.length/18)-supprEnd; i++) {
            Zoomvitesse[i] = Math.round((vitesse[i*18] + vitesse[i*18+1] + vitesse[i*18+2] + vitesse[i*18+3] + vitesse[i*18+4] 
                + vitesse[i*18+5] +  vitesse[i*18+6] + vitesse[i*18+7] + vitesse[i*18+8] + vitesse[i*18+9] + vitesse[i*18+10] 
                + vitesse[i*18+11] + vitesse[i*18+12] + vitesse[i*18+13] + vitesse[i*18+14] + vitesse[i*18+15] 
                + vitesse[i*18+16] + vitesse[i*18+17])/1.8)/10
        }
    }

    return Zoomvitesse;
}

function ZoomGrade(grade, ArrayLength) {
    let Zoomgrade = new Array()
    if (ArrayLength < 1000) {
        for (var i = 0; i <  (grade.length)-supprEnd; i++) {
            Zoomgrade = grade
        }
    }
    else if (ArrayLength < 1000) {
        for (var i = 0; i <  (grade.length/2)-supprEnd; i++) {
            Zoomgrade[i] = Math.round((grade[i*2] + grade[i*2+1])/0.2)/10
        }
    }
    else if (ArrayLength < 2000) {
        for (var i = 0; i <  (grade.length/3)-supprEnd; i++) {
            Zoomgrade[i] = Math.round((grade[i*3] + grade[i*3+1] + grade[i*3+2])/0.3)/10
        }
    }
    else if (ArrayLength < 3000) {
        for (var i = 0; i <  (grade.length/5)-supprEnd; i++) {
            Zoomgrade[i] = Math.round((grade[i*5] + grade[i*5+1] + grade[i*5+2] + grade[i*5+3] + grade[i*5+4])/0.5)/10
        }
    }
    else if (ArrayLength < 4000) {
        for (var i = 0; i <  (grade.length/5)-supprEnd; i++) {
            Zoomgrade[i] = Math.round((grade[i*5] + grade[i*5+1] + grade[i*5+2] + grade[i*5+3] + grade[i*5+4])/0.5)/10
        }
    }
    else if (ArrayLength < 5000) {
        for (var i = 0; i <  (grade.length/6)-supprEnd; i++) {
            Zoomgrade[i] = Math.round((grade[i*6] + grade[i*6+1] + grade[i*6+2] + grade[i*6+3] + grade[i*6+4] 
                + grade[i*6+5])/0.6)/10
        }
    }
    else if (ArrayLength < 6000) {
        for (var i = 0; i <  (grade.length/8)-supprEnd; i++) {
            Zoomgrade[i] = Math.round((grade[i*8] + grade[i*8+1] + grade[i*8+2] + grade[i*8+3] + grade[i*8+4] 
                + grade[i*8+5] + grade[i*8+6] + grade[i*8+7])/0.8)/10
        }
    }
    else if (ArrayLength < 7000) {
        for (var i = 0; i <  (grade.length/10)-supprEnd; i++) {
            Zoomgrade[i-1] = Math.round((grade[i*10] + grade[i*10+1] + grade[i*10+2] + grade[i*10+3] + grade[i*10+4] + grade[i*10+5] +  
                grade[i*10+6] + grade[i*10+7] + grade[i*10+8] + grade[i*10+9])/1.0)/10
        }
    }
    else if (ArrayLength < 8000) {
        for (var i = 0; i <  (grade.length/12)-supprEnd; i++) {
            Zoomgrade[i] = Math.round((grade[i*12] + grade[i*12+1] + grade[i*12+2] + grade[i*12+3] 
                + grade[i*12+4] + grade[i*12+5] + grade[i*12+6] + grade[i*12+7] + grade[i*12+8] + grade[i*12+9] 
                + grade[i*12+10] + grade[i*12+11])/1.2)/10
        }
    }
    else if (ArrayLength < 9000) {
        for (var i = 0; i <  (grade.length/14)-supprEnd; i++) {
            Zoomgrade[i] = Math.round((grade[i*14] + grade[i*14+1] + grade[i*14+2] + grade[i*14+3] + grade[i*14+4] + grade[i*14+5] +  
                grade[i*14+6] + grade[i*14+7] + grade[i*14+8] + grade[i*14+9] + grade[i*14+10] + grade[i*14+11] + grade[i*14+12] + 
                grade[i*14+13])/1.4)/10
        }
    }
    else if (ArrayLength < 10000) {
        for (var i = 0; i <  (grade.length/16)-supprEnd; i++) {
            Zoomgrade[i] = Math.round((grade[i*16] + grade[i*16+1] + grade[i*16+2] + grade[i*16+3] + grade[i*16+4] + grade[i*16+5] +  
                grade[i*16+6] + grade[i*16+7] + grade[i*16+8] + grade[i*16+9] + grade[i*16+10] + grade[i*16+11] + grade[i*16+12] + 
                grade[i*16+13] + grade[i*16+14] + grade[i*16+15])/1.6)/10
        }
    }
    else if (ArrayLength > 10000) {
        for (var i = 0; i <  (grade.length/18)-supprEnd; i++) {
            Zoomgrade[i] = Math.round((grade[i*18] + grade[i*18+1] + grade[i*18+2] + grade[i*18+3] + grade[i*18+4] + grade[i*18+5] +  
                grade[i*18+6] + grade[i*18+7] + grade[i*18+8] + grade[i*18+9] + grade[i*18+10] + grade[i*18+11] + grade[i*18+12] + 
                grade[i*18+13] + grade[i*18+14] + grade[i*18+15] + grade[i*18+16] + grade[i*18+17])/1.8)/10
        }
    }

    return Zoomgrade;
}

function wattEstimation(Zoomaltitude, Zoomvitesse, Zoomgrade) {

    let Zoomvitesse2 = new Array();
    for (var i = 0; i <  Zoomvitesse.length; i++) {			
		if (i == 0) {
			Zoomvitesse2[i] = Zoomvitesse[i]
		}
		else if (Zoomvitesse[i - 1] > 10) {
			Zoomvitesse2[i] = ( Zoomvitesse[i] + ( ( Zoomvitesse[i] - Zoomvitesse[i - 1] ) * 0.05 ) ) * 0.98
		}
		else {
			Zoomvitesse2[i] = Zoomvitesse[i]
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

	let frotement = frotementValues.route
	// switch(gear.frame_type) {
	// 	case 1:
	// 		frotement = frotementValues.vtt;
	// 	  break;
		
	// 	case 3:
	// 		frotement = frotementValues.route;
	// 	  break;

	// 	default:
	// 		frotement = frotementValues.route;
	// }

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
    if (localStorage.poids && localStorage.poids > 0) {
        poids = localStorage.poids;
    }
    else {
        poids = 75;
    }

	for (let i = 0; i < Zoomvitesse2.length; i++) {
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

        wattAir[i] = pression / 2 * 0.45 * aeroValues.bottom * Math.pow(((Zoomvitesse2[i]) / 3.6), 3);
	    wattRoulement[i] = frotement * 9.81 * poids * (Zoomvitesse2[i] / 3.6);
		wattPente[i] = poids * 9.81 * (Zoomvitesse2[i] / 3.6) * Zoomgrade[i] / 100;
		watt[i] = wattAir[i] + wattRoulement[i] + wattPente[i]
		if (watt[i] < 0) {
			watt[i] = 0
		}
		watt[i] = Math.round(watt[i] * 10) / 10
	}
    watt.splice(vitesse.length - 1, 1);

    return watt;
}