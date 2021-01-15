function PMA30_30(level) {
    let seance = new Array();

    seance[0] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[1] = {typeValue: "time", value: 30, intensité: intensite({b: 95, h: 100}, {b: 94, h: 100}, 5), Z: 5, WPrct: 97};
    seance[2] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[3] = {typeValue: "time", value: 30, intensité: intensite({b: 100, h: 105}, {b: 95, h: 100}, 6), Z: 6, WPrct: 107};
    seance[4] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[5] = {typeValue: "time", value: 30, intensité: intensite({b: 105, h: 110}, {b: 96, h: 100}, 6), Z: 6, WPrct: 108};
    seance[6] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[7] = {typeValue: "time", value: 12, intensité: intensite({b: 180, h: 300}, {b: 97, h: 100}, 7), Z: 7, WPrct: 300};
    seance[8] = {typeValue: "time", value: 180, intensité: intensite({b: 57, h: 63}, {b: 74, h: 78}, 2), Z: 2, WPrct: 60};
    
    serie1 = new Array();
    seance[ seance.length ] = {typeValue: "startSerie"};
    for (let y = 0; y < level.repS1; y++) {
        serie1[ y * 2 ] = {typeValue: "time", value: 30, intensité: intensite({b: 115, h: 120}, {b: 97, h: 100}, 6), Z: 6, WPrct: 117};
        serie1[ y * 2 + 1 ] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }
    seance = seance.concat(serie1);
    seance[ seance.length ] = {typeValue: "endSerie"};
    seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};

    if (level.series >= 2) {
        serie2 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS2; y++) {
            serie2[ y * 2 ] = {typeValue: "time", value: 30, intensité: intensite({b: 115, h: 120}, {b: 97, h: 100}, 6), Z: 6, WPrct: 117};
            serie2[ y * 2 + 1 ] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie2);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 3) {
        serie3 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS3; y++) {
            serie3[ y * 2 ] = {typeValue: "time", value: 30, intensité: intensite({b: 115, h: 120}, {b: 97, h: 100}, 6), Z: 6, WPrct: 117};
            serie3[ y * 2 + 1 ] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie3);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 4) {
        serie4 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS4; y++) {
            serie4[ y * 2 ] = {typeValue: "time", value: 30, intensité: intensite({b: 115, h: 120}, {b: 97, h: 100}, 6), Z: 6, WPrct: 117};
            serie4[ y * 2 + 1 ] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie4);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 5) {
        serie5 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS5; y++) {
            serie5[ y * 2 ] = {typeValue: "time", value: 30, intensité: intensite({b: 115, h: 120}, {b: 97, h: 100}, 6), Z: 6, WPrct: 117};
            serie5[ y * 2 + 1 ] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie5);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }


    return {titre: "FRACTIONNÉ PMA 30SEC/30SEC", seance: seance, type: "serieAndRep", typeSeance: "PMA", Z: 5, meta: level, sousTypeSeance: "PMA30_30"};
}

