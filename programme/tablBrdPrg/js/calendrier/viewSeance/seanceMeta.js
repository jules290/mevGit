function postMetaSeance(seance, semaineActuel, day) {
    typeMeta = seance.typeSeance;

    if (typeMeta != "Débloquage" && typeMeta != "Test FC MAX" && typeMeta != "Test PMA") {
        document.getElementById("submitSaveNewSeance").style.visibility = "visible";
        if (typeMeta == "PMA" || typeMeta == "Seuil") {
            postSerieSeuil_PMA(seance, semaineActuel);
            document.getElementById("addSerie").style.visibility = "visible";
            document.getElementById("downSerie").style.visibility = "visible";
            $("#addSerie").click(function () {addSerie(seance, semaineActuel)})
            $("#downSerie").click(function () {downSerie(seance, semaineActuel)})
            $(".inputS").focusout(function () {refreshSeancePma_seuil(seance, semaineActuel)})
            document.getElementById("submitSaveNewSeance").onclick = function () {saveNewSeancePma_seuil(seance, semaineActuel, day)}
        }
        else {
            document.getElementById("addSerie").style.visibility = "hidden";
            document.getElementById("downSerie").style.visibility = "hidden";
            if (typeMeta == "Gimenez") {
                postSerieGimenez(seance);
                document.getElementById("submitSaveNewSeance").onclick = function () {saveNewSeanceGimenez(seance, semaineActuel, day)}
                $(".inputS").focusout(function () {refreshSeanceGimenez(seance, semaineActuel)})
            }
            else if (typeMeta == "Sweet Spot") {
                postSerieSweetSpot(seance);
                document.getElementById("submitSaveNewSeance").onclick = function () {saveNewSeanceSweetSpot(seance, semaineActuel, day)}
                $(".inputS").focusout(function () {refreshSeanceSweetSpot(seance, semaineActuel)})
            }
            else if (typeMeta == "Endurance") {
                postSerieEndurance(seance);
                document.getElementById("submitSaveNewSeance").onclick = function () {saveNewSeanceEndurance(seance, semaineActuel, day)}
            }
        }
    }
}

function postSerieSeuil_PMA(seance, semaineActuel) {
    $("#serieBox").empty();
    for (let i = 0; i < seance.meta.series; i++) {
        let serie = document.createElement("div");
        serie.className = "serie";
        document.getElementById("serieBox").appendChild(serie);

        let serieT1 = document.createElement("div");
        serieT1.className = "serieT";
        serieT1.innerText = "serie " + (i + 1) + ":";
        serie.appendChild(serieT1);

        let inputS = document.createElement("input");
        inputS.className = "inputS";
        switch (i) {
            case 0:
                inputS.value = seance.meta.repS1;
                break;
            case 1:
                inputS.value = seance.meta.repS2;
                break;
            case 2:
                inputS.value = seance.meta.repS3;
                break;
            case 3:
                inputS.value = seance.meta.repS3;
                break;
            case 4:
                inputS.value = seance.meta.repS4;
                break;
        }
        serie.appendChild(inputS);

        let serieT2 = document.createElement("div");
        serieT2.className = "serieT";
        serieT2.innerText = "rep(s)";
        serie.appendChild(serieT2);
    }
}

function postSerieGimenez(seance) {
    $("#serieBox").empty();
    
    let series = document.createElement("div");
    series.className = "serie";
    document.getElementById("serieBox").appendChild(series);

    let seriesT1 = document.createElement("div");
    seriesT1.className = "serieT";
    seriesT1.innerText = "series:";
    series.appendChild(seriesT1);

    let inputSeries = document.createElement("input");
    inputSeries.className = "inputS";
    inputSeries.value = seance.meta.series;
    series.appendChild(inputSeries);


    let PMA = document.createElement("div");
    PMA.className = "serie";
    document.getElementById("serieBox").appendChild(PMA);

    let PMAT1 = document.createElement("div");
    PMAT1.className = "serieT";
    PMAT1.innerText = "PMA:";
    PMA.appendChild(PMAT1);

    let inputPMA = document.createElement("input");
    inputPMA.className = "inputS";
    inputPMA.value = seance.meta.PMA;
    PMA.appendChild(inputPMA);

    let PMAT2 = document.createElement("div");
    PMAT2.className = "serieT";
    PMAT2.innerText = "sec";
    PMA.appendChild(PMAT2);


    let Z3 = document.createElement("div");
    Z3.className = "serie";
    document.getElementById("serieBox").appendChild(Z3);

    let Z3T1 = document.createElement("div");
    Z3T1.className = "serieT";
    Z3T1.innerText = "Z3:";
    Z3.appendChild(Z3T1);

    let inputZ3 = document.createElement("input");
    inputZ3.className = "inputS";
    inputZ3.value = seance.meta.Z3;
    Z3.appendChild(inputZ3);

    let Z3T2 = document.createElement("div");
    Z3T2.className = "serieT";
    Z3T2.innerText = "sec";
    Z3.appendChild(Z3T2);


    let recup = document.createElement("div");
    recup.className = "serie";
    document.getElementById("serieBox").appendChild(recup);

    let recupT1 = document.createElement("div");
    recupT1.className = "serieT";
    recupT1.innerText = "recup:";
    recup.appendChild(recupT1);

    let inputRecup = document.createElement("input");
    inputRecup.className = "inputS";
    inputRecup.value = seance.meta.recup;
    recup.appendChild(inputRecup);

    let recupT2 = document.createElement("div");
    recupT2.className = "serieT";
    recupT2.innerText = "sec";
    recup.appendChild(recupT2);
}

