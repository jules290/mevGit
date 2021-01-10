function FTP(nbSem, typePrg) {
    let jourDispo = JSON.parse(sessionStorage.jourDispo);
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementActuelNb = sessionStorage.entrainementActuelNb;
    let semainesFTP = new Array();
    let TpsMax = Number(sessionStorage.tpsSemaine);
    TpsSem = getTpsSem(TpsMax * 0.95, entrainementActuelNb, entrainementPrg, nbSem);
    let ISem = getIsem(nbSem, typePrg);

    for (let i = 0; i < TpsSem.length; i++) {
        TpsSem[i] = TpsSem[i] * ( ( entrainementPrg - ISem ) / entrainementPrg )
    }

    let addLevel = getAddLevel(nbSem, ISem, "Sweet Spot");
    for (let i = 0; i < nbSem; i++) {
        tpsSem = TpsSem[i];
        semainesFTP[i] = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};
        repartionIntensite = getBestRepartionIntensite(ISem, jourDispo);

        levelIndex = 0;

        if (repartionIntensite.lundi == true) {
            semainesFTP[i].lundi = sweetspot( levelsSweetSpot[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.mardi == true) {
            semainesFTP[i].mardi = sweetspot( levelsSweetSpot[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.mercredi == true) {
            semainesFTP[i].mercredi = sweetspot( levelsSweetSpot[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.jeudi == true) {
            semainesFTP[i].jeudi = sweetspot( levelsSweetSpot[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.vendredi == true) {
            semainesFTP[i].vendredi = sweetspot( levelsSweetSpot[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.samedi == true) {
            semainesFTP[i].samedi = sweetspot( levelsSweetSpot[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.dimanche == true) {
            semainesFTP[i].dimanche = sweetspot( levelsSweetSpot[addLevel[i][levelIndex]] );
            levelIndex++;
        }

        End = new Array();
        for (let y = 0; y < entrainementPrg - ISem; y++) {
            End[y] = 0;
        }

        while (tpsSem > End.reduce(reducer)) {
            for (let y = 0; y < entrainementPrg - ISem; y++) {
                End[y] += Math.floor(Math.random() * (tpsSem / 40));
            }
        }

        endIndex = 0;
        if (jourDispo.samedi == true && semainesFTP[i].samedi == "" && endIndex < entrainementPrg - ISem) {
            semainesFTP[i].samedi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.dimanche == true && semainesFTP[i].dimanche == "" && endIndex < entrainementPrg - ISem) {
            semainesFTP[i].dimanche = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.mercredi == true && semainesFTP[i].mercredi == "" && endIndex < entrainementPrg - ISem) {
            semainesFTP[i].mercredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.jeudi == true && semainesFTP[i].jeudi == "" && endIndex < entrainementPrg - ISem) {
            semainesFTP[i].jeudi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.vendredi == true && semainesFTP[i].vendredi == "" && endIndex < entrainementPrg - ISem) {
            semainesFTP[i].vendredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.lundi == true && semainesFTP[i].lundi == "" && endIndex < entrainementPrg - ISem) {
            semainesFTP[i].lundi = enduranceFondamentale(End[endIndex])
            endIndex++;
        }

        if (jourDispo.mardi == true && semainesFTP[i].mardi == "" && endIndex < entrainementPrg - ISem) {
            semainesFTP[i].mardi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }
    }

    return semainesFTP;
}