const levelsPMA30_30 = [
    {series: 1, repS1: 6},
    {series: 1, repS1: 7},
    {series: 2, repS1: 4, repS2: 4},
    {series: 2, repS1: 5, repS2: 4},
    {series: 2, repS1: 5, repS2: 5},
    {series: 2, repS1: 6, repS2: 5},
    {series: 2, repS1: 6, repS2: 6},
    {series: 2, repS1: 7, repS2: 6},
    {series: 2, repS1: 7, repS2: 7},
    {series: 2, repS1: 8, repS2: 7},
    {series: 2, repS1: 8, repS2: 8},
    {series: 2, repS1: 9, repS2: 8},
    {series: 2, repS1: 9, repS2: 9},
    {series: 2, repS1: 10, repS2: 9},
    {series: 2, repS1: 10, repS2: 10},
    {series: 2, repS1: 11, repS2: 10},
    {series: 2, repS1: 11, repS2: 11},
    {series: 3, repS1: 9, repS2: 9, repS3: 9},
    {series: 3, repS1: 10, repS2: 9, repS3: 9},
    {series: 3, repS1: 10, repS2: 10, repS3: 9},
    {series: 3, repS1: 10, repS2: 10, repS3: 10},
    {series: 3, repS1: 11, repS2: 10, repS3: 10},
    {series: 3, repS1: 11, repS2: 11, repS3: 10},
    {series: 3, repS1: 11, repS2: 11, repS3: 11},
    {series: 3, repS1: 12, repS2: 11, repS3: 11},
    {series: 3, repS1: 12, repS2: 12, repS3: 11},
    {series: 3, repS1: 12, repS2: 12, repS3: 12},
    {series: 3, repS1: 13, repS2: 12, repS3: 12},
    {series: 3, repS1: 13, repS2: 13, repS3: 12},
    {series: 3, repS1: 13, repS2: 13, repS3: 13},
    {series: 4, repS1: 11, repS2: 10, repS3: 10, repS4: 10},
    {series: 4, repS1: 11, repS2: 11, repS3: 10, repS4: 10},
    {series: 4, repS1: 11, repS2: 11, repS3: 11, repS4: 10},
    {series: 4, repS1: 11, repS2: 11, repS3: 11, repS4: 11},
    {series: 4, repS1: 12, repS2: 11, repS3: 11, repS4: 11},
    {series: 4, repS1: 12, repS2: 12, repS3: 11, repS4: 11},
    {series: 4, repS1: 12, repS2: 12, repS3: 12, repS4: 11},
    {series: 4, repS1: 12, repS2: 12, repS3: 12, repS4: 12},
    {series: 4, repS1: 13, repS2: 12, repS3: 12, repS4: 12},
    {series: 4, repS1: 13, repS2: 13, repS3: 12, repS4: 12},
    {series: 4, repS1: 13, repS2: 13, repS3: 13, repS4: 12},
    {series: 4, repS1: 13, repS2: 13, repS3: 13, repS4: 13},
    {series: 4, repS1: 14, repS2: 13, repS3: 13, repS4: 13},
    {series: 4, repS1: 14, repS2: 14, repS3: 13, repS4: 13},
    {series: 4, repS1: 14, repS2: 14, repS3: 14, repS4: 13},
    {series: 4, repS1: 14, repS2: 14, repS3: 14, repS4: 14},
    {series: 4, repS1: 15, repS2: 15, repS3: 14, repS4: 14},
    {series: 4, repS1: 15, repS2: 15, repS3: 15, repS4: 14},
    {series: 4, repS1: 15, repS2: 15, repS3: 15, repS4: 15},
    {series: 4, repS1: 16, repS2: 16, repS3: 16, repS4: 15},
    {series: 4, repS1: 17, repS2: 16, repS3: 16, repS4: 16},
    {series: 4, repS1: 17, repS2: 17, repS3: 17, repS4: 17},
    {series: 4, repS1: 18, repS2: 18, repS3: 18, repS4: 18},
]

function PMA1_1(level) {
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
        serie1[ y * 2 ] = {typeValue: "time", value: 60, intensité: intensite({b: 110, h: 115}, {b: 97, h: 100}, 5), Z: 5, WPrct: 113};
        serie1[ y * 2 + 1 ] = {typeValue: "time", value: 60, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }
    seance = seance.concat(serie1);
    seance[ seance.length ] = {typeValue: "endSerie"};
    seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};

    if (level.series >= 2) {
        serie2 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS2; y++) {
            serie2[ y * 2 ] = {typeValue: "time", value: 60, intensité: intensite({b: 110, h: 115}, {b: 97, h: 100}, 5), Z: 5, WPrct: 113};
            serie2[ y * 2 + 1 ] = {typeValue: "time", value: 60, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie2);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 3) {
        serie3 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS3; y++) {
            serie3[ y * 2 ] = {typeValue: "time", value: 60, intensité: intensite({b: 110, h: 115}, {b: 97, h: 100}, 5), Z: 5, WPrct: 113};
            serie3[ y * 2 + 1 ] = {typeValue: "time", value: 60, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie3);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 4) {
        serie4 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS4; y++) {
            serie4[ y * 2 ] = {typeValue: "time", value: 60, intensité: intensite({b: 110, h: 115}, {b: 97, h: 100}, 5), Z: 5, WPrct: 113};
            serie4[ y * 2 + 1 ] = {typeValue: "time", value: 60, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie4);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 5) {
        serie5 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS5; y++) {
            serie5[ y * 2 ] = {typeValue: "time", value: 60, intensité: intensite({b: 110, h: 115}, {b: 97, h: 100}, 5), Z: 5, WPrct: 113};
            serie5[ y * 2 + 1 ] = {typeValue: "time", value: 60, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie5);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    return {titre: "FRACTIONNÉ PMA 1MIN/1MIN", seance: seance, type: "serieAndRep", typeSeance: "PMA", Z: 5, meta: level, sousTypeSeance: "PMA1_1"};
}

