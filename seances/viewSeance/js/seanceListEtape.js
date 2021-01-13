function postSeanceListEtape(index) {
    let seanceData = seances[index];
    let level;
    if (seanceData.type != "normal") level = getSeanceLevel(seanceData.type);

    if (seanceData.titre == "FRACTIONNÉ PMA 30SEC/30SEC") seance = PMA30_30(level)
    else if (seanceData.titre == "FRACTIONNÉ PMA 1MIN/1MIN") seance = PMA1_1(level)
    else if (seanceData.titre == "FRACTIONNÉ PMA 3MIN/3MIN") seance = PMA3_3(level)
    else if (seanceData.titre == "FRACTIONNÉ SEUIL 5MIN/5MIN") seance = seuil5_5(level)
    else if (seanceData.titre == "SPRINT") seance = sprint(level)
    else if (seanceData.titre == "GIMENEZ") seance = gimenez(level)
    else if (seanceData.titre == "SWEET SPOT") seance = sweetspot(level)
    else if (seanceData.titre == "ENDURANCE HAUTE") seance = enduranceHaute(level)
    else if (seanceData.titre == "ENDURANCE FONDAMENTALE") seance = enduranceFondamentale(level)
    else if (seanceData.titre == "DÉBLOQUAGE") seance = debloquage()
    else if (seanceData.titre == "TEST FC MAX") seance = testFcMax()
    else if (seanceData.titre == "TEST PMA") seance = testPMA()

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

        ZColor = ["rgb(140, 140, 140)", "rgb(41, 48, 255)", "rgb(15, 179, 238)", "rgb(62, 232, 28)", "rgb(220, 220, 0)",
        "rgb(255, 150, 12)", "rgb(255, 12, 12)"];
        $("#viewSeanceEtape").empty();

        for (let i = 0; i < seance.seance.length; i++) {
            if (seance.seance[i].typeValue != "startSerie" && seance.seance[i].typeValue != "endSerie") {
                let viewSeanceEtape = document.createElement("div");
                viewSeanceEtape.className = "viewSeanceEtape";
                document.getElementById("viewSeanceEtape").appendChild(viewSeanceEtape);
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
}