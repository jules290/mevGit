function postSeanceHistoriqueListHeader() {
    seanceHeader = document.createElement("div");
    seanceHeader.id = 'seanceHeaderList';
    document.getElementById("Historique").appendChild(seanceHeader);

    seanceHeaderTitre = document.createElement("div");
    seanceHeaderTitre.className = "seanceHeaderTitre seanceContent";
    seanceHeaderTitre.innerText = "TITRE";
    seanceHeader.appendChild(seanceHeaderTitre);

    seanceHeaderDate = document.createElement("div");
    seanceHeaderDate.className = "seanceHeaderDate seanceContent";
    seanceHeaderDate.innerText = "DATE";
    seanceHeader.appendChild(seanceHeaderDate);

    seanceHeaderZone = document.createElement("div");
    seanceHeaderZone.className = "seanceHeaderZone seanceContent";
    seanceHeaderZone.innerText = "ZONE";
    seanceHeader.appendChild(seanceHeaderZone);
}

function postSeancesHistoriqueList() {
    $("#Historique").empty();
    if (!localStorage.seance) localStorage.seance = JSON.stringify([])
    Seance = JSON.parse(localStorage.seance);
    aujourdHui = getAujourdHui();

    postSeanceHistoriqueListHeader();
    
    for (let i = 0; i < Seance.length; i++) {
        dateSeance = {
            day: Number(Seance[i].date.slice(0, 2)),
            month: Number(Seance[i].date.slice(3, 5)),
            year: Number(Seance[i].date.slice(6, 10))
        };

        actif = false;
        if (dateSeance.year < aujourdHui.year) actif = true
        else if (dateSeance.year == aujourdHui.year) {
            if (dateSeance.month < aujourdHui.month) actif = true
            else if (dateSeance.month == aujourdHui.month) {
                if (dateSeance.day < aujourdHui.day) actif = true
            }
        }

        if (actif == true) {
            seance = document.createElement("div");
            seance.className = `seance seance${i}`;
            document.getElementById("Historique").appendChild(seance);
        
            seanceTitre = document.createElement("div");
            seanceTitre.className = "seanceTitre seanceContent";
            if (Seance[i].titre.length >= 27) seanceTitre.innerText = Seance[i].titre.slice(0, 26) + "..."
            else seanceTitre.innerText = Seance[i].titre
            seance.appendChild(seanceTitre);
        
            seanceDate = document.createElement("div");
            seanceDate.className = "seanceDate seanceContent";
            seanceDate.innerText = Seance[i].date;
            seance.appendChild(seanceDate);
        
            seanceZone = document.createElement("div");
            seanceZone.className = "seanceZone seanceContent";
            seanceZone.innerText = Seance[i].zone;
            seance.appendChild(seanceZone);
        }
    }
}