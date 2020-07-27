time = JSON.parse(localStorage.activitiesTime)[sessionStorage.activityIndex];
distance = JSON.parse(localStorage.activitiesDistance)[sessionStorage.activityIndex];
distanceDataCase = document.getElementById("distanceData");
timeDataCase = document.getElementById("timeData");

function setSelectionData(startIndex, widthIndex) {
    distanceData = Math.round( ( distance[startIndex + widthIndex] - distance[startIndex]) / 10 ) / 100;
    distanceDataCase.innerText = distanceData + "km";

    timeData = Math.round( ( time[startIndex + widthIndex] - time[startIndex]) / 10 ) / 100;
    timeDataCase.innerText = timeData + "s";
}