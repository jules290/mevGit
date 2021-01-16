function Echauffement(zone) {
    if (zone == 1) {
        echauffement = new Array();
    }
    else if (zone == 2) {
        echauffement = new Array();
    }
    else if (zone == 3) {
        echauffement = new Array();
        echauffement[0] = {typeValue: "time", value: 300, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[1] = {typeValue: "time", value: 300, intensité: intensite({b: 71, h: 79}, {b: 84, h: 91}, 1), Z: 3, WPrct: 75};
        echauffement[2] = {typeValue: "time", value: 300, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }
    else if (zone == 4) {
        echauffement = new Array();
        echauffement[0] = {typeValue: "time", value: 300, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[1] = {typeValue: "time", value: 120, intensité: intensite({b: 79, h: 84}, {b: 90, h: 95}, 4), Z: 4, WPrct: 82};
        echauffement[2] = {typeValue: "time", value: 120, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[3] = {typeValue: "time", value: 60, intensité: intensite({b: 88, h: 96}, {b: 93, h: 100}, 5), Z: 5, WPrct: 96};
        echauffement[4] = {typeValue: "time", value: 180, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }
    else if (zone == 5) {
        echauffement = new Array();
        echauffement[0] = {typeValue: "time", value: 420, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[1] = {typeValue: "time", value: 60, intensité: intensite({b: 92, h: 100}, {b: 94, h: 100}, 5), Z: 5, WPrct: 96};
        echauffement[2] = {typeValue: "time", value: 60, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[3] = {typeValue: "time", value: 45, intensité: intensite({b: 94, h: 102}, {b: 95, h: 100}, 5), Z: 5, WPrct: 98};
        echauffement[4] = {typeValue: "time", value: 60, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[5] = {typeValue: "time", value: 45, intensité: intensite({b: 96, h: 104}, {b: 95, h: 100}, 5), Z: 5, WPrct: 100};
        echauffement[6] = {typeValue: "time", value: 180, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }
    else if (zone == 6) {
        echauffement = new Array();
        echauffement[0] = {typeValue: "time", value: 420, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[1] = {typeValue: "time", value: 45, intensité: intensite({b: 102, h: 110}, {b: 95, h: 100}, 5), Z: 6, WPrct: 106};
        echauffement[2] = {typeValue: "time", value: 45, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[3] = {typeValue: "time", value: 30, intensité: intensite({b: 106, h: 114}, {b: 95, h: 100}, 5), Z: 6, WPrct: 110};
        echauffement[4] = {typeValue: "time", value: 30, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[5] = {typeValue: "time", value: 30, intensité: intensite({b: 108, h: 116}, {b: 95, h: 100}, 5), Z: 6, WPrct: 112};
        echauffement[6] = {typeValue: "time", value: 60, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[7] = {typeValue: "time", value: 12, intensité: intensite({b: 200, h: 300}, {b: 95, h: 100}, 5), Z: 7, WPrct: 250};
        echauffement[8] = {typeValue: "time", value: 240, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }
    else if (zone == 7) {
        echauffement = new Array();
        echauffement[0] = {typeValue: "time", value: 420, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[1] = {typeValue: "time", value: 20, intensité: intensite({b: 150, h: 210}, {b: 95, h: 100}, 5), Z: 6, WPrct: 180};
        echauffement[2] = {typeValue: "time", value: 120, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
        echauffement[3] = {typeValue: "time", value: 12, intensité: intensite({b: 200, h: 340}, {b: 95, h: 100}, 5), Z: 7, WPrct: 270};
        echauffement[4] = {typeValue: "time", value: 240, intensité: intensite({b: 47, h: 53}, {b: 65, h: 75}, 1), Z: 1, WPrct: 50};
    }

    return echauffement;
}