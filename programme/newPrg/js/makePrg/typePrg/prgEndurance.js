function prgEndurance(programme) {
    let jourDispo = programme.jourDispo;
    let PRG = new Array();
    let semaine = getSemaines(programme.type);

    endurance = EnduranceLow(semaine.endurance, programme.type);
    newEntrainementActuel(endurance);
    if (semaine.r1 == 1) endurance = endurance.concat(semRecup(jourDispo))

    if (semaine.FTP > 0) {
        ftp = FTP(semaine.FTP, programme.type)
        newEntrainementActuel(ftp);
    }
    else ftp = [];
    if (semaine.r2 == 1) ftp = ftp.concat(semRecup(jourDispo));

    if (semaine.seuil > 0) {
        seuil = Seuil(semaine.seuil, programme.type);
        newEntrainementActuel(seuil);
    }
    else seuil = [];
    
    affutage = Affutage(programme.type);
    PRG = endurance.concat(ftp).concat(seuil).concat(affutage);
    
    return PRG;
}