function getEndPrgDay() {
    let endOfPrg = sessionStorage.dateCourse;
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
    
    return {dayNb: startDayNb, year: startYear, addDay: addDay};
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

        if (Isem == 2) {
            let index1
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
            let index2;
            let ecartBas;
            let ecartHaut;

            if (index1 + 3 <= 6) {
                if (jourDispoArray[index1 + 3] == true) {
                    index2 = index1 + 3;
                    fromIndexToDay(index2);
                }
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

                    fromIndexToDay(index2)
                }
            }
            else {
                if (jourDispoArray[index1 - 3]  == true) {
                    index2 = index1 - 3;
                    fromIndexToDay(index2);
                }
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

                    fromIndexToDay(index2)
                }
            }
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
        }
    }
    function fromIndexToDay(index) {
        if (index == 0) jourIntensite.lundi = true
        else if (index == 1) jourIntensite.mardi = true
        else if (index == 2) jourIntensite.mercredi = true
        else if (index == 3) jourIntensite.jeudi = true
        else if (index == 4) jourIntensite.vendredi = true
        else if (index == 5) jourIntensite.samedi = true
        else if (index == 6) jourIntensite.dimanche = true
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

function getSemaines(prg) {
    let semaines;
    let longueurProgramme = Number(sessionStorage.longueurProgramme)

    if (prg == "Criterium") {
        if (longueurProgramme == 8) semaines = {endurance: 3, seuil: 1, PMA: 3, affutage: 1,  r1: 0, r2: 0}
        else if (longueurProgramme == 10) semaines = {endurance: 4, seuil: 1, PMA: 3, affutage: 2,  r1: 0, r2: 0}
        else if (longueurProgramme == 12) semaines = {endurance: 5, seuil: 1, PMA: 4, affutage: 2,  r1: 0, r2: 0}
        else if (longueurProgramme == 14) semaines = {endurance: 6, seuil: 1, PMA: 4, affutage: 2,  r1: 0, r2: 1}
        else if (longueurProgramme == 16) semaines = {endurance: 7, seuil: 1, PMA: 5, affutage: 2,  r1: 0, r2: 1}
        else if (longueurProgramme == 18) semaines = {endurance: 8, seuil: 1, PMA: 6, affutage: 2,  r1: 0, r2: 1}
        else if (longueurProgramme == 20) semaines = {endurance: 8, seuil: 2, PMA: 6, affutage: 2,  r1: 1, r2: 1}
        else if (longueurProgramme == 22) semaines = {endurance: 9, seuil: 2, PMA: 7, affutage: 2,  r1: 1, r2: 1}
    }
    else if (prg == "Endurance") {
        if (longueurProgramme == 4) semaines = {endurance: 3, FTP: 0, seuil: 0, affutage: 1,  r1: 0, r2: 0}
        else if (longueurProgramme == 6) semaines = {endurance: 5, FTP: 0, seuil: 0, affutage: 1,  r1: 0, r2: 0}
        else if (longueurProgramme == 8) semaines = {endurance: 6, FTP: 1, seuil: 0, affutage: 1,  r1: 0, r2: 0}
        else if (longueurProgramme == 10) semaines = {endurance: 7, FTP: 1, seuil: 0, affutage: 2,  r1: 0, r2: 0}
        else if (longueurProgramme == 12) semaines = {endurance: 9, FTP: 1, seuil: 0, affutage: 2,  r1: 0, r2: 0}
        else if (longueurProgramme == 14) semaines = {endurance: 10, FTP: 1, seuil: 1, affutage: 2,  r1: 0, r2: 0}
        else if (longueurProgramme == 16) semaines = {endurance: 11, FTP: 2, seuil: 1, affutage: 2,  r1: 0, r2: 0}
        else if (longueurProgramme == 18) semaines = {endurance: 12, FTP: 2, seuil: 1, affutage: 2,  r1: 1, r2: 0}
        else if (longueurProgramme == 20) semaines = {endurance: 12, FTP: 3, seuil: 1, affutage: 2,  r1: 1, r2: 1}
        else if (longueurProgramme == 22) semaines = {endurance: 14, FTP: 3, seuil: 1, affutage: 2,  r1: 1, r2: 1}
        else if (longueurProgramme == 24) semaines = {endurance: 15, FTP: 3, seuil: 2, affutage: 2,  r1: 1, r2: 1}
        else if (longueurProgramme == 26) semaines = {endurance: 17, FTP: 3, seuil: 2, affutage: 2,  r1: 1, r2: 1}
        else if (longueurProgramme == 28) semaines = {endurance: 18, FTP: 4, seuil: 2, affutage: 2,  r1: 1, r2: 1}
        else if (longueurProgramme == 30) semaines = {endurance: 19, FTP: 4, seuil: 3, affutage: 2,  r1: 1, r2: 1}
        else if (longueurProgramme == 32) semaines = {endurance: 20, FTP: 5, seuil: 3, affutage: 2,  r1: 1, r2: 1}
    }
    else if (prg == "GrandPrix") {
        if (longueurProgramme == 8) semaines = {endurance: 3, seuil: 2, PMA: 2, affutage: 1,  r1: 0, r2: 0}
        else if (longueurProgramme == 10) semaines = {endurance: 4, seuil: 2, PMA: 2, affutage: 2,  r1: 0, r2: 0}
        else if (longueurProgramme == 12) semaines = {endurance: 5, seuil: 2, PMA: 3, affutage: 2,  r1: 0, r2: 0}
        else if (longueurProgramme == 14) semaines = {endurance: 6, seuil: 3, PMA: 3, affutage: 2,  r1: 0, r2: 0}
        else if (longueurProgramme == 16) semaines = {endurance: 7, seuil: 3, PMA: 3, affutage: 2,  r1: 0, r2: 1}
        else if (longueurProgramme == 18) semaines = {endurance: 7, seuil: 4, PMA: 4, affutage: 2,  r1: 0, r2: 1}
        else if (longueurProgramme == 20) semaines = {endurance: 8, seuil: 4, PMA: 4, affutage: 2,  r1: 1, r2: 1}
        else if (longueurProgramme == 22) semaines = {endurance: 9, seuil: 4, PMA: 5, affutage: 2,  r1: 1, r2: 1}
    }
    else if (prg == "GranFondo") {
        if (longueurProgramme == 8) semaines = {endurance: 4, FTP: 2, seuil: 1, PMA: 0, affutage: 1,  r1: 0, r2:0, r3: 0}
        else if (longueurProgramme == 10) semaines = {endurance: 5, FTP: 2, seuil: 1, PMA: 0, affutage: 2,  r1: 0, r2:0, r3: 0}
        else if (longueurProgramme == 12) semaines = {endurance: 6, FTP: 2, seuil: 1, PMA: 1, affutage: 2,  r1: 0, r2:0, r3: 0}
        else if (longueurProgramme == 14) semaines = {endurance: 7, FTP: 3, seuil: 1, PMA: 1, affutage: 2,  r1: 0, r2:0, r3: 0}
        else if (longueurProgramme == 16) semaines = {endurance: 8, FTP: 3, seuil: 2, PMA: 1, affutage: 2,  r1: 0, r2:0, r3: 0}
        else if (longueurProgramme == 18) semaines = {endurance: 9, FTP: 4, seuil: 2, PMA: 1, affutage: 2,  r1: 0, r2:0, r3: 0}
        else if (longueurProgramme == 20) semaines = {endurance: 10, FTP: 4, seuil: 2, PMA: 1, affutage: 2,  r1: 0, r2:0, r3: 1}
        else if (longueurProgramme == 22) semaines = {endurance: 10, FTP: 5, seuil: 2, PMA: 1, affutage: 2,  r1: 1, r2:0, r3: 1}
        else if (longueurProgramme == 24) semaines = {endurance: 11, FTP: 5, seuil: 3, PMA: 1, affutage: 2,  r1: 1, r2:0, r3: 1}
        else if (longueurProgramme == 26) semaines = {endurance: 12, FTP: 5, seuil: 3, PMA: 1, affutage: 2,  r1: 1, r2:1, r3: 1}
        else if (longueurProgramme == 28) semaines = {endurance: 12, FTP: 6, seuil: 3, PMA: 2, affutage: 2,  r1: 1, r2:1, r3: 1}
        else if (longueurProgramme == 30) semaines = {endurance: 13, FTP: 6, seuil: 4, PMA: 2, affutage: 2,  r1: 1, r2:1, r3: 1}
    }
    else if (prg == "TimeTrial") {
        if (longueurProgramme == 6) semaines = {endurance: 2, FTP: 1, seuil: 1, PMA: 1, affutage: 1,  r1: 0, r2: 0, r3: 0}
        else if (longueurProgramme == 8) semaines = {endurance: 3, FTP: 1, seuil: 2, PMA: 1, affutage: 1,  r1: 0, r2: 0, r3: 0}
        else if (longueurProgramme == 10) semaines = {endurance: 3, FTP: 2, seuil: 2, PMA: 1, affutage: 2,  r1: 0, r2: 0, r3: 0}
        else if (longueurProgramme == 12) semaines = {endurance: 4, FTP: 2, seuil: 2, PMA: 2, affutage: 2,  r1: 0, r2: 0, r3: 0}
        else if (longueurProgramme == 14) semaines = {endurance: 4, FTP: 2, seuil: 3, PMA: 2, affutage: 2,  r1: 0, r2: 0, r3: 1}
        else if (longueurProgramme == 16) semaines = {endurance: 5, FTP: 3, seuil: 3, PMA: 2, affutage: 2,  r1: 0, r2: 0, r3: 1}
        else if (longueurProgramme == 18) semaines = {endurance: 6, FTP: 3, seuil: 3, PMA: 3, affutage: 2,  r1: 0, r2: 0, r3: 1}
        else if (longueurProgramme == 20) semaines = {endurance: 7, FTP: 3, seuil: 4, PMA: 3, affutage: 2,  r1: 0, r2: 0, r3: 1}
        else if (longueurProgramme == 22) semaines = {endurance: 8, FTP: 3, seuil: 4, PMA: 3, affutage: 2,  r1: 0, r2: 1, r3: 1}
    }

    return semaines;
}

function getTpsSem(TpsMax, entAct, entSem, semainesTypeNb) {
    let TpsSem = new Array(); // en minutes
    TpsMax = Number(TpsMax);
    entAct = Number(entAct);
    entSem = Number(entSem);
    semainesTypeNb = Number(semainesTypeNb);

    entAct += 1;
    TpsMax60 = TpsMax * 60;
    entAct60 = entAct * 60;

    TpsDepart = ( entAct60 * 0.86 + ( 6 / Math.pow(entAct, 2) ) * 60 ) * ( entSem / 7 );

    for (let i = 0; i < semainesTypeNb; i++) {
        if (i == 0) {
            TpsSem[i] = TpsDepart;
        }
        else {
            t = TpsSem[i-1];
            TpsSem[i] = t + 
            (t * ( ( Math.round(Math.pow( 1 / ( i + 1 ) , 0.17 ) * 7 * 100) / 100 ) * ( 3.38 / Math.pow(semainesTypeNb, 0.534)) / 100) );
        }
    }

    for (let i = 0; i < TpsSem.length; i++) {
        if (TpsSem[i] > TpsMax60) TpsSem[i] = TpsMax60;
    }
    
    return TpsSem;
}

// function getTpsSem(TpsMax, semainesTypeNb) {
//     let semaine = getSemaines(programme.type);
//     let TpsSem = new Array(); // en minutes

//     TpsDepart = 0;
//     TpsSem[semainesTypeNb - 1] = 0;

//     while (TpsSem[semainesTypeNb - 1] < (TpsMax * 60 )) {
//         TpsDepart++;
//         for (let i = 0; i < semainesTypeNb; i++) {
//             if (i == 0) t = TpsDepart
//             else t = TpsSem[i-1]

//             TpsSem[i] = t + (t * ( ( Math.round(Math.pow( 1 / ( i + 1 ) , 0.17 ) * 6 * 100 ) / 100 ) / 100) )
//         }
//     }

//     return TpsSem;
// }

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

function getIsem(nbSem, PRG) {
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementPrg = sessionStorage.entrainementPrg;
    let ISem;

    if (PRG == "Criterium" || PRG == "GrandPrix" || PRG == "TimeTrial") {
        for (let i = 0; i < nbSem; i++) {
            switch (entrainementActuel) {
                case "aucunEntrainement":
                    ISem = 1;
                    break;
                case "1-3Heure":
                    ISem = 2;
                    break;
                case "4-7Heure":
                    ISem = 2
                    break;
                case "8-12Heure":
                    ISem = 2;
                    break;
                case "13-18Heure":
                    if (entrainementPrg == 7) ISem = 3
                    else ISem = 2
                    break;
                case "19HeureEtPlus":
                    if (entrainementPrg == 7) ISem = 3
                    else if (entrainementPrg == 6) ISem = 3
                    else ISem = 2
                    break;
            }
        }
    }
    else if (PRG == "GranFondo") {
        for (let i = 0; i < nbSem; i++) {
            switch (entrainementActuel) {
                case "aucunEntrainement":
                    ISem = 1;
                    break;
                case "1-3Heure":
                    ISem = 1;
                    break;
                case "4-7Heure":
                    if (entrainementPrg >= 5) ISem = 2
                    else ISem = 1;
                    break;
                case "8-12Heure":
                    if (entrainementPrg >= 5) ISem = 2
                    else ISem = 1;
                    break;
                case "13-18Heure":
                    ISem = 2
                    break;
                case "19HeureEtPlus":
                    ISem = 2
                    break;
            }
        }
    }
    else if (PRG == "Endurance") {
        for (let i = 0; i < nbSem; i++) {
            switch (entrainementActuel) {
                case "aucunEntrainement":
                    ISem = 1;
                    break;
                case "1-3Heure":
                    ISem = 1;
                    break;
                case "4-7Heure":
                    ISem = 1
                    break;
                case "8-12Heure":
                    ISem = 2;
                    break;
                case "13-18Heure":
                    ISem = 2
                    break;
                case "19HeureEtPlus":
                    ISem = 2
                    break;
            }
        }
    }

    return ISem;
}

function rappelIntensite(PRG, nbSem) {
    entrainementActuel = sessionStorage.entrainementActuel;

    if (PRG == "Criterium") {
        if (entrainementActuel == "aucunEntrainement") levelIndex1 = 0
        else if (entrainementActuel == "1-3Heure") levelIndex1 = 1
        else if (entrainementActuel == "4-7Heure") levelIndex1 = 3
        else if (entrainementActuel == "8-12Heure") levelIndex1 = 5
        else if (entrainementActuel == "13-18Heure") levelIndex1 = 7
        else if (entrainementActuel == "19HeureEtPlus") levelIndex1 = 9

        addLevel1 = getAddLevel(nbSem, 1, "PMA30_30", levelIndex1);
        let level1 = new Array();
        for (let i = 0; i < addLevel1.length; i++) {
            level1[i] = PMA30_30(levelsPMA30_30[addLevel1[i][0]])
        }
    
        if (entrainementActuel == "aucunEntrainement") levelIndex2 = 0
        else if (entrainementActuel == "1-3Heure") levelIndex2 = 1
        else if (entrainementActuel == "4-7Heure") levelIndex2 = 2
        else if (entrainementActuel == "8-12Heure") levelIndex2 = 3
        else if (entrainementActuel == "13-18Heure") levelIndex2 = 4
        else if (entrainementActuel == "19HeureEtPlus") levelIndex2 = 6

        addLevel2 = getAddLevel(nbSem, 1, "seuil5_5", levelIndex2);
        let level2 = new Array();
        for (let i = 0; i < addLevel2.length; i++) {
            level2[i] = seuil5_5(levelsSeuil5_5[addLevel2[i][0]])
        }

    
        RI = new Array();
        for (let i = 0; i < nbSem; i++) {
            if (checkPair(i) == true) RI[i] = level1[i]
            else if (checkPair(i) == false) RI[i] = level2[i]
        }
    }
    else if (PRG== "GrandPrix") {
        if (entrainementActuel == "aucunEntrainement") levelIndex1 = 0
        else if (entrainementActuel == "1-3Heure") levelIndex1 = 1
        else if (entrainementActuel == "4-7Heure") levelIndex1 = 2
        else if (entrainementActuel == "8-12Heure") levelIndex1 = 3
        else if (entrainementActuel == "13-18Heure") levelIndex1 = 4
        else if (entrainementActuel == "19HeureEtPlus") levelIndex1 = 6

        addLevel1 = getAddLevel(nbSem, 1, "PMA1_1", levelIndex1);
        let level1 = new Array();
        for (let i = 0; i < addLevel1.length; i++) {
            level1[i] = PMA1_1(levelsPMA1_1[addLevel1[i][0]])
        }
    
        if (entrainementActuel == "aucunEntrainement") levelIndex2 = 0
        else if (entrainementActuel == "1-3Heure") levelIndex2 = 1
        else if (entrainementActuel == "4-7Heure") levelIndex2 = 2
        else if (entrainementActuel == "8-12Heure") levelIndex2 = 3
        else if (entrainementActuel == "13-18Heure") levelIndex2 = 4
        else if (entrainementActuel == "19HeureEtPlus") levelIndex2 = 6

        addLevel2 = getAddLevel(nbSem, 1, "seuil5_5", levelIndex2);
        let level2 = new Array();
        for (let i = 0; i < addLevel2.length; i++) {
            level2[i] = seuil5_5(levelsSeuil5_5[addLevel2[i][0]])
        }

        if (Number(localStorage.fcMax) > 0) TestFcMax = false
        else TestFcMax = true
    
        if (Number(localStorage.PMA) > 0) TestPMA = false
        else TestPMA = true
    
        RI = new Array();
        for (let i = 0; i < nbSem; i++) {
            if (checkPair(i) == true) RI[i] = level1[i]
            else if (checkPair(i) == false) RI[i] = level2[i]
        }
    }
    else if (PRG == "TimeTrial") {
        if (entrainementActuel == "aucunEntrainement") levelIndex1 = 0
        else if (entrainementActuel == "1-3Heure") levelIndex1 = 1
        else if (entrainementActuel == "4-7Heure") levelIndex1 = 2
        else if (entrainementActuel == "8-12Heure") levelIndex1 = 3
        else if (entrainementActuel == "13-18Heure") levelIndex1 = 4
        else if (entrainementActuel == "19HeureEtPlus") levelIndex1 = 5

        addLevel1 = getAddLevel(nbSem, 1, "PMA3_3", levelIndex1);
        let level1 = new Array();
        for (let i = 0; i < addLevel1.length; i++) {
            level1[i] = PMA3_3(levelsPMA3_3[addLevel1[i][0]])
        }
    
        if (entrainementActuel == "aucunEntrainement") levelIndex2 = 0
        else if (entrainementActuel == "1-3Heure") levelIndex2 = 1
        else if (entrainementActuel == "4-7Heure") levelIndex2 = 2
        else if (entrainementActuel == "8-12Heure") levelIndex2 = 3
        else if (entrainementActuel == "13-18Heure") levelIndex2 = 4
        else if (entrainementActuel == "19HeureEtPlus") levelIndex2 = 6

        addLevel2 = getAddLevel(nbSem, 1, "seuil5_5", levelIndex2);
        let level2 = new Array();
        for (let i = 0; i < addLevel2.length; i++) {
            level2[i] = seuil5_5(levelsSeuil5_5[addLevel2[i][0]])
        }
         
        if (Number(localStorage.fcMax) > 0) TestFcMax = false
        else TestFcMax = true
    
        if (Number(localStorage.PMA) > 0) TestPMA = false
        else TestPMA = true
    
        RI = new Array();
        for (let i = 0; i < nbSem; i++) {
            if (checkPair(i) == true) RI[i] = level1[i]
            else if (checkPair(i) == false) RI[i] = level2[i]
        }
    }
    else if (PRG == "GranFondo") {
        if (entrainementActuel == "aucunEntrainement") levelIndex1 = 0
        else if (entrainementActuel == "1-3Heure") levelIndex1 = 1
        else if (entrainementActuel == "4-7Heure") levelIndex1 = 2
        else if (entrainementActuel == "8-12Heure") levelIndex1 = 3
        else if (entrainementActuel == "13-18Heure") levelIndex1 = 4
        else if (entrainementActuel == "19HeureEtPlus") levelIndex1 = 6

        addLevel1 = getAddLevel(nbSem, 1, "Sweet Spot", levelIndex1);
        let level1 = new Array();
        for (let i = 0; i < addLevel1.length; i++) {
            level1[i] = sweetspot(levelsSweetSpot[addLevel1[i][0]])
        }
    
        if (entrainementActuel == "aucunEntrainement") levelIndex2 = 0
        else if (entrainementActuel == "1-3Heure") levelIndex2 = 1
        else if (entrainementActuel == "4-7Heure") levelIndex2 = 2
        else if (entrainementActuel == "8-12Heure") levelIndex2 = 3
        else if (entrainementActuel == "13-18Heure") levelIndex2 = 4
        else if (entrainementActuel == "19HeureEtPlus") levelIndex2 = 6

        addLevel2 = getAddLevel(nbSem, 1, "seuil5_5", levelIndex2);
        let level2 = new Array();
        for (let i = 0; i < addLevel2.length; i++) {
            level2[i] = seuil5_5(levelsSeuil5_5[addLevel2[i][0]])
        }

        if (Number(localStorage.fcMax) > 0) TestFcMax = false
        else TestFcMax = true
    
        if (Number(localStorage.PMA) > 0) TestPMA = false
        else TestPMA = true
    
        RI = new Array();
        for (let i = 0; i < nbSem; i++) {
            if (checkPair(i) == true) RI[i] = level1[i]
            else if (checkPair(i) == false) RI[i] = level2[i]
        }
    }
    else if (PRG == "Endurance") {
        if (entrainementActuel == "aucunEntrainement") levelIndex1 = 0
        else if (entrainementActuel == "1-3Heure") levelIndex1 = 1
        else if (entrainementActuel == "4-7Heure") levelIndex1 = 2
        else if (entrainementActuel == "8-12Heure") levelIndex1 = 3
        else if (entrainementActuel == "13-18Heure") levelIndex1 = 4
        else if (entrainementActuel == "19HeureEtPlus") levelIndex1 = 6

        addLevel1 = getAddLevel(nbSem, 1, "Sweet Spot", levelIndex1);
        let level1 = new Array();
        for (let i = 0; i < addLevel1.length; i++) {
            level1[i] = sweetspot(levelsSweetSpot[addLevel1[i][0]])
        }
    
        if (entrainementActuel == "aucunEntrainement") levelIndex2 = 0
        else if (entrainementActuel == "1-3Heure") levelIndex2 = 1
        else if (entrainementActuel == "4-7Heure") levelIndex2 = 2
        else if (entrainementActuel == "8-12Heure") levelIndex2 = 3
        else if (entrainementActuel == "13-18Heure") levelIndex2 = 4
        else if (entrainementActuel == "19HeureEtPlus") levelIndex2 = 6

        addLevel2 = getAddLevel(nbSem, 1, "seuil5_5", levelIndex2);
        let level2 = new Array();
        for (let i = 0; i < addLevel2.length; i++) {
            level2[i] = seuil5_5(levelsSeuil5_5[addLevel2[i][0]])
        }

        if (Number(localStorage.fcMax) > 0) TestFcMax = false
        else TestFcMax = true
    
        if (Number(localStorage.PMA) > 0) TestPMA = false
        else TestPMA = true
    
        RI = new Array();
        for (let i = 0; i < nbSem; i++) {
            if (checkPair(i) == true) RI[i] = level1[i]
            else if (checkPair(i) == false) RI[i] = level2[i]
        }
    }
    
    return RI;
}

function getTps(PRG) {
    let tps = new Array();
    for (let i = 0; i < PRG.length; i++) {
        tps[i] = 0

        if (PRG[i].lundi != "" && PRG[i].lundi != "race") for (let y = 0; y < PRG[i].lundi.seance.length; y++) {
            if (PRG[i].lundi.seance[y].typeValue != "startSerie" && PRG[i].lundi.seance[y].typeValue != "endSerie") {
                tps[i] += PRG[i].lundi.seance[y].value / 60;
            }
        }
        if (PRG[i].mardi != "" && PRG[i].mardi != "race") for (let y = 0; y < PRG[i].mardi.seance.length; y++) {
            if (PRG[i].mardi.seance[y].typeValue != "startSerie" && PRG[i].mardi.seance[y].typeValue != "endSerie") {
                tps[i] += PRG[i].mardi.seance[y].value / 60;
            }
        }
        if (PRG[i].mercredi != "" && PRG[i].mercredi != "race") for (let y = 0; y < PRG[i].mercredi.seance.length; y++) {
            if (PRG[i].mercredi.seance[y].typeValue != "startSerie" && PRG[i].mercredi.seance[y].typeValue != "endSerie") {
                tps[i] += PRG[i].mercredi.seance[y].value / 60;
            }
        }
        if (PRG[i].jeudi != "" && PRG[i].jeudi != "race") for (let y = 0; y < PRG[i].jeudi.seance.length; y++) {
            if (PRG[i].jeudi.seance[y].typeValue != "startSerie" && PRG[i].jeudi.seance[y].typeValue != "endSerie") {
                tps[i] += PRG[i].jeudi.seance[y].value / 60;
            }
        }
        if (PRG[i].vendredi != "" && PRG[i].vendredi != "race") for (let y = 0; y < PRG[i].vendredi.seance.length; y++) {
            if (PRG[i].vendredi.seance[y].typeValue != "startSerie" && PRG[i].vendredi.seance[y].typeValue != "endSerie") {
                tps[i] += PRG[i].vendredi.seance[y].value / 60;
            }
        }
        if (PRG[i].samedi != "" && PRG[i].samedi != "race") for (let y = 0; y < PRG[i].samedi.seance.length; y++) {
            if (PRG[i].samedi.seance[y].typeValue != "startSerie" && PRG[i].samedi.seance[y].typeValue != "endSerie") {
                tps[i] += PRG[i].samedi.seance[y].value / 60;
            }
        }
        if (PRG[i].dimanche != "" && PRG[i].dimanche != "race") for (let y = 0; y < PRG[i].dimanche.seance.length; y++) {
            if (PRG[i].dimanche.seance[y].typeValue != "startSerie" && PRG[i].dimanche.seance[y].typeValue != "endSerie") {
                tps[i] += PRG[i].dimanche.seance[y].value / 60;
            }
        }

        tps[i] = Math.round(tps[i]);
    }

    return tps;
}

function getISem(PRG) {
    let iSem = new Array();
    for (let i = 0; i < PRG.length; i++) {
        iSem[i] = 0;

        if (PRG[i].lundi.typeSeance == "Seuil" || PRG[i].lundi.typeSeance == "PMA" || PRG[i].lundi.typeSeance == "Test FC MAX" || 
        PRG[i].lundi.typeSeance == "Test PMA" || PRG[i].lundi.typeSeance == "Sweet Spot") iSem[i]++;

        if (PRG[i].mardi.typeSeance == "Seuil" || PRG[i].mardi.typeSeance == "PMA" || PRG[i].mardi.typeSeance == "Test FC MAX" || 
        PRG[i].mardi.typeSeance == "Test PMA" || PRG[i].mardi.typeSeance == "Sweet Spot") iSem[i]++;

        if (PRG[i].mercredi.typeSeance == "Seuil" || PRG[i].mercredi.typeSeance == "PMA" 
        || PRG[i].mercredi.typeSeance == "Test FC MAX" || PRG[i].mercredi.typeSeance == "Test PMA" ||
        PRG[i].mercredi.typeSeance == "Sweet Spot") iSem[i]++;

        if (PRG[i].jeudi.typeSeance == "Seuil" || PRG[i].jeudi.typeSeance == "PMA" || PRG[i].jeudi.typeSeance == "Test FC MAX" || 
        PRG[i].jeudi.typeSeance == "Test PMA" || PRG[i].jeudi.typeSeance == "Sweet Spot") iSem[i]++;

        if (PRG[i].vendredi.typeSeance == "Seuil" || PRG[i].vendredi.typeSeance == "PMA" 
        || PRG[i].vendredi.typeSeance == "Test FC MAX" || PRG[i].vendredi.typeSeance == "Test PMA" || 
        PRG[i].vendredi.typeSeance == "Sweet Spot") iSem[i]++;

        if (PRG[i].samedi.typeSeance == "Seuil" || PRG[i].samedi.typeSeance == "PMA" || 
        PRG[i].samedi.typeSeance == "Test FC MAX" || PRG[i].samedi.typeSeance == "Test PMA" || 
        PRG[i].samedi.typeSeance == "Sweet Spot") iSem[i]++;

        if (PRG[i].dimanche.typeSeance == "Seuil" || PRG[i].dimanche.typeSeance == "PMA" || 
        PRG[i].dimanche.typeSeance == "Test FC MAX" || PRG[i].dimanche.typeSeance == "Test PMA" || 
        PRG[i].dimanche.typeSeance == "Sweet Spot") iSem[i]++;
    }

    return iSem
}

function newEntrainementActuel(cycle) {
    TpsOfLastWeek = Math.round(getTpsOfThisWeek(cycle[cycle["length"] - 1]));
    if (TpsOfLastWeek > Number(sessionStorage.entrainementActuelNb)) {
        sessionStorage.entrainementActuelNb = TpsOfLastWeek;

        values = [
            "aucunEntrainement",
            "1-3Heure",
            "4-7Heure",
            "8-12Heure",
            "13-18Heure",
            "19HeureEtPlus"
        ];
    
        if (TpsOfLastWeek == 0) sessionStorage.entrainementActuel = values[0]
        else if (TpsOfLastWeek >= 0 && TpsOfLastWeek <= 3) sessionStorage.entrainementActuel = values[1]
        else if (TpsOfLastWeek >= 4 && TpsOfLastWeek <= 7) sessionStorage.entrainementActuel = values[2]
        else if (TpsOfLastWeek >= 8 && TpsOfLastWeek <= 12) sessionStorage.entrainementActuel = values[3]
        else if (TpsOfLastWeek >= 13 && TpsOfLastWeek <= 18) sessionStorage.entrainementActuel = values[4]
        else if (TpsOfLastWeek >= 19) sessionStorage.entrainementActuel = values[5]
    }
}

function getTpsOfThisWeek(sem) {
    semArray = [sem.lundi, sem.mardi, sem.mercredi, sem.jeudi, sem.vendredi, sem.samedi, sem.dimanche];
    timeTotal = 0;
    for (let i = 0; i < semArray.length; i++) {
        if (semArray[i] != "") {
            for (let y = 0; y < semArray[i].seance.length; y++) {
                if (semArray[i].seance[y].typeValue != "startSerie" && semArray[i].seance[y].typeValue != "endSerie") {
                    timeTotal += semArray[i].seance[y].value;
                }
            }
        }
    }
    return timeTotal / 3600;
}