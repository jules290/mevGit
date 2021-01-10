function seuil5_5(level) {
    let seance = new Array();
    
    seance[0] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[1] = {typeValue: "time", value: 30, intensité: intensite({b: 95, h: 100}, {b: 94, h: 100}, 5), Z: 5, WPrct: 97};
    seance[2] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[3] = {typeValue: "time", value: 30, intensité: intensite({b: 100, h: 105}, {b: 95, h: 100}, 6), Z: 6, WPrct: 103};
    seance[4] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[5] = {typeValue: "time", value: 30, intensité: intensite({b: 105, h: 110}, {b: 96, h: 100}, 6), Z: 6, WPrct: 107};
    seance[6] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[7] = {typeValue: "time", value: 12, intensité: intensite({b: 180, h: 300}, {b: 97, h: 100}, 7), Z: 7, WPrct: 300};
    seance[8] = {typeValue: "time", value: 180, intensité: intensite({b: 57, h: 63}, {b: 74, h: 78}, 2), Z: 2, WPrct: 60};

    serie1 = new Array();
    seance[ seance.length ] = {typeValue: "startSerie"};
    for (let y = 0; y < level.repS1; y++) {
        serie1[ y * 2 ] = {typeValue: "time", value: 300, intensité: intensite({b: 79, h: 84}, {b: 90, h: 95}, 4), Z: 4, WPrct: 82};
        serie1[ y * 2 + 1 ] = {typeValue: "time", value: 300, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }
    seance = seance.concat(serie1);
    seance[ seance.length ] = {typeValue: "endSerie"};
    seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};

    if (level.series >= 2) {
        serie2 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS2; y++) {
            serie2[ y * 2 ] = {typeValue: "time", value: 300, intensité: intensite({b: 79, h: 84}, {b: 90, h: 95}, 4), Z: 4, WPrct: 82};
            serie2[ y * 2 + 1 ] = {typeValue: "time", value: 300, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie2);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 3) {
        serie3 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS3; y++) {
            serie3[ y * 2 ] = {typeValue: "time", value: 300, intensité: intensite({b: 79, h: 84}, {b: 90, h: 95}, 4), Z: 4, WPrct: 82};
            serie3[ y * 2 + 1 ] = {typeValue: "time", value: 300, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie3);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}), Z: 1, WPrct: 50};
    }

    if (level.series >= 4) {
        serie4 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS4; y++) {
            serie4[ y * 2 ] = {typeValue: "time", value: 300, intensité: intensite({b: 79, h: 84}, {b: 90, h: 95}, 4), Z: 4, WPrct: 82};
            serie4[ y * 2 + 1 ] = {typeValue: "time", value: 300, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie4);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 5) {
        serie5 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS5; y++) {
            serie5[ y * 2 ] = {typeValue: "time", value: 300, intensité: intensite({b: 79, h: 84}, {b: 90, h: 95}, 4), Z: 4, WPrct: 82};
            serie5[ y * 2 + 1 ] = {typeValue: "time", value: 300, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie5);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    return {seance: seance, typeSeance: "Seuil", Z: 4, meta: level};
}

const levelsSeuil5_5 = [
    {series: 1, repS1: 1},
    {series: 1, repS1: 2},
    {series: 1, repS1: 3},
    {series: 2, repS1: 2, repS2: 2},
    {series: 2, repS1: 3, repS2: 2},
    {series: 1, repS1: 5},
    {series: 2, repS1: 3, repS2: 3},
    {series: 2, repS1: 4, repS2: 3},
    {series: 2, repS1: 4, repS2: 4},
    {series: 2, repS1: 5, repS2: 4},
    {series: 2, repS1: 5, repS2: 5},
    {series: 2, repS1: 6, repS2: 5},
    {series: 3, repS1: 4, repS2: 4, repS3: 4},
    {series: 2, repS1: 6, repS2: 6},
    {series: 3, repS1: 5, repS2: 5, repS3: 4},
    {series: 3, repS1: 5, repS2: 5, repS3: 5},
    {series: 3, repS1: 6, repS2: 5, repS3: 5},
    {series: 3, repS1: 6, repS2: 6, repS3: 5},
    {series: 3, repS1: 6, repS2: 6, repS3: 6},
]

