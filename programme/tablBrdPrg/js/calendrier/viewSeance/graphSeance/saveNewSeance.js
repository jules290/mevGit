function saveNewSeancePma_seuil(seance, semaineActuel, day) {
    level = getSeanceLevel("serieAndRep");
    seance.meta = level;
    switch (seance.typeSeance) {
        case "Seuil":
            seance.seance = seuil5_5(level).seance;
            break;
        case "PMA":
            if (seance.sousTypeSeance == "PMA30_30") seance.seance = PMA30_30(level).seance
            else if (seance.sousTypeSeance == "PMA1_1") seance.seance = PMA1_1(level).seance
            else seance.seance = PMA3_3(level).seance
            break;
    }

    addTimeSemWithNewSeance(seance, semaineActuel, day);
    saveNewSeanceInPRG(seance, semaineActuel, day);
    window.location.reload();
}

function saveNewSeanceGimenez(seance, semaineActuel, day) {
    level = getSeanceLevel("serieAndTime");
    seance.meta = level;
    seance.seance = gimenez(level).seance;
    addTimeSemWithNewSeance(seance, semaineActuel, day);
    saveNewSeanceInPRG(seance, semaineActuel, day);
    window.location.reload();
}

function saveNewSeanceSweetSpot(seance, semaineActuel, day) {
    level = getSeanceLevel("serieAndTime");
    seance.meta = level;
    seance.seance = sweetspot(level).seance;
    addTimeSemWithNewSeance(seance, semaineActuel, day);
    saveNewSeanceInPRG(seance, semaineActuel, day);
    window.location.reload();
}

function saveNewSeanceEndurance(seance, semaineActuel, day) {
    alert(seance.typeSeance)
    level = getSeanceLevel("time");
    seance.seance[0].value = level * 60;
    addTimeSemWithNewSeance(seance, semaineActuel, day);
    saveNewSeanceInPRG(seance, semaineActuel, day);
    window.location.reload();
}

function saveNewSeanceInPRG(seance, semaineActuel, day) {
    index = getAfterUrl();
    PRG = JSON.parse(localStorage.PRG);
    semaine = PRG[index][semaineActuel];
    if (day == "lundi") semaine.lundi = seance
    else if (day == "mardi") semaine.mardi = seance
    else if (day == "mercredi") semaine.mercredi = seance
    else if (day == "jeudi") semaine.jeudi = seance
    else if (day == "vendredi") semaine.vendredi = seance
    else if (day == "samedi") semaine.samedi = seance
    else if (day == "dimanche") semaine.dimanche = seance
    localStorage.PRG = JSON.stringify(PRG);
}

function addTimeSemWithNewSeance(seance, semaineActuel, day) {
    if (day == "lundi") oldSeance = JSON.parse(localStorage.PRG)[index][semaineActuel].lundi
    else if (day == "mardi") oldSeance = JSON.parse(localStorage.PRG)[index][semaineActuel].mardi
    else if (day == "mercredi") oldSeance = JSON.parse(localStorage.PRG)[index][semaineActuel].mercredi
    else if (day == "jeudi") oldSeance = JSON.parse(localStorage.PRG)[index][semaineActuel].jeudi
    else if (day == "vendredi") oldSeance = JSON.parse(localStorage.PRG)[index][semaineActuel].vendredi
    else if (day == "samedi") oldSeance = JSON.parse(localStorage.PRG)[index][semaineActuel].samedi
    else if (day == "dimanche") oldSeance = JSON.parse(localStorage.PRG)[index][semaineActuel].dimanche
    oldSeanceTime = getTpsSeance(oldSeance);
    newSeanceTime = getTpsSeance(seance);
    programme = JSON.parse(localStorage.programme);
    actualTps = programme[index].actualTps;
    actualTps[semaineActuel] += ( newSeanceTime - oldSeanceTime ) / 60;
    localStorage.programme = JSON.stringify(programme);
}