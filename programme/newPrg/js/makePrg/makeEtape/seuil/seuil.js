function Seuil(nbSem, typePrg) {
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);
    let entrainementActuel = sessionStorage.entrainementActuel;
    let entrainementActuelNb = sessionStorage.entrainementActuelNb;
    let semainesSeuil = new Array();
    let TpsMax = Number(sessionStorage.tpsSemaine);
    TpsSem = getTpsSem(TpsMax * 0.85, entrainementActuelNb, entrainementPrg, nbSem);
    let ISem = getIsem(nbSem, typePrg);

    for (let i = 0; i < TpsSem.length; i++) {
        TpsSem[i] = TpsSem[i] * ( ( entrainementPrg - ISem ) / entrainementPrg )
    }

    let addLevel = getAddLevel(nbSem, ISem, "seuil5_5");

    for (let i = 0; i < nbSem; i++) {
        tpsSem = TpsSem[i];
        semainesSeuil[i] = {lundi: "", mardi: "", mercredi: "", jeudi: "", vendredi: "", samedi: "", dimanche: ""};
        repartionIntensite = getBestRepartionIntensite(ISem, jourDispo);
        levelIndex = 0;

        if (repartionIntensite.lundi == true) {
            semainesSeuil[i].lundi = seuil5_5( levelsSeuil5_5[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.mardi == true) {
            semainesSeuil[i].mardi = seuil5_5( levelsSeuil5_5[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.mercredi == true) {
            semainesSeuil[i].mercredi = seuil5_5( levelsSeuil5_5[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.jeudi == true) {
            semainesSeuil[i].jeudi = seuil5_5( levelsSeuil5_5[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.vendredi == true) {
            semainesSeuil[i].vendredi = seuil5_5( levelsSeuil5_5[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.samedi == true) {
            semainesSeuil[i].samedi = seuil5_5( levelsSeuil5_5[addLevel[i][levelIndex]] );
            levelIndex++;
        }
        if (repartionIntensite.dimanche == true) {
            semainesSeuil[i].dimanche = seuil5_5( levelsSeuil5_5[addLevel[i][levelIndex]] );
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
        if (jourDispo.samedi == true && semainesSeuil[i].samedi == "" && endIndex < entrainementPrg - ISem) {
            semainesSeuil[i].samedi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.dimanche == true && semainesSeuil[i].dimanche == "" && endIndex < entrainementPrg - ISem) {
            semainesSeuil[i].dimanche = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.mercredi == true && semainesSeuil[i].mercredi == "" && endIndex < entrainementPrg - ISem) {
            semainesSeuil[i].mercredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.jeudi == true && semainesSeuil[i].jeudi == "" && endIndex < entrainementPrg - ISem) {
            semainesSeuil[i].jeudi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.vendredi == true && semainesSeuil[i].vendredi == "" && endIndex < entrainementPrg - ISem) {
            semainesSeuil[i].vendredi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }

        if (jourDispo.lundi == true && semainesSeuil[i].lundi == "" && endIndex < entrainementPrg - ISem) {
            semainesSeuil[i].lundi = enduranceFondamentale(End[endIndex])
            endIndex++;
        }

        if (jourDispo.mardi == true && semainesSeuil[i].mardi == "" && endIndex < entrainementPrg - ISem) {
            semainesSeuil[i].mardi = enduranceFondamentale(End[endIndex]);
            endIndex++;
        }
    }
    
    return semainesSeuil;
}