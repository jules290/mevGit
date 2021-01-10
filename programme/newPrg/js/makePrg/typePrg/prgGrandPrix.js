function prgGrandPrix(programme) {
    let jourDispo = JSON.parse(sessionStorage.jourDispo);
    let PRG = new Array();
    let semaine = getSemaines(programme.type);

    endurance = EnduranceLow(semaine.endurance, programme.type);
    newEntrainementActuel(endurance);
    if (semaine.r1 == 1) endurance = endurance.concat(semRecup(jourDispo))

    if (semaine.seuil > 0) {
        seuil = Seuil(semaine.seuil, programme.type);
        newEntrainementActuel(seuil);
    }
    else seuil = [];
    if (semaine.r2 == 1) seuil = seuil.concat(semRecup(jourDispo))

    if (semaine.PMA > 0) {
        pma = PMAHigh(semaine.PMA, programme.type);
        newEntrainementActuel(pma);
    }
    else pma = [];
    
    affutage = Affutage(programme.type);
    PRG = endurance.concat(seuil).concat(pma).concat(affutage);
    
    return PRG;
}