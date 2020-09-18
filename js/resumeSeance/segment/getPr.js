function checkPrStorage() {
    if (!localStorage.prInterval) {
        return false;
    }
    else if (localStorage.prInterval) {
        return true;
    }
}

function setPrStorage() {
    prIntervalModel = new Array();
    prIntervalModel[0] = {
        interval: { type: "time", value: 1, unit: "sec" },
        bestVitesse: { value: 0, activityIndex: false },
        bestPuissance: { value: 0, activityIndex: false },
        bestBpm: { value: 0, activityIndex: false },
        bestCadence: { value: 0, activityIndex: false }
    };
    prIntervalModel[1] = {
        interval: { type: "time", value: 5, unit: "sec" },
        bestVitesse: { value: 0, activityIndex: false },
        bestPuissance: { value: 0, activityIndex: false },
        bestBpm: { value: 0, activityIndex: false },
        bestCadence: { value: 0, activityIndex: false }
    };
    prIntervalModel[2] = {
        interval: { type: "time", value: 10, unit: "sec" },
        bestVitesse: { value: 0, activityIndex: false },
        bestPuissance: { value: 0, activityIndex: false },
        bestBpm: { value: 0, activityIndex: false },
        bestCadence: { value: 0, activityIndex: false }
    };
    prIntervalModel[3] = {
        interval: { type: "time", value: 30, unit: "sec" },
        bestVitesse: { value: 0, activityIndex: false },
        bestPuissance: { value: 0, activityIndex: false },
        bestBpm: { value: 0, activityIndex: false },
        bestCadence: { value: 0, activityIndex: false }
    };
    prIntervalModel[4] = {
        interval: { type: "time", value: 60, unit: "sec" },
        bestVitesse: { value: 0, activityIndex: false },
        bestPuissance: { value: 0, activityIndex: false },
        bestBpm: { value: 0, activityIndex: false },
        bestCadence: { value: 0, activityIndex: false }
    };
    prIntervalModel[5] = {
        interval: { type: "time", value: 180, unit: "sec" },
        bestVitesse: { value: 0, activityIndex: false },
        bestPuissance: { value: 0, activityIndex: false },
        bestBpm: { value: 0, activityIndex: false },
        bestCadence: { value: 0, activityIndex: false }
    };
    prIntervalModel[6] = {
        interval: { type: "time", value: 300, unit: "sec" },
        bestVitesse: { value: 0, activityIndex: false },
        bestPuissance: { value: 0, activityIndex: false },
        bestBpm: { value: 0, activityIndex: false },
        bestCadence: { value: 0, activityIndex: false }
    };
    prIntervalModel[7] = {
        interval: { type: "time", value: 600, unit: "sec" },
        bestVitesse: { value: 0, activityIndex: false },
        bestPuissance: { value: 0, activityIndex: false },
        bestBpm: { value: 0, activityIndex: false },
        bestCadence: { value: 0, activityIndex: false }
    };
    prIntervalModel[8] = {
        interval: { type: "time", value: 1200, unit: "sec" },
        bestVitesse: { value: 0, activityIndex: false },
        bestPuissance: { value: 0, activityIndex: false },
        bestBpm: { value: 0, activityIndex: false },
        bestCadence: { value: 0, activityIndex: false }
    };
    prIntervalModel[9] = {
        interval: { type: "time", value: 3600, unit: "sec" },
        bestVitesse: { value: 0, activityIndex: false },
        bestPuissance: { value: 0, activityIndex: false },
        bestBpm: { value: 0, activityIndex: false },
        bestCadence: { value: 0, activityIndex: false }
    };

    localStorage.prInterval = JSON.stringify(prIntervalModel);
}

