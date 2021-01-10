function Gimenez(nbSem, typePrg) {
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementActuelNb = sessionStorage.entrainementActuelNb;
    let semainesGimenez = new Array();
    let TpsMax = Number(sessionStorage.tpsSemaine);
    TpsSem = getTpsSem(TpsMax * 0.85, entrainementActuelNb, entrainementPrg, nbSem);
    let ISem = getIsem(nbSem, typePrg);

    for (let i = 0; i < TpsSem.length; i++) {
        TpsSem[i] = TpsSem[i] * ( ( entrainementPrg - ISem ) / entrainementPrg )
    }

    let addLevel = getAddLevel(nbSem, ISem, "Gimenez");

    for (let i = 0; i < nbSem; i++) {
        tpsSem = TpsSem[i];
        semainesGimenez[i] = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};
        repartionIntensite = getBestRepartionIntensite(ISem, jourDispo);
        levelIndex = 0;

        if (repartionIntensite.lundi == true) {
            semainesGimenez[i].lundi = gimenez( levelsGimenez[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.mardi == true) {
            semainesGimenez[i].mardi = gimenez( levelsGimenez[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.mercredi == true) {
            semainesGimenez[i].mercredi = gimenez( levelsGimenez[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.jeudi == true) {
            semainesGimenez[i].jeudi = gimenez( levelsGimenez[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.vendredi == true) {
            semainesGimenez[i].vendredi = gimenez( levelsGimenez[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.samedi == true) {
            semainesGimenez[i].samedi = gimenez( levelsGimenez[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.dimanche == true) {
            semainesGimenez[i].dimanche = gimenez( levelsGimenez[addLevel[i][levelIndex]] );
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
        if (jourDispo.samedi == true && semainesGimenez[i].samedi == "" && endIndex < entrainementPrg - ISem) {
            semainesGimenez[i].samedi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.dimanche == true && semainesGimenez[i].dimanche == "" && endIndex < entrainementPrg - ISem) {
            semainesGimenez[i].dimanche = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.mercredi == true && semainesGimenez[i].mercredi == "" && endIndex < entrainementPrg - ISem) {
            semainesGimenez[i].mercredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.jeudi == true && semainesGimenez[i].jeudi == "" && endIndex < entrainementPrg - ISem) {
            semainesGimenez[i].jeudi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.vendredi == true && semainesGimenez[i].vendredi == "" && endIndex < entrainementPrg - ISem) {
            semainesGimenez[i].vendredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.lundi == true && semainesGimenez[i].lundi == "" && endIndex < entrainementPrg - ISem) {
            semainesGimenez[i].lundi = enduranceFondamentale(End[endIndex])
            endIndex++;
        }

        if (jourDispo.mardi == true && semainesGimenez[i].mardi == "" && endIndex < entrainementPrg - ISem) {
            semainesGimenez[i].mardi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }
    }
    
    return semainesGimenez;
}