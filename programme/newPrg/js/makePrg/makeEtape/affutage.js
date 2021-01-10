function Affutage(typePrg) {
    let jourDispo = JSON.parse(sessionStorage.jourDispo);
    let semainesAffutage = new Array();
    let semaines = getSemaines(typePrg);
    let startDate = getStartPrgDay();

    if (typePrg == "Criterium") I = ["Seuil", "PMAHigh"]
    else if (typePrg == "GrandPrix") I = ["Seuil", "PMAMedium"]
    else if (typePrg == "TimeTrial") I = ["Seuil", "PMALow"]
    else if (typePrg == "GranFondo") I = ["SweetSpot", "Seuil"]
    else if (typePrg == "Endurance") I = ["SweetSpot", "Seuil"]
    
    if (startDate.addDay == true) {
        semainesAffutage = makeBasicSemAffutage(jourDispo, semaines.affutage, I).concat(makeAddDayAffutage(jourDispo))
    }
    else {
        semainesAffutage = makeBasicSemAffutage(jourDispo, semaines.affutage - 1, [I[0]]).concat(makeAddDayAffutage(jourDispo, I[1]))
    }
    
    return semainesAffutage;
}

function makeBasicSemAffutage(jourDispo, nbSem, I) {
    let jourDispoArray = [jourDispo.lundi, jourDispo.mardi, jourDispo.mercredi, jourDispo.jeudi, jourDispo.vendredi, jourDispo.samedi, jourDispo.dimanche];
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementActuelNb = sessionStorage.entrainementActuelNb;
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);
    let nbSeanceSem;
    if (entrainementPrg == 4) nbSeanceSem = 2;
    else nbSeanceSem = 3;

    let jourSeance = new Array();
    if (nbSeanceSem == 3) {
        let index;
        for (let i = 6; i >= 0; i--) {
            if (jourDispoArray[i] == true) index = i
        }
        jourSeance[0] = index;

        let index1;
        for (let i = index + 2; i < 7; i++) {
            if (jourDispoArray[i] == true) {
                index1 = i;
                i = 7;
            }
        }
        jourSeance[1] = index1;

        for (let i = 0; i < 7; i++) {
            if (jourDispoArray[i] == true) index = i
        }
        jourSeance[2] = index;
    }
    else if (nbSeanceSem == 2) {
        let index;
        for (let i = 6; i >= 0; i--) {
            if (jourDispoArray[i] == true) index = i
        }
        jourSeance[0] = index;

        for (let i = 0; i < 7; i++) {
            if (jourDispoArray[i] == true) index = i
        }
        jourSeance[1] = index;

        ecart = jourSeance[1] - jourSeance[0];
        if (ecart > 4) {
            if ( jourDispoArray[jourSeance[0] + 1] == true ) jourSeance[0]++
            ecart = jourSeance[1] - jourSeance[0];
            if ( jourDispoArray[jourSeance[1] - 1] == true && ecart > 4) jourSeance[1]--

            ecart = jourSeance[1] - jourSeance[0];
            if (ecart > 4) {
                if ( jourDispoArray[jourSeance[0] + 2] == true ) {
                    jourSeance[0]++
                    jourSeance[0]++
                }
                ecart = jourSeance[1] - jourSeance[0];
                if ( jourDispoArray[jourSeance[1] - 2] == true && ecart > 4) {
                    jourSeance[1]--
                    jourSeance[1]--
                }
            }
        }
    }

    let seanceIntense = new Array();
    for (let i = 0; i < I.length; i++) {
        if (I[i] == "PMAHigh") {
            if (entrainementActuel == "aucunEntrainement") level = levelsPMA30_30[0]
            else if (entrainementActuel == "1-3Heure") level = levelsPMA30_30[2]
            else if (entrainementActuel == "4-7Heure") level = levelsPMA30_30[4]
            else if (entrainementActuel == "8-12Heure") level = levelsPMA30_30[6]
            else if (entrainementActuel == "13-18Heure") level = levelsPMA30_30[9]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsPMA30_30[12]
            seanceIntense[i] = PMA30_30(level);
        }
        else if (I[i] == "PMAMedium") {
            if (entrainementActuel == "aucunEntrainement") level = levelsPMA1_1[0]
            else if (entrainementActuel == "1-3Heure") level = levelsPMA1_1[2]
            else if (entrainementActuel == "4-7Heure") level = levelsPMA1_1[4]
            else if (entrainementActuel == "8-12Heure") level = levelsPMA1_1[6]
            else if (entrainementActuel == "13-18Heure") level = levelsPMA1_1[8]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsPMA1_1[10]
            seanceIntense[i] = PMA1_1(level);
        }
        else if (I[i] == "PMALow") {
            if (entrainementActuel == "aucunEntrainement") level = levelsPMA3_3[0]
            else if (entrainementActuel == "1-3Heure") level = levelsPMA3_3[1]
            else if (entrainementActuel == "4-7Heure") level = levelsPMA3_3[2]
            else if (entrainementActuel == "8-12Heure") level = levelsPMA3_3[3]
            else if (entrainementActuel == "13-18Heure") level = levelsPMA3_3[4]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsPMA3_3[5]
            seanceIntense[i] = PMA3_3(level);
        }
        else if (I[i] == "Seuil") {
            if (entrainementActuel == "aucunEntrainement") level = levelsSeuil5_5[0]
            else if (entrainementActuel == "1-3Heure") level = levelsSeuil5_5[1]
            else if (entrainementActuel == "4-7Heure") level = levelsSeuil5_5[2]
            else if (entrainementActuel == "8-12Heure") level = levelsSeuil5_5[3]
            else if (entrainementActuel == "13-18Heure") level = levelsSeuil5_5[4]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsSeuil5_5[6]
            seanceIntense[i] = seuil5_5(level);
        }
        else if (I[i] == "Gimenez") {
            if (entrainementActuel == "aucunEntrainement") level = levelsGimenez[0]
            else if (entrainementActuel == "1-3Heure") level = levelsGimenez[1]
            else if (entrainementActuel == "4-7Heure") level = levelsGimenez[2]
            else if (entrainementActuel == "8-12Heure") level = levelsGimenez[3]
            else if (entrainementActuel == "13-18Heure") level = levelsGimenez[4]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsGimenez[5]
            seanceIntense[i] = gimenez(level);
        }
        else if (I[i] == "SweetSpot") {
            if (entrainementActuel == "aucunEntrainement") level = levelsSweetSpot[0]
            else if (entrainementActuel == "1-3Heure") level = levelsSweetSpot[1]
            else if (entrainementActuel == "4-7Heure") level = levelsSweetSpot[2]
            else if (entrainementActuel == "8-12Heure") level = levelsSweetSpot[4]
            else if (entrainementActuel == "13-18Heure") level = levelsSweetSpot[6]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsSweetSpot[8]
            seanceIntense[i] = sweetspot(level);
        }
    }

    let semainesAffutage = new Array();
    for (let i = 0; i < nbSem; i++) {
        semainesAffutage[i] = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};
        let TpsMax = Number(sessionStorage.tpsSemaine);
        let TpsSem = getTpsSem(TpsMax, entrainementActuelNb, entrainementPrg, nbSem);

        if (jourSeance.length == 2) {
            for (let y = 0; y < nbSem; y++) {
                TpsSem[i] = TpsSem[i] * ( 1 / 2 );
            }

            for (let y = 0; y < 2; y++) {
                if (y == 0) seance = enduranceFondamentale(TpsSem[i])
                else if (y == 1) seance = seanceIntense[i]
                attributeDaySeance(jourSeance[y], seance);
            }
        }
        else if (jourSeance.length == 3) {
            for (let i = 0; i < nbSem; i++) {
                TpsSem[i] = TpsSem[i] * ( 2 / 3 );
            }

            while (TpsSem[i] > End.reduce(reducer)) {
                for (let y = 0; y < 2; y++) {
                    End[y] += Math.floor(Math.random() * (TpsSem[i] / 40));
                }
            }

            for (let y = 0; y < 3; y++) {
                if (y == 0) seance = enduranceFondamentale(End[y])
                else if (y == 1) seance = seanceIntense[i]
                else if (y == 2) seance = enduranceFondamentale(End[y] / 1.8)
                attributeDaySeance(jourSeance[y], seance);
            }
        }

        function attributeDaySeance(day, seance) {
            if (day == 0) semainesAffutage[i].lundi = seance
            else if (day == 1) semainesAffutage[i].mardi = seance
            else if (day == 2) semainesAffutage[i].mercredi = seance
            else if (day == 3) semainesAffutage[i].jeudi = seance
            else if (day == 4) semainesAffutage[i].vendredi = seance
            else if (day == 5) semainesAffutage[i].samedi = seance
            else if (day == 6) semainesAffutage[i].dimanche = seance
        }
    }
    
    return semainesAffutage;
}

