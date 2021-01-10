function postGraphSeance(seance, seanceOtherInfo) {
    let ZColor = ["rgb(140, 140, 140)", "rgb(41, 48, 255)", "rgb(15, 179, 238)", "rgb(62, 232, 28)", "rgb(220, 220, 0)",
    "rgb(255, 150, 12)", "rgb(255, 12, 12)"];

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

    listEtapeHeaderBtn1.onclick = function () {
        listEtapeHeaderBtn1.style.backgroundColor = "rgb(60, 60, 60)";
        listEtapeHeaderBtn2.style.backgroundColor = "rgb(90, 90, 90)";
        sessionStorage.listEtapeState = "ZONE";
        postListEtape(sessionStorage.listEtapeState);
    }

    listEtapeHeaderBtn2.onclick = function () {
        listEtapeHeaderBtn1.style.backgroundColor = "rgb(90, 90, 90)";
        listEtapeHeaderBtn2.style.backgroundColor = "rgb(60, 60, 60)";
        sessionStorage.listEtapeState = "PMA %";
        postListEtape(sessionStorage.listEtapeState);
    }

    let listEtapeContent = document.createElement("div");
    listEtapeContent.className = "listEtapeContent";
    listEtape.appendChild(listEtapeContent);
    if (!sessionStorage.listEtapeState) sessionStorage.listEtapeState = "ZONE";
    postListEtape(sessionStorage.listEtapeState);

    function postListEtape(state) {
        if (state == "ZONE") {
            document.getElementById("listEtapeHeaderBtn1").style.backgroundColor = "rgb(60, 60, 60)";
            document.getElementById("listEtapeHeaderBtn2").style.backgroundColor = "rgb(90, 90, 90)";
        }
        else {
            document.getElementById("listEtapeHeaderBtn1").style.backgroundColor = "rgb(90, 90, 90)";
            document.getElementById("listEtapeHeaderBtn2").style.backgroundColor = "rgb(60, 60, 60)";
        }

        $(".listEtapeContent").empty();
        for (let i = 0; i < seance.seance.length; i++) {
            if (seance.seance[i].typeValue != "startSerie" && seance.seance[i].typeValue != "endSerie") {
                let viewSeanceEtape = document.createElement("div");
                viewSeanceEtape.className = "viewSeanceEtape";
                listEtapeContent.appendChild(viewSeanceEtape);
                viewSeanceEtape.style.backgroundColor = ZColor[seance.seance[i].Z - 1];
            
                let viewSeanceEtapeT = document.createElement("div");
                viewSeanceEtapeT.className = "viewSeanceEtapeT";
                if (state == "ZONE") {
                    if (localStorage.PMA > 0) document.getElementById("listEtapeHeaderBtn1").innerText = "WATT"
                    else if (localStorage.fcMax > 0) document.getElementById("listEtapeHeaderBtn1").innerText = "FC"
                    else document.getElementById("listEtapeHeaderBtn1").innerText = "ZONE"
                    viewSeanceEtapeT.innerText = get00i00i00(seance.seance[i].value) + "  @" + seance.seance[i].intensité;
                }
                else {
                    viewSeanceEtapeT.innerText = get00i00i00(seance.seance[i].value) + "  @" + seance.seance[i].WPrct + "% PMA"; 
                }
                viewSeanceEtape.appendChild(viewSeanceEtapeT);
            }
        }
    }

    let canvas = document.createElement("canvas");
    canvas.className = "graphSeance";
    etape.appendChild(canvas);

    let allEtape = seance.seance;
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.60;
    canvas.height = window.innerHeight * 0.96 * 0.40;
    totalWidth = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (seance.seance) {
        let timeTotalSeance = getTimeTotalSeance(allEtape);
        for (let i = 0; i < allEtape.length; i++) {
            if (allEtape[i].typeValue != "startSerie" && allEtape[i].typeValue != "endSerie") {
                widthBar = ( allEtape[i].value * canvas.width ) / timeTotalSeance;
                heightBar = ( allEtape[i].WPrct * canvas.height ) / 200;
    
                ctx.fillStyle = ZColor[allEtape[i].Z - 1];
                ctx.fillRect(totalWidth, canvas.height - heightBar, widthBar, heightBar);
        
                totalWidth += widthBar;
            }
        }
    }
}

function getTimeTotalSeance(allEtape) {
    total = 0;
    for (let i = 0; i < allEtape.length; i++) {
        if (allEtape[i].typeValue != "startSerie" && allEtape[i].typeValue != "endSerie") {
            total += allEtape[i].value;
        }
    }
    return total;
}