function postViewSeance(id) {
    index = getAfterUrl();
    let PRG = JSON.parse(localStorage.PRG)[index];
    let startDayNb = getStartPrgDay().dayNb;
    let startYear = getStartPrgDay().year;
    let aujourdHui = getAujourdHui();
    let aujourdHuiDayNb = getDayNB365(aujourdHui.day, aujourdHui.month, aujourdHui.year);

    if (startYear == aujourdHui.year) semaineActuel = (aujourdHuiDayNb - startDayNb) / 7
    else if (startYear > aujourdHui.year) semaineActuel = 0;
    else {
        startYear--;
        if (startYear % 4 == 0) aujourdHuiDayNb += 366
        else aujourdHuiDayNb += 365
        semaineActuel = ( aujourdHuiDayNb - startDayNb ) / 7;
    }
    if (semaineActuel < 0) semaineActuel = 0
    semaineActuel = Math.floor(semaineActuel);

    let day;
    switch (id) {
        case "viewMoreLundi":
            seance = PRG[semaineActuel].lundi;
            day = "lundi";
            break;

        case "viewMoreMardi":
            seance = PRG[semaineActuel].mardi;
            day = "mardi";
            break;

        case "viewMoreMercredi":
            seance = PRG[semaineActuel].mercredi;
            day = "mercredi";
            break;

        case "viewMoreJeudi":
            seance = PRG[semaineActuel].jeudi;
            day = "jeudi";
            break;

        case "viewMoreVendredi":
            seance = PRG[semaineActuel].vendredi;
            day = "vendredi";
            break;

        case "viewMoreSamedi":
            seance = PRG[semaineActuel].samedi;
            day = "samedi";
            break;

        case "viewMoreDimanche":
            seance = PRG[semaineActuel].dimanche;
            day = "dimanche";
            break;
    }
    postGraphSeance(seance);

    document.getElementById("viewSeance").style.visibility = "visible";
    document.getElementById("filter").style.visibility = "visible";

    if (seance != "") {
        document.getElementById("viewSeanceT").innerText = seance.typeSeance;
        $("#serieBox").empty();

        switch (seance.typeSeance) {
            case "PMA":
                postListEtape(seance.seance);
                postMetaSeance(seance, semaineActuel, day);
                break;

            case "Gimenez":
                postListEtape(seance.seance);
                postMetaSeance(seance, semaineActuel, day);
                break;

            case "Seuil":
                postListEtape(seance.seance);
                postMetaSeance(seance, semaineActuel, day);
                break;

            case "Sweet Spot":
                postListEtape(seance.seance);
                postMetaSeance(seance, semaineActuel, day);
                break;

            case "Endurance":
                postListEtape(seance.seance);
                postMetaSeance(seance, semaineActuel, day);
                break;

            case "Débloquage":
                postListEtape(seance.seance);
                postMetaSeance(seance, semaineActuel, day);
                break;

            case "Test FC MAX":
                postListEtape(seance.seance);
                postMetaSeance(seance, semaineActuel, day);
                break;

            case "Test PMA":
                postListEtape(seance.seance);
                postMetaSeance(seance, semaineActuel, day);
                break;
        }
    }
    else {
        document.getElementById("viewSeanceT").innerText = "Repos";
        $("#viewSeanceEtape").empty();
        $("#serieBox").empty();
    
        let series = document.createElement("div");
        series.className = "serie";
        document.getElementById("serieBox").appendChild(series);

        let seriesT1 = document.createElement("div");
        seriesT1.className = "serieT";
        seriesT1.innerText = "Récupération";
        series.appendChild(seriesT1);
    }

    $("#filter").click(function () {
        document.getElementById("viewSeance").style.visibility = "hidden";
        document.getElementById("filter").style.visibility = "hidden";
        document.getElementById("submitSaveNewSeance").style.visibility = "hidden";
        document.getElementById("addSerie").style.visibility = "hidden";
        document.getElementById("downSerie").style.visibility = "hidden";
        sessionStorage.removeItem('actualSeance');
    })
    $("#viewSeanceCloseIcon").click(function () {
        document.getElementById("viewSeance").style.visibility = "hidden";
        document.getElementById("filter").style.visibility = "hidden";
        document.getElementById("submitSaveNewSeance").style.visibility = "hidden";
        document.getElementById("addSerie").style.visibility = "hidden";
        document.getElementById("downSerie").style.visibility = "hidden";
        sessionStorage.removeItem('actualSeance');
    })
}