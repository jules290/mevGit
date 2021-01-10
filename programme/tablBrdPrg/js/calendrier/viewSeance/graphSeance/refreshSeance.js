sessionStorage.removeItem('actualSeance');
function refreshSeancePma_seuil(seance, semaineActuel, typeMeta) {
    index = getAfterUrl();
    programme = JSON.parse(localStorage.programme)[index];
    level = getSeanceLevel(typeMeta);
    
    switch (seance.typeSeance) {
        case "Seuil":
            if (getTpsSeance(seuil5_5(level)) / 60 < programme.actualTps[semaineActuel] - Number(programme.entrainementProgramme) * 15) {
                seance.seance = seuil5_5(level).seance;
            }
            else {
                alert('erreur: la seance est beaucoup trop longue');
                window.location.reload();
            }
            break;
        case "PMA":
            if (seance.sousTypeSeance == "PMA30_30") {
                if (getTpsSeance(PMA30_30(level)) / 60 < programme.actualTps[semaineActuel] - Number(programme.entrainementProgramme) * 15) {
                    seance.seance = PMA30_30(level).seance;
                }
                else {
                    alert('erreur: la seance est beaucoup trop longue');
                    window.location.reload();
                }
            }
            else if (seance.sousTypeSeance == "PMA1_1") {
                if (getTpsSeance(PMA1_1(level)) / 60 < programme.actualTps[semaineActuel] - Number(programme.entrainementProgramme) * 15) {
                    seance.seance = PMA1_1(level).seance;
                }
                else {
                    alert('erreur: la seance est beaucoup trop longue');
                    window.location.reload();
                }
            }
            else {
                if (getTpsSeance(PMA3_3(level)) / 60 < programme.actualTps[semaineActuel] - Number(programme.entrainementProgramme) * 15) {
                    seance.seance = PMA3_3(level).seance;
                }
                else {
                    alert('erreur: la seance est beaucoup trop longue');
                    window.location.reload();
                }
            }
            break;
    }

    postGraphSeance(seance);
}

function refreshSeanceGimenez(seance, semaineActuel) {
    level = getLevelGimenez();
    index = getAfterUrl();
    programme = JSON.parse(localStorage.programme)[index];
    if (getTpsSeance(gimenez(level)) / 60 < programme.actualTps[semaineActuel] - Number(programme.entrainementProgramme) * 15) {
        seance.meta = level;
        seance.seance = gimenez(level).seance;
    }
    else {
        alert('erreur: la seance est beaucoup trop longue');
        window.location.reload();
    }

    postGraphSeance(seance);
}

function refreshSeanceSweetSpot(seance, semaineActuel) {
    level = getLevelSweetSpot();
    index = getAfterUrl();
    programme = JSON.parse(localStorage.programme)[index];
    if (getTpsSeance(sweetspot(level)) / 60 < programme.actualTps[semaineActuel] - Number(programme.entrainementProgramme) * 15) {
        seance.meta = level;
        seance.seance = sweetspot(level).seance;
    }
    else {
        alert('erreur: la seance est beaucoup trop longue');
        window.location.reload();
    }
    postGraphSeance(seance);
}