const levelsPMA1_1 = [
    {series: 1, repS1: 2},
    {series: 1, repS1: 3},
    {series: 2, repS1: 2, repS2: 2},
    {series: 2, repS1: 3, repS2: 2},
    {series: 2, repS1: 3, repS2: 3},
    {series: 2, repS1: 4, repS2: 3},
    {series: 2, repS1: 4, repS2: 4},
    {series: 2, repS1: 5, repS2: 4},
    {series: 2, repS1: 5, repS2: 5},
    {series: 2, repS1: 6, repS2: 5},
    {series: 2, repS1: 6, repS2: 6},
    {series: 2, repS1: 7, repS2: 6},
    {series: 2, repS1: 7, repS2: 7},
    {series: 3, repS1: 5, repS2: 5, repS3: 5},
    {series: 3, repS1: 6, repS2: 5, repS3: 5},
    {series: 3, repS1: 6, repS2: 6, repS3: 5},
    {series: 3, repS1: 6, repS2: 6, repS3: 6},
    {series: 3, repS1: 7, repS2: 6, repS3: 6},
    {series: 3, repS1: 7, repS2: 7, repS3: 6},
    {series: 3, repS1: 7, repS2: 7, repS3: 7},
    {series: 3, repS1: 8, repS2: 7, repS3: 7},
    {series: 3, repS1: 8, repS2: 8, repS3: 7},
    {series: 3, repS1: 8, repS2: 8, repS3: 8},
    {series: 3, repS1: 9, repS2: 8, repS3: 8},
    {series: 3, repS1: 9, repS2: 9, repS3: 8},
    {series: 3, repS1: 9, repS2: 9, repS3: 9},
    {series: 3, repS1: 10, repS2: 9, repS3: 9},
    {series: 3, repS1: 10, repS2: 10, repS3: 9},
    {series: 3, repS1: 10, repS2: 10, repS3: 10},
    {series: 3, repS1: 11, repS2: 10, repS3: 10},
    {series: 3, repS1: 11, repS2: 11, repS3: 10},
    {series: 3, repS1: 11, repS2: 11, repS3: 11},
]

function PMA3_3(level) {
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
        serie1[ y * 2 ] = {typeValue: "time", value: 180, intensité: intensite({b: 95, h: 105}, {b: 97, h: 100}, 5), Z: 5, WPrct: 100};
        serie1[ y * 2 + 1 ] = {typeValue: "time", value: 180, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }
    seance = seance.concat(serie1);
    seance[ seance.length ] = {typeValue: "endSerie"};
    seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};

    if (level.series >= 2) {
        serie2 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS2; y++) {
            serie2[ y * 2 ] = {typeValue: "time", value: 180, intensité: intensite({b: 95, h: 105}, {b: 97, h: 100}, 5), Z: 5, WPrct: 100};
            serie2[ y * 2 + 1 ] = {typeValue: "time", value: 180, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie2);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 3) {
        serie3 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS3; y++) {
            serie3[ y * 2 ] = {typeValue: "time", value: 180, intensité: intensite({b: 95, h: 105}, {b: 97, h: 100}, 5), Z: 5, WPrct: 100};
            serie3[ y * 2 + 1 ] = {typeValue: "time", value: 180, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie3);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 4) {
        serie4 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS4; y++) {
            serie4[ y * 2 ] = {typeValue: "time", value: 180, intensité: intensite({b: 95, h: 105}, {b: 97, h: 100}, 5), Z: 5, WPrct: 100};
            serie4[ y * 2 + 1 ] = {typeValue: "time", value: 180, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie4);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    if (level.series >= 5) {
        serie5 = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < level.repS5; y++) {
            serie5[ y * 2 ] = {typeValue: "time", value: 180, intensité: intensite({b: 95, h: 105}, {b: 97, h: 100}, 5), Z: 5, WPrct: 100};
            serie5[ y * 2 + 1 ] = {typeValue: "time", value: 180, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie5);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    return {titre: "FRACTIONNÉ PMA 3MIN/3MIN", seance: seance, type: "serieAndRep", typeSeance: "PMA", Z: 5, meta: level, sousTypeSeance: "PMA3_3"};
}

const levelsPMA3_3 = [
    {series: 1, repS1: 1},
    {series: 1, repS1: 2},
    {series: 1, repS1: 3},
    {series: 1, repS1: 4},
    {series: 2, repS1: 3, repS2: 2},
    {series: 1, repS1: 5},
    {series: 2, repS1: 3, repS2: 3},
    {series: 1, repS1: 6},
    {series: 2, repS1: 4, repS2: 3},
    {series: 2, repS1: 4, repS2: 4},
    {series: 2, repS1: 5, repS2: 4},
    {series: 2, repS1: 5, repS2: 5},
    {series: 2, repS1: 6, repS2: 5},
    {series: 2, repS1: 6, repS2: 6},
]

const levelsPMA = [
    {l: 0, PMA30_30: 0, PMA1_1: 0, PMA3_3: 0},
    {l: 1, PMA30_30: 1, PMA1_1: 0, PMA3_3: 0},
    {l: 2, PMA30_30: 2, PMA1_1: 1, PMA3_3: 0},
    {l: 3, PMA30_30: 3, PMA1_1: 1, PMA3_3: 0},
    {l: 4, PMA30_30: 4, PMA1_1: 2, PMA3_3: 1},
    {l: 5, PMA30_30: 5, PMA1_1: 2, PMA3_3: 1},
    {l: 6, PMA30_30: 6, PMA1_1: 3, PMA3_3: 1},
    {l: 7, PMA30_30: 7, PMA1_1: 4, PMA3_3: 1},
    {l: 8, PMA30_30: 8, PMA1_1: 4, PMA3_3: 2},
    {l: 9, PMA30_30: 9, PMA1_1: 5, PMA3_3: 2},
    {l: 10, PMA30_30: 10, PMA1_1: 5, PMA3_3: 2},
    {l: 11, PMA30_30: 11, PMA1_1: 6, PMA3_3: 2},
    {l: 12, PMA30_30: 12, PMA1_1: 7, PMA3_3: 3},
    {l: 13, PMA30_30: 13, PMA1_1: 7, PMA3_3: 3},
    {l: 14, PMA30_30: 14, PMA1_1: 8, PMA3_3: 3},
    {l: 15, PMA30_30: 15, PMA1_1: 8, PMA3_3: 3},
    {l: 16, PMA30_30: 16, PMA1_1: 9, PMA3_3: 4},
    {l: 17, PMA30_30: 17, PMA1_1: 10, PMA3_3: 4},
    {l: 18, PMA30_30: 18, PMA1_1: 10, PMA3_3: 4},
    {l: 19, PMA30_30: 19, PMA1_1: 11, PMA3_3: 4},
    {l: 20, PMA30_30: 20, PMA1_1: 11, PMA3_3: 5},
    {l: 21, PMA30_30: 21, PMA1_1: 12, PMA3_3: 5},
    {l: 22, PMA30_30: 22, PMA1_1: 13, PMA3_3: 5},
    {l: 23, PMA30_30: 23, PMA1_1: 13, PMA3_3: 5},
    {l: 24, PMA30_30: 24, PMA1_1: 14, PMA3_3: 6},
    {l: 25, PMA30_30: 25, PMA1_1: 14, PMA3_3: 6},
    {l: 26, PMA30_30: 26, PMA1_1: 15, PMA3_3: 6},
    {l: 27, PMA30_30: 27, PMA1_1: 16, PMA3_3: 6},
    {l: 28, PMA30_30: 28, PMA1_1: 16, PMA3_3: 7},
    {l: 29, PMA30_30: 29, PMA1_1: 17, PMA3_3: 7},
    {l: 30, PMA30_30: 30, PMA1_1: 17, PMA3_3: 7},
    {l: 31, PMA30_30: 31, PMA1_1: 18, PMA3_3: 7},
    {l: 32, PMA30_30: 32, PMA1_1: 19, PMA3_3: 8},
    {l: 33, PMA30_30: 33, PMA1_1: 19, PMA3_3: 8},
    {l: 34, PMA30_30: 34, PMA1_1: 20, PMA3_3: 8},
    {l: 35, PMA30_30: 35, PMA1_1: 20, PMA3_3: 8},
    {l: 36, PMA30_30: 36, PMA1_1: 21, PMA3_3: 9},
    {l: 37, PMA30_30: 37, PMA1_1: 22, PMA3_3: 9},
    {l: 38, PMA30_30: 38, PMA1_1: 22, PMA3_3: 9},
    {l: 39, PMA30_30: 39, PMA1_1: 23, PMA3_3: 9},
    {l: 40, PMA30_30: 40, PMA1_1: 23, PMA3_3: 10},
    {l: 41, PMA30_30: 41, PMA1_1: 24, PMA3_3: 10},
    {l: 42, PMA30_30: 42, PMA1_1: 25, PMA3_3: 10},
    {l: 43, PMA30_30: 43, PMA1_1: 25, PMA3_3: 10},
    {l: 44, PMA30_30: 44, PMA1_1: 26, PMA3_3: 11},
    {l: 45, PMA30_30: 45, PMA1_1: 26, PMA3_3: 11},
    {l: 46, PMA30_30: 46, PMA1_1: 27, PMA3_3: 11},
    {l: 47, PMA30_30: 47, PMA1_1: 28, PMA3_3: 11},
    {l: 48, PMA30_30: 48, PMA1_1: 28, PMA3_3: 12},
    {l: 49, PMA30_30: 49, PMA1_1: 29, PMA3_3: 12},
    {l: 50, PMA30_30: 50, PMA1_1: 29, PMA3_3: 12},
    {l: 51, PMA30_30: 51, PMA1_1: 30, PMA3_3: 12},
    {l: 52, PMA30_30: 52, PMA1_1: 31, PMA3_3: 13},
]