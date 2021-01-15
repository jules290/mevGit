function postSeanceGraph(seance, canvas) {
    let ctx = canvas.getContext("2d");
    let totalWidth = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (seance) {
        let timeTotalSeance = getTimeTotalSeance(seance);
        for (let i = 0; i < seance.length; i++) {
            if (seance[i].typeValue != "startSerie" && seance[i].typeValue != "endSerie") {
                widthBar = ( seance[i].value * canvas.width ) / timeTotalSeance;
                heightBar = ( seance[i].WPrct * canvas.height ) / 200;
        
                ctx.fillStyle = ZColor[seance[i].Z - 1];
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