function getPr1(interval, prInterval) {
    if (interval.bestVitesse.value > prInterval[0].bestVitesse.value) {
        interval.bestVitesse.pr = true;
        prInterval[0].bestVitesse.value = interval.bestVitesse.value;
        prInterval[0].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestPuissance.value > prInterval[0].bestPuissance.value) {
        interval.bestPuissance.pr = true;
        prInterval[0].bestPuissance.value = interval.bestPuissance.value;
        prInterval[0].bestPuissance.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestBpm.value > prInterval[0].bestBpm.value) {
        interval.bestBpm.pr = true;
        prInterval[0].bestBpm.value = interval.bestBpm.value;
        prInterval[0].bestBpm.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestCadence.value > prInterval[0].bestCadence.value) {
        interval.bestCadence.pr = true;
        prInterval[0].bestCadence.value = interval.bestCadence.value;
        prInterval[0].bestCadence.activityIndex = Number(sessionStorage.activityIndex);
    }

    localStorage.prInterval = JSON.stringify(prInterval);
    return interval;
}

function getPr5(interval, prInterval) {
    if (interval.bestVitesse.value > prInterval[1].bestVitesse.value) {
        interval.bestVitesse.pr = true;
        prInterval[1].bestVitesse.value = interval.bestVitesse.value;
        prInterval[1].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestPuissance.value > prInterval[1].bestPuissance.value) {
        interval.bestPuissance.pr = true;
        prInterval[1].bestPuissance.value = interval.bestPuissance.value;
        prInterval[1].bestPuissance.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestBpm.value > prInterval[1].bestBpm.value) {
        interval.bestBpm.pr = true;
        prInterval[1].bestBpm.value = interval.bestBpm.value;
        prInterval[1].bestBpm.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestCadence.value > prInterval[1].bestCadence.value) {
        interval.bestCadence.pr = true;
        prInterval[1].bestCadence.value = interval.bestCadence.value;
        prInterval[1].bestCadence.activityIndex = Number(sessionStorage.activityIndex);
    }

    localStorage.prInterval = JSON.stringify(prInterval);
    return interval;
}

function getPr10(interval, prInterval) {
    if (interval.bestVitesse.value > prInterval[2].bestVitesse.value) {
        interval.bestVitesse.pr = true;
        prInterval[2].bestVitesse.value = interval.bestVitesse.value;
        prInterval[2].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestPuissance.value > prInterval[2].bestPuissance.value) {
        interval.bestPuissance.pr = true;
        prInterval[2].bestPuissance.value = interval.bestPuissance.value;
        prInterval[2].bestPuissance.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestBpm.value > prInterval[2].bestBpm.value) {
        interval.bestBpm.pr = true;
        prInterval[2].bestBpm.value = interval.bestBpm.value;
        prInterval[2].bestBpm.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestCadence.value > prInterval[2].bestCadence.value) {
        interval.bestCadence.pr = true;
        prInterval[2].bestCadence.value = interval.bestCadence.value;
        prInterval[2].bestCadence.activityIndex = Number(sessionStorage.activityIndex);
    }

    localStorage.prInterval = JSON.stringify(prInterval);
    return interval;
}

function getPr30(interval, prInterval) {
    if (interval.bestVitesse.value > prInterval[3].bestVitesse.value) {
        interval.bestVitesse.pr = true;
        prInterval[3].bestVitesse.value = interval.bestVitesse.value;
        prInterval[3].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestPuissance.value > prInterval[3].bestPuissance.value) {
        interval.bestPuissance.pr = true;
        prInterval[3].bestPuissance.value = interval.bestPuissance.value;
        prInterval[3].bestPuissance.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestBpm.value > prInterval[3].bestBpm.value) {
        interval.bestBpm.pr = true;
        prInterval[3].bestBpm.value = interval.bestBpm.value;
        prInterval[3].bestBpm.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestCadence.value > prInterval[3].bestCadence.value) {
        interval.bestCadence.pr = true;
        prInterval[3].bestCadence.value = interval.bestCadence.value;
        prInterval[3].bestCadence.activityIndex = Number(sessionStorage.activityIndex);
    }

    localStorage.prInterval = JSON.stringify(prInterval);
    return interval;
}

