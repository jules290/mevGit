function semRecup(jourDispo) {
    let semaineRecupArray = ["", "", "", "", "", "", ""];
    let jourDispoArray = [jourDispo.lundi, jourDispo.mardi, jourDispo.mercredi, jourDispo.jeudi, jourDispo.vendredi, jourDispo.samedi, jourDispo.dimanche];
    let entrainementPrg = Number(sessionStorage.entrainementProgramme);

    let index;
    if (entrainementPrg == 3) {
        for (let i = 0; i < 6; i++) {
            if (jourDispoArray[1 + i] == true) {
                semaineRecupArray[1 + i] = enduranceFondamentale(40);
                index = 1 + i;
                i = 6;
            }
        }

        for (let i = 0; i < 6; i++) {
            if (jourDispoArray[index + 1 + i] == true) {
                semaineRecupArray[index + 1 + i] = enduranceFondamentale(40);
                i = 6;
            }
        }
    }
    else {
        for (let i = 0; i < 6; i++) {
            if (jourDispoArray[1 + i] == true) {
                semaineRecupArray[1 + i] = enduranceFondamentale(40);
                index = 1 + i;
                i = 6;
            }
        }

        for (let i = 0; i < 6; i++) {
            if (jourDispoArray[index + 2 + i] == true) {
                semaineRecupArray[index + 2 + i] = enduranceFondamentale(40);
                i = 6;
            }
        }
    }

    let semaineRecup = {
        lundi: semaineRecupArray[0], mardi: semaineRecupArray[1], mercredi: semaineRecupArray[2], jeudi: semaineRecupArray[3],
        vendredi: semaineRecupArray[4], samedi: semaineRecupArray[5], dimanche: semaineRecupArray[6]
    }
    return semaineRecup;
}