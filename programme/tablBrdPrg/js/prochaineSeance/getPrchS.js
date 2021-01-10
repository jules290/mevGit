function getProchaineSeance(type, day) {
    let startDayNb = getStartPrgDay().dayNb;
    let startYear = getStartPrgDay().year;
    let aujourdHui = getAujourdHui();
    let aujourdHuiDayNb = getDayNB365(aujourdHui.day, aujourdHui.month, aujourdHui.year);

    if (startYear == aujourdHui.year) semaineActuel = Math.ceil((aujourdHuiDayNb - startDayNb) / 7)
    else if (startYear > aujourdHui.year) semaineActuel = 0;
    else {
        startYear--;
        if (startYear % 4 == 0) aujourdHuiDayNb += 366
        else aujourdHuiDayNb += 365
        semaineActuel = Math.ceil((aujourdHuiDayNb - startDayNb) / 7)
    }

    if (semaineActuel < 0) semA = 0
    else semA = semaineActuel


    if (day) {
        DAY = day
    }
    else {
        if (aujourdHuiDayNb >= startDayNb) {
            let d = new Date();
            DAY = d.getDay();
            if (DAY == 0) DAY = 6
            else DAY -= 1    
        }
        else DAY = 0
    }

    let PRG;
    for (let i = 0; i < 2; i++) {
        PRG = JSON.parse(localStorage.PRG)[index][semA + i];
        PRGArray = [
            PRG.lundi,
            PRG.mardi,
            PRG.mercredi,
            PRG.jeudi,
            PRG.vendredi,
            PRG.samedi,
            PRG.dimanche,
        ]

        if (i == 0) y = DAY
        else y = 0
        while (y < 7) {
            if (PRGArray[y] != "") {
                prochaineSeance = {i: i, y: y}
                y = 10;
                i = 10;
            }
            y++;
        }
    }

    prochaineSeanceSemaine = JSON.parse(localStorage.PRG)[index][semA + prochaineSeance.i];
    prochaineSeanceSemaineArray = [
        prochaineSeanceSemaine.lundi,
        prochaineSeanceSemaine.mardi,
        prochaineSeanceSemaine.mercredi,
        prochaineSeanceSemaine.jeudi,
        prochaineSeanceSemaine.vendredi,
        prochaineSeanceSemaine.samedi,
        prochaineSeanceSemaine.dimanche

    ]
    prochaineSeanceJour = prochaineSeanceSemaineArray[prochaineSeance.y].seance;

    $("#prochaineSeanceEtape").empty();
    for (let i = 0; i < prochaineSeanceJour.length; i++) {
        if (prochaineSeanceJour[i].typeValue != "startSerie" && prochaineSeanceJour[i].typeValue != "endSerie") {
            var prochaineSeanceEtape = document.createElement("div");
            prochaineSeanceEtape.className = "prochaineSeanceEtape";
            document.getElementById("prochaineSeanceEtape").appendChild(prochaineSeanceEtape);
            prochaineSeanceEtape.style.backgroundColor = ZColor[prochaineSeanceJour[i].Z - 1];
    
            var prochaineSeanceEtapeT = document.createElement("div");
            prochaineSeanceEtapeT.className = "prochaineSeanceEtapeT";
            prochaineSeanceEtapeT.innerText = get00i00i00(prochaineSeanceJour[i].value) + "  @" + prochaineSeanceJour[i].intensité;
            prochaineSeanceEtape.appendChild(prochaineSeanceEtapeT);
        }
    }

    let month = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "decembre"];
    let indexSeance = {i: prochaineSeance.i + semA, y: prochaineSeance.y};
    let dateSeanceDayNb = startDayNb + ( ( indexSeance.i * 7 ) + indexSeance.y );
    if (startYear % 4 == 0) {
        if (dateSeanceDayNb > 366) {
            dateSeanceDayNb -= 366;
            startYear++;
        }
    }
    else {
        if (dateSeanceDayNb > 365) {
            dateSeanceDayNb -= 365;
            startYear++;
        }
    }
    dateSeance = getDateWithDayNb(dateSeanceDayNb, startYear);

    document.getElementById("prochaineSeanceDate").innerText = dateSeance.day + " " + month[dateSeance.month - 1];
    document.getElementById("duree").innerText = getDuree(prochaineSeanceJour);
    document.getElementById("Intensite").innerText = getIntensite(prochaineSeanceJour) + "%";
    document.getElementById("stress").innerText = getStress(prochaineSeanceJour);
}