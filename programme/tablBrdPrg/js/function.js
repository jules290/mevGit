function getSemaines(prg) {
    let semaines;
    index = getAfterUrl();
    let longueurProgramme = Number(JSON.parse(localStorage.programme)[index].longueurProgramme);

    if (prg == "Criterium") {
        if (longueurProgramme == 8) semaines = [
            {name: "endurance", length: 3}, {name: "seuil", length: 1}, {name: "PMA", length: 3}, {name: "affutage", length: 1}
        ]
        else if (longueurProgramme == 10) semaines = [
            {name: "endurance", length: 4}, {name: "seuil", length: 1}, {name: "PMA", length: 3}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 12) semaines = [
            {name: "endurance", length: 5}, {name: "seuil", length: 1}, {name: "PMA", length: 4}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 14) semaines = [
            {name: "endurance", length: 6}, {name: "seuil", length: 1}, {name: "récupération", length: 1}, {name: "PMA", length: 4}, 
            {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 16) semaines = [
            {name: "endurance", length: 7}, {name: "seuil", length: 1}, {name: "récupération", length: 1}, {name: "PMA", length: 5}, 
            {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 18) semaines = [
            {name: "endurance", length: 8}, {name: "seuil", length: 1}, {name: "récupération", length: 1}, {name: "PMA", length: 6}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 20) semaines = [
            {name: "endurance", length: 8}, {name: "récupération", length: 1}, {name: "seuil", length: 2}, {name: "récupération", length: 1},
            {name: "PMA", length: 6}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 22) semaines = [
            {name: "endurance", length: 9}, {name: "récupération", length: 1}, {name: "seuil", length: 2}, {name: "récupération", length: 1}, 
            {name: "PMA", length: 7}, {name: "affutage", length: 2}
        ]
    }
    else if (prg == "Endurance") {
        if (longueurProgramme == 4) semaines = [
            {name: "endurance", length: 3}, {name: "affutage", length: 1}
        ]
        else if (longueurProgramme == 6) semaines = [
            {name: "endurance", length: 5}, {name: "affutage", length: 1}
        ]
        else if (longueurProgramme == 8) semaines = [
            {name: "endurance", length: 6}, {name: "FTP", length: 1}, {name: "affutage", length: 1}
        ]
        else if (longueurProgramme == 10) semaines = [
            {name: "endurance", length: 7}, {name: "FTP", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 12) semaines = [
            {name: "endurance", length: 9}, {name: "FTP", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 14) semaines = [
            {name: "endurance", length: 10}, {name: "FTP", length: 1}, {name: "seuil", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 16) semaines = [
            {name: "endurance", length: 11}, {name: "FTP", length: 2}, {name: "seuil", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 18) semaines = [
            {name: "endurance", length: 12}, {name: "récupération", length: 1}, {name: "FTP", length: 2}, {name: "seuil", length: 1}, 
            {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 20) semaines = [
            {name: "endurance", length: 12}, {name: "récupération", length: 1}, {name: "FTP", length: 3}, {name: "récupération", length: 1}, 
            {name: "seuil", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 22) semaines = [
            {name: "endurance", length: 14}, {name: "récupération", length: 1}, {name: "FTP", length: 3}, {name: "récupération", length: 1}, 
            {name: "seuil", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 24) semaines = [
            {name: "endurance", length: 15}, {name: "récupération", length: 1}, {name: "FTP", length: 3}, {name: "récupération", length: 1}, 
            {name: "seuil", length: 2}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 26) semaines = [
            {name: "endurance", length: 17}, {name: "récupération", length: 1}, {name: "FTP", length: 3}, {name: "récupération", length: 1}, 
            {name: "seuil", length: 2}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 28) semaines = [
            {name: "endurance", length: 18}, {name: "récupération", length: 1}, {name: "FTP", length: 4}, {name: "récupération", length: 1}, 
            {name: "seuil", length: 2},, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 30) semaines = [
            {name: "endurance", length: 19}, {name: "récupération", length: 1}, {name: "FTP", length: 4}, {name: "récupération", length: 1}, 
            {name: "seuil", length: 3}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 32) semaines = [
            {name: "endurance", length: 20}, {name: "récupération", length: 1}, {name: "FTP", length: 5}, {name: "récupération", length: 1}, 
            {name: "seuil", length: 3}, {name: "affutage", length: 2}
        ]
    }
    else if (prg == "GrandPrix") {
        if (longueurProgramme == 8) semaines = [
            {name: "endurance", length: 3}, {name: "seuil", length: 2}, {name: "PMA", length: 2}, {name: "affutage", length: 1}
        ]
        else if (longueurProgramme == 10) semaines = [
            {name: "endurance", length: 4}, {name: "seuil", length: 2}, {name: "PMA", length: 2}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 12) semaines = [
            {name: "endurance", length: 5}, {name: "seuil", length: 2}, {name: "PMA", length: 3}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 14) semaines = [
            {name: "endurance", length: 6}, {name: "seuil", length: 3}, {name: "PMA", length: 3}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 16) semaines = [
            {name: "endurance", length: 7}, {name: "seuil", length: 3}, {name: "récupération", length: 1}, {name: "PMA", length: 3}, 
            {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 18) semaines = [
            {name: "endurance", length: 7}, {name: "seuil", length: 4}, {name: "récupération", length: 1}, {name: "PMA", length: 4}, 
            {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 20) semaines = [
            {name: "endurance", length: 8}, {name: "récupération", length: 1}, {name: "seuil", length: 4}, {name: "récupération", length: 1}, 
            {name: "PMA", length: 4}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 22) semaines = [
            {name: "endurance", length: 9}, {name: "récupération", length: 1}, {name: "seuil", length: 4}, {name: "récupération", length: 1}, 
            {name: "PMA", length: 5}, {name: "affutage", length: 2}
        ]
    }
    else if (prg == "GranFondo") {
        if (longueurProgramme == 8) semaines = [
            {name: "endurance", length: 4}, {name: "FTP", length: 2}, {name: "seuil", length: 1}, {name: "affutage", length: 1}
        ]
        else if (longueurProgramme == 10) semaines = [
            {name: "endurance", length: 5}, {name: "FTP", length: 2}, {name: "seuil", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 12) semaines = [
            {name: "endurance", length: 6}, {name: "FTP", length: 2}, {name: "seuil", length: 1}, {name: "PMA", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 14) semaines = [
            {name: "endurance", length: 7}, {name: "FTP", length: 3}, {name: "seuil", length: 1}, {name: "PMA", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 16) semaines = [
            {name: "endurance", length: 8}, {name: "FTP", length: 3}, {name: "seuil", length: 2}, {name: "PMA", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 18) semaines = [
            {name: "endurance", length: 9}, {name: "FTP", length: 4}, {name: "seuil", length: 2}, {name: "PMA", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 20) semaines = [
            {name: "endurance", length: 10}, {name: "FTP", length: 4}, {name: "seuil", length: 2}, {name: "récupération", length: 1}, 
            {name: "PMA", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 22) semaines = [
            {name: "endurance", length: 10}, {name: "récupération", length: 1}, {name: "FTP", length: 5}, {name: "seuil", length: 2}, 
            {name: "récupération", length: 1}, {name: "PMA", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 24) semaines = [
            {name: "endurance", length: 11}, {name: "récupération", length: 1}, {name: "FTP", length: 5},
            {name: "seuil", length: 3}, {name: "récupération", length: 1}, {name: "PMA", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 26) semaines = [
            {name: "endurance", length: 12}, {name: "récupération", length: 1}, {name: "FTP", length: 5}, {name: "récupération", length: 1}, 
            {name: "seuil", length: 3}, {name: "récupération", length: 1}, {name: "PMA", length: 1}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 28) semaines = [
            {name: "endurance", length: 12}, {name: "récupération", length: 1}, {name: "FTP", length: 6}, {name: "récupération", length: 1}, 
            {name: "seuil", length: 3}, {name: "récupération", length: 1}, {name: "PMA", length: 2}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 30) semaines = [
            {name: "endurance", length: 13}, {name: "récupération", length: 1}, {name: "FTP", length: 6}, {name: "récupération", length: 1}, 
            {name: "seuil", length: 4}, {name: "récupération", length: 1}, {name: "PMA", length: 2}, {name: "affutage", length: 2}
        ]
    }
    else if (prg == "TimeTrial") {
        if (longueurProgramme == 6) semaines = [
            {name: "endurance", length: 2}, {name: "FTP", length: 1}, {name: "seuil", length: 1}, {name: "PMA", length: 1}, 
            {name: "affutage", length: 1}
        ]
        else if (longueurProgramme == 8) semaines = [
            {name: "endurance", length: 3}, {name: "FTP", length: 1}, {name: "seuil", length: 2}, {name: "PMA", length: 1}, 
            {name: "affutage", length: 1}
        ]
        else if (longueurProgramme == 10) semaines = [
            {name: "endurance", length: 3}, {name: "FTP", length: 2}, {name: "seuil", length: 2}, {name: "PMA", length: 1}, 
            {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 12) semaines = [
            {name: "endurance", length: 4}, {name: "FTP", length: 2}, {name: "seuil", length: 2}, {name: "PMA", length: 2}, 
            {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 14) semaines = [
            {name: "endurance", length: 4}, {name: "FTP", length: 2}, {name: "seuil", length: 3}, {name: "récupération", length: 1}, 
            {name: "PMA", length: 2}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 16) semaines = [
            {name: "endurance", length: 5}, {name: "FTP", length: 3}, {name: "seuil", length: 3}, {name: "récupération", length: 1}, 
            {name: "PMA", length: 2}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 18) semaines = [
            {name: "endurance", length: 6}, {name: "FTP", length: 3}, {name: "seuil", length: 3}, {name: "récupération", length: 1}, 
            {name: "PMA", length: 3}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 20) semaines = [
            {name: "endurance", length: 7}, {name: "FTP", length: 3}, {name: "seuil", length: 4}, {name: "récupération", length: 1}, 
            {name: "PMA", length: 3}, {name: "affutage", length: 2}
        ]
        else if (longueurProgramme == 22) semaines = [
            {name: "endurance", length: 8}, {name: "FTP", length: 3}, {name: "récupération", length: 1}, {name: "seuil", length: 4}, 
            {name: "récupération", length: 1}, {name: "PMA", length: 3}, {name: "affutage", length: 2}
        ]
    }

    return semaines;
}

function getEndPrgDay() {
    let endOfPrg = JSON.parse(localStorage.programme)[index].dateCourse;
    let endOfPrgDay = endOfPrg.slice(0, 2);
    let endOfPrgMonth = endOfPrg.slice(3, 5);
    let endOfPrgYear = endOfPrg.slice(6, 10);

    let endDate = new Date(`${endOfPrgYear}-${endOfPrgMonth}-${endOfPrgDay}`);
    var days = [6, 0, 1, 2, 3, 4, 5];
    let endDateDay = days[endDate.getDay()];
    let endDateDate = endDate.getDate();
    let endDateMonth = endDate.getMonth() + 1;
    let endDateYear = endDate.getFullYear();

    let EndPrg = {
        dayIndex: endDateDay,
        date: endDateDate,
        month: endDateMonth,
        year: endDateYear,
        dayNb: getDayNB365(endDateDate, endDateMonth, endDateYear)
    }
    return EndPrg;
}

function getStartPrgDay() {
    let addDay;
    endDate = getEndPrgDay();

    if (endDate.dayIndex >= 4) {
        nbDayPrg = ( Number(programme.longueurProgramme) * 7 ) - ( 7 - endDate.dayIndex);
        addDay = false;
    }
    else {
        nbDayPrg = ( Number(programme.longueurProgramme) * 7 ) + endDate.dayIndex;
        addDay = true;
    }

    startDayNb = endDate.dayNb - nbDayPrg;
    startYear = endDate.year;
    if (startDayNb < 0) {
        startYear--;
        if (startYear % 4 == 0) startDayNb += 366
        else startDayNb += 365
    }

    return {dayNb: startDayNb, year: startYear};
}

function getEtapeActuel() {
    let etapeActuel;
    let semaines = getSemaines(programme.type) || getSemaines(programme[index].type);
    let startDayNb = getStartPrgDay().dayNb;
    let startYear = getStartPrgDay().year;
    let aujourdHui = getAujourdHui();
    let aujourdHuiDayNb = getDayNB365(aujourdHui.day, aujourdHui.month, aujourdHui.year);

    if (startYear == aujourdHui.year) semaineActuel = (aujourdHuiDayNb - startDayNb) / 7
    else if (startYear > aujourdHui.year) semaineActuel = 0;
    else {
        startYear--;
        if (startYear % 4 == 0) aujourdHuiDayNb += 366
        else aujourdHuiDayNb += 365
        semaineActuel = (aujourdHuiDayNb - startDayNb) / 7
    }

    let semaineLength = 0;
    for (let i = 0; i < semaines.length; i++) {
        semaineLength += semaines[i].length;
        if (semaineActuel < semaineLength) {
            etapeActuel = semaines[i].name;
            return [etapeActuel, i];
        }
    }
}

function getEtapeWithIndex(Index, semaines) {
    let total = 0;
    for (let i = 0; i < semaines.length; i++) {
        total += semaines[i].length;
        if (Index < total) {
            return semaines[i].name;
        }
    }
}

function getDuree(seance) {
    duree = 0
    for (let i = 0; i < seance.length; i++) {
        if (seance[i].typeValue != "startSerie" && seance[i].typeValue != "endSerie") {
            duree += seance[i].value;
        }
    }

    return get00i00i00(duree);
}

function getIntensite(seance) {
    Intensite = 0
    for (let i = 0; i < seance.length; i++) {
        if (seance[i].typeValue != "startSerie" && seance[i].typeValue != "endSerie") {
            Intensite +=  ( ( seance[i].value * ( seance[i].Z * ( 1 / 7 )) ) * 100 ) / duree;
        }
    }
    Intensite = Math.round(Intensite);

    return Intensite;
}

function getStress(seance) {
    stress = 0
    Intensite = getIntensite(seance);
    for (let i = 0; i < seance.length; i++) {
        if (seance[i].typeValue != "startSerie" && seance[i].typeValue != "endSerie") {
            stress += ( Math.pow(Intensite, 0.41) * seance[i].value ) / 180;
        }
    }
    stress = Math.round(stress);

    return stress;
}

function getTpsSeance(seance) {
    let tps = 0;
    for (let i = 0; i < seance.seance.length; i++) {
        if (seance.seance[i].typeValue != "startSerie" && seance.seance[i].typeValue != "endSerie") {
            tps += seance.seance[i].value
        }
    }
    return tps;
}

function getStartLevel(typePrg, typeExo) {
    let levelIndex;
    let entrainementActuel = sessionStorage.entrainementActuel;

    switch (typePrg) {
        case "Criterium":
            switch (typeExo) {
                case "seuil5_5":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 1
                    else if (entrainementActuel == "1-3Heure") levelIndex = 2
                    else if (entrainementActuel == "4-7Heure") levelIndex = 3
                    else if (entrainementActuel == "8-12Heure") levelIndex = 5
                    else if (entrainementActuel == "13-18Heure") levelIndex = 7
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 9
                    break;
                case "Gimenez":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 0
                    else if (entrainementActuel == "1-3Heure") levelIndex = 1
                    else if (entrainementActuel == "4-7Heure") levelIndex = 2
                    else if (entrainementActuel == "8-12Heure") levelIndex = 3
                    else if (entrainementActuel == "13-18Heure") levelIndex = 5
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 7
                    break;
                case "PMA30_30":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 4
                    else if (entrainementActuel == "1-3Heure") levelIndex = 5
                    else if (entrainementActuel == "4-7Heure") levelIndex = 6
                    else if (entrainementActuel == "8-12Heure") levelIndex = 9
                    else if (entrainementActuel == "13-18Heure") levelIndex = 12
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 16
                    break;
                case "PMA1_1":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 3
                    else if (entrainementActuel == "1-3Heure") levelIndex = 4
                    else if (entrainementActuel == "4-7Heure") levelIndex = 5
                    else if (entrainementActuel == "8-12Heure") levelIndex = 7
                    else if (entrainementActuel == "13-18Heure") levelIndex = 8
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 9
                    break;
                case "PMA3_3":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 1
                    else if (entrainementActuel == "1-3Heure") levelIndex = 2
                    else if (entrainementActuel == "4-7Heure") levelIndex = 3
                    else if (entrainementActuel == "8-12Heure") levelIndex = 4
                    else if (entrainementActuel == "13-18Heure") levelIndex = 5
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 6
                    break;
            }
            break;

        case "Endurance":
            switch (typeExo) {
                case "Sweet Spot":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 2
                    else if (entrainementActuel == "1-3Heure") levelIndex = 4
                    else if (entrainementActuel == "4-7Heure") levelIndex = 6
                    else if (entrainementActuel == "8-12Heure") levelIndex = 8
                    else if (entrainementActuel == "13-18Heure") levelIndex = 10
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 12
                    break;
                case "seuil5_5":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 1
                    else if (entrainementActuel == "1-3Heure") levelIndex = 2
                    else if (entrainementActuel == "4-7Heure") levelIndex = 3
                    else if (entrainementActuel == "8-12Heure") levelIndex = 5
                    else if (entrainementActuel == "13-18Heure") levelIndex = 7
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 9
                    break;
                case "Gimenez":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 0
                    else if (entrainementActuel == "1-3Heure") levelIndex = 1
                    else if (entrainementActuel == "4-7Heure") levelIndex = 2
                    else if (entrainementActuel == "8-12Heure") levelIndex = 3
                    else if (entrainementActuel == "13-18Heure") levelIndex = 5
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 7
                    break;
            }
            break;
            
        case "GrandPrix":
            switch (typeExo) {
                case "seuil5_5":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 1
                    else if (entrainementActuel == "1-3Heure") levelIndex = 2
                    else if (entrainementActuel == "4-7Heure") levelIndex = 3
                    else if (entrainementActuel == "8-12Heure") levelIndex = 5
                    else if (entrainementActuel == "13-18Heure") levelIndex = 7
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 9
                    break;
                case "Gimenez":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 0
                    else if (entrainementActuel == "1-3Heure") levelIndex = 1
                    else if (entrainementActuel == "4-7Heure") levelIndex = 2
                    else if (entrainementActuel == "8-12Heure") levelIndex = 3
                    else if (entrainementActuel == "13-18Heure") levelIndex = 5
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 7
                    break;
                case "PMA30_30":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 4
                    else if (entrainementActuel == "1-3Heure") levelIndex = 5
                    else if (entrainementActuel == "4-7Heure") levelIndex = 6
                    else if (entrainementActuel == "8-12Heure") levelIndex = 9
                    else if (entrainementActuel == "13-18Heure") levelIndex = 12
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 16
                    break;
                case "PMA1_1":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 3
                    else if (entrainementActuel == "1-3Heure") levelIndex = 4
                    else if (entrainementActuel == "4-7Heure") levelIndex = 5
                    else if (entrainementActuel == "8-12Heure") levelIndex = 7
                    else if (entrainementActuel == "13-18Heure") levelIndex = 8
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 9
                    break;
                case "PMA3_3":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 1
                    else if (entrainementActuel == "1-3Heure") levelIndex = 2
                    else if (entrainementActuel == "4-7Heure") levelIndex = 3
                    else if (entrainementActuel == "8-12Heure") levelIndex = 4
                    else if (entrainementActuel == "13-18Heure") levelIndex = 5
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 6
                    break;
            }
            break;

        case "GranFondo":
            switch (typeExo) {
                case "Sweet Spot":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 2
                    else if (entrainementActuel == "1-3Heure") levelIndex = 4
                    else if (entrainementActuel == "4-7Heure") levelIndex = 6
                    else if (entrainementActuel == "8-12Heure") levelIndex = 8
                    else if (entrainementActuel == "13-18Heure") levelIndex = 10
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 12 
                    break;
                case "seuil5_5":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 1
                    else if (entrainementActuel == "1-3Heure") levelIndex = 2
                    else if (entrainementActuel == "4-7Heure") levelIndex = 3
                    else if (entrainementActuel == "8-12Heure") levelIndex = 5
                    else if (entrainementActuel == "13-18Heure") levelIndex = 7
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 9
                    break;
                case "Gimenez":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 0
                    else if (entrainementActuel == "1-3Heure") levelIndex = 1
                    else if (entrainementActuel == "4-7Heure") levelIndex = 2
                    else if (entrainementActuel == "8-12Heure") levelIndex = 3
                    else if (entrainementActuel == "13-18Heure") levelIndex = 5
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 7
                    break;
                case "PMA30_30":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 4
                    else if (entrainementActuel == "1-3Heure") levelIndex = 5
                    else if (entrainementActuel == "4-7Heure") levelIndex = 6
                    else if (entrainementActuel == "8-12Heure") levelIndex = 9
                    else if (entrainementActuel == "13-18Heure") levelIndex = 12
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 16
                    break;
                case "PMA1_1":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 3
                    else if (entrainementActuel == "1-3Heure") levelIndex = 4
                    else if (entrainementActuel == "4-7Heure") levelIndex = 5
                    else if (entrainementActuel == "8-12Heure") levelIndex = 7
                    else if (entrainementActuel == "13-18Heure") levelIndex = 8
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 9
                    break;
                case "PMA3_3":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 1
                    else if (entrainementActuel == "1-3Heure") levelIndex = 2
                    else if (entrainementActuel == "4-7Heure") levelIndex = 3
                    else if (entrainementActuel == "8-12Heure") levelIndex = 4
                    else if (entrainementActuel == "13-18Heure") levelIndex = 5
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 6
                    break;
            }
            break;

        case "TimeTrial":
            switch (typeExo) {
                case "Sweet Spot":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 2
                    else if (entrainementActuel == "1-3Heure") levelIndex = 4
                    else if (entrainementActuel == "4-7Heure") levelIndex = 6
                    else if (entrainementActuel == "8-12Heure") levelIndex = 8
                    else if (entrainementActuel == "13-18Heure") levelIndex = 10
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 12
                    break;
                case "seuil5_5":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 1
                    else if (entrainementActuel == "1-3Heure") levelIndex = 2
                    else if (entrainementActuel == "4-7Heure") levelIndex = 3
                    else if (entrainementActuel == "8-12Heure") levelIndex = 5
                    else if (entrainementActuel == "13-18Heure") levelIndex = 7
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 9
                    break;
                case "Gimenez":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 0
                    else if (entrainementActuel == "1-3Heure") levelIndex = 1
                    else if (entrainementActuel == "4-7Heure") levelIndex = 2
                    else if (entrainementActuel == "8-12Heure") levelIndex = 3
                    else if (entrainementActuel == "13-18Heure") levelIndex = 5
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 7
                    break;
                case "PMA30_30":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 4
                    else if (entrainementActuel == "1-3Heure") levelIndex = 5
                    else if (entrainementActuel == "4-7Heure") levelIndex = 6
                    else if (entrainementActuel == "8-12Heure") levelIndex = 9
                    else if (entrainementActuel == "13-18Heure") levelIndex = 12
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 16
                    break;
                case "PMA1_1":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 3
                    else if (entrainementActuel == "1-3Heure") levelIndex = 4
                    else if (entrainementActuel == "4-7Heure") levelIndex = 5
                    else if (entrainementActuel == "8-12Heure") levelIndex = 7
                    else if (entrainementActuel == "13-18Heure") levelIndex = 8
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 9
                    break;
                case "PMA3_3":
                    if (entrainementActuel == "aucunEntrainement") levelIndex = 1
                    else if (entrainementActuel == "1-3Heure") levelIndex = 2
                    else if (entrainementActuel == "4-7Heure") levelIndex = 3
                    else if (entrainementActuel == "8-12Heure") levelIndex = 4
                    else if (entrainementActuel == "13-18Heure") levelIndex = 5
                    else if (entrainementActuel == "19HeureEtPlus") levelIndex = 6
                    break;
            }
            break;
    }

    return levelIndex;
}

function editSemI(nbSem, addLevel, typeExo, TpsSem, iSem, startIndex) {
    index = getAfterUrl();
    let semainesI = new Array();
    entrainementPrg = Number(programme[index].entrainementProgramme);
    jourDispo = programme[index].jourDispo;
    PRG = JSON.parse(localStorage.PRG);

    for (let i = 0; i < nbSem; i++) {
        tpsSem = TpsSem[i];
        semainesI[i] = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};
        semainesIArray = [semainesI[i].lundi, semainesI[i].mardi, semainesI[i].mercredi, semainesI[i].jeudi,
        semainesI[i].vendredi, semainesI[i].samedi, semainesI[i].dimanche];

        repartionIntensite = getBestRepartionIntensite(iSem[startIndex], jourDispo);
        repartionIntensiteArray = [repartionIntensite.lundi, repartionIntensite.mardi, repartionIntensite.mercredi, repartionIntensite.jeudi,
            repartionIntensite.vendredi, repartionIntensite.samedi, repartionIntensite.dimanche];

        levelIndex = 0;

        function seance(level, y) {
            if (typeExo == "PMA30_30") semainesIArray[y] = PMA30_30( levelsPMA30_30[level] )
            else if (typeExo == "PMA1_1") semainesIArray[y] = PMA1_1( levelsPMA1_1[level] )
            else if (typeExo == "PMA3_3") semainesIArray[y] = PMA3_3( levelsPMA3_3[level] )
            else if (typeExo == "seuil5_5") semainesIArray[y] = seuil5_5( levelsSeuil5_5[level] )
            else if (typeExo == "Gimenez") semainesIArray[y] = gimenez( levelsGimenez[level] )
            else if (typeExo == "Sweet Spot") semainesIArray[y] = sweetspot( levelsSweetSpot[level] )
        }

        for (let y = 0; y < repartionIntensiteArray.length; y++) {
            if (repartionIntensiteArray[y] == true) {
                seance(addLevel[i][levelIndex], y);
                levelIndex++;
            }
        }

        TpsISem = 0;
        for (let u = 0; u < semainesIArray.length; u++) {
            if (semainesIArray[u] != "") {
                for (let t = 0; t < semainesIArray[u].seance.length; t++) {
                    TpsISem += semainesIArray[u].seance[t].value
                }
            }
        }

        End = new Array();
        for (let y = 0; y < entrainementPrg - iSem[startIndex]; y++) {
            End[y] = 0;
        }
        
        while (TpsSem[i] - TpsISem / 60 > End.reduce(reducer)) {
            for (let y = 0; y < entrainementPrg - iSem[startIndex]; y++) {
                End[y] += Math.floor(Math.random() * (TpsSem[i] / 40));
            }
        }

        semDown = 0
        while (TpsSem[i] < Math.round(End.reduce(reducer) + TpsISem / 60)) {
            End[semDown] -= 0.1

            if (semDown == End.length - 1) semDown = 0;
            else semDown++;
        }

        semainesI[i] = {lundi: semainesIArray[0], mardi: semainesIArray[1], mercredi: semainesIArray[2], jeudi: semainesIArray[3],
            vendredi: semainesIArray[4], samedi: semainesIArray[5], dimanche: semainesIArray[6]};
        endIndex = 0;
        if (jourDispo.samedi == true && semainesI[i].samedi == "" && endIndex < entrainementPrg - iSem[startIndex]) {
            semainesI[i].samedi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.dimanche == true && semainesI[i].dimanche == "" && endIndex < entrainementPrg - iSem[startIndex]) {
            semainesI[i].dimanche = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.mercredi == true && semainesI[i].mercredi == "" && endIndex < entrainementPrg - iSem[startIndex]) {
            semainesI[i].mercredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.jeudi == true && semainesI[i].jeudi == "" && endIndex < entrainementPrg - iSem[startIndex]) {
            semainesI[i].jeudi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.vendredi == true && semainesI[i].vendredi == "" && endIndex < entrainementPrg - iSem[startIndex]) {
            semainesI[i].vendredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.lundi == true && semainesI[i].lundi == "" && endIndex < entrainementPrg - iSem[startIndex]) {
            semainesI[i].lundi = enduranceFondamentale(End[endIndex])
            endIndex++;
        }

        if (jourDispo.mardi == true && semainesI[i].mardi == "" && endIndex < entrainementPrg - iSem[startIndex]) {
            semainesI[i].mardi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }
        index = getAfterUrl();
        PRG[index][startIndex + i] = semainesI[i]
        localStorage.PRG = JSON.stringify(PRG)
    }
    return semainesI;
}

function getBestRepartionIntensite(Isem, jourDispo) {
    let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    let jourIntensite = {lundi: false, mardi: false, mercredi: false, jeudi: false, vendredi: false, samedi: false, dimanche: false};
    let jourIntensiteArray = [
        jourIntensite.lundi,
        jourIntensite.mardi,
        jourIntensite.mercredi,
        jourIntensite.jeudi,
        jourIntensite.vendredi,
        jourIntensite.samedi,
        jourIntensite.dimanche
    ]
    let jourDispoArray = [
        jourDispo.lundi,
        jourDispo.mardi,
        jourDispo.mercredi,
        jourDispo.jeudi,
        jourDispo.vendredi,
        jourDispo.samedi,
        jourDispo.dimanche
    ]

    if (getNbJourDispo(jourDispo) == 7) {
        if (Isem == 1) {
            let index1 = 0;
    
            fromIndexToDay(index1);
        }
        else if (Isem == 2) {
            let index1 = 0;
            let index2 = 2;
    
            fromIndexToDay(index1);
            fromIndexToDay(index2);
        }
        else if (Isem == 3) {
            let index1 = 0;
            let index2 = 2;
            let index3 = 5;
    
            fromIndexToDay(index1);
            fromIndexToDay(index2);
            fromIndexToDay(index3);
        }
    }
    else {
        let meilleurEtatFatigue = getMeilleurEtatFatigue(jourDispo);

        if (meilleurEtatFatigue.jour == "lundi") jourIntensite.lundi = true
        else if (meilleurEtatFatigue.jour == "mardi") jourIntensite.mardi = true
        else if (meilleurEtatFatigue.jour == "mercredi") jourIntensite.mercredi = true
        else if (meilleurEtatFatigue.jour == "jeudi") jourIntensite.jeudi = true
        else if (meilleurEtatFatigue.jour == "vendredi") jourIntensite.vendredi = true
        else if (meilleurEtatFatigue.jour == "samedi") jourIntensite.samedi = true
        else if (meilleurEtatFatigue.jour == "dimanche") jourIntensite.dimanche = true

        let index1;
        switch (meilleurEtatFatigue.jour) {
            case "lundi":
                index1 = 0;
                break;
            case "mardi":
                index1 = 1;
                break;
            case "mercredi":
                index1 = 2;
                break;
            case "jeudi":
                index1 = 3;
                break;
            case "vendredi":
                index1 = 4;
                break;
            case "samedi":
                index1 = 5;
                break;
            case "dimanche":
                index1 = 6;
                break;
        }

        if (Isem == 1) {
            fromIndexToDay(index1);
        }
        else if (Isem == 2) {
            let index2;
            let ecartBas;
            let ecartHaut;

            if (index1 + 3 <= 6) {
                if (jourDispoArray[index1 + 3] == true) index2 = index1 + 3;
                else {
                    i = 1;
                    while (index1 + 3 - i > index1 && i + 1 ) {
                        if (jourDispoArray[index1 + 3 - i] == true) {
                            ecartBas = i;
                            i = 10;
                        }
                        i++;
                    }
    
                    i = 1;
                    while (index1 + 3 + i <= 6) {
                        if (jourDispoArray[index1 + 3 - i] == true) {
                            ecartHaut = i;
                            i = 10;
                        }
                        i++;
                    }

                    if (index1 + 2 - ecartBas == index1 + 3 + ecartHaut) index2 = index1 + 3 - ecartBas
                    else if (index1 + 2 - ecartBas < index1 + 3 + ecartHaut) index2 = index1 + 3 - ecartBas
                    else index2 = index1 + 3 + ecartHaut
                }
            }
            else {
                if (jourDispoArray[index1 - 3]  == true) index2 = index1 - 3;
                else {
                    i = 1;
                    while (index1 - 3 - i > index1 && i + 1 ) {
                        if (jourDispoArray[index1 - 3 - i] == true) {
                            ecartBas = i;
                            i = 10;
                        }
                        i++;
                    }
    
                    i = 1;
                    while (index1 - 3 + i <= 6) {
                        if (jourDispoArray[index1 - 3 - i] == true) {
                            ecartHaut = i;
                            i = 10;
                        }
                        i++;
                    }

                    if (index1 - 2 - ecartBas == index1 - 3 + ecartHaut) index2 = index1 - 3 - ecartBas
                    else if (index1 - 2 - ecartBas < index1 - 3 + ecartHaut) index2 = index1 - 3 - ecartBas
                    else index2 = index1 - 3 + ecartHaut
                }
            }
            fromIndexToDay(index2)
        }
        else if (Isem == 3) {
            let index2;
            let index3;

            switch (index1) {
                case 0:
                    if (jourDispoArray[2] == true) {
                        index2 = 2;
                        if (jourDispoArray[4] == true) index3 = 4
                        else index3 = 5
                    }
                    else {
                        index2 = 3;
                        index3 = 5;
                    }
                    break;
                case 1:
                    if (jourDispoArray[3] == true) {
                        index2 = 3;
                        if (jourDispoArray[5] == true) index3 = 5
                        else index3 = 6
                    }
                    else {
                        index2 = 4;
                        index3 = 6;
                    }
                    break;
                case 2:
                    if (jourDispoArray[4] == true) {
                        index2 = 4;
                        if (jourDispoArray[6] == true) index3 = 6
                        else index3 = 0
                    }
                    else {
                        index2 = 5;
                        index3 = 0;
                    }
                    break;
                case 3:
                    if (jourDispoArray[5] == true) {
                        index2 = 5;
                        if (jourDispoArray[0] == true) index3 = 0
                        else index3 = 1
                    }
                    else {
                        index2 = 6;
                        index3 = 1;
                    }
                    break;
                case 4:
                    if (jourDispoArray[6] == true) {
                        index2 = 6;
                        if (jourDispoArray[1] == true) index3 = 1
                        else index3 = 2
                    }
                    else {
                        index2 = 0;
                        index3 = 2;
                    }
                    break;
                case 5:
                    if (jourDispoArray[0] == true) {
                        index2 = 0;
                        if (jourDispoArray[2] == true) index3 = 2
                        else index3 = 3
                    }
                    else {
                        index2 = 1;
                        index3 = 3;
                    }
                    break;
                case 6:
                    if (jourDispoArray[1] == true) {
                        index2 = 1;
                        if (jourDispoArray[3] == true) index3 = 3
                        else index3 = 4
                    }
                    else {
                        index2 = 2;
                        index3 = 4;
                    }
                    break;
            }
            fromIndexToDay(index2);
            fromIndexToDay(index3);
        }
    }
    function fromIndexToDay(Index) {
        if (Index == 0) jourIntensite.lundi = true
        else if (Index == 1) jourIntensite.mardi = true
        else if (Index == 2) jourIntensite.mercredi = true
        else if (Index == 3) jourIntensite.jeudi = true
        else if (Index == 4) jourIntensite.vendredi = true
        else if (Index == 5) jourIntensite.samedi = true
        else if (Index == 6) jourIntensite.dimanche = true
    }
    return jourIntensite;
}

function getNbJourDispo(jourDispo) {
    nbJourDispo = 0;
    if (jourDispo.lundi == true) nbJourDispo++
    if (jourDispo.mardi == true) nbJourDispo++
    if (jourDispo.mercredi == true) nbJourDispo++
    if (jourDispo.jeudi == true) nbJourDispo++
    if (jourDispo.vendredi == true) nbJourDispo++
    if (jourDispo.samedi == true) nbJourDispo++
    if (jourDispo.dimanche == true) nbJourDispo++

    return nbJourDispo;
}

function getMeilleurEtatFatigue(jourDispo) {
    let EtatFatigueJour = new Array();
    
    if (jourDispo.lundi == true) {
        EtatFatigueJour[0] = 0
        if (jourDispo.dimanche == false) {
            EtatFatigueJour[0] = 1;
            if (jourDispo.samedi == false) {
                EtatFatigueJour[0] = 2;
                if (jourDispo.vendredi == false) {
                    EtatFatigueJour[0] = 3;
                    if (jourDispo.jeudi == false) {
                        EtatFatigueJour[0] = 4;
                    }
                }
            }
        }
    }

    if (jourDispo.mardi == true) {
        EtatFatigueJour[1] = 0
        if (jourDispo.lundi == false) {
            EtatFatigueJour[1] = 1;
            if (jourDispo.dimanche == false) {
                EtatFatigueJour[1] = 2;
                if (jourDispo.samedi == false) {
                    EtatFatigueJour[1] = 3;
                    if (jourDispo.vendredi == false) {
                        EtatFatigueJour[1] = 4;
                    }
                }
            }
        }
    }

    if (jourDispo.mercredi == true) {
        EtatFatigueJour[2] = 0
        if (jourDispo.mardi == false) {
            EtatFatigueJour[2] = 1;
            if (jourDispo.lundi == false) {
                EtatFatigueJour[2] = 2;
                if (jourDispo.dimanche == false) {
                    EtatFatigueJour[2] = 3;
                    if (jourDispo.samedi == false) {
                        EtatFatigueJour[2] = 4;
                    }
                }
            }
        }
    }

    if (jourDispo.jeudi == true) {
        EtatFatigueJour[3] = 0
        if (jourDispo.mercredi == false) {
            EtatFatigueJour[3] = 1;
            if (jourDispo.mardi == false) {
                EtatFatigueJour[3] = 2;
                if (jourDispo.lundi == false) {
                    EtatFatigueJour[3] = 3;
                    if (jourDispo.dimanche == false) {
                        EtatFatigueJour[3] = 4;
                    }
                }
            }
        }
    }

    if (jourDispo.vendredi == true) {
        EtatFatigueJour[4] = 0
        if (jourDispo.jeudi == false) {
            EtatFatigueJour[4] = 1;
            if (jourDispo.mercredi == false) {
                EtatFatigueJour[4] = 2;
                if (jourDispo.mardi == false) {
                    EtatFatigueJour[4] = 3;
                    if (jourDispo.lundi == false) {
                        EtatFatigueJour[4] = 4;
                    }
                }
            }
        }
    }

    if (jourDispo.samedi == true) {
        EtatFatigueJour[5] = 0
        if (jourDispo.vendredi == false) {
            EtatFatigueJour[5] = 1;
            if (jourDispo.jeudi == false) {
                EtatFatigueJour[5] = 2;
                if (jourDispo.mercredi == false) {
                    EtatFatigueJour[5] = 3;
                    if (jourDispo.mardi == false) {
                        EtatFatigueJour[5] = 4;
                    }
                }
            }
        }
    }

    if (jourDispo.dimanche == true) {
        EtatFatigueJour[6] = 0
        if (jourDispo.samedi == false) {
            EtatFatigueJour[6] = 1;
            if (jourDispo.vendredi == false) {
                EtatFatigueJour[6] = 2;
                if (jourDispo.jeudi == false) {
                    EtatFatigueJour[6] = 3;
                    if (jourDispo.mercredi == false) {
                        EtatFatigueJour[6] = 4;
                    }
                }
            }
        }
    }

    let Max = getMax(EtatFatigueJour);
    let IndexMax = getIndexMax(EtatFatigueJour);
    let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    
    let meilleurEtatFatigue = {jour: jour[IndexMax], nbJrRepos: Max}
    return meilleurEtatFatigue;
}