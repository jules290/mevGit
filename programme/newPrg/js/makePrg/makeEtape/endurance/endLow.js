function EnduranceLow(nbSem, PRG) {
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementActuelNb = sessionStorage.entrainementActuelNb;
    let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    jourDispo = JSON.parse(sessionStorage.jourDispo);

    let semainesEnduranceLow = new Array();
    let TpsMax = Number(sessionStorage.tpsSemaine);
    let RappelIntensite = rappelIntensite(PRG, nbSem);

    TpsSem = getTpsSem(TpsMax, entrainementActuelNb, entrainementPrg, nbSem);
    for (let i = 0; i < TpsSem.length; i++) {
        TpsSem[i] = TpsSem[i] * ( ( entrainementPrg - 1 ) / entrainementPrg );
    }
    
    for (let i = 0; i < nbSem; i++) {
        tpsSem = TpsSem[i];
        semainesEnduranceLow[i] = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};

        if (getNbJourDispo(jourDispo) != 7) jourRI = getMeilleurEtatFatigue(jourDispo)
        else jourRI = {jour: jour[Math.floor(Math.random() * 8)], nbJrRepos: 0}

        switch (jourRI.jour) {
            case "lundi":
                semainesEnduranceLow[i].lundi = RappelIntensite[i];
                break;
            case "mardi":
                semainesEnduranceLow[i].mardi = RappelIntensite[i];
                break;
            case "mercredi":
                semainesEnduranceLow[i].mercredi = RappelIntensite[i];
                break;
            case "jeudi":
                semainesEnduranceLow[i].jeudi = RappelIntensite[i];
                break;
            case "vendredi":
                semainesEnduranceLow[i].vendredi = RappelIntensite[i];
                break;
            case "samedi":
                semainesEnduranceLow[i].samedi = RappelIntensite[i];
                break;
            case "diamche":
                semainesEnduranceLow[i].diamche = RappelIntensite[i];
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
        if (jourDispo.samedi == true && semainesEnduranceLow[i].samedi == "" && endIndex < entrainementPrg - 1 ) {
            semainesEnduranceLow[i].samedi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.dimanche == true && semainesEnduranceLow[i].dimanche == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceLow[i].dimanche = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.mercredi == true && semainesEnduranceLow[i].mercredi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceLow[i].mercredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.jeudi == true && semainesEnduranceLow[i].jeudi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceLow[i].jeudi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.vendredi == true && semainesEnduranceLow[i].vendredi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceLow[i].vendredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.lundi == true && semainesEnduranceLow[i].lundi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceLow[i].lundi = enduranceFondamentale(End[endIndex])
            endIndex++;
        }

        if (jourDispo.mardi == true && semainesEnduranceLow[i].mardi == "" && endIndex < entrainementPrg - 1) {
            semainesEnduranceLow[i].mardi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }
    }

    return semainesEnduranceLow;
}