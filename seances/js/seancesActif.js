function postSeancesActifListHeader() {
    seanceHeader = document.createElement("div");
    seanceHeader.id = 'seanceHeaderList';
    document.getElementById("Actif").appendChild(seanceHeader);

    seanceHeaderTitre = document.createElement("div");
    seanceHeaderTitre.className = "seanceHeaderTitre seanceHeaderContent";
    seanceHeaderTitre.innerText = "TITRE";
    seanceHeader.appendChild(seanceHeaderTitre);

    seanceHeaderDate = document.createElement("div");
    seanceHeaderDate.className = "seanceHeaderDate seanceHeaderContent";
    seanceHeaderDate.innerText = "DATE";
    seanceHeader.appendChild(seanceHeaderDate);

    seanceHeaderZone = document.createElement("div");
    seanceHeaderZone.className = "seanceHeaderZone seanceHeaderContent";
    seanceHeaderZone.innerText = "ZONE";
    seanceHeader.appendChild(seanceHeaderZone);

    seanceHeaderSupprimer = document.createElement("div");
    seanceHeaderSupprimer.className = "seanceHeaderSupprimer seanceHeaderContent";
    seanceHeaderSupprimer.innerText = "SUPPRIMER";
    seanceHeader.appendChild(seanceHeaderSupprimer);
}

function postSeancesActifList() {
    $("#Actif").empty();
    if (!localStorage.seance) localStorage.seance = JSON.stringify([])
    Seance = JSON.parse(localStorage.seance);
    aujourdHui = getAujourdHui();

    postSeancesActifListHeader();
    
    for (let i = 0; i < Seance.length; i++) {
        dateSeance = {
            day: Number(Seance[i].date.slice(0, 2)),
            month: Number(Seance[i].date.slice(3, 5)),
            year: Number(Seance[i].date.slice(6, 10))
        };

        actif = false;
        if (dateSeance.year > aujourdHui.year) actif = true
        else if (dateSeance.year == aujourdHui.year) {
            if (dateSeance.month > aujourdHui.month) actif = true
            else if (dateSeance.month == aujourdHui.month) {
                if (dateSeance.day >= aujourdHui.day) actif = true
            }
        }

        if (actif == true) {
            seance = document.createElement("div");
            seance.className = `seance seance${i}`;
            document.getElementById("Actif").appendChild(seance);
        
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

            seanceSupprimer = document.createElement("div");
            seanceSupprimer.className = "seanceSupprimer seanceContent";
            seanceSupprimer.innerText = "🗑️";
            seance.appendChild(seanceSupprimer);
        }
    }

    $(".seanceContent").hover(function () {
        console
        if (this.className != "seanceSupprimer seanceContent") {
            this.parentNode.style.backgroundColor = "rgba(0, 0, 0, 0.076)";
        }
        else {
            this.style.backgroundColor = "rgba(0, 0, 0, 0.076)";
        }
    }, function () {
        this.parentNode.style.backgroundColor = "rgba(0, 0, 0, 0)";
        this.style.backgroundColor = "rgba(0, 0, 0, 0)";
    })

    $(".seanceContent").click(function () {
        index = Number(this.parentNode.className.slice(13, 14));
        if (this.className != "seanceSupprimer seanceContent") {
            // window.location.href = `/programme/tablBrdPrg/tablBrdPrg.html?${index}`;
        }
        else {
            if (confirm("voulez-vous supprimer ce programme")) {
                Seance = JSON.parse(localStorage.seance);

                Seance.splice(index, 1);

                localStorage.seance = JSON.stringify(Seance);
                window.location.reload();
            }
        }
    })
}