function gimenez(level) {
    let seance = new Array();
    
    seance[0] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[1] = {typeValue: "time", value: 30, intensité: intensite({b: 95, h: 100}, {b: 94, h: 100}, 5), Z: 5, WPrct: 97};
    seance[2] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[3] = {typeValue: "time", value: 30, intensité: intensite({b: 100, h: 105}, {b: 95, h: 100}, 6), Z: 6, WPrct: 103};
    seance[4] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[5] = {typeValue: "time", value: 30, intensité: intensite({b: 105, h: 110}, {b: 96, h: 100}, 6), Z: 6, WPrct: 108};
    seance[6] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[7] = {typeValue: "time", value: 12, intensité: intensite({b: 180, h: 300}, {b: 97, h: 100}, 7), Z: 7, WPrct: 300};
    seance[8] = {typeValue: "time", value: 180, intensité: intensite({b: 57, h: 63}, {b: 74, h: 78}, 2), Z: 2, WPrct: 60};

    serie = new Array();
    seance[ seance.length ] = {typeValue: "startSerie"};
    for (let i = 0; i < level.series; i++) {
        serie[ i * 3 ] = {
            typeValue: "time", value: level.rep[0].time, intensité: intensite({b: 94, h: 100}, {b: 96, h: 100}, 5), Z: 5, WPrct: 97
        };
        serie[ i * 3 + 1 ] = {
            typeValue: "time", value: level.rep[1].time, intensité: intensite({b: 70, h: 78}, {b: 85, h: 90}, 3), Z: 3, WPrct: 74
        };
        serie[ i * 3 + 2 ] = {
            typeValue: "time", value: level.rep[2].time, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50
        };
    }
    seance = seance.concat(serie);
    seance[ seance.length ] = {typeValue: "endSerie"};
    seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};

    return {seance: seance, typeSeance: "Gimenez", Z: 4, meta: level};
}

const levelsGimenez = [
    {series: 6, rep: [{type: "PMA", time: 30}, {type: "Z3", time: 60}, {type: "RECUP", time: 60}]},
    {series: 7, rep: [{type: "PMA", time: 30}, {type: "Z3", time: 60}, {type: "RECUP", time: 60}]},
    {series: 8, rep: [{type: "PMA", time: 30}, {type: "Z3", time: 60}, {type: "RECUP", time: 60}]},
    {series: 9, rep: [{type: "PMA", time: 30}, {type: "Z3", time: 60}, {type: "RECUP", time: 60}]},
    {series: 9, rep: [{type: "PMA", time: 40}, {type: "Z3", time: 90}, {type: "RECUP", time: 50}]},
    {series: 9, rep: [{type: "PMA", time: 45}, {type: "Z3", time: 140}, {type: "RECUP", time: 40}]},
    {series: 9, rep: [{type: "PMA", time: 50}, {type: "Z3", time: 180}, {type: "RECUP", time: 30}]},
    {series: 9, rep: [{type: "PMA", time: 55}, {type: "Z3", time: 210}, {type: "RECUP", time: 20}]},
    {series: 9, rep: [{type: "PMA", time: 60}, {type: "Z3", time: 240}, {type: "RECUP", time: 20}]},
    {series: 9, rep: [{type: "PMA", time: 60}, {type: "Z3", time: 240}, {type: "RECUP", time: 0}]},
    {series: 10, rep: [{type: "PMA", time: 60}, {type: "Z3", time: 240}, {type: "RECUP", time: 0}]},
    {series: 11, rep: [{type: "PMA", time: 60}, {type: "Z3", time: 240}, {type: "RECUP", time: 0}]},
    {series: 12, rep: [{type: "PMA", time: 60}, {type: "Z3", time: 240}, {type: "RECUP", time: 0}]},
    {series: 13, rep: [{type: "PMA", time: 60}, {type: "Z3", time: 240}, {type: "RECUP", time: 0}]},
]