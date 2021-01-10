function sweetspot(level) {
    seance = new Array();
    
    seance[0] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[1] = {typeValue: "time", value: 30, intensité: intensite({b: 95, h: 100}, {b: 94, h: 100}, 5), Z: 5, WPrct: 97};
    seance[2] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[3] = {typeValue: "time", value: 30, intensité: intensite({b: 100, h: 105}, {b: 95, h: 100}, 6), Z: 6, WPrct: 103};
    seance[4] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[5] = {typeValue: "time", value: 30, intensité: intensite({b: 105, h: 110}, {b: 96, h: 100}, 6), Z: 6, WPrct: 107};
    seance[6] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[7] = {typeValue: "time", value: 12, intensité: intensite({b: 180, h: 300}, {b: 97, h: 100}, 7), Z: 7, WPrct: 300};
    seance[8] = {typeValue: "time", value: 180, intensité: intensite({b: 57, h: 63}, {b: 74, h: 78}, 2), Z: 2, WPrct: 60};

    serie = new Array();
    seance[ seance.length ] = {typeValue: "startSerie"};
    for (let y = 0; y < level.series; y++) {
        serie[ y * 2 ] = {typeValue: "time", value: level.rep[0].time, intensité: intensite({b: 68, h: 76}, 
            {b: 81, h: 88}, 3), Z: 3, WPrct: 68};
        serie[ y * 2 + 1 ] = {typeValue: "time", value: level.rep[1].time, intensité: intensite({b: 47, h: 53}, 
            {b: 65, h: 75}, 1), Z: 1, WPrct: 50}; 
    }
    seance = seance.concat(serie);
    seance[ seance.length ] = {typeValue: "endSerie"};
    
    seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};

    return {seance: seance, typeSeance: "Sweet Spot", Z: 3, meta: level};
}

const levelsSweetSpot = [
    {series: 1, rep: [{type: "SWEET SPOT", time: 600}, {type: "RECUP", time: 600}]},
    {series: 1, rep: [{type: "SWEET SPOT", time: 780}, {type: "RECUP", time: 600}]},
    {series: 1, rep: [{type: "SWEET SPOT", time: 900}, {type: "RECUP", time: 600}]},
    {series: 1, rep: [{type: "SWEET SPOT", time: 1080}, {type: "RECUP", time: 600}]},
    {series: 2, rep: [{type: "SWEET SPOT", time: 780}, {type: "RECUP", time: 600}]},
    {series: 2, rep: [{type: "SWEET SPOT", time: 900}, {type: "RECUP", time: 600}]},
    {series: 2, rep: [{type: "SWEET SPOT", time: 1080}, {type: "RECUP", time: 600}]},
    {series: 2, rep: [{type: "SWEET SPOT", time: 1200}, {type: "RECUP", time: 600}]},
    {series: 3, rep: [{type: "SWEET SPOT", time: 840}, {type: "RECUP", time: 600}]},
    {series: 3, rep: [{type: "SWEET SPOT", time: 960}, {type: "RECUP", time: 600}]},
    {series: 3, rep: [{type: "SWEET SPOT", time: 1080}, {type: "RECUP", time: 600}]},
    {series: 3, rep: [{type: "SWEET SPOT", time: 1200}, {type: "RECUP", time: 600}]},
    {series: 3, rep: [{type: "SWEET SPOT", time: 1320}, {type: "RECUP", time: 600}]},
    {series: 3, rep: [{type: "SWEET SPOT", time: 1500}, {type: "RECUP", time: 600}]},
    {series: 3, rep: [{type: "SWEET SPOT", time: 1680}, {type: "RECUP", time: 600}]},
    {series: 3, rep: [{type: "SWEET SPOT", time: 1800}, {type: "RECUP", time: 600}]},
    {series: 4, rep: [{type: "SWEET SPOT", time: 1620}, {type: "RECUP", time: 600}]},
    {series: 4, rep: [{type: "SWEET SPOT", time: 1800}, {type: "RECUP", time: 600}]},
    {series: 5, rep: [{type: "SWEET SPOT", time: 1680}, {type: "RECUP", time: 600}]},
    {series: 5, rep: [{type: "SWEET SPOT", time: 1800}, {type: "RECUP", time: 600}]},
    {series: 6, rep: [{type: "SWEET SPOT", time: 1680}, {type: "RECUP", time: 600}]},
    {series: 6, rep: [{type: "SWEET SPOT", time: 1800}, {type: "RECUP", time: 600}]},
    {series: 7, rep: [{type: "SWEET SPOT", time: 1800}, {type: "RECUP", time: 600}]},
]