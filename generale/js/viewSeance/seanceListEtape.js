function postSeanceListEtape(seance) {
    document.getElementById("listEtapeHeaderBtn1").onclick = function () {
        sessionStorage.listEtapeState = "ZONE";
        postListEtape(sessionStorage.listEtapeState);
    }

    document.getElementById("listEtapeHeaderBtn2").onclick = function () {
        sessionStorage.listEtapeState = "PMA %";
        postListEtape(sessionStorage.listEtapeState);
    }

    $(document).ready(function () {
        if (!sessionStorage.listEtapeState) sessionStorage.listEtapeState = "ZONE";
        postListEtape(sessionStorage.listEtapeState);
    })

    function postListEtape(state) {
        if (state == "ZONE") {
            document.getElementById("listEtapeHeaderBtn1").style.backgroundColor = "rgb(60, 60, 60)";
            document.getElementById("listEtapeHeaderBtn2").style.backgroundColor = "rgb(90, 90, 90)";
        }
        else {
            document.getElementById("listEtapeHeaderBtn1").style.backgroundColor = "rgb(90, 90, 90)";
            document.getElementById("listEtapeHeaderBtn2").style.backgroundColor = "rgb(60, 60, 60)";
        }
        
        $("#viewSeanceEtape").empty();

        for (let i = 0; i < seance.length; i++) {
            if (seance[i].typeValue != "startSerie") {
                let viewSeanceEtape = document.createElement("div");
                viewSeanceEtape.className = "viewSeanceEtape";
                document.getElementById("viewSeanceEtape").appendChild(viewSeanceEtape);
                viewSeanceEtape.style.backgroundColor = ZColor[seance[i].Z - 1];
            
                let viewSeanceEtapeT = document.createElement("div");
                viewSeanceEtapeT.className = "viewSeanceEtapeT";
                if (state == "ZONE") {
                    if (localStorage.PMA > 0) document.getElementById("listEtapeHeaderBtn1").innerText = "WATT"
                    else if (localStorage.fcMax > 0) document.getElementById("listEtapeHeaderBtn1").innerText = "FC"
                    else document.getElementById("listEtapeHeaderBtn1").innerText = "ZONE"
                    viewSeanceEtapeT.innerText = get00i00i00(seance[i].value) + "  @" + seance[i].intensité;
                }
                else {
                    viewSeanceEtapeT.innerText = get00i00i00(seance[i].value) + "  @" + seance[i].WPrct + "% PMA"; 
                }
                viewSeanceEtape.appendChild(viewSeanceEtapeT);
            }
            else {
                index = i;
                while (seance[index].typeValue != "endSerie") {
                    index++;
                }
                
                rep = getReps();
                nbRep = (index - i - 1) / rep.length;

                backgroundColor = "";
                for (let u = 0; u < rep.length; u++) {
                    if (u == 0) backgroundColor += ZColor[rep[u].Z - 1] + ","
                    else if (u == rep.length - 1) backgroundColor += " " + ZColor[rep[u].Z - 1]
                    else backgroundColor += " " + ZColor[rep[u].Z - 1] + ","
                }

                let viewSeanceEtapeSerie = document.createElement("div");
                viewSeanceEtapeSerie.className = "viewSeanceEtapeSerie";
                viewSeanceEtapeSerie.style.backgroundImage = `linear-gradient(${backgroundColor})`;
                viewSeanceEtapeSerie.style.height = 20 * rep.length + "px";
                console.log(viewSeanceEtapeSerie.style.height)
                document.getElementById("viewSeanceEtape").appendChild(viewSeanceEtapeSerie);

                let viewSeanceEtapeSerieT = document.createElement("p");
                viewSeanceEtapeSerieT.className = "viewSeanceEtapeSerieT";
                viewSeanceEtapeSerieT.innerText = nbRep + "x";
                viewSeanceEtapeSerie.appendChild(viewSeanceEtapeSerieT);

                let viewSeanceEtapeSerieRepBox = document.createElement("div");
                viewSeanceEtapeSerieRepBox.className = "viewSeanceEtapeSerieRepBox";
                viewSeanceEtapeSerie.appendChild(viewSeanceEtapeSerieRepBox);

                for (let u = 0; u < rep.length; u++) {
                    let viewSeanceEtapeSerieRep = document.createElement("p");
                    viewSeanceEtapeSerieRep.className = "viewSeanceEtapeSerieRep";
                    if (state == "ZONE") viewSeanceEtapeSerieRep.innerText = get00i00i00(rep[u].value) + "  @" + rep[u].intensité
                    else viewSeanceEtapeSerieRep.innerText = get00i00i00(rep[u].value) + "  @" + rep[u].WPrct + "% PMA"
                    viewSeanceEtapeSerieRepBox.appendChild(viewSeanceEtapeSerieRep);
                }

                i += index - i;
                function getReps() {
                    nbEtapeInRep = 1;
                    REP = false;
                    while (REP == false && nbEtapeInRep < 3) {
                        nbEtapeInRep += 1;
                        rep = [];
                        repPlus = [];

                        startEtapeRep = i + 1;
                        for (let u = 0; u < nbEtapeInRep; u++) {
                            rep[u] = seance[startEtapeRep + u];
                        }

                        for (let u = 0; u < nbEtapeInRep; u++) {
                            repPlus[u] = seance[startEtapeRep + u + rep.length];
                        }

                        REP = true;
                        for (let u = 0; u < rep.length; u++) {
                            if (rep[u].intensité != repPlus[u].intensité) REP = false;
                        }
                    }

                    return rep;
                }
            }
        }
    }
}