function postActivitiesStreamsSpeedChart(response, activitie) {
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
        for (var i = 1; i <  (Elevation.length/10)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*10] + Elevation[i*10+1] + Elevation[i*10+2] + Elevation[i*10+3] + Elevation[i*10+4] + Elevation[i*10+5] +  
                Elevation[i*10+6] + Elevation[i*10+7] + Elevation[i*10+8] + Elevation[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 60) {
        for (var i = 1; i <  (Elevation.length/10)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*10] + Elevation[i*10+1] + Elevation[i*10+2] + Elevation[i*10+3] + Elevation[i*10+4] + Elevation[i*10+5] +  
                Elevation[i*10+6] + Elevation[i*10+7] + Elevation[i*10+8] + Elevation[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 90) {
        for (var i = 1; i <  (Elevation.length/10)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*10] + Elevation[i*10+1] + Elevation[i*10+2] + Elevation[i*10+3] + Elevation[i*10+4] + Elevation[i*10+5] +  
                Elevation[i*10+6] + Elevation[i*10+7] + Elevation[i*10+8] + Elevation[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 120) {
        for (var i = 1; i <  (Elevation.length/13)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*13] + Elevation[i*13+1] + Elevation[i*13+2] + Elevation[i*13+3] + Elevation[i*13+4] + Elevation[i*13+5] +  
                Elevation[i*13+6] + Elevation[i*13+7] + Elevation[i*13+8] + Elevation[i*13+9] + Elevation[i*13+10] + Elevation[i*13+11] + 
                Elevation[i*13+12])/1.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 150) {
        for (var i = 1; i <  (Elevation.length/16)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*16] + Elevation[i*16+1] + Elevation[i*16+2] + Elevation[i*16+3] + Elevation[i*16+4] + Elevation[i*16+5] +  
                Elevation[i*16+6] + Elevation[i*16+7] + Elevation[i*16+8] + Elevation[i*16+9] + Elevation[i*16+10] + Elevation[i*16+11] + Elevation[i*16+12] + 
                Elevation[i*16+13] + Elevation[i*16+14] + Elevation[i*16+15])/1.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 180) {
        for (var i = 1; i <  (Elevation.length/19)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*19] + Elevation[i*19+1] + Elevation[i*19+2] + Elevation[i*19+3] + Elevation[i*19+4] + Elevation[i*19+5] +  
                Elevation[i*19+6] + Elevation[i*19+7] + Elevation[i*19+8] + Elevation[i*19+9] + Elevation[i*19+10] + Elevation[i*19+11] + Elevation[i*19+12] + 
                Elevation[i*19+13] + Elevation[i*19+14] + Elevation[i*19+15] + Elevation[i*19+16] + Elevation[i*19+17] + Elevation[i*19+18])/1.9)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 210) {
        for (var i = 1; i <  (Elevation.length/22)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*22] + Elevation[i*22+1] + Elevation[i*22+2] + Elevation[i*22+3] + Elevation[i*22+4] + Elevation[i*22+5] +  
                Elevation[i*22+6] + Elevation[i*22+7] + Elevation[i*22+8] + Elevation[i*22+9] + Elevation[i*22+10] + Elevation[i*22+11] + Elevation[i*22+12] + 
                Elevation[i*22+13] + Elevation[i*22+14] + Elevation[i*22+15] + Elevation[i*22+16] + Elevation[i*22+17] + Elevation[i*22+18] + 
                Elevation[i*22+19] + Elevation[i*22+20] + Elevation[i*22+21])/2.2)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 240) {
        for (var i = 1; i <  (Elevation.length/25)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*25] + Elevation[i*25+1] + Elevation[i*25+2] + Elevation[i*25+3] + Elevation[i*25+4] + Elevation[i*25+5] +  
                Elevation[i*25+6] + Elevation[i*25+7] + Elevation[i*25+8] + Elevation[i*25+9] + Elevation[i*25+10] + Elevation[i*25+11] + Elevation[i*25+12] + 
                Elevation[i*25+13] + Elevation[i*25+14] + Elevation[i*25+15] + Elevation[i*25+16] + Elevation[i*25+17] + Elevation[i*25+18] + 
                Elevation[i*25+19] + Elevation[i*25+20] + Elevation[i*25+21] + Elevation[i*25+22] + Elevation[i*25+23] + Elevation[i*25+24])/2.5)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 270) {
        for (var i = 1; i <  (Elevation.length/28)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*28] + Elevation[i*28+1] + Elevation[i*28+2] + Elevation[i*28+3] + Elevation[i*28+4] + Elevation[i*28+5] +  
                Elevation[i*28+6] + Elevation[i*28+7] + Elevation[i*28+8] + Elevation[i*28+9] + Elevation[i*28+10] + Elevation[i*28+11] + Elevation[i*28+12] + 
                Elevation[i*28+13] + Elevation[i*28+14] + Elevation[i*28+15] + Elevation[i*28+16] + Elevation[i*28+17] + Elevation[i*28+18] + 
                Elevation[i*28+19] + Elevation[i*28+20] + Elevation[i*28+21] + Elevation[i*28+22] + Elevation[i*28+23] + Elevation[i*28+24]
                + Elevation[i*28+25] + Elevation[i*28+26] + Elevation[i*28+27])/2.8)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 300) {
        for (var i = 1; i <  (Elevation.length/31)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*31] + Elevation[i*31+1] + Elevation[i*31+2] + Elevation[i*31+3] + Elevation[i*31+4] + Elevation[i*31+5] +  
                Elevation[i*31+6] + Elevation[i*31+7] + Elevation[i*31+8] + Elevation[i*31+9] + Elevation[i*31+10] + Elevation[i*31+11] + Elevation[i*31+12] + 
                Elevation[i*31+13] + Elevation[i*31+14] + Elevation[i*31+15] + Elevation[i*31+16] + Elevation[i*31+17] + Elevation[i*31+18] + 
                Elevation[i*31+19] + Elevation[i*31+20] + Elevation[i*31+21] + Elevation[i*31+22] + Elevation[i*31+23] + Elevation[i*31+24]
                + Elevation[i*31+25] + Elevation[i*31+26] + Elevation[i*31+27] + Elevation[i*31+28] + Elevation[i*31+29] + Elevation[i*31+30])/3.1)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) > 300) {
        for (var i = 1; i <  (Elevation.length/35)-supprEnd; i++) {
            ZoomElevation[i-1] = Math.round((Elevation[i*35] + Elevation[i*35+1] + Elevation[i*35+2] + Elevation[i*35+3] + Elevation[i*35+4] + Elevation[i*35+5] +  
                Elevation[i*35+6] + Elevation[i*35+7] + Elevation[i*35+8] + Elevation[i*35+9] + Elevation[i*35+10] + Elevation[i*35+11] + Elevation[i*35+12] + 
                Elevation[i*35+13] + Elevation[i*35+14] + Elevation[i*35+15] + Elevation[i*35+16] + Elevation[i*35+17] + Elevation[i*35+18] + 
                Elevation[i*35+19] + Elevation[i*35+20] + Elevation[i*35+21] + Elevation[i*35+22] + Elevation[i*35+23] + Elevation[i*35+24]
                + Elevation[i*35+25] + Elevation[i*35+26] + Elevation[i*35+27] + Elevation[i*35+28] + Elevation[i*35+29] + Elevation[i*35+30]
                + Elevation[i*35+31] + Elevation[i*35+32] + Elevation[i*35+33] + Elevation[i*35+34])/3.5)/10
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
        for (var i = 1; i <  (Vitesse.length/10)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*10] + Vitesse[i*10+1] + Vitesse[i*10+2] + Vitesse[i*10+3] + Vitesse[i*10+4] + Vitesse[i*10+5] +  
                Vitesse[i*10+6] + Vitesse[i*10+7] + Vitesse[i*10+8] + Vitesse[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 60) {
        for (var i = 1; i <  (Vitesse.length/10)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*10] + Vitesse[i*10+1] + Vitesse[i*10+2] + Vitesse[i*10+3] + Vitesse[i*10+4] + Vitesse[i*10+5] +  
                Vitesse[i*10+6] + Vitesse[i*10+7] + Vitesse[i*10+8] + Vitesse[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 90) {
        for (var i = 1; i <  (Vitesse.length/10)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*10] + Vitesse[i*10+1] + Vitesse[i*10+2] + Vitesse[i*10+3] + Vitesse[i*10+4] + Vitesse[i*10+5] +  
                Vitesse[i*10+6] + Vitesse[i*10+7] + Vitesse[i*10+8] + Vitesse[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 120) {
        for (var i = 1; i <  (Vitesse.length/13)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*13] + Vitesse[i*13+1] + Vitesse[i*13+2] + Vitesse[i*13+3] + Vitesse[i*13+4] + Vitesse[i*13+5] +  
                Vitesse[i*13+6] + Vitesse[i*13+7] + Vitesse[i*13+8] + Vitesse[i*13+9] + Vitesse[i*13+10] + Vitesse[i*13+11] + 
                Vitesse[i*13+12])/1.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 150) {
        for (var i = 1; i <  (Vitesse.length/16)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*16] + Vitesse[i*16+1] + Vitesse[i*16+2] + Vitesse[i*16+3] + Vitesse[i*16+4] + Vitesse[i*16+5] +  
                Vitesse[i*16+6] + Vitesse[i*16+7] + Vitesse[i*16+8] + Vitesse[i*16+9] + Vitesse[i*16+10] + Vitesse[i*16+11] + Vitesse[i*16+12] + 
                Vitesse[i*16+13] + Vitesse[i*16+14] + Vitesse[i*16+15])/1.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 180) {
        for (var i = 1; i <  (Vitesse.length/19)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*19] + Vitesse[i*19+1] + Vitesse[i*19+2] + Vitesse[i*19+3] + Vitesse[i*19+4] + Vitesse[i*19+5] +  
                Vitesse[i*19+6] + Vitesse[i*19+7] + Vitesse[i*19+8] + Vitesse[i*19+9] + Vitesse[i*19+10] + Vitesse[i*19+11] + Vitesse[i*19+12] + 
                Vitesse[i*19+13] + Vitesse[i*19+14] + Vitesse[i*19+15] + Vitesse[i*19+16] + Vitesse[i*19+17] + Vitesse[i*19+18])/1.9)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 210) {
        for (var i = 1; i <  (Vitesse.length/22)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*22] + Vitesse[i*22+1] + Vitesse[i*22+2] + Vitesse[i*22+3] + Vitesse[i*22+4] + Vitesse[i*22+5] +  
                Vitesse[i*22+6] + Vitesse[i*22+7] + Vitesse[i*22+8] + Vitesse[i*22+9] + Vitesse[i*22+10] + Vitesse[i*22+11] + Vitesse[i*22+12] + 
                Vitesse[i*22+13] + Vitesse[i*22+14] + Vitesse[i*22+15] + Vitesse[i*22+16] + Vitesse[i*22+17] + Vitesse[i*22+18] + 
                Vitesse[i*22+19] + Vitesse[i*22+20] + Vitesse[i*22+21])/2.2)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 240) {
        for (var i = 1; i <  (Vitesse.length/25)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*25] + Vitesse[i*25+1] + Vitesse[i*25+2] + Vitesse[i*25+3] + Vitesse[i*25+4] + Vitesse[i*25+5] +  
                Vitesse[i*25+6] + Vitesse[i*25+7] + Vitesse[i*25+8] + Vitesse[i*25+9] + Vitesse[i*25+10] + Vitesse[i*25+11] + Vitesse[i*25+12] + 
                Vitesse[i*25+13] + Vitesse[i*25+14] + Vitesse[i*25+15] + Vitesse[i*25+16] + Vitesse[i*25+17] + Vitesse[i*25+18] + 
                Vitesse[i*25+19] + Vitesse[i*25+20] + Vitesse[i*25+21] + Vitesse[i*25+22] + Vitesse[i*25+23] + Vitesse[i*25+24])/2.5)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 270) {
        for (var i = 1; i <  (Vitesse.length/28)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*28] + Vitesse[i*28+1] + Vitesse[i*28+2] + Vitesse[i*28+3] + Vitesse[i*28+4] + Vitesse[i*28+5] +  
                Vitesse[i*28+6] + Vitesse[i*28+7] + Vitesse[i*28+8] + Vitesse[i*28+9] + Vitesse[i*28+10] + Vitesse[i*28+11] + Vitesse[i*28+12] + 
                Vitesse[i*28+13] + Vitesse[i*28+14] + Vitesse[i*28+15] + Vitesse[i*28+16] + Vitesse[i*28+17] + Vitesse[i*28+18] + 
                Vitesse[i*28+19] + Vitesse[i*28+20] + Vitesse[i*28+21] + Vitesse[i*28+22] + Vitesse[i*28+23] + Vitesse[i*28+24]
                + Vitesse[i*28+25] + Vitesse[i*28+26] + Vitesse[i*28+27])/2.8)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 300) {
        for (var i = 1; i <  (Vitesse.length/31)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*31] + Vitesse[i*31+1] + Vitesse[i*31+2] + Vitesse[i*31+3] + Vitesse[i*31+4] + Vitesse[i*31+5] +  
                Vitesse[i*31+6] + Vitesse[i*31+7] + Vitesse[i*31+8] + Vitesse[i*31+9] + Vitesse[i*31+10] + Vitesse[i*31+11] + Vitesse[i*31+12] + 
                Vitesse[i*31+13] + Vitesse[i*31+14] + Vitesse[i*31+15] + Vitesse[i*31+16] + Vitesse[i*31+17] + Vitesse[i*31+18] + 
                Vitesse[i*31+19] + Vitesse[i*31+20] + Vitesse[i*31+21] + Vitesse[i*31+22] + Vitesse[i*31+23] + Vitesse[i*31+24]
                + Vitesse[i*31+25] + Vitesse[i*31+26] + Vitesse[i*31+27] + Vitesse[i*31+28] + Vitesse[i*31+29] + Vitesse[i*31+30])/3.1)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) > 300) {
        for (var i = 1; i <  (Vitesse.length/35)-supprEnd; i++) {
            ZoomVitesse[i-1] = Math.round((Vitesse[i*35] + Vitesse[i*35+1] + Vitesse[i*35+2] + Vitesse[i*35+3] + Vitesse[i*35+4] + Vitesse[i*35+5] +  
                Vitesse[i*35+6] + Vitesse[i*35+7] + Vitesse[i*35+8] + Vitesse[i*35+9] + Vitesse[i*35+10] + Vitesse[i*35+11] + Vitesse[i*35+12] + 
                Vitesse[i*35+13] + Vitesse[i*35+14] + Vitesse[i*35+15] + Vitesse[i*35+16] + Vitesse[i*35+17] + Vitesse[i*35+18] + 
                Vitesse[i*35+19] + Vitesse[i*35+20] + Vitesse[i*35+21] + Vitesse[i*35+22] + Vitesse[i*35+23] + Vitesse[i*35+24]
                + Vitesse[i*35+25] + Vitesse[i*35+26] + Vitesse[i*35+27] + Vitesse[i*35+28] + Vitesse[i*35+29] + Vitesse[i*35+30]
                + Vitesse[i*35+31] + Vitesse[i*35+32] + Vitesse[i*35+33] + Vitesse[i*35+34])/3.5)/10
        }
    }

    let Grade = new Array()
    for (var i = 0; i < response[1].data.length; i++) {
		Grade[i] = ((response[1].data[i + 1] - response[1].data[i])) / (response[1].data.length / activitie.distance)
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
        for (var i = 1; i <  (Grade.length/10)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*10] + Grade[i*10+1] + Grade[i*10+2] + Grade[i*10+3] + Grade[i*10+4] + Grade[i*10+5] +  
                Grade[i*10+6] + Grade[i*10+7] + Grade[i*10+8] + Grade[i*10+9])/1.0)/10
            }
    }
    else if (Math.round(activitie.moving_time / 60) < 60) {
        for (var i = 1; i <  (Grade.length/10)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*10] + Grade[i*10+1] + Grade[i*10+2] + Grade[i*10+3] + Grade[i*10+4] + Grade[i*10+5] +  
                Grade[i*10+6] + Grade[i*10+7] + Grade[i*10+8] + Grade[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 90) {
        for (var i = 1; i <  (Grade.length/10)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*10] + Grade[i*10+1] + Grade[i*10+2] + Grade[i*10+3] + Grade[i*10+4] + Grade[i*10+5] +  
                Grade[i*10+6] + Grade[i*10+7] + Grade[i*10+8] + Grade[i*10+9])/1.0)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 120) {
        for (var i = 1; i <  (Grade.length/13)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*13] + Grade[i*13+1] + Grade[i*13+2] + Grade[i*13+3] + Grade[i*13+4] + Grade[i*13+5] +  
                Grade[i*13+6] + Grade[i*13+7] + Grade[i*13+8] + Grade[i*13+9] + Grade[i*13+10] + Grade[i*13+11] + 
                Grade[i*13+12])/1.3)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 150) {
        for (var i = 1; i <  (Grade.length/16)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*16] + Grade[i*16+1] + Grade[i*16+2] + Grade[i*16+3] + Grade[i*16+4] + Grade[i*16+5] +  
                Grade[i*16+6] + Grade[i*16+7] + Grade[i*16+8] + Grade[i*16+9] + Grade[i*16+10] + Grade[i*16+11] + Grade[i*16+12] + 
                Grade[i*16+13] + Grade[i*16+14] + Grade[i*16+15])/1.6)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 180) {
        for (var i = 1; i <  (Grade.length/19)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*19] + Grade[i*19+1] + Grade[i*19+2] + Grade[i*19+3] + Grade[i*19+4] + Grade[i*19+5] +  
                Grade[i*19+6] + Grade[i*19+7] + Grade[i*19+8] + Grade[i*19+9] + Grade[i*19+10] + Grade[i*19+11] + Grade[i*19+12] + 
                Grade[i*19+13] + Grade[i*19+14] + Grade[i*19+15] + Grade[i*19+16] + Grade[i*19+17] + Grade[i*19+18])/1.9)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 210) {
        for (var i = 1; i <  (Grade.length/22)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*22] + Grade[i*22+1] + Grade[i*22+2] + Grade[i*22+3] + Grade[i*22+4] + Grade[i*22+5] +  
                Grade[i*22+6] + Grade[i*22+7] + Grade[i*22+8] + Grade[i*22+9] + Grade[i*22+10] + Grade[i*22+11] + Grade[i*22+12] + 
                Grade[i*22+13] + Grade[i*22+14] + Grade[i*22+15] + Grade[i*22+16] + Grade[i*22+17] + Grade[i*22+18] + 
                Grade[i*22+19] + Grade[i*22+20] + Grade[i*22+21])/2.2)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 240) {
        for (var i = 1; i <  (Grade.length/25)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*25] + Grade[i*25+1] + Grade[i*25+2] + Grade[i*25+3] + Grade[i*25+4] + Grade[i*25+5] +  
                Grade[i*25+6] + Grade[i*25+7] + Grade[i*25+8] + Grade[i*25+9] + Grade[i*25+10] + Grade[i*25+11] + Grade[i*25+12] + 
                Grade[i*25+13] + Grade[i*25+14] + Grade[i*25+15] + Grade[i*25+16] + Grade[i*25+17] + Grade[i*25+18] + 
                Grade[i*25+19] + Grade[i*25+20] + Grade[i*25+21] + Grade[i*25+22] + Grade[i*25+23] + Grade[i*25+24])/2.5)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 270) {
        for (var i = 1; i <  (Grade.length/28)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*28] + Grade[i*28+1] + Grade[i*28+2] + Grade[i*28+3] + Grade[i*28+4] + Grade[i*28+5] +  
                Grade[i*28+6] + Grade[i*28+7] + Grade[i*28+8] + Grade[i*28+9] + Grade[i*28+10] + Grade[i*28+11] + Grade[i*28+12] + 
                Grade[i*28+13] + Grade[i*28+14] + Grade[i*28+15] + Grade[i*28+16] + Grade[i*28+17] + Grade[i*28+18] + 
                Grade[i*28+19] + Grade[i*28+20] + Grade[i*28+21] + Grade[i*28+22] + Grade[i*28+23] + Grade[i*28+24]
                + Grade[i*28+25] + Grade[i*28+26] + Grade[i*28+27])/2.8)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) < 300) {
        for (var i = 1; i <  (Grade.length/31)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*31] + Grade[i*31+1] + Grade[i*31+2] + Grade[i*31+3] + Grade[i*31+4] + Grade[i*31+5] +  
                Grade[i*31+6] + Grade[i*31+7] + Grade[i*31+8] + Grade[i*31+9] + Grade[i*31+10] + Grade[i*31+11] + Grade[i*31+12] + 
                Grade[i*31+13] + Grade[i*31+14] + Grade[i*31+15] + Grade[i*31+16] + Grade[i*31+17] + Grade[i*31+18] + 
                Grade[i*31+19] + Grade[i*31+20] + Grade[i*31+21] + Grade[i*31+22] + Grade[i*31+23] + Grade[i*31+24]
                + Grade[i*31+25] + Grade[i*31+26] + Grade[i*31+27] + Grade[i*31+28] + Grade[i*31+29] + Grade[i*31+30])/3.1)/10
        }
    }
    else if (Math.round(activitie.moving_time / 60) > 300) {
        for (var i = 1; i <  (Grade.length/35)-supprEnd; i++) {
            ZoomGrade[i-1] = Math.round((Grade[i*35] + Grade[i*35+1] + Grade[i*35+2] + Grade[i*35+3] + Grade[i*35+4] + Grade[i*35+5] +  
                Grade[i*35+6] + Grade[i*35+7] + Grade[i*35+8] + Grade[i*35+9] + Grade[i*35+10] + Grade[i*35+11] + Grade[i*35+12] + 
                Grade[i*35+13] + Grade[i*35+14] + Grade[i*35+15] + Grade[i*35+16] + Grade[i*35+17] + Grade[i*35+18] + 
                Grade[i*35+19] + Grade[i*35+20] + Grade[i*35+21] + Grade[i*35+22] + Grade[i*35+23] + Grade[i*35+24]
                + Grade[i*35+25] + Grade[i*35+26] + Grade[i*35+27] + Grade[i*35+28] + Grade[i*35+29] + Grade[i*35+30]
                + Grade[i*35+31] + Grade[i*35+32] + Grade[i*35+33] + Grade[i*35+34])/3.5)/10
        }
    }

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
	for (let i = 0; i < ZoomVitesse.length; i++) {
        wattAir[1] = 1.013 / 2 * 0.45 * aeroValues.bottom * Math.pow(((ZoomVitesse[i]) / 3.6), 3);
	    wattRoulement[1] = frotement * 9.81 * 65 * (ZoomVitesse[i] / 3.6);
		wattPente[1] = 65 * 9.81 * (ZoomVitesse[i] / 3.4) * ZoomGrade[i] / 100;
		watt[i] = wattAir[1] + wattRoulement[1] + wattPente[1]
		if (watt[i] < 0) {
			watt[i] = 0
		}
		watt[i] = Math.round(watt[i] * 10) / 10
	}
	watt.splice(vitesse.length - 1, 1)
        
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
            ctx.height = 120;
            svg.style.height = "120px";
            svg.style.marginTop = "-120px";
            svg.style.width = "70%";
            bar.setAttribute('y1', 0);
            bar.setAttribute('y2', 120);
        }
        else if (document.documentElement.clientWidth > 400) {
            ctx.height = 120;
            svg.style.height = "120px";
            svg.style.marginTop = "-120px";
            svg.style.width = "70%";
            bar.setAttribute('y1', 0);
            bar.setAttribute('y2', 120);
        }
        else if (document.documentElement.clientWidth > 300) {
            ctx.height = 120;
            svg.style.height = "120px";
            svg.style.marginTop = "-120px";
            svg.style.width = "70%";
            bar.setAttribute('y1', 0);
            bar.setAttribute('y2', 120);
        }
        else if (document.documentElement.clientWidth > 200) {
            ctx.height = 120;
            svg.style.height = "120px";
            svg.style.marginTop = "-120px";
            svg.style.width = "70%";
            bar.setAttribute('y1', 0);
            bar.setAttribute('y2', 120);
        }
        else {
            ctx.height = 120;
            svg.style.height = "120px";
            svg.style.marginTop = "-120px";
            svg.style.width = "70%";
            bar.setAttribute('y1', 0);
            bar.setAttribute('y2', 120);
        }

    var kilometrage = new Array()
    for (let i = 0; i < ZoomVitesse.length; i++) {
        kilometrage[i] = "      "
    }

    var data = {
        labels: kilometrage,
        datasets: [{
            label: 'vitesse (km/h)',
            data: ZoomVitesse,
            borderColor: [
                'rgb(6, 141, 251)',
            ],
            backgroundColor: [
                'rgb(6, 141, 251, 0.1)',
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
    let ctxWidth = document.getElementById("graphSpeed").style.width;
    sessionStorage.ctxWidth = (ctxWidth.slice(0, ctxWidth.length - 2));
    let fraction;
    let elevation;

    var barElevation = document.getElementById("barElevation");
	var barSpeed = document.getElementById("barSpeed");
	var barPower = document.getElementById("barPower");

    document.getElementById("svgSpeed").onmousemove = function (event) {
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