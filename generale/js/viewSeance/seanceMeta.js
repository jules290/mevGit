function postMetaSeance(seance, canvas) {
    typeMeta = seances[index].type;

    if (typeMeta != "normal") {
        if (typeMeta == "serieAndRep") postSerieAndRep(seance)
        else if (typeMeta == "serieAndTime") postSerieAndTime(seance)
        else postTime(seance)

        $(".inputS").focusout(function () {
            if (seance.type != "normal") level = getSeanceLevel(seance.type);
            let seanceEtapes = getSeanceEtapes(seance, level);

            postSeanceListEtape(seanceEtapes);
            postSeanceGraph(seanceEtapes, canvas);
        })
    }
}

function postSerieAndRep(seance) {
    $("#serieBox").empty();

    let serie = document.createElement("div");
    serie.className = "serie";
    document.getElementById("serieBox").appendChild(serie);

    let serieT1 = document.createElement("div");
    serieT1.className = "serieT";
    serieT1.innerText = "series:";
    serie.appendChild(serieT1);

    let serieInputS = document.createElement("input");
    serieInputS.className = "inputS";
    serieInputS.value = seance.serie;
    serie.appendChild(serieInputS);
    $(".inputS").focusout(function () {
        if (Number(this.value) > 5) this.value = 5
    })


    let rep = document.createElement("div");
    rep.className = "serie";
    document.getElementById("serieBox").appendChild(rep);

    let repT1 = document.createElement("div");
    repT1.className = "serieT";
    repT1.innerText = "répétitions:";
    rep.appendChild(repT1);

    let repInputS = document.createElement("input");
    repInputS.className = "inputS";
    repInputS.value = seance.rep;
    rep.appendChild(repInputS);
}

function postSerieAndTime(seance) {
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
    inputSeries.value = seance.serie;
    series.appendChild(inputSeries);

    let repBox = document.createElement("div");
    repBox.className = "repBox";
    document.getElementById("serieBox").appendChild(repBox);

    for (let i = 0; i < seance.rep.length; i++) {
        let rep = document.createElement("div");
        rep.className = "serie";
        repBox.appendChild(rep);
    
        let repT1 = document.createElement("div");
        repT1.className = "serieT";
        repT1.innerText = seance.rep[i].type + ":";
        rep.appendChild(repT1);
    
        let repInput = document.createElement("input");
        repInput.className = "inputS";
        repInput.value = seance.rep[i].time;
        rep.appendChild(repInput);
    
        let repT2 = document.createElement("div");
        repT2.className = "serieT";
        repT2.innerText = "sec";
        rep.appendChild(repT2);
    }
}

function postTime(seance) {
    $("#serieBox").empty();

    let series = document.createElement("div");
    series.className = "serie";
    document.getElementById("serieBox").appendChild(series);

    let seriesT1 = document.createElement("div");
    seriesT1.className = "serieT";
    seriesT1.innerText = seance.seanceType.toLocaleUpperCase() + ":";
    series.appendChild(seriesT1);

    let inputSeries = document.createElement("input");
    inputSeries.className = "inputS";
    inputSeries.value = seance.time;
    series.appendChild(inputSeries);

    let seriesT2 = document.createElement("div");
    seriesT2.className = "serieT";
    seriesT2.innerText = "min";
    series.appendChild(seriesT2);
}

function getSeanceEtapes(seance, level) {
    if (seance.titre == "FRACTIONNÉ PMA 30SEC/30SEC") return PMA30_30(level).seance
    else if (seance.titre == "FRACTIONNÉ PMA 1MIN/1MIN") return PMA1_1(level).seance
    else if (seance.titre == "FRACTIONNÉ PMA 3MIN/3MIN") return PMA3_3(level).seance
    else if (seance.titre == "FRACTIONNÉ SEUIL 5MIN/5MIN") return seuil5_5(level).seance
    else if (seance.titre == "SPRINT") return sprint(level).seance
    else if (seance.titre == "GIMENEZ") return gimenez(level).seance
    else if (seance.titre == "SWEET SPOT") return sweetspot(level).seance
    else if (seance.titre == "ENDURANCE HAUTE") return enduranceHaute(level).seance
    else if (seance.titre == "ENDURANCE FONDAMENTALE") return enduranceFondamentale(level).seance
    else if (seance.titre == "DÉBLOQUAGE") return debloquage().seance
    else if (seance.titre == "TEST FC MAX") return testFcMax().seance
    else if (seance.titre == "TEST PMA") return testPMA().seance
}