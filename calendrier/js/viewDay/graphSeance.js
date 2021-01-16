function postGraphSeance(seance, seanceOtherInfo) {
    let detailSeanceBox = document.createElement("div");
    detailSeanceBox.className = "detailSeanceBox";
    seanceOtherInfo.appendChild(detailSeanceBox);

    let metaSeance  = document.createElement("div");
    metaSeance.className = "metaSeance";
    if (seance.typeSeance == "PMA") {
        if (seance.sousTypeSeance == "PMA30_30") metaSeance.innerText = ("fractionné PMA 30ses/30sec ( ").toLocaleUpperCase()
        else if (seance.sousTypeSeance == "PMA1_1") metaSeance.innerText = ("fractionné PMA 1min/1min ( ").toLocaleUpperCase()
        else if (seance.sousTypeSeance == "PMA3_3") metaSeance.innerText = ("fractionné PMA 3min/3min ( ").toLocaleUpperCase()

        for (let i = 0; i < seance.meta.series; i++) {
            if (i == 0) metaSeance.innerText += (seance.meta.repS1 + " rép(s)").toLocaleUpperCase()
            else if (i == 1) metaSeance.innerText += (" + " + seance.meta.repS2 + " rep(s)").toLocaleUpperCase()
            else if (i == 2) metaSeance.innerText += (" + " + seance.meta.repS3 + " rep(s)").toLocaleUpperCase()
            else if (i == 3) metaSeance.innerText += (" + " + seance.meta.repS4 + " rep(s)").toLocaleUpperCase()
            else if (i == 4) metaSeance.innerText += (" + " + seance.meta.repS5 + " rep(s)").toLocaleUpperCase()
        }
        metaSeance.innerText += " )";
    }
    else if (seance.typeSeance == "Gimenez") {
        metaSeance.innerText = ("fractionné gimenez ( ").toLocaleUpperCase();
        for (let i = 0; i < 4; i++) {
            if (i == 0) metaSeance.innerText += (seance.meta.series + " série(s)").toLocaleUpperCase()
            else if (i == 1) metaSeance.innerText += (", " + seance.meta.PMA + "sec PMA").toLocaleUpperCase()
            else if (i == 2) metaSeance.innerText += (", " + seance.meta.Z3 + "sec Z3").toLocaleUpperCase()
            else if (i == 3) metaSeance.innerText += (", " + seance.meta.recup + "sec recup").toLocaleUpperCase()
        }
        metaSeance.innerText += " )";
    }
    else if (seance.typeSeance == "Seuil") {
        metaSeance.innerText = ("fractionné seuil 5min/5min ( ").toLocaleUpperCase();
        for (let i = 0; i < seance.meta.series; i++) {
            if (i == 0) metaSeance.innerText += (seance.meta.repS1 + " rép(s)").toLocaleUpperCase()
            else if (i == 1) metaSeance.innerText += (" + " + seance.meta.repS2 + " rep(s)").toLocaleUpperCase()
            else if (i == 2) metaSeance.innerText += (" + " + seance.meta.repS3 + " rep(s)").toLocaleUpperCase()
            else if (i == 3) metaSeance.innerText += (" + " + seance.meta.repS4 + " rep(s)").toLocaleUpperCase()
            else if (i == 4) metaSeance.innerText += (" + " + seance.meta.repS5 + " rep(s)").toLocaleUpperCase()
        }
        metaSeance.innerText += " )";
    }
    else if (seance.typeSeance == "Sweet Spot") {
        metaSeance.innerText = ("fractionné sweet spot ( ").toLocaleUpperCase();
        for (let i = 0; i < 2; i++) {
            if (i == 0) metaSeance.innerText += (seance.meta.series + " série(s)").toLocaleUpperCase()
            else if (i == 1) metaSeance.innerText += (" de " + seance.meta.SwtSpt + "min sweet spot").toLocaleUpperCase()
        }
        metaSeance.innerText += " )";
    }
    else if (seance.typeSeance == "Sprint") {
        metaSeance.innerText = ("Sprint ( ").toLocaleUpperCase();
        for (let i = 0; i < seance.meta.series; i++) {
            if (i == 0) metaSeance.innerText += (seance.meta.repS1 + " rép(s)").toLocaleUpperCase()
            else if (i == 1) metaSeance.innerText += (" + " + seance.meta.repS2 + " rep(s)").toLocaleUpperCase()
            else if (i == 2) metaSeance.innerText += (" + " + seance.meta.repS3 + " rep(s)").toLocaleUpperCase()
            else if (i == 3) metaSeance.innerText += (" + " + seance.meta.repS4 + " rep(s)").toLocaleUpperCase()
            else if (i == 4) metaSeance.innerText += (" + " + seance.meta.repS5 + " rep(s)").toLocaleUpperCase()
        }
        metaSeance.innerText += " )";
    }
    else if (seance.typeSeance == "Endurance") {
        metaSeance.innerText = ("Endurance: " + seance.seance[0].value / 60 + "min").toLocaleUpperCase();
    }
    else if (seance.typeSeance == "Débloquage") (metaSeance.innerText = "Débloquage").toLocaleUpperCase();
    else if (seance.typeSeance == "Test FC MAX") (metaSeance.innerText = "Test FC MAX").toLocaleUpperCase();
    else if (seance.typeSeance == "Test PMA") (metaSeance.innerText = "Test PMA").toLocaleUpperCase();
    detailSeanceBox.appendChild(metaSeance);

    let etape = document.createElement("div");
    etape.style.width = "100%";
    etape.style.height = "79%";
    etape.style.marginBottom = "1%";
    etape.style.display = "flex";
    detailSeanceBox.appendChild(etape);

    let listEtape = document.createElement("div");
    listEtape.className = "listEtape";
    etape.appendChild(listEtape);

    let listEtapeHeader = document.createElement("div");
    listEtapeHeader.className = "listEtapeHeader";
    listEtape.appendChild(listEtapeHeader);
    
    listEtapeHeaderBtn1 = document.createElement("button");
    listEtapeHeaderBtn1.id = "listEtapeHeaderBtn1";
    listEtapeHeaderBtn1.className = "listEtapeHeaderBtn";
    listEtapeHeaderBtn1.innerText = "ZONE";
    listEtapeHeader.appendChild(listEtapeHeaderBtn1)

    listEtapeHeaderBtn2 = document.createElement("button");
    listEtapeHeaderBtn2.id = "listEtapeHeaderBtn2";
    listEtapeHeaderBtn2.className = "listEtapeHeaderBtn listEtapeHeaderBtn2";
    listEtapeHeaderBtn2.innerText = "PMA %";
    listEtapeHeader.appendChild(listEtapeHeaderBtn2);

    let listEtapeContent = document.createElement("div");
    listEtapeContent.id = "viewSeanceEtape";
    listEtape.appendChild(listEtapeContent);
    postSeanceListEtape(seance.seance);

    let canvas = document.createElement("canvas");
    canvas.className = "graphSeance";
    etape.appendChild(canvas);

    postSeanceGraph(seance.seance, canvas);
}