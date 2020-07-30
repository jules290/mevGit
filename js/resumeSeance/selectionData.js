time = JSON.parse(localStorage.activitiesTime)[sessionStorage.activityIndex];
distance = JSON.parse(localStorage.activitiesDistance)[sessionStorage.activityIndex];
elevation = JSON.parse(localStorage.activitiesAltitude)[sessionStorage.activityIndex];

timeDataCase = document.getElementById("timeData");
distanceDataCase = document.getElementById("distanceData");
elevationDataCase = document.getElementById("elevationData");
gradeDataCase = document.getElementById("gradeData");

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

    elevationData = Math.round( (elevation[startIndex + widthIndex] - elevation[startIndex]) * 10 ) / 10;
    elevationDataCase.innerText = elevationData + "m";

    gradeData = Math.round( ( (elevation[startIndex + widthIndex] - elevation[startIndex]) / (distanceData * 10) ) * 10) / 10;
    gradeDataCase.innerText = gradeData + "%";
}

function removeSelectionData() {
    $("#selection").hide(100);
}