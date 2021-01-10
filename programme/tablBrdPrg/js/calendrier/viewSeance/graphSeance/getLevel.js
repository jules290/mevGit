function getSeanceLevel(type) {
    serie = document.getElementsByClassName("serie");
    inputsSeries = document.getElementsByClassName("inputS");
    if (type == "serieAndRep") {
        nbSeries = Number(serie.length);
        
        if (nbSeries == 1) return {
            series: 1, repS1:  Number(inputsSeries[0].value)
        }
        else if (nbSeries == 2) return {
            series: 2, repS1:  Number(inputsSeries[0].value), repS2:  Number(inputsSeries[1].value)
        }
        else if (nbSeries == 3) return {
            series: 3, repS1:  Number(inputsSeries[0].value), repS2:  Number(inputsSeries[1].value),
            repS3:  Number(inputsSeries[2].value)
        }
        else if (nbSeries == 4) return {
            series: 4, repS1:  Number(inputsSeries[0].value), repS2:  Number(inputsSeries[1].value),
            repS3:  Number(inputsSeries[2].value), repS4:  Number(inputsSeries[3].value)
        }
        else if (nbSeries == 5) return {
            series: 5, repS1:  Number(inputsSeries[0].value), repS2:  Number(inputsSeries[1].value),
            repS3:  Number(inputsSeries[2].value), repS4:  Number(inputsSeries[3].value), repS5:  Number(inputsSeries[4].value)
        }
    }
    else if (type == "serieAndTime") {
        repBox = document.getElementsByClassName("repBox");

        nbSeries = Number(serie[0].children[1].value);
        level = {series: nbSeries, rep: []};

        nbRepInSerie = Number(repBox[0].children.length);
        for (let i = 0; i < nbRepInSerie; i++) {
            rep = repBox[0].children[i];
            level.rep[i] = {type: rep.children[0].innerText, time: Number(rep.children[1].value)};
        }
        
        return level;
    }
    else {
        tps = Number(serie[0].children[1].value);
        return tps;
    }
}