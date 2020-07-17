let xHover;
let xHoverData;
let ctxWidth = document.getElementById("graphaltitude").style.width;
sessionStorage.ctxWidth = (ctxWidth.slice(0, ctxWidth.length - 2));
let fraction;
let Altitude;
let position

var baraltitude = document.getElementById("baraltitude");
var barSpeed = document.getElementById("barSpeed");
var barPower = document.getElementById("barPower");
let extent = document.getElementById("extent")
let xClic;
let selection;

function chartLineHoverElevation(event, grade, altitude, vitesse, watt, latlng) {
    xHover = event.offsetX;
    xHoverData = event.offsetX;
    selection = (extent.width.animVal.value) / (sessionStorage.ctxWidth - 30);
    selectionWidth = (extent.width.animVal.value)
    x = (extent.x.animVal.value);
    if (selection > 0) {
        xHoverData = (((xHover) - x) / selection) + 21;
        if (xHoverData < 21) {
            xHoverData = 21;
        }
        if (xHoverData > (sessionStorage.ctxWidth - 9)) {
            xHoverData = (sessionStorage.ctxWidth - 9);
        }
    }
    if (xHover >= 21 && xHover <= sessionStorage.ctxWidth - 9) {
        baraltitude.setAttribute('x1', xHover);
        baraltitude.setAttribute('x2', xHover);
        barSpeed.setAttribute('x1', xHoverData);
        barSpeed.setAttribute('x2', xHoverData);
        barPower.setAttribute('x1', xHoverData);
        barPower.setAttribute('x2', xHoverData);
    }
    fraction = (xHover - 21) / (sessionStorage.ctxWidth - 30);

    grade = grade[ Math.round( fraction * grade.length) ]
    if (grade != undefined) {
        document.getElementById("grade").innerText = document.getElementById("grade").innerText.slice(0, 6) + " " + grade + "%"
    }

    Altitude = altitude[ Math.round( fraction * altitude.length) ]
    if (Altitude != undefined) {
        document.getElementById("altitude").innerText = document.getElementById("altitude").innerText.slice(0, 10) + " " + Altitude + "m"
    }

    Vitesse = vitesse[ Math.round( fraction * vitesse.length) ]
    if (Vitesse != undefined) {
        document.getElementById("vitesse").innerText = document.getElementById("vitesse").innerText.slice(0, 8) + " " + Math.round(Vitesse*10)/10 + "km/h"
    }

    power = watt[ Math.round( fraction * watt.length) ]
    if (power != undefined) {
        document.getElementById("power").innerText = document.getElementById("power").innerText.slice(0, 10) + " " + power + "W"
    }

    setMarker(fraction, latlng);
}

function chartLineHoverData(event, grade, altitude, vitesse, watt, latlng) {
    xHover = event.offsetX;
    xHoverData = event.offsetX;

    if (xHover < 21) {
        xHover = 21;
    }
    if (xHover > (sessionStorage.ctxWidth - 9)) {
        xHover = (sessionStorage.ctxWidth - 9);
    }

    if (xHoverData < 21) {
        xHoverData = 21;
    }

    if (xHoverData > (sessionStorage.ctxWidth - 9)) {
        xHoverData = (sessionStorage.ctxWidth - 9);
    }

    selection = (extent.width.animVal.value) / (sessionStorage.ctxWidth - 30);
    selectionWidth = (extent.width.animVal.value)
    x = (extent.x.animVal.value);
    if (selection > 0) {
        xHover = ((xHoverData - 21) * selection) + x;
        if (xHover < 21) {
            xHover = 21;
        }
        if (xHover > (sessionStorage.ctxWidth - 9)) {
            xHover = (sessionStorage.ctxWidth - 9);
        }
    }

    baraltitude.setAttribute('x1', xHover);
    baraltitude.setAttribute('x2', xHover);
    barSpeed.setAttribute('x1', xHoverData);
    barSpeed.setAttribute('x2', xHoverData);
    barPower.setAttribute('x1', xHoverData);
    barPower.setAttribute('x2', xHoverData);

    fraction = (xHover - 21) / (sessionStorage.ctxWidth - 30);

    grade = grade[ Math.round( fraction * grade.length) ]
    if (grade != undefined) {
        document.getElementById("grade").innerText = document.getElementById("grade").innerText.slice(0, 6) + " " + grade + "%"
    }

    Altitude = altitude[ Math.round( fraction * altitude.length) ]
    if (Altitude != undefined) {
        document.getElementById("altitude").innerText = document.getElementById("altitude").innerText.slice(0, 10) + " " + Altitude + "m"
    }

    vitesse = vitesse[ Math.round( fraction * vitesse.length) ]
    if (vitesse != undefined) {
        document.getElementById("vitesse").innerText = document.getElementById("vitesse").innerText.slice(0, 8) + " " + Math.round(vitesse*10)/10 + "km/h"
    }

    power = watt[ Math.round( fraction * watt.length) ]
    if (power != undefined) {
        document.getElementById("power").innerText = document.getElementById("power").innerText.slice(0, 10) + " " + power + "W"
    }

    setMarker(fraction, latlng)
}