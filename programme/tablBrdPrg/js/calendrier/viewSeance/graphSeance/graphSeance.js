function postGraphSeance(seance) {
    let allEtape = seance.seance;
    let canvas = document.getElementById("seanceGraph");
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