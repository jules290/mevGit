function getAddLevel(nbsem, nbseance, typeExo) {
    Programme =  sessionStorage.programme || JSON.parse(localStorage.programme)[index].type;
    startLevel = getStartLevel(Programme, typeExo);
    let level = new Array();
    let coef;
    let multiplicateur;
    let microAdd;

    switch (typeExo) {
        case "PMA30_30":
            coef = 1.2;
            multiplicateur = 200 * Math.pow( 1 / (startLevel + 1), 0.508) * Math.pow(nbseance, 0.5);
            
            for (let i = 0; i < nbsem; i++) {
                if (i == 0) level[i] = startLevel + 1
                else {
                    t = level[i-1];
                    level[i] = t + (t * ( ( Math.round(Math.pow( 1 / ( i + 1 ) , coef ) * multiplicateur * 100 ) / 100 ) / 100) );
                }
            }

            microAdd = ( (level[level.length - 1] - level[0]) / nbsem ) / nbseance;
            for (let i = 0; i < nbsem; i++) {
                thisLevel = level[i];
                level[i] = new Array();
                for (let y = 0; y < nbseance; y++) {
                    level[i][y] = thisLevel + y * microAdd;
                }
            }
            break;
        case "PMA1_1":
            coef = 1.2;
            multiplicateur = 120 * Math.pow( 1 / (startLevel + 1), 0.40) * Math.pow(nbseance, 0.5);
            
            for (let i = 0; i < nbsem; i++) {
                if (i == 0) level[i] = startLevel + 1
                else {
                    t = level[i-1];
                    level[i] = t + (t * ( ( Math.round(Math.pow( 1 / ( i + 1 ) , coef ) * multiplicateur * 100 ) / 100 ) / 100) );
                }
            }

            microAdd = ( (level[level.length - 1] - level[0]) / nbsem ) / nbseance;
            for (let i = 0; i < nbsem; i++) {
                thisLevel = level[i];
                level[i] = new Array();
                for (let y = 0; y < nbseance; y++) {
                    level[i][y] = thisLevel + y * microAdd;
                }
            }
            break;
        case "PMA3_3":
            coef = 1.2;
            multiplicateur = 115 * Math.pow( 1 / (startLevel + 1), 0.7) * Math.pow(nbseance, 0.5);
            
            for (let i = 0; i < nbsem; i++) {
                if (i == 0) level[i] = startLevel + 1
                else {
                    t = level[i-1];
                    level[i] = t + (t * ( ( Math.round(Math.pow( 1 / ( i + 1 ) , coef ) * multiplicateur * 100 ) / 100 ) / 100) );
                }
            }

            microAdd = ( (level[level.length - 1] - level[0]) / nbsem ) / nbseance;
            for (let i = 0; i < nbsem; i++) {
                thisLevel = level[i];
                level[i] = new Array();
                for (let y = 0; y < nbseance; y++) {
                    level[i][y] = thisLevel + y * microAdd;
                }
            }
            break;
            case "seuil5_5":
                coef = 1.2;
                multiplicateur = 140 * Math.pow( 1 / (startLevel + 1), 0.77) * Math.pow(nbseance, 0.5);
                
                for (let i = 0; i < nbsem; i++) {
                    if (i == 0) level[i] = startLevel + 1
                    else {
                        t = level[i-1];
                        level[i] = t + (t * ( ( Math.round(Math.pow( 1 / ( i + 1 ) , coef ) * multiplicateur * 100 ) / 100 ) / 100) );
                    }
                }
    
                microAdd = ( (level[level.length - 1] - level[0]) / nbsem ) / nbseance;
                for (let i = 0; i < nbsem; i++) {
                    thisLevel = level[i];
                    level[i] = new Array();
                    for (let y = 0; y < nbseance; y++) {
                        level[i][y] = thisLevel + y * microAdd;
                    }
                }
                break;
            case "Gimenez":
                coef = 1.2;
                multiplicateur = 125 * Math.pow( 1 / (startLevel + 1), 0.9) * Math.pow(nbseance, 0.5);
                
                for (let i = 0; i < nbsem; i++) {
                    if (i == 0) level[i] = startLevel + 1
                    else {
                        t = level[i-1];
                        level[i] = t + (t * ( ( Math.round(Math.pow( 1 / ( i + 1 ) , coef ) * multiplicateur * 100 ) / 100 ) / 100) );
                    }
                }
    
                microAdd = ( (level[level.length - 1] - level[0]) / nbsem ) / nbseance;
                for (let i = 0; i < nbsem; i++) {
                    thisLevel = level[i];
                    level[i] = new Array();
                    for (let y = 0; y < nbseance; y++) {
                        level[i][y] = thisLevel + y * microAdd;
                    }
                }
                break;
            case "Sweet Spot":
                coef = 1.2;
                multiplicateur = 140 * Math.pow( 1 / (startLevel + 1), 0.82) * Math.pow(nbseance, 0.5);
                
                for (let i = 0; i < nbsem; i++) {
                    if (i == 0) level[i] = startLevel + 1
                    else {
                        t = level[i-1];
                        level[i] = t + (t * ( ( Math.round(Math.pow( 1 / ( i + 1 ) , coef ) * multiplicateur * 100 ) / 100 ) / 100) );
                    }
                }
    
                microAdd = ( (level[level.length - 1] - level[0]) / nbsem ) / nbseance;
                for (let i = 0; i < nbsem; i++) {
                    thisLevel = level[i];
                    level[i] = new Array();
                    for (let y = 0; y < nbseance; y++) {
                        level[i][y] = thisLevel + y * microAdd;
                    }
                }

                break;
    }

    for (let i = 0; i < level.length; i++) {
        for (let y = 0; y < level[i].length; y++) {
            level[i][y] = Math.round(level[i][y]) - 1;
        }
    }
    
    return level;
}