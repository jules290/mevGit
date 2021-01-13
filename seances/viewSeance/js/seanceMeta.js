function postMetaSeance(index) {
    seance = seances[index];
    typeMeta = seances[index].type;

    if (typeMeta != "normal") {
        if (typeMeta == "serieAndRep") postSerieAndRep(seance)
        else if (typeMeta == "serieAndTime") postSerieAndTime(seance)
        else postTime(seance)

        $(".inputS").focusout(function () {
            postSeanceListEtape(index);
            postSeanceGraph(index);
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