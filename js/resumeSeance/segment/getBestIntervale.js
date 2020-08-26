// storage = sessionStorage;
// time = JSON.parse(sessionStorage.activitiesTime);
// timeTotal = time[time.length - 1]
// distance = JSON.parse(sessionStorage.activitiesDistance);
// altitude = JSON.parse(sessionStorage.activitiesAltitude);
// vitesse = JSON.parse(sessionStorage.activitiesVitesse);
// puissance = JSON.parse(sessionStorage.activitiesWatts);
// bpm = JSON.parse(sessionStorage.activitiesBpm);
// cadence = JSON.parse(sessionStorage.activitiesCadence);
// latLng = JSON.parse(sessionStorage.activitiesLatlng);
// moving = JSON.parse(sessionStorage.activitiesMoving);

function getBestInterval() {
    bestTime(1);
    bestTime(5);
    bestTime(10);
    bestTime(30);
    bestTime(60);
}

function bestTime(interval) {
    let vitesse = JSON.parse(sessionStorage.activitiesVitesse);
    let puissance = JSON.parse(sessionStorage.activitiesWatts);
    let time = JSON.parse(sessionStorage.activitiesTime);
    let timeTotal = time[time.length - 1];
    let timeLenght = time.length;
    let restTime = timeTotal;
    let i = 0;
    let indexCut = new Array();

    while (restTime > interval) {
        start = 0 + i;
        for (let u = 0; u < timeLenght; u++) if (time[u] == start) startIndex = u;

        end = interval + i;
        for (let u = 0; u < timeLenght; u++) if (end == time[u]) endIndex = u;

        indexCut[i] = { startIndex: startIndex, endIndex: endIndex };

        i++;
        restTime--;
    }

    let suppr = 0;
    for (let i = 0; i < indexCut.length; i++) {
        if  ( Math.abs( (time[indexCut[i - suppr].endIndex] - time[indexCut[i - suppr].startIndex]) - interval ) > 2) {
            indexCut.splice(i - suppr, 1);
            suppr++;
        }
    }

    bestVitesse = getTimeIntervalMax(indexCut, vitesse);
    bestPuissance = getTimeIntervalMax(indexCut, puissance);

    bestData = {
        interval: {
            type: "time",
            value: interval,
            unit: "sec"
        },
        bestVitesse: bestVitesse,
        bestPuissance: bestPuissance,
    }
    console.log(bestData)
    return bestData;
}

function getTimeIntervalMax(indexCut, data) {
    let dataCut = new Array();
    let indexCutLength = indexCut.length
    let dataMoy = new Array();

    for (let i = 0; i < indexCutLength; i++) {
        if (indexCut[i].endIndex != "none") {
            let dataCutI = new Array();
            for (let u = 0; u < indexCut[i].endIndex - indexCut[i].startIndex; u++) {
                dataCutI[u] = data[indexCut[i].startIndex + u];
            }
           dataCut[i] = dataCutI;
        }

        let dataMoyI = 0;
        for (var u = 0; u <  dataCut[i].length; u++) {
            dataMoyI += dataCut[i][u] / dataCut[i].length;
        }
        dataMoy[i] = dataMoyI;
    }
    
    let dataMoyMax = 0;
    for (var i = 0; i <  dataMoy.length; i++) {
        if (dataMoy[i] > dataMoyMax) {
            dataMoyMax = dataMoy[i]
        }
    }
    return dataMoyMax;
}