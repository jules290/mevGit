function EnduranceHigh(nbSem, PRG) {
    let jourDispo = JSON.parse(sessionStorage.jourDispo);
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementActuelNb = sessionStorage.entrainementActuelNb;
    let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

    let semainesEnduranceHigh = new Array();
    let TpsMax = Number(sessionStorage.tpsSemaine);
    let RappelIntensite = rappelIntensite(PRG, nbSem);

    TpsSem = getTpsSem(TpsMax, entrainementActuelNb, entrainementPrg, nbSem);
    for (let i = 0; i < TpsSem.length; i++) {
        TpsSem[i] = TpsSem[i] * ( ( entrainementPrg - 1 ) / entrainementPrg );
    }
    
    for (let i = 0; i < nbSem; i++) {
        tpsSem = TpsSem[i];
        semainesEnduranceHigh[i] = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};

        if (getNbJourDispo(jourDispo) != 7) jourRI = getMeilleurEtatFatigue(jourDispo)
        else jourRI = {jour: jour[Math.floor(Math.random() * 8)], nbJrRepos: 0}

        switch (jourRI.jour) {
            case "lundi":
                semainesEnduranceHigh[i].lundi = RappelIntensite[i];
                break;
            case "mardi":
                semainesEnduranceHigh[i].mardi = RappelIntensite[i];
                break;
            case "mercredi":
                semainesEnduranceHigh[i].mercredi = RappelIntensite[i];
                break;
            case "jeudi":
                semainesEnduranceHigh[i].jeudi = RappelIntensite[i];
                break;
            case "vendredi":
                semainesEnduranceHigh[i].vendredi = RappelIntensite[i];
                break;
            case "samedi":
                semainesEnduranceHigh[i].samedi = RappelIntensite[i];
                break;
            case "diamche":
                semainesEnduranceHigh[i].diamche = RappelIntensite[i];
                break;
        }

        End = new Array();
        for (let y = 0; y < entrainementPrg - 1; y++) {
            End[y] = 0;
        }

        while (tpsSem > End.reduce(reducer)) {
            for (let y = 0; y < entrainementPrg - 1; y++) {
                End[y] += Math.floor(Math.random() * (tpsSem / 40));
            }
        }

        endIndex = 0;
        if (jourDispo.samedi == true && semainesEnduranceHigh[i].samedi == "" && endIndex < entrainementPrg - 1 ) {
            semainesEnduranceHigh[i].samedi = enduranceHaute(End[endIndex] * 0.82);
            endIndex++;
        }

        if (jourDispo.dimanche == true && semainesEnduranceHigh[i].dimanche == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceHigh[i].dimanche = enduranceHaute(End[endIndex] * 0.82);
            endIndex++;
        }

        if (jourDispo.mercredi == true && semainesEnduranceHigh[i].mercredi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceHigh[i].mercredi = enduranceHaute(End[endIndex] * 0.82);
            endIndex++;
        }

        if (jourDispo.jeudi == true && semainesEnduranceHigh[i].jeudi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceHigh[i].jeudi = enduranceHaute(End[endIndex] * 0.82);
            endIndex++;
        }

        if (jourDispo.vendredi == true && semainesEnduranceHigh[i].vendredi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceHigh[i].vendredi = enduranceHaute(End[endIndex] * 0.82);
            endIndex++;
        }

        if (jourDispo.lundi == true && semainesEnduranceHigh[i].lundi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceHigh[i].lundi = enduranceHaute(End[endIndex] * 0.82)
            endIndex++;
        }

        if (jourDispo.mardi == true && semainesEnduranceHigh[i].mardi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceHigh[i].mardi = enduranceHaute(End[endIndex] * 0.82);
            endIndex++;
        }
    }
    return semainesEnduranceHigh;
}