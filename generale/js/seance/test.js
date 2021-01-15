function testFcMax() {
    let seance = new Array();

    seance[0] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[1] = {typeValue: "time", value: 30, intensité: intensite({b: 95, h: 100}, {b: 94, h: 100}, 5), Z: 5, WPrct: 98};
    seance[2] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[3] = {typeValue: "time", value: 30, intensité: intensite({b: 100, h: 105}, {b: 95, h: 100}, 6), Z: 6, WPrct: 103};
    seance[4] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[5] = {typeValue: "time", value: 30, intensité: intensite({b: 105, h: 110}, {b: 96, h: 100}, 6), Z: 6, WPrct: 108};
    seance[6] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[7] = {typeValue: "time", value: 12, intensité: intensite({b: 180, h: 300}, {b: 97, h: 100}, 7), Z: 7, WPrct: 300};
    seance[8] = {typeValue: "time", value: 180, intensité: intensite({b: 57, h: 63}, {b: 74, h: 78}, 2), Z: 2, WPrct: 60};

    seance[9] = {typeValue: "time", value: 180, intensité: intensite({b: 100, h: 109}, {b: 98, h: 100}, 5), Z: 5, WPrct: 105};

    return {titre: "TEST FC MAX", seance: seance, type: "normal", typeSeance: "Test FC MAX", Z: 5};
}

function testPMA() {
    let seance = new Array();
    
    seance[0] = {typeValue: "time", value: 600, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[1] = {typeValue: "time", value: 30, intensité: intensite({b: 95, h: 100}, {b: 94, h: 100}, 5), Z: 5, WPrct: 98};
    seance[2] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[3] = {typeValue: "time", value: 30, intensité: intensite({b: 100, h: 105}, {b: 95, h: 100}, 6), Z: 6, WPrct: 103};
    seance[4] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[5] = {typeValue: "time", value: 30, intensité: intensite({b: 105, h: 110}, {b: 96, h: 100}, 6), Z: 6, WPrct: 108};
    seance[6] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    seance[7] = {typeValue: "time", value: 12, intensité: intensite({b: 180, h: 300}, {b: 97, h: 100}, 7), Z: 7, WPrct: 300};
    seance[8] = {typeValue: "time", value: 180, intensité: intensite({b: 57, h: 63}, {b: 74, h: 78}, 2), Z: 2, WPrct: 60};

    seance[9] = {typeValue: "time", value: 60, intensité: "150W", Z: 5, WPrct: 55};
    seance[10] = {typeValue: "time", value: 60, intensité: "165W", Z: 5, WPrct: 60};
    seance[11] = {typeValue: "time", value: 60, intensité: "180W", Z: 5, WPrct: 65};
    seance[12] = {typeValue: "time", value: 60, intensité: "195W", Z: 5, WPrct: 70};
    seance[13] = {typeValue: "time", value: 60, intensité: "210W", Z: 5, WPrct: 75};
    seance[14] = {typeValue: "time", value: 60, intensité: "225W", Z: 5, WPrct: 80};
    seance[15] = {typeValue: "time", value: 60, intensité: "240W", Z: 5, WPrct: 85};
    seance[16] = {typeValue: "time", value: 60, intensité: "270W", Z: 5, WPrct: 90};
    seance[17] = {typeValue: "time", value: 60, intensité: "285W", Z: 5, WPrct: 95};
    seance[18] = {typeValue: "time", value: 60, intensité: "300W", Z: 5, WPrct: 100};
    seance[19] = {typeValue: "time", value: 60, intensité: "315W", Z: 5, WPrct: 105};
    seance[20] = {typeValue: "time", value: 60, intensité: "330W", Z: 5, WPrct: 110};
    seance[21] = {typeValue: "time", value: 60, intensité: "345W", Z: 5, WPrct: 115};
    seance[22] = {typeValue: "time", value: 60, intensité: "360W", Z: 5, WPrct: 120};
    seance[23] = {typeValue: "time", value: 60, intensité: "375W", Z: 5, WPrct: 125};
    seance[24] = {typeValue: "time", value: 60, intensité: "390W", Z: 5, WPrct: 130};
    seance[25] = {typeValue: "time", value: 60, intensité: "405W", Z: 5, WPrct: 135};
    seance[26] = {typeValue: "time", value: 60, intensité: "420W", Z: 5, WPrct: 140};
    seance[27] = {typeValue: "time", value: 60, intensité: "435W", Z: 5, WPrct: 145};
    seance[28] = {typeValue: "time", value: 60, intensité: "450W", Z: 5, WPrct: 150};
    seance[29] = {typeValue: "time", value: 60, intensité: "465W", Z: 5, WPrct: 155};
    seance[30] = {typeValue: "time", value: 60, intensité: "480W", Z: 5, WPrct: 160};
    seance[31] = {typeValue: "time", value: 60, intensité: "495W", Z: 5, WPrct: 165};
    seance[32] = {typeValue: "time", value: 60, intensité: "510W", Z: 5, WPrct: 170};
    seance[33] = {typeValue: "time", value: 60, intensité: "525W", Z: 5, WPrct: 175};
    seance[34] = {typeValue: "time", value: 60, intensité: "540W", Z: 5, WPrct: 180};
    seance[35] = {typeValue: "time", value: 60, intensité: "555W", Z: 5, WPrct: 185};
    seance[36] = {typeValue: "time", value: 60, intensité: "570W", Z: 5, WPrct: 190};
    seance[37] = {typeValue: "time", value: 60, intensité: "585W", Z: 5, WPrct: 195};
    seance[38] = {typeValue: "time", value: 60, intensité: "600W", Z: 5, WPrct: 200};

    return {titre: "Test PMA",seance: seance, type: "normal", typeSeance: "Test PMA", Z: 5};
}