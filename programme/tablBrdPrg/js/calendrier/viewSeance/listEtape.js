function postListEtape(seance) {
    $("#viewSeanceEtape").empty();
    
    for (let i = 0; i < seance.length; i++) {
        if (seance[i].typeValue != "startSerie" && seance[i].typeValue != "endSerie") {
            var viewSeanceEtape = document.createElement("div");
            viewSeanceEtape.className = "viewSeanceEtape";
            document.getElementById("viewSeanceEtape").appendChild(viewSeanceEtape);
            viewSeanceEtape.style.backgroundColor = ZColor[seance[i].Z - 1];
    
            var viewSeanceEtapeT = document.createElement("div");
            viewSeanceEtapeT.className = "viewSeanceEtapeT";
            viewSeanceEtapeT.innerText = get00i00i00(seance[i].value) + "  @" + seance[i].intensité;
            viewSeanceEtape.appendChild(viewSeanceEtapeT);
        }
    }
}