function postWatt(response, activitie, gear, latlng) {
	let Elevation = new Array()
    for (var i = 0; i < response[1].data.length; i++) {
        Elevation[i] = response[1].data[i]
    }
    Elevation.splice(Elevation.length - 1, 1)
    
    let supprEnd;
    if (Elevation.length.toString().charAt(Elevation.length.toString().length - 1) == "0") {
        supprEnd = 0;
    }
    else {
        supprEnd = 1;
    }
            
    let ZoomElevation = new Array()
    if (Math.round(activitie.moving_time / 60) < 30) {
        for (var i = 1; i <  (Elevation.length/3)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*3] + Elevation[i*3+1] + Elevation[i*3+2])/0.3)/10
            }
    }
    else if (Math.round(activitie.moving_time / 60) < 60) {
        for (var i = 1; i <  (Elevation.length/6)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*6] + Elevation[i*6+1] + Elevation[i*6+2] + Elevation[i*6+3] + Elevation[i*6+4] 
                + Elevation[i*6+5])/0.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 90) {
        for (var i = 1; i <  (Elevation.length/8)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*8] + Elevation[i*8+1] + Elevation[i*8+2] + Elevation[i*8+3] + Elevation[i*8+4] *
                + Elevation[i*8+5] + Elevation[i*8+6] + Elevation[i*8+7])/0.8)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 120) {
        for (var i = 1; i <  (Elevation.length/10)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*10] + Elevation[i*10+1] + Elevation[i*10+2] + Elevation[i*10+3] + Elevation[i*10+4] 
                + Elevation[i*10+5] + Elevation[i*10+6] + Elevation[i*10+7] + Elevation[i*10+8] + Elevation[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 150) {
        for (var i = 1; i <  (Elevation.length/11)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*11] + Elevation[i*11+1] + Elevation[i*11+2] + Elevation[i*11+3] 
                + Elevation[i*11+4] + Elevation[i*11+5] + Elevation[i*11+6] + Elevation[i*11+7] + Elevation[i*11+8] 
                + Elevation[i*11+9] + Elevation[i*11+10])/1.1)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 180) {
        for (var i = 1; i <  (Elevation.length/13)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*13] + Elevation[i*13+1] + Elevation[i*13+2] + Elevation[i*13+3] + Elevation[i*13+4] 
                + Elevation[i*13+5] +  Elevation[i*13+6] + Elevation[i*13+7] + Elevation[i*13+8] + Elevation[i*13+9] + Elevation[i*13+10] 
                + Elevation[i*13+11] + Elevation[i*13+12])/1.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 210) {
        for (var i = 1; i <  (Elevation.length/15)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*15] + Elevation[i*15+1] + Elevation[i*15+2] + Elevation[i*15+3] 
                + Elevation[i*15+4] + Elevation[i*15+5] + Elevation[i*15+6] + Elevation[i*15+7] + Elevation[i*15+8] 
                + Elevation[i*15+9] + Elevation[i*15+10] + Elevation[i*15+11] + Elevation[i*2151+12] + Elevation[i*15+13] 
                + Elevation[i*15+14])/1.5)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 240) {
        for (var i = 1; i <  (Elevation.length/17)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*17] + Elevation[i*17+1] + Elevation[i*17+2] + Elevation[i*17+3] 
                + Elevation[i*17+4] + Elevation[i*17+5] + Elevation[i*17+6] + Elevation[i*17+7] + Elevation[i*17+8] + Elevation[i*17+9] 
                + Elevation[i*17+10] + Elevation[i*17+11] + Elevation[i*17+12] + Elevation[i*17+13] + Elevation[i*17+14] 
                + Elevation[i*17+15] + Elevation[i*17+16])/1.7)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 270) {
        for (var i = 1; i <  (Elevation.length/20)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*20] + Elevation[i*20+1] + Elevation[i*20+2] + Elevation[i*20+3] 
                + Elevation[i*20+4] + Elevation[i*20+5] +  Elevation[i*20+6] + Elevation[i*20+7] + Elevation[i*20+8] + Elevation[i*20+9] 
                + Elevation[i*20+10] + Elevation[i*20+11] + Elevation[i*20+12] + Elevation[i*20+13] + Elevation[i*20+14] 
                + Elevation[i*20+15] + Elevation[i*20+16] + Elevation[i*20+17] + Elevation[i*20+18] + Elevation[i*20+19])/2.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 300) {
        for (var i = 1; i <  (Elevation.length/23)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*23] + Elevation[i*23+1] + Elevation[i*23+2] + Elevation[i*23+3] 
                + Elevation[i*23+4] + Elevation[i*23+5] +  Elevation[i*23+6] + Elevation[i*23+7] + Elevation[i*23+8] + Elevation[i*23+9] 
                + Elevation[i*23+10] + Elevation[i*23+11] + Elevation[i*23+12] + Elevation[i*23+13] + Elevation[i*23+14] 
                + Elevation[i*23+15] + Elevation[i*23+16] + Elevation[i*23+17] + Elevation[i*23+18] + Elevation[i*23+19] 
                + Elevation[i*23+20] + Elevation[i*23+21] + Elevation[i*23+22])/2.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) > 300) {
        for (var i = 1; i <  (Elevation.length/26)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*26] + Elevation[i*26+1] + Elevation[i*26+2] + Elevation[i*26+3] 
                + Elevation[i*26+4] + Elevation[i*26+5] +  Elevation[i*26+6] + Elevation[i*26+7] + Elevation[i*26+8] + Elevation[i*26+9] 
                + Elevation[i*26+10] + Elevation[i*26+11] + Elevation[i*26+12] + Elevation[i*26+13] + Elevation[i*26+14] 
                + Elevation[i*26+15] + Elevation[i*26+16] + Elevation[i*26+17] + Elevation[i*26+18] + Elevation[i*26+19] 
                + Elevation[i*26+20] + Elevation[i*26+21] + Elevation[i*26+22] + Elevation[i*26+23] + Elevation[i*26+24]
                + Elevation[i*26+25])/2.6)/10
        }
    }

    let Vitesse = new Array()
    for (var i = 0; i < response[0].data.length; i++) {
        Vitesse[i] = (Math.round(((response[0].data[i + 1] -response[0].data[i]) * response[0].data.length / activitie.moving_time) * 36))/10
    }
    Vitesse.splice(Vitesse.length - 1, 1)

    if (Vitesse.length.toString().charAt(Vitesse.length.toString().length - 1) == "0") {
        supprEnd = 0;
    }
    else {
        supprEnd = 1;
    }

    let ZoomVitesse = new Array()
    if (Math.round(activitie.moving_time / 60) < 30) {
        for (var i = 1; i <  (Vitesse.length/3)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*3] + Vitesse[i*3+1] + Vitesse[i*3+2])/0.3)/10
            }
    }
    else if (Math.round(activitie.moving_time / 60) < 60) {
        for (var i = 1; i <  (Vitesse.length/6)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*6] + Vitesse[i*6+1] + Vitesse[i*6+2] + Vitesse[i*6+3] + Vitesse[i*6+4] + Vitesse[i*6+5])/0.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 90) {
        for (var i = 1; i <  (Vitesse.length/8)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*8] + Vitesse[i*8+1] + Vitesse[i*8+2] + Vitesse[i*8+3] + Vitesse[i*8+4] + Vitesse[i*8+5] +  
                Vitesse[i*8+6] + Vitesse[i*8+7])/0.8)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 120) {
        for (var i = 1; i <  (Vitesse.length/10)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*10] + Vitesse[i*10+1] + Vitesse[i*10+2] + Vitesse[i*10+3] + Vitesse[i*10+4] + Vitesse[i*10+5] +  
                Vitesse[i*10+6] + Vitesse[i*10+7] + Vitesse[i*10+8] + Vitesse[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 150) {
        for (var i = 1; i <  (Vitesse.length/11)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*11] + Vitesse[i*11+1] + Vitesse[i*11+2] + Vitesse[i*11+3] + Vitesse[i*11+4] + Vitesse[i*11+5] +  
                Vitesse[i*11+6] + Vitesse[i*11+7] + Vitesse[i*11+8] + Vitesse[i*11+9] + Vitesse[i*11+10])/1.1)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 180) {
        for (var i = 1; i <  (Vitesse.length/13)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*13] + Vitesse[i*13+1] + Vitesse[i*13+2] + Vitesse[i*13+3] + Vitesse[i*13+4] 
                + Vitesse[i*13+5] +  Vitesse[i*13+6] + Vitesse[i*13+7] + Vitesse[i*13+8] + Vitesse[i*13+9] + Vitesse[i*13+10] 
                + Vitesse[i*13+11] + Vitesse[i*13+12])/1.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 210) {
        for (var i = 1; i <  (Vitesse.length/15)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*15] + Vitesse[i*15+1] + Vitesse[i*15+2] + Vitesse[i*15+3] + Vitesse[i*15+4] + Vitesse[i*15+5] +  
                Vitesse[i*15+6] + Vitesse[i*15+7] + Vitesse[i*15+8] + Vitesse[i*15+9] + Vitesse[i*15+10] + Vitesse[i*15+11] + Vitesse[i*15+12] + 
                Vitesse[i*15+13] + Vitesse[i*15+14])/1.5)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 240) {
        for (var i = 1; i <  (Vitesse.length/17)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*17] + Vitesse[i*17+1] + Vitesse[i*17+2] + Vitesse[i*17+3] + Vitesse[i*17+4] + Vitesse[i*17+5] +  
                Vitesse[i*17+6] + Vitesse[i*17+7] + Vitesse[i*17+8] + Vitesse[i*17+9] + Vitesse[i*17+10] + Vitesse[i*17+11] + Vitesse[i*17+12] + 
                Vitesse[i*17+13] + Vitesse[i*17+14] + Vitesse[i*17+15] + Vitesse[i*17+16])/1.7)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 270) {
        for (var i = 1; i <  (Vitesse.length/20)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*20] + Vitesse[i*20+1] + Vitesse[i*20+2] + Vitesse[i*20+3] + Vitesse[i*20+4] + Vitesse[i*20+5] +  
                Vitesse[i*20+6] + Vitesse[i*20+7] + Vitesse[i*20+8] + Vitesse[i*20+9] + Vitesse[i*20+10] + Vitesse[i*20+11] + Vitesse[i*20+12] + 
                Vitesse[i*20+13] + Vitesse[i*20+14] + Vitesse[i*20+15] + Vitesse[i*20+16] + Vitesse[i*20+17] + Vitesse[i*20+18] + 
                Vitesse[i*20+19])/2.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 300) {
        for (var i = 1; i <  (Vitesse.length/23)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*23] + Vitesse[i*30+1] + Vitesse[i*23+2] + Vitesse[i*23+3] + Vitesse[i*23+4] + Vitesse[i*23+5] +  
                Vitesse[i*23+6] + Vitesse[i*23+7] + Vitesse[i*23+23] + Vitesse[i*23+9] + Vitesse[i*23+10] + Vitesse[i*23+11] + Vitesse[i*23+12] + 
                Vitesse[i*23+13] + Vitesse[i*23+14] + Vitesse[i*30+15] + Vitesse[i*23+16] + Vitesse[i*23+17] + Vitesse[i*23+18] + 
                Vitesse[i*23+19] + Vitesse[i*23+20] + Vitesse[i*23+21] + Vitesse[i*23+22])/3.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) > 300) {
        for (var i = 1; i <  (Vitesse.length/26)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*26] + Vitesse[i*26+1] + Vitesse[i*26+2] + Vitesse[i*26+3] + Vitesse[i*26+4] + Vitesse[i*26+5] +  
                Vitesse[i*26+6] + Vitesse[i*26+7] + Vitesse[i*26+8] + Vitesse[i*26+9] + Vitesse[i*26+10] + Vitesse[i*26+11] + Vitesse[i*26+12] + 
                Vitesse[i*26+13] + Vitesse[i*26+14] + Vitesse[i*26+15] + Vitesse[i*26+16] + Vitesse[i*26+17] + Vitesse[i*26+18] + 
                Vitesse[i*26+19] + Vitesse[i*26+20] + Vitesse[i*26+21] + Vitesse[i*26+22] + Vitesse[i*26+23] + Vitesse[i*26+24]
                + Vitesse[i*26+25])/2.6)/10
        }
    }

    let ZoomVitesse2 = new Array();
    for (var i = 0; i <  ZoomVitesse.length; i++) {			
		if (i == 0) {
			ZoomVitesse2[i] = ZoomVitesse[i]
		}
		else if (ZoomVitesse[i - 1] > 10) {
			ZoomVitesse2[i] = ( ZoomVitesse[i] + ( ( ZoomVitesse[i] - ZoomVitesse[i - 1] ) * 0.1 ) ) * 0.99
		}
		else {
			ZoomVitesse2[i] = ZoomVitesse[i]
		}
    }

    let Grade = new Array()
    for (var i = 0; i < response[1].data.length; i++) {
        Grade[i] = ((response[1].data[i + 1] - response[1].data[i]) / (response[1].data.length / activitie.distance)) * 1
	}
    Grade.splice(ZoomVitesse.length - 1, 1)
    
    if (Vitesse.length.toString().charAt(Vitesse.length.toString().length - 1) == "0") {
        supprEnd = 0;
    }
    else {
        supprEnd = 1;
    }

    let ZoomGrade = new Array()
    if (Math.round(activitie.moving_time / 60) < 30) {
        for (var i = 1; i <  (Grade.length/3)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*3] + Grade[i*3+1] + Grade[i*3+2])/0.3)/10
            }
    }
    else if (Math.round(activitie.moving_time / 60) < 60) {
        for (var i = 1; i <  (Grade.length/6)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*6] + Grade[i*6+1] + Grade[i*6+2] + Grade[i*6+3] + Grade[i*6+4] + Grade[i*6+5])/0.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 90) {
        for (var i = 1; i <  (Grade.length/8)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*8] + Grade[i*8+1] + Grade[i*8+2] + Grade[i*8+3] + Grade[i*8+4] + Grade[i*8+5] +  
                Grade[i*8+6] + Grade[i*8+7])/0.8)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 120) {
        for (var i = 1; i <  (Grade.length/10)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*10] + Grade[i*10+1] + Grade[i*10+2] + Grade[i*10+3] + Grade[i*10+4] + Grade[i*10+5] +  
                Grade[i*10+6] + Grade[i*10+7] + Grade[i*10+8] + Grade[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 150) {
        for (var i = 1; i <  (Grade.length/11)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*11] + Grade[i*11+1] + Grade[i*11+2] + Grade[i*11+3] + Grade[i*11+4] + Grade[i*11+5] +  
                Grade[i*11+6] + Grade[i*11+7] + Grade[i*11+8] + Grade[i*11+9] + Grade[i*11+10])/1.1)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 180) {
        for (var i = 1; i <  (Grade.length/13)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*13] + Grade[i*13+1] + Grade[i*13+2] + Grade[i*13+3] + Grade[i*13+4] 
                + Grade[i*13+5] + Grade[i*13+6] + Grade[i*13+7] + Grade[i*13+8] + Grade[i*13+9] + Grade[i*13+10] 
                + Grade[i*13+11] + Grade[i*13+12])/1.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 210) {
        for (var i = 1; i <  (Grade.length/15)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*15] + Grade[i*15+1] + Grade[i*15+2] + Grade[i*15+3] + Grade[i*15+4] + Grade[i*15+5] +  
                Grade[i*15+6] + Grade[i*15+7] + Grade[i*15+8] + Grade[i*15+9] + Grade[i*15+10] + Grade[i*15+11] + Grade[i*15+12] + 
                Grade[i*15+13] + Grade[i*15+14])/1.5)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 240) {
        for (var i = 1; i <  (Grade.length/17)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*17] + Grade[i*17+1] + Grade[i*17+2] + Grade[i*17+3] + Grade[i*17+4] + Grade[i*17+5] +  
                Grade[i*17+6] + Grade[i*17+7] + Grade[i*17+8] + Grade[i*17+9] + Grade[i*17+10] + Grade[i*17+11] + Grade[i*17+12] + 
                Grade[i*17+13] + Grade[i*17+14] + Grade[i*17+15] + Grade[i*17+16])/1.7)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 270) {
        for (var i = 1; i <  (Grade.length/20)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*20] + Grade[i*20+1] + Grade[i*20+2] + Grade[i*20+3] + Grade[i*20+4] + Grade[i*20+5] +  
                Grade[i*20+6] + Grade[i*20+7] + Grade[i*20+8] + Grade[i*20+9] + Grade[i*20+10] + Grade[i*20+11] + Grade[i*20+12] + 
                Grade[i*20+13] + Grade[i*20+14] + Grade[i*20+15] + Grade[i*20+16] + Grade[i*20+17] + Grade[i*20+18] + 
                Grade[i*20+19])/2.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 300) {
        for (var i = 1; i <  (Grade.length/23)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*23] + Grade[i*23+1] + Grade[i*23+2] + Grade[i*23+3] + Grade[i*23+4] + Grade[i*23+5] +  
                Grade[i*23+6] + Grade[i*23+7] + Grade[i*23+8] + Grade[i*23+9] + Grade[i*23+10] + Grade[i*23+11] + Grade[i*23+12] + 
                Grade[i*23+13] + Grade[i*23+14] + Grade[i*23+15] + Grade[i*23+16] + Grade[i*23+17] + Grade[i*23+18] + 
                Grade[i*23+19] + Grade[i*23+20] + Grade[i*23+21] + Grade[i*23+22])/2.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) > 300) {
        for (var i = 1; i <  (Grade.length/26)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*26] + Grade[i*26+1] + Grade[i*26+2] + Grade[i*26+3] + Grade[i*26+4] + Grade[i*26+5] +  
                Grade[i*26+6] + Grade[i*26+7] + Grade[i*26+8] + Grade[i*26+9] + Grade[i*26+10] + Grade[i*26+11] + Grade[i*26+12] + 
                Grade[i*26+13] + Grade[i*26+14] + Grade[i*26+15] + Grade[i*26+16] + Grade[i*26+17] + Grade[i*26+18] + 
                Grade[i*26+19] + Grade[i*26+20] + Grade[i*26+21] + Grade[i*26+22] + Grade[i*26+23] + Grade[i*26+24]
                + Grade[i*26+25])/2.6)/10
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
		vtt: 0.035,
		route: 0.004
	}

	let frotement
	switch(activitie.gear.frame_type) {
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
        poids = sessionStorage.poids;
    }
    else {
        poids = 75;
    }

	for (let i = 0; i < ZoomVitesse2.length; i++) {
        if (ZoomElevation[i] < 500) {
            pression = pressionValues.zero;
        }
        else if(ZoomElevation[i] < 1000) {
            pression = pressionValues.cinq_cent;
        }
        else if(ZoomElevation[i] < 1500) {
            pression = pressionValues.mille;
        }
        else if(ZoomElevation[i] < 2000) {
            pression = pressionValues.mille_cinq_cent;
        }
        else {
            pression = pressionValues.deux_mille;
        }

        wattAir[1] = pression / 2 * 0.45 * aeroValues.bottom * Math.pow(((ZoomVitesse2[i]) / 3.6), 3);
	    wattRoulement[1] = frotement * 9.81 * poids * (ZoomVitesse2[i] / 3.6);
		wattPente[1] = poids * 9.81 * (ZoomVitesse2[i] / 3.6) * ZoomGrade[i] / 100;
		watt[i] = wattAir[1] + wattRoulement[1] + wattPente[1]
		if (watt[i] < 0) {
			watt[i] = 0
		}
		watt[i] = Math.round(watt[i] * 10) / 10
	}
    watt.splice(vitesse.length - 1, 1)
				
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
    for (let i = 0; i < ZoomElevation.length; i++) {
        kilometrage[i] = "      "
    }

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
            }
        }
    })

    let xClic;
    let ctxWidth = document.getElementById("graphPower").style.width;
    sessionStorage.ctxWidth = (ctxWidth.slice(0, ctxWidth.length - 2));
    let fraction;
    let elevation;

    var barElevation = document.getElementById("barElevation");
	var barSpeed = document.getElementById("barSpeed");
    var barPower = document.getElementById("barPower");

    document.getElementById("svgPower").onmousemove = function (event) {
	    xClic = event.offsetX;
        xClic = event.offsetX;
		if (xClic >= 21 && xClic <= sessionStorage.ctxWidth - 9) {
			barSpeed.setAttribute('x1', xClic);
			barSpeed.setAttribute('x2', xClic);
			barElevation.setAttribute('x1', xClic);
			barElevation.setAttribute('x2', xClic);
			barSpeed.setAttribute('x1', xClic);
			barSpeed.setAttribute('x2', xClic);
			barPower.setAttribute('x1', xClic);
			barPower.setAttribute('x2', xClic);
        }
        fraction = (xClic - 23) / (sessionStorage.ctxWidth - 30);

        grade = ZoomGrade[ Math.round( fraction * ZoomGrade.length) ]
        if (grade != undefined) {
            document.getElementById("grade").innerText = document.getElementById("grade").innerText.slice(0, 6) + " " + grade + "%"
        }

        elevation = ZoomElevation[ Math.round( fraction * ZoomElevation.length) ]
        if (elevation != undefined) {
            document.getElementById("elevation").innerText = document.getElementById("elevation").innerText.slice(0, 10) + " " + elevation + "m"
        }

        vitesse = ZoomVitesse[ Math.round( fraction * ZoomVitesse.length) ]
        if (vitesse != undefined) {
            document.getElementById("vitesse").innerText = document.getElementById("vitesse").innerText.slice(0, 8) + " " + vitesse + "km/h"
        }

        power = watt[ Math.round( fraction * watt.length) ]
        if (power != undefined) {
            document.getElementById("power").innerText = document.getElementById("power").innerText.slice(0, 10) + " " + power + "W"
        }
    }
}