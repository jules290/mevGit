function EnduranceMedium(nbSem, PRG) {
    let jourDispo = JSON.parse(sessionStorage.jourDispo);
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementActuelNb = sessionStorage.entrainementActuelNb;
    let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

    let semainesEnduranceMedium = new Array();
    let TpsMax = Number(sessionStorage.tpsSemaine);
    let RappelIntensite = rappelIntensite(PRG, nbSem);
    
    TpsSem = getTpsSem(TpsMax, entrainementActuelNb, entrainementPrg, nbSem);
    for (let i = 0; i < TpsSem.length; i++) {
        TpsSem[i] = TpsSem[i] * ( ( entrainementPrg - 1 ) / entrainementPrg );
    }
    
    for (let i = 0; i < nbSem; i++) {
        tpsSem = TpsSem[i];
        semainesEnduranceMedium[i] = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};

        if (getNbJourDispo(jourDispo) != 7) jourRI = getMeilleurEtatFatigue(jourDispo)
        else jourRI = {jour: jour[Math.floor(Math.random() * 8)], nbJrRepos: 0}

        switch (jourRI.jour) {
            case "lundi":
                semainesEnduranceMedium[i].lundi = RappelIntensite[i];
                break;
            case "mardi":
                semainesEnduranceMedium[i].mardi = RappelIntensite[i];
                break;
            case "mercredi":
                semainesEnduranceMedium[i].mercredi = RappelIntensite[i];
                break;
            case "jeudi":
                semainesEnduranceMedium[i].jeudi = RappelIntensite[i];
                break;
            case "vendredi":
                semainesEnduranceMedium[i].vendredi = RappelIntensite[i];
                break;
            case "samedi":
                semainesEnduranceMedium[i].samedi = RappelIntensite[i];
                break;
            case "diamche":
                semainesEnduranceMedium[i].diamche = RappelIntensite[i];
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
        if (jourDispo.samedi == true && semainesEnduranceMedium[i].samedi == "" && endIndex < entrainementPrg - 1 ) {
            semainesEnduranceMedium[i].samedi = enduranceHaute(End[endIndex] * 0.82);
            endIndex++;
        }

        if (jourDispo.dimanche == true && semainesEnduranceMedium[i].dimanche == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceMedium[i].dimanche = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.mercredi == true && semainesEnduranceMedium[i].mercredi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceMedium[i].mercredi = enduranceHaute(End[endIndex] * 0.82);
            endIndex++;
        }

        if (jourDispo.jeudi == true && semainesEnduranceMedium[i].jeudi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceMedium[i].jeudi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.vendredi == true && semainesEnduranceMedium[i].vendredi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceMedium[i].vendredi = enduranceHaute(End[endIndex] * 0.82);
            endIndex++;
        }

        if (jourDispo.lundi == true && semainesEnduranceMedium[i].lundi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceMedium[i].lundi = enduranceFondamentale(End[endIndex])
            endIndex++;
        }

        if (jourDispo.mardi == true && semainesEnduranceMedium[i].mardi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceMedium[i].mardi = enduranceHaute(End[endIndex] * 0.82);
            endIndex++;
        }
    }
    return semainesEnduranceMedium;
}