function postListEtape(seance) {
    ZColor = ["rgb(140, 140, 140)", "rgb(41, 48, 255)", "rgb(15, 179, 238)", "rgb(62, 232, 28)", "rgb(220, 220, 0)",
    "rgb(255, 150, 12)", "rgb(255, 12, 12)"];
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