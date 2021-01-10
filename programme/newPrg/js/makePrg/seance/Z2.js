function enduranceFondamentale(tps) {
    let seance = new Array();

    seance[0] = {typeValue: "time", value: Math.round(tps) * 60, intensité: intensite({b: 47, h: 56}, {b: 65, h: 75}, 1), Z: 1, WPrct: 52};
    
    return {seance: seance, typeSeance: "Endurance", Z: 1};
}

function enduranceHaute(tps) {
    let seance = new Array();

    seance[0] = {typeValue: "time", value: Math.round(tps) * 60, intensité: intensite({b: 55, h: 67}, {b: 73, h: 83}, 2), Z: 2, WPrct: 61};

    return {seance: seance, typeSeance: "Endurance", Z: 2};
}