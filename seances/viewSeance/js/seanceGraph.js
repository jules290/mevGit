function postSeanceGraph(index) {
    let seanceData = seances[index];
    let level
    if (seanceData.type != "normal") level = getSeanceLevel(seanceData.type);
    let ZColor = ["rgb(140, 140, 140)", "rgb(41, 48, 255)", "rgb(15, 179, 238)", "rgb(62, 232, 28)", "rgb(220, 220, 0)",
    "rgb(255, 150, 12)", "rgb(255, 12, 12)"];

    if (seanceData.titre == "FRACTIONNÉ PMA 30SEC/30SEC") seance = PMA30_30(level)
    else if (seanceData.titre == "FRACTIONNÉ PMA 1MIN/1MIN") seance = PMA1_1(level)
    else if (seanceData.titre == "FRACTIONNÉ PMA 3MIN/3MIN") seance = PMA3_3(level)
    else if (seanceData.titre == "FRACTIONNÉ SEUIL 5MIN/5MIN") seance = seuil5_5(level)
    else if (seanceData.titre == "GIMENEZ") seance = gimenez(level)
    else if (seanceData.titre == "SWEET SPOT") seance = sweetspot(level)
    else if (seanceData.titre == "ENDURANCE HAUT") seance = enduranceHaute(level)
    else if (seanceData.titre == "ENDURANCE FONDAMENTALE") seance = enduranceFondamentale(level)
    else if (seanceData.titre == "DÉBLOQUAGE") seance = debloquage()
    else if (seanceData.titre == "TEST FC MAX") seance = testFcMax()
    else if (seanceData.titre == "TEST PMA") seance = testPMA()

    let canvas = document.getElementById("graphSeance");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth * 0.60;
    canvas.height = window.innerHeight * 0.96 * 0.40;
    totalWidth = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (seance.seance) {
        let timeTotalSeance = getTimeTotalSeance(seance.seance);
        for (let i = 0; i < seance.seance.length; i++) {
            if (seance.seance[i].typeValue != "startSerie" && seance.seance[i].typeValue != "endSerie") {
                widthBar = ( seance.seance[i].value * canvas.width ) / timeTotalSeance;
                heightBar = ( seance.seance[i].WPrct * canvas.height ) / 200;
        
                ctx.fillStyle = ZColor[seance.seance[i].Z - 1];
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