function postSerieSweetSpot(seance) {
    $("#serieBox").empty();

    let series = document.createElement("div");
    series.className = "serie";
    document.getElementById("serieBox").appendChild(series);

    let seriesT1 = document.createElement("div");
    seriesT1.className = "serieT";
    seriesT1.innerText = "series :";
    series.appendChild(seriesT1);

    let inputSeries = document.createElement("input");
    inputSeries.className = "inputS";
    inputSeries.value = seance.meta.series;
    series.appendChild(inputSeries);


    let SwtSpt = document.createElement("div");
    SwtSpt.className = "serie";
    document.getElementById("serieBox").appendChild(SwtSpt);

    let SwtSptT1 = document.createElement("div");
    SwtSptT1.className = "serieT";
    SwtSptT1.innerText = "sweet spot:";
    SwtSpt.appendChild(SwtSptT1);

    let inputSwtSpt = document.createElement("input");
    inputSwtSpt.className = "inputS";
    inputSwtSpt.value = seance.meta.SwtSpt;
    SwtSpt.appendChild(inputSwtSpt);

    let SwtSptT2 = document.createElement("div");
    SwtSptT2.className = "serieT";
    SwtSptT2.innerText = "min";
    SwtSpt.appendChild(SwtSptT2);
}

function postSerieEndurance(seance) {
    $("#serieBox").empty();

    let tps = document.createElement("div");
    tps.className = "serie";
    document.getElementById("serieBox").appendChild(tps);

    let tpsT1 = document.createElement("p");
    tpsT1.className = "serieT";
    tpsT1.innerText = "endurance:";
    tps.appendChild(tpsT1);

    let inputTps = document.createElement("input");
    inputTps.className = "inputS";
    inputTps.value = seance.seance[0].value / 60;
    inputTps.style.marginLeft = "5px";
    tps.appendChild(inputTps);

    let tpsT2 = document.createElement("div");
    tpsT2.className = "serieT";
    tpsT2.innerText = "min";
    tps.appendChild(tpsT2);
}

function addSerie(seance, semaineActuel) {
    let Serie = document.getElementsByClassName("serie");
    let inputSeries = document.getElementsByClassName("inputS");
    let serieLen = document.getElementsByClassName("serie").length;
    let max = 5;


    if (serieLen < max) {
        let serie = document.createElement("div");
        serie.className = "serie";
        document.getElementById("serieBox").appendChild(serie);

        let serieT1 = document.createElement("div");
        serieT1.className = "serieT";
        serieT1.innerText = "serie " + (serieLen + 1) + ":";
        serie.appendChild(serieT1);

        let inputS = document.createElement("input");
        inputS.className = "inputS";
        inputS.value = inputSeries[inputSeries.length - 1].value;
        serie.appendChild(inputS);

        let serieT2 = document.createElement("div");
        serieT2.className = "serieT";
        serieT2.innerText = "rep(s)";
        serie.appendChild(serieT2);
    }

    refreshSeancePma_seuil(seance, semaineActuel);
    $(".inputS").focusout(function () {refreshSeancePma_seuil(seance, semaineActuel)})
}

function downSerie(seance, semaineActuel) {
    let Serie = document.getElementsByClassName("serie");
    let serieLen = document.getElementsByClassName("serie").length;

    if (serieLen > 1) Serie[serieLen - 1].remove();

    refreshSeancePma_seuil(seance, semaineActuel);
    $(".inputS").focusout(function () {refreshSeancePma_seuil(seance, semaineActuel)})
}