function makeAddDayAffutage(jourDispo, I) {
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementActuelNb = sessionStorage.entrainementActuelNb;
    let jourDispoArray = [
        jourDispo.lundi,
        jourDispo.mardi,
        jourDispo.mercredi,
        jourDispo.jeudi,
        jourDispo.vendredi,
        jourDispo.samedi,
        jourDispo.dimanche
    ]
    let endDate = getEndPrgDay();
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);
    let addDayAffutage = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};
    let addDayAffutageArray = [
        addDayAffutage.lundi,
        addDayAffutage.mardi,
        addDayAffutage.mercredi,
        addDayAffutage.jeudi,
        addDayAffutage.vendredi,
        addDayAffutage.samedi,
        addDayAffutage.dimanche,
    ]

    addDayAffutageArray[endDate.dayIndex] = "race";

    add = 0;
    if (endDate.dayIndex >= 4) {

        if (I == "PMAHigh") {
            if (entrainementActuel == "aucunEntrainement") level = levelsPMA30_30[0]
            else if (entrainementActuel == "1-3Heure") level = levelsPMA30_30[2]
            else if (entrainementActuel == "4-7Heure") level = levelsPMA30_30[4]
            else if (entrainementActuel == "8-12Heure") level = levelsPMA30_30[6]
            else if (entrainementActuel == "13-18Heure") level = levelsPMA30_30[9]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsPMA30_30[12]
            seanceIntense = PMA30_30(level);
        }
        else if (I == "PMAMedium") {
            if (entrainementActuel == "aucunEntrainement") level = levelsPMA1_1[0]
            else if (entrainementActuel == "1-3Heure") level = levelsPMA1_1[2]
            else if (entrainementActuel == "4-7Heure") level = levelsPMA1_1[4]
            else if (entrainementActuel == "8-12Heure") level = levelsPMA1_1[6]
            else if (entrainementActuel == "13-18Heure") level = levelsPMA1_1[8]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsPMA1_1[10]
            seanceIntense = PMA1_1(level);
        }
        else if (I == "PMALow") {
            if (entrainementActuel == "aucunEntrainement") level = levelsPMA3_3[0]
            else if (entrainementActuel == "1-3Heure") level = levelsPMA3_3[1]
            else if (entrainementActuel == "4-7Heure") level = levelsPMA3_3[2]
            else if (entrainementActuel == "8-12Heure") level = levelsPMA3_3[3]
            else if (entrainementActuel == "13-18Heure") level = levelsPMA3_3[4]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsPMA3_3[5]
            seanceIntense = PMA3_3(level);
        }
        else if (I == "Seuil") {
            if (entrainementActuel == "aucunEntrainement") level = levelsSeuil5_5[0]
            else if (entrainementActuel == "1-3Heure") level = levelsSeuil5_5[1]
            else if (entrainementActuel == "4-7Heure") level = levelsSeuil5_5[2]
            else if (entrainementActuel == "8-12Heure") level = levelsSeuil5_5[3]
            else if (entrainementActuel == "13-18Heure") level = levelsSeuil5_5[4]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsSeuil5_5[6]
            seanceIntense = seuil5_5(level);
        }
        else if (I == "Gimenez") {
            if (entrainementActuel == "aucunEntrainement") level = levelsGimenez[0]
            else if (entrainementActuel == "1-3Heure") level = levelsGimenez[1]
            else if (entrainementActuel == "4-7Heure") level = levelsGimenez[2]
            else if (entrainementActuel == "8-12Heure") level = levelsGimenez[3]
            else if (entrainementActuel == "13-18Heure") level = levelsGimenez[4]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsGimenez[5]
            seanceIntense = gimenez(level);
        }
        else if (I == "SweetSpot") {
            if (entrainementActuel == "aucunEntrainement") level = levelsSweetSpot[0]
            else if (entrainementActuel == "1-3Heure") level = levelsSweetSpot[1]
            else if (entrainementActuel == "4-7Heure") level = levelsSweetSpot[2]
            else if (entrainementActuel == "8-12Heure") level = levelsSweetSpot[4]
            else if (entrainementActuel == "13-18Heure") level = levelsSweetSpot[6]
            else if (entrainementActuel == "19HeureEtPlus") level = levelsSweetSpot[8]
            seanceIntense = sweetspot(level);
        }

        let TpsMax = Number(sessionStorage.tpsSemaine);
        let TpsSem = getTpsSem(TpsMax, entrainementActuelNb, entrainementPrg, 1);
        for (let i = 0; i < 1; i++) {
            TpsSem[i] = TpsSem[i] * ( 1 / 7 );
        }
        seances = new Array();
        seances[0] = seanceIntense;
        seances[1] = enduranceFondamentale(TpsSem[0]);

        index = endDate.dayIndex;
        if (jourDispoArray[index - 1] == true) addDayAffutageArray[index - 1] = debloquage();
        else add = 1;
        
        if (jourDispoArray[index - 3 + add] == true) {
            addDayAffutageArray[index - 3 + add] = seances[1];
            if (jourDispoArray[index - 5 + add] == true) addDayAffutageArray[index - 5 + add] = seances[0];
            else if (jourDispoArray[index - 4 + add] == true) addDayAffutageArray[index - 4 + add] = seances[0];
        }         
        else if (jourDispoArray[index - 4 + add] == true) {
            addDayAffutageArray[index - 4 + add] = seances[1];
            if (jourDispoArray[index - 6 + add] == true) addDayAffutageArray[index - 6 + add] = seances[0];
            else if (jourDispoArray[index - 5 + add] == true) addDayAffutageArray[index - 5 + add] = seances[0];
        }
    }
    else {
        let TpsMax = Number(sessionStorage.tpsSemaine);
        let TpsSem = getTpsSem(TpsMax, entrainementActuelNb, entrainementPrg, 1);
        for (let i = 0; i < 1; i++) {
            TpsSem[i] = TpsSem[i] * ( 1 / 7 );
        }
        seances = enduranceFondamentale(TpsSem[0]);

        index = endDate.dayIndex;
        if (jourDispoArray[index - 1] == true) addDayAffutageArray[index - 1] = debloquage();
        else add = 1;

        if (jourDispoArray[index - 3 + add] == true) {
            addDayAffutageArray[index - 3 + add] = seances;
        }
    }

    addDayAffutage = {
        lundi: addDayAffutageArray[0], 
        mardi: addDayAffutageArray[1],
        mercredi: addDayAffutageArray[2],
        jeudi: addDayAffutageArray[3],
        vendredi: addDayAffutageArray[4],
        samedi: addDayAffutageArray[5],
        dimanche: addDayAffutageArray[6]
    }

    return addDayAffutage;
}					