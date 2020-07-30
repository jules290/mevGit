time = JSON.parse(localStorage.activitiesTime)[sessionStorage.activityIndex];
distance = JSON.parse(localStorage.activitiesDistance)[sessionStorage.activityIndex];
distanceDataCase = document.getElementById("distanceData");
timeDataCase = document.getElementById("timeData");

$("#selection").hide();

function setSelectionData(startIndex, widthIndex) {
    $("#selection").show(100);

    distanceData = Math.round( ( distance[startIndex + widthIndex] - distance[startIndex]) / 10 ) / 100;
    distanceDataCase.innerText = distanceData + "km";


    timeData = Math.round( ( time[startIndex + widthIndex] - time[startIndex]));
    var nbHour = parseInt((timeData / 60) / 60);
    var nbminuteRestante = (timeData / 60) % 60;
    var nbmSecondeRestante = timeData % 60;
    if (nbmSecondeRestante < 10) {
        nbmSecondeRestante = "0" + nbmSecondeRestante;
    }
    timeDataCase.innerText = nbHour + ":" + Math.round(nbminuteRestante) + ":" + nbmSecondeRestante;
}

function removeSelectionData() {
    $("#selection").hide(100);
}