function getPr60(interval, prInterval) {
    if (interval.bestVitesse.value > prInterval[4].bestVitesse.value) {
        interval.bestVitesse.pr = true;
        prInterval[4].bestVitesse.value = interval.bestVitesse.value;
        prInterval[4].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestPuissance.value > prInterval[4].bestPuissance.value) {
        interval.bestPuissance.pr = true;
        prInterval[4].bestPuissance.value = interval.bestPuissance.value;
        prInterval[4].bestPuissance.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestBpm.value > prInterval[4].bestBpm.value) {
        interval.bestBpm.pr = true;
        prInterval[4].bestBpm.value = interval.bestBpm.value;
        prInterval[4].bestBpm.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestCadence.value > prInterval[4].bestCadence.value) {
        interval.bestCadence.pr = true;
        prInterval[4].bestCadence.value = interval.bestCadence.value;
        prInterval[4].bestCadence.activityIndex = Number(sessionStorage.activityIndex);
    }

    localStorage.prInterval = JSON.stringify(prInterval);
    return interval;
}

function getPr180(interval, prInterval) {
    if (interval.bestVitesse.value > prInterval[5].bestVitesse.value) {
        interval.bestVitesse.pr = true;
        prInterval[5].bestVitesse.value = interval.bestVitesse.value;
        prInterval[5].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestPuissance.value > prInterval[5].bestPuissance.value) {
        interval.bestPuissance.pr = true;
        prInterval[5].bestPuissance.value = interval.bestPuissance.value;
        prInterval[5].bestPuissance.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestBpm.value > prInterval[5].bestBpm.value) {
        interval.bestBpm.pr = true;
        prInterval[5].bestBpm.value = interval.bestBpm.value;
        prInterval[5].bestBpm.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestCadence.value > prInterval[5].bestCadence.value) {
        interval.bestCadence.pr = true;
        prInterval[5].bestCadence.value = interval.bestCadence.value;
        prInterval[5].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }

    localStorage.prInterval = JSON.stringify(prInterval);
    return interval;
}

function getPr300(interval, prInterval) {
    if (interval.bestVitesse.value > prInterval[6].bestVitesse.value) {
        interval.bestVitesse.pr = true;
        prInterval[6].bestVitesse.value = interval.bestVitesse.value;
        prInterval[6].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestPuissance.value > prInterval[6].bestPuissance.value) {
        interval.bestPuissance.pr = true;
        prInterval[6].bestPuissance.value = interval.bestPuissance.value;
        prInterval[6].bestPuissance.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestBpm.value > prInterval[6].bestBpm) {
        interval.bestBpm.pr = true;
        prInterval[6].bestBpm.value = interval.bestBpm.value;
        prInterval[6].bestBpm.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestCadence.value > prInterval[6].bestCadence.value) {
        interval.bestCadence.pr = true;
        prInterval[6].bestCadence.value = interval.bestCadence.value;
        prInterval[6].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }

    localStorage.prInterval = JSON.stringify(prInterval);
    return interval;
}

function getPr600(interval, prInterval) {
    if (interval.bestVitesse.value > prInterval[7].bestVitesse.value) {
        interval.bestVitesse.pr = true;
        prInterval[7].bestVitesse.value = interval.bestVitesse.value;
        prInterval[7].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestPuissance.value > prInterval[7].bestPuissance.value) {
        interval.bestPuissance.pr = true;
        prInterval[7].bestPuissance.value = interval.bestPuissance.value;
        prInterval[7].bestPuissance.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestBpm.value > prInterval[7].bestBpm.value) {
        interval.bestBpm.pr = true;
        prInterval[7].bestBpm.value = interval.bestBpm.value;
        prInterval[7].bestBpm.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestCadence.value > prInterval[7].bestCadence.value) {
        interval.bestCadence.pr = true;
        prInterval[7].bestCadence.value = interval.bestCadence.value;
        prInterval[7].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }

    localStorage.prInterval = JSON.stringify(prInterval);
    return interval;
}

