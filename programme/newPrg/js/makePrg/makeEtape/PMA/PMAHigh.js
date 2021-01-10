function PMAHigh(nbSem, typePrg) {
    let jourDispo = JSON.parse(sessionStorage.jourDispo);
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementActuelNb = sessionStorage.entrainementActuelNb;
    let semainesPMAHigh = new Array();
    let TpsMax = Number(sessionStorage.tpsSemaine);
    TpsSem = getTpsSem(TpsMax * 0.85, entrainementActuelNb, entrainementPrg, nbSem);
    let ISem = getIsem(nbSem, typePrg);

    for (let i = 0; i < TpsSem.length; i++) {
        TpsSem[i] = TpsSem[i] * ( ( entrainementPrg - ISem ) / entrainementPrg )
    }

    let addLevel = getAddLevel(nbSem, ISem, "PMA30_30");

    for (let i = 0; i < nbSem; i++) {
        tpsSem = TpsSem[i];
        semainesPMAHigh[i] = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};
        repartionIntensite = getBestRepartionIntensite(ISem, jourDispo);
        levelIndex = 0;

        if (repartionIntensite.lundi == true) {
            semainesPMAHigh[i].lundi = PMA30_30( levelsPMA30_30[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.mardi == true) {
            semainesPMAHigh[i].mardi = PMA30_30( levelsPMA30_30[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.mercredi == true) {
            semainesPMAHigh[i].mercredi = PMA30_30( levelsPMA30_30[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.jeudi == true) {
            semainesPMAHigh[i].jeudi = PMA30_30( levelsPMA30_30[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.vendredi == true) {
            semainesPMAHigh[i].vendredi = PMA30_30( levelsPMA30_30[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.samedi == true) {
            semainesPMAHigh[i].samedi = PMA30_30( levelsPMA30_30[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.dimanche == true) {
            semainesPMAHigh[i].dimanche = PMA30_30( levelsPMA30_30[addLevel[i][levelIndex]] );
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
        if (jourDispo.samedi == true && semainesPMAHigh[i].samedi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMAHigh[i].samedi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.dimanche == true && semainesPMAHigh[i].dimanche == "" && endIndex < entrainementPrg - ISem) {
            semainesPMAHigh[i].dimanche = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.mercredi == true && semainesPMAHigh[i].mercredi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMAHigh[i].mercredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.jeudi == true && semainesPMAHigh[i].jeudi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMAHigh[i].jeudi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.vendredi == true && semainesPMAHigh[i].vendredi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMAHigh[i].vendredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.lundi == true && semainesPMAHigh[i].lundi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMAHigh[i].lundi = enduranceFondamentale(End[endIndex])
            endIndex++;
        }

        if (jourDispo.mardi == true && semainesPMAHigh[i].mardi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMAHigh[i].mardi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }
    }
    
    return semainesPMAHigh;
}