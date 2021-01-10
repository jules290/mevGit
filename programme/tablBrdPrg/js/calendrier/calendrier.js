function calendrier(type) {
    let etape = getSemaines(type);
    let etapeActuel = getEtapeActuel(etape);
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

    let seanceT = document.getElementsByClassName("seanceT");

    if (PRG[index][semA].lundi.typeSeance != undefined) seanceT[0].innerText = PRG[index][semA].lundi.typeSeance
    else seanceT[0].innerText = "Repos"

    if (PRG[index][semA].mardi.typeSeance != undefined) seanceT[1].innerText = PRG[index][semA].mardi.typeSeance
    else seanceT[1].innerText = "Repos"

    if (PRG[index][semA].mercredi.typeSeance != undefined) seanceT[2].innerText = PRG[index][semA].mercredi.typeSeance
    else seanceT[2].innerText = "Repos"

    if (PRG[index][semA].jeudi.typeSeance != undefined) seanceT[3].innerText = PRG[index][semA].jeudi.typeSeance
    else seanceT[3].innerText = "Repos"

    if (PRG[index][semA].vendredi.typeSeance != undefined) seanceT[4].innerText = PRG[index][semA].vendredi.typeSeance
    else seanceT[4].innerText = "Repos"

    if (PRG[index][semA].samedi.typeSeance != undefined) seanceT[5].innerText = PRG[index][semA].samedi.typeSeance
    else seanceT[5].innerText = "Repos"

    if (PRG[index][semA].dimanche.typeSeance != undefined) seanceT[6].innerText = PRG[index][semA].dimanche.typeSeance
    else seanceT[6].innerText = "Repos"

    document.getElementById("weekEtape").innerText = etapeActuel[0];

    let day = document.getElementsByClassName("day");
    if (semaineActuel >= 0) {
        if (aujourdHuiDayNb >= startDayNb) {
            let d = new Date();
            DAY = d.getDay();
            if (DAY == 0) DAY = 6
            else DAY -= 1    
        }
        else DAY = 0

        day[DAY].style.backgroundColor = "rgba(0, 229, 255, 0.255)";
    }

    $(".day").hover(function () {
        if (this.style.backgroundColor != "rgba(0, 229, 255, 0.255)") this.style.backgroundColor = "rgba(0, 0, 0, 0.1)"
    }, function () {
        if (this.style.backgroundColor != "rgba(0, 229, 255, 0.255)") this.style.backgroundColor = "rgba(0, 0, 0, 0.0)"
    })
    
    $(".day").click(function () {
        $(".day").css("background-color", "rgba(0, 0, 0, 0.0)")
        this.style.backgroundColor = "rgba(0, 229, 255, 0.255)"

        if (this.id == "lundi") day = 0
        else if (this.id == "mardi") day = 1
        else if (this.id == "mercredi") day = 2
        else if (this.id == "jeudi") day = 3
        else if (this.id == "vendredi") day = 4
        else if (this.id == "samedi") day = 5
        else if (this.id == "dimanche") day = 6

        getProchaineSeance(type, day)
    })

    plusT = document.getElementsByClassName("plusT");
    $(".plusT").click(function (evt) {
        postViewSeance(evt.currentTarget.id);
    })
}