function getPr1200(interval, prInterval) {
    if (interval.bestVitesse.value > prInterval[8].bestVitesse.value) {
        interval.bestVitesse.pr = true;
        prInterval[8].bestVitesse.value = interval.bestVitesse.value;
        prInterval[8].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestPuissance.value > prInterval[8].bestPuissance.value) {
        interval.bestPuissance.pr = true;
        prInterval[8].bestPuissance.value = interval.bestPuissance.value;
        prInterval[8].bestPuissance.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestBpm.value > prInterval[8].bestBpm.value) {
        interval.bestBpm.pr = true;
        prInterval[8].bestBpm.value = interval.bestBpm.value;
        prInterval[8].bestBpm.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestCadence.value > prInterval[8].bestCadence.value) {
        interval.bestCadence.pr = true;
        prInterval[8].bestCadence.value = interval.bestCadence.value;
        prInterval[8].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }

    localStorage.prInterval = JSON.stringify(prInterval);
    return interval;
}

function getPr3600(interval, prInterval) {
    if (interval.bestVitesse.value > prInterval[9].bestVitesse.value) {
        interval.bestVitesse.pr = true;
        prInterval[9].bestVitesse.value = interval.bestVitesse.value;
        prInterval[9].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestPuissance.value > prInterval[9].bestPuissance.value) {
        interval.bestPuissance.pr = true;
        prInterval[9].bestPuissance.value = interval.bestPuissance.value;
        prInterval[9].bestPuissance.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestBpm.value > prInterval[9].bestBpm.value) {
        interval.bestBpm.pr = true;
        prInterval[9].bestBpm.value = interval.bestBpm.value;
        prInterval[9].bestBpm.activityIndex = Number(sessionStorage.activityIndex);
    }
    if (interval.bestCadence.value > prInterval[9].bestCadence.value) {
        interval.bestCadence.pr = true;
        prInterval[9].bestCadence.value = interval.bestCadence.value;
        prInterval[9].bestVitesse.activityIndex = Number(sessionStorage.activityIndex);
    }

    localStorage.prInterval = JSON.stringify(prInterval);
    return interval;
}

// let prStateVitesse;
// let prStatePuissance;
// let prStateBpm;
// let prStateCadence;

// else if (localStorage.prInterval) {
//     prInterval = JSON.parse(localStorage.prInterval);
//     let pr;
//     let prIndex;
//     switch (interval) {
//         case 1:
//             pr = prInterval[0];
//             prIndex = 0;
//             break;
//         case 5:
//             pr = prInterval[1];
//             prIndex = 1;    
//             break;
//         case 10:
//             pr = prInterval[2];
//             prIndex = 2;
//             break;
//         case 30:
//             pr = prInterval[3];
//             prIndex = 3;
//             break;
//         case 60:
//             pr = prInterval[4];
//             prIndex = 4;
//             break;
//         case 180:
//             pr = prInterval[5];
//             prIndex = 5;
//             break;
//         case 300:
//             pr = prInterval[6];
//             prIndex = 6;
//             break;
//         case 600:
//             pr = prInterval[7];
//             prIndex = 7;
//             break;
//         case 1200:
//             pr = prInterval[8];
//             prIndex = 8;
//             break;
//         case 3600:
//             pr = prInterval[9];
//             prIndex = 9;
//             break;
//     }

//     if (bestVitesse > pr.bestVitesse.one) {
//         prInterval[prIndex].bestVitesse.one = bestVitesse;
//         localStorage.prInterval = JSON.stringify(prInterval);
//         prStateVitesse = true;
//     }
//     else {
//         prStateVitesse = false;
//     }

//     if (bestPuissance > pr.bestPuissance.one) {
//         prInterval[prIndex].bestPuissance.one = bestPuissance;
//         localStorage.prInterval = JSON.stringify(prInterval);
//         prStatePuissance = true;
//     }
//     else {
//         prStatePuissance = false;
//     }

//     if (bestBpm > pr.bestBpm.one) {
//         prInterval[prIndex].bestBpm.one = bestBpm;
//         localStorage.prInterval = JSON.stringify(prInterval);
//         prStateBpm = true;
//     }
//     else {
//         prStateBpm = false;
//     }

//     if (bestCadence > pr.bestCadence.one) {
//         prInterval[prIndex].bestCadence.one = bestCadence;
//         localStorage.prInterval = JSON.stringify(prInterval);
//         prStateCadence = true;
//     }
//     else {
//         prStateCadence = false;
//     }
// }