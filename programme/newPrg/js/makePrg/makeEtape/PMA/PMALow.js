function PMALow(nbSem, typePrg) {
    let jourDispo = JSON.parse(sessionStorage.jourDispo);
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementActuelNb = sessionStorage.entrainementActuelNb;
    let semainesPMALow = new Array();
    let TpsMax = Number(sessionStorage.tpsSemaine);
    TpsSem = getTpsSem(TpsMax * 0.85, entrainementActuelNb, entrainementPrg, nbSem);
    let ISem = getIsem(nbSem, typePrg);

    for (let i = 0; i < TpsSem.length; i++) {
        TpsSem[i] = TpsSem[i] * ( ( entrainementPrg - ISem ) / entrainementPrg )
    }

    let addLevel = getAddLevel(nbSem, ISem, "PMA3_3");

    for (let i = 0; i < nbSem; i++) {
        tpsSem = TpsSem[i];
        semainesPMALow[i] = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};
        repartionIntensite = getBestRepartionIntensite(ISem, jourDispo);
        levelIndex = 0;

        if (repartionIntensite.lundi == true) {
            semainesPMALow[i].lundi = PMA3_3( levelsPMA3_3[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.mardi == true) {
            semainesPMALow[i].mardi = PMA3_3( levelsPMA3_3[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.mercredi == true) {
            semainesPMALow[i].mercredi = PMA3_3( levelsPMA3_3[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.jeudi == true) {
            semainesPMALow[i].jeudi = PMA3_3( levelsPMA3_3[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.vendredi == true) {
            semainesPMALow[i].vendredi = PMA3_3( levelsPMA3_3[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.samedi == true) {
            semainesPMALow[i].samedi = PMA3_3( levelsPMA3_3[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.dimanche == true) {
            semainesPMALow[i].dimanche = PMA3_3( levelsPMA3_3[addLevel[i][levelIndex]] );
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
        if (jourDispo.samedi == true && semainesPMALow[i].samedi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMALow[i].samedi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.dimanche == true && semainesPMALow[i].dimanche == "" && endIndex < entrainementPrg - ISem) {
            semainesPMALow[i].dimanche = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.mercredi == true && semainesPMALow[i].mercredi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMALow[i].mercredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.jeudi == true && semainesPMALow[i].jeudi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMALow[i].jeudi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.vendredi == true && semainesPMALow[i].vendredi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMALow[i].vendredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.lundi == true && semainesPMALow[i].lundi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMALow[i].lundi = enduranceFondamentale(End[endIndex])
            endIndex++;
        }

        if (jourDispo.mardi == true && semainesPMALow[i].mardi == "" && endIndex < entrainementPrg - ISem) {
            semainesPMALow[i].mardi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }
    }
    
    return semainesPMALow;
}