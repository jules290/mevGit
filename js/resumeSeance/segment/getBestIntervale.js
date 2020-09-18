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
    interval = [
        bestTime(1),
        bestTime(5),
        bestTime(10),
        bestTime(30),
        bestTime(60),
        bestTime(180),
        bestTime(300),
        bestTime(600),
        bestTime(1200),
        bestTime(3600)
    ]

    checkPrStorage = checkPrStorage();
    if (checkPrStorage == false) {
        setPrStorage();
    }

    prInterval = JSON.parse(localStorage.prInterval);
    interval[0] = getPr1(interval[0], prInterval);
    interval[1] = getPr5(interval[1], prInterval);
    interval[2] = getPr10(interval[2], prInterval);
    interval[3] = getPr30(interval[3], prInterval);
    interval[4] = getPr60(interval[4], prInterval);
    interval[5] = getPr180(interval[5], prInterval);
    interval[6] = getPr300(interval[6], prInterval);
    interval[7] = getPr600(interval[7], prInterval);
    interval[8] = getPr1200(interval[8], prInterval);
    interval[9] = getPr3600(interval[9], prInterval);

    return interval;
}

function bestTime(interval) {
    let cadence;
    let bpm;
    let vitesse = JSON.parse(sessionStorage.activitiesVitesse);
    let puissance = JSON.parse(sessionStorage.activitiesWatts);
    if ( JSON.parse(sessionStorage.activitiesBpm) != "false" ) { bpm = JSON.parse(sessionStorage.activitiesBpm) }
    if ( JSON.parse(sessionStorage.activitiesCadence) != "false" ) { cadence = JSON.parse(sessionStorage.activitiesCadence) }
    let time = JSON.parse(sessionStorage.activitiesTime);
    let timeTotal = time[time.length - 1];
    let timeLenght = time.length;
    let restTime = timeTotal;
    let bestBpm;
    let bestCadence;
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
    let indexCutLength = indexCut.length;
    for (let i = 0; i < indexCutLength; i++) {
        if  ( Math.abs( (time[indexCut[i - suppr].endIndex] - time[indexCut[i - suppr].startIndex]) - interval ) > 2) {
            indexCut.splice(i - suppr, 1);
            suppr++;
        }
    }

    bestVitesse = Math.round(getTimeIntervalMax(indexCut, vitesse) *  100) / 100
    bestPuissance = Math.round(getTimeIntervalMax(indexCut, puissance) *  100) / 100
    if ( JSON.parse(sessionStorage.activitiesBpm) != "false" ) { bestBpm = Math.round(getTimeIntervalMax(indexCut, bpm)) }
    else { bestBpm = 0 }
    if ( JSON.parse(sessionStorage.activitiesCadence) != "false" ) { bestCadence = Math.round(getTimeIntervalMax(indexCut, cadence)) }
    else { bestCadence = 0 }

    let prStateVitesse;
    let prStatePuissance;
    let prStateBpm;
    let prStateCadence;

    bestData = {
        interval: {
            type: "time",
            value: interval,
            unit: "sec"
        },
        bestVitesse: {
            value: bestVitesse,
            pr: false
        },
        bestPuissance: {
            value: bestPuissance,
            pr: false
        },
        bestBpm: {
            value: bestBpm,
            pr: false
        },
        bestCadence: {
            value: bestCadence,
            pr: false
        },
    }
    return bestData;
}

function bestDistance(interval) {
    let vitesse = JSON.parse(sessionStorage.activitiesVitesse);
    let puissance = JSON.parse(sessionStorage.activitiesWatts);
    if ( JSON.parse(sessionStorage.activitiesBpm) != "false" ) { let bpm = JSON.parse(sessionStorage.activitiesBpm) }
    if ( JSON.parse(sessionStorage.activitiesCadence) != "false" ) { let cadence = JSON.parse(sessionStorage.activitiesCadence) }
    let distance = JSON.parse(sessionStorage.activitiesDistance);
    let distanceTotal = distance[distance.length - 1];
    let distanceLenght = distance.length;
    let restDistance = distanceTotal;
    let bestBpm;
    let bestCadence;
    let i = 0;
    let indexCut = new Array();

    while (restDistance > interval) {
        start = 0 + i;
        for (let u = 0; u < distanceLenght; u++) if (distance[u] == start) startIndex = u;

        end = interval + i;
        for (let u = 0; u < distanceLenght; u++) if (end == distance[u]) endIndex = u;

        indexCut[i] = { startIndex: startIndex, endIndex: endIndex };

        i++;
        restDistance--;
    }

    let suppr = 0;
    let indexCutLength = indexCut.length
    for (let i = 0; i < indexCutLength; i++) {
        if  ( Math.abs( (distance[indexCut[i - suppr].endIndex] - distance[indexCut[i - suppr].startIndex]) - interval ) > 2) {
            indexCut.splice(i - suppr, 1);
            suppr++;
        }
    }

    bestVitesse = Math.round(getTimeIntervalMax(indexCut, vitesse) *  100) / 100
    bestPuissance = Math.round(getTimeIntervalMax(indexCut, puissance) *  100) / 100
    if ( JSON.parse(sessionStorage.activitiesBpm) != "false" ) { bestBpm = Math.round(getTimeIntervalMax(indexCut, bpm)) }
    else { bestBpm = "-" }
    if ( JSON.parse(sessionStorage.activitiesCadence) != "false" ) { bestbestCadenceBpm = Math.round(getTimeIntervalMax(indexCut, cadence)) }
    else { bestCadence = "-" }


    bestData = {
        interval: {
            type: "time",
            value: interval,
            unit: "sec"
        },
        bestVitesse: bestVitesse,
        bestPuissance: bestPuissance,
        bestBpm: bestBpm,
        bestCadence: bestCadence,
    }
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
        dataCutIlength =  dataCut[i].length;
        for (var u = 0; u <  dataCutIlength; u++) {
            dataMoyI += dataCut[i][u] / dataCutIlength;
        }
        dataMoy[i] = dataMoyI;
    }
    
    let dataMoyMax = 0;
    let dataMoyLength = dataMoy.length;
    for (var i = 0; i <  dataMoyLength; i++) {
        if (dataMoy[i] > dataMoyMax) {
            dataMoyMax = dataMoy[i]
        }
    }

    return dataMoyMax;
}