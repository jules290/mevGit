function debloquage() {
    let seance = new Array();

    seance[0] = {typeValue: "time", value: 1800, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[1] = {typeValue: "time", value: 30, intensité: intensite({b: 96, h: 110}, {b: 92, h: 100}, 6), Z: 6, WPrct: 103};
    seance[2] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[3] = {typeValue: "time", value: 20, intensité: intensite({b: 110, h: 120}, {b: 92, h: 100}, 6), Z: 6, WPrct: 115};
    seance[4] = {typeValue: "time", value: 20, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[5] = {typeValue: "time", value: 15, intensité: intensite({b: 160, h: 250}, {b: 92, h: 100}, 7), Z: 7, WPrct: 205};
    seance[6] = {typeValue: "time", value: 15, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[7] = {typeValue: "time", value: 8, intensité: intensite({b: 180, h: 400}, {b: 92, h: 100}, 7), Z: 7, WPrct: 300};
    seance[8] = {typeValue: "time", value: 1000, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};

    return {seance: seance, typeSeance: "Débloquage", Z: 1};
}