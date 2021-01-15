function sprint(level) {
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
    

    serieNb = 1
    if (level.repS2) serieNb++
    if (level.repS3) serieNb++
    if (level.repS4) serieNb++
    if (level.repS5) serieNb++

    let repLen;
    for (let i = 0; i < serieNb; i++) {
        if (i == 0) repLen = level.repS1
        if (i == 1) repLen = level.repS2
        if (i == 2) repLen = level.repS3
        if (i == 3) repLen = level.repS4
        if (i == 4) repLen = level.repS5

        serie = new Array();
        seance[ seance.length ] = {typeValue: "startSerie"};
        for (let y = 0; y < repLen; y++) {
            serie[ y * 2 ] = {typeValue: "time", value: 12, intensité: intensite({b: 200, h: 340}, {b: 92, h: 100}, 6), Z: 7, WPrct: 260};
            serie[ y * 2 + 1 ] = {typeValue: "time", value: 288, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        }
        seance = seance.concat(serie);
        seance[ seance.length ] = {typeValue: "endSerie"};
        seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    return {titre: "SPRINT", seance: seance, type: "serieAndRep", typeSeance: "sprint", Z: 7, meta: level, sousTypeSeance: "sprint"};
}

const levelsSprint = [
    {series: 1, repS1: 3},
    {series: 1, repS1: 4},
    {series: 1, repS1: 5},
    {series: 1, repS1: 6},
    {series: 1, repS1: 7},
    {series: 1, repS1: 8},
    {series: 1, repS1: 9},
    {series: 1, repS1: 10},
    {series: 2, repS1: 6, repS2: 6},
    {series: 2, repS1: 7, repS2: 6},
    {series: 2, repS1: 7, repS2: 7},
    {series: 2, repS1: 8, repS2: 7},
    {series: 2, repS1: 8, repS2: 8},
    {series: 2, repS1: 9, repS2: 8},
    {series: 2, repS1: 9, repS2: 9},
    {series: 2, repS1: 10, repS2: 9},
    {series: 3, repS1: 7, repS2: 7, repS3: 7},
    {series: 2, repS1: 10, repS2: 10},
    {series: 3, repS1: 8, repS2: 7, repS3: 7},
    {series: 3, repS1: 8, repS2: 8, repS3: 8},
    {series: 3, repS1: 9, repS2: 9, repS3: 8},
    {series: 3, repS1: 10, repS2: 9, repS3: 9},
    {series: 4, repS1: 8, repS2: 8, repS3: 8, repS4: 8},
    {series: 3, repS1: 10, repS2: 10, repS3: 10},
    {series: 4, repS1: 9, repS2: 9, repS3: 8, repS4: 8},
    {series: 4, repS1: 9, repS2: 9, repS3: 9, repS4: 9},
    {series: 4, repS1: 10, repS2: 10, repS3: 9, repS4: 9},
    {series: 4, repS1: 10, repS2: 10, repS3: 10, repS4: 10},
]