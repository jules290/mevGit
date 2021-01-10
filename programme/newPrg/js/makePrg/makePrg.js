function makePrg() {
    programme = {
        type: sessionStorage.programme,
        equipement: JSON.parse(sessionStorage.equipement),
        entrainementActuel: sessionStorage.entrainementActuel,
        typeCycliste: sessionStorage.typeCycliste,
        entrainementProgramme: sessionStorage.entrainementProgramme,
        longueurProgramme: sessionStorage.longueurProgramme,
        jourDispo: JSON.parse(sessionStorage.jourDispo),
        // sortieClub: JSON.parse(sessionStorage.sortieClub),
        dateCourse: sessionStorage.dateCourse,
    }
    repartition = switchTypeForRepartition(programme.type, programme);

    if (!localStorage.PRG || JSON.parse(localStorage.PRG).length == 0) localStorage.PRG = JSON.stringify([])

    PRG = JSON.parse(localStorage.PRG);
    PRG[PRG.length] = repartition
    localStorage.PRG = JSON.stringify(PRG)
}

function switchTypeForRepartition(type, programme) {
    switch (type) {
        case "Criterium":
            return prgCriterium(programme);
            break;

        case "Endurance":
            return prgEndurance(programme);
            break;

        case "GrandPrix":
            return prgGrandPrix(programme);
            break;

        case "GranFondo":
            return prgGranFondo(programme);
            break;

        case "TimeTrial":
            return prgTimeTrial(programme);
            break;
    }
}