function sweetspot(level) {
    seance = new Array();
    seance = seance.concat(Echauffement(3));

    serie = new Array();
    seance[ seance.length ] = {typeValue: "startSerie"};
    for (let y = 0; y < level.series; y++) {
        serie[ y * 2 ] = {typeValue: "time", value: level.rep[0].time, intensité: intensite({b: 68, h: 76}, 
            {b: 81, h: 88}, 3), Z: 3, WPrct: 72};
        serie[ y * 2 + 1 ] = {typeValue: "time", value: level.rep[1].time, intensité: intensite({b: 47, h: 53}, 
            {b: 65, h: 75}, 1), Z: 1, WPrct: 50}; 
    }
    seance = seance.concat(serie);
    seance[ seance.length ] = {typeValue: "endSerie"};
    
    seance[seance.length] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};

    return {titre: "SWEET SPOT", seance: seance, type: "serieAndTime", typeSeance: "Sweet Spot", Z: 3, meta: level};
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