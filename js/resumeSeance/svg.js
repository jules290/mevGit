let svg = document.getElementById("svgData");
let bar = document.getElementById("barData");
extent = document.getElementById("extentData");

Vitesse = JSON.parse(localStorage.activitiesVitesse)[sessionStorage.activityIndex];
Altitude = JSON.parse(localStorage.activitiesAltitude)[sessionStorage.activityIndex];
Grade = JSON.parse(localStorage.activitiesGrade)[sessionStorage.activityIndex];
latlng = JSON.parse(localStorage.activitiesLatlng)[sessionStorage.activityIndex];

let Zoomaltitude = ZoomAltitude(altitude, altitude.length);
let Zoomvitesse = ZoomVitesse(vitesse, vitesse.length);
let Zoomgrade = ZoomGrade(grade, grade.length);
let watt = wattEstimation(Zoomaltitude, Zoomvitesse, Zoomgrade);

if (document.documentElement.clientWidth > 1200) {
    svg.style.height = "240px";
    svg.style.marginLeft = "15%";
    svg.style.marginTop = "-240px";
    svg.style.width = "70%";
    bar.setAttribute('y1', 0);
    bar.setAttribute('y2', 240);
    extent.setAttribute('height', 220);
}
else if (document.documentElement.clientWidth > 1000) {
    svg.style.height = "240px";
    svg.style.marginLeft = "15%";
    svg.style.marginTop = "-240px";
    svg.style.width = "70%";
    bar.setAttribute('y1', 0);
    bar.setAttribute('y2', 240);
    extent.setAttribute('height', 220);
}
else if (document.documentElement.clientWidth > 800) {
    svg.style.height = "240px";
    svg.style.marginLeft = "15%";
    svg.style.marginTop = "-240px";
    svg.style.width = "70%";
    bar.setAttribute('y1', 0);
    bar.setAttribute('y2', 240);
    extent.setAttribute('height', 220);
}
else if (document.documentElement.clientWidth > 600) {
    svg.style.height = "200px";
    svg.style.marginLeft = "15%";
    svg.style.marginTop = "-200px";
    svg.style.width = "70%";
    bar.setAttribute('y1', 0);
    bar.setAttribute('y2', 200);
    extent.setAttribute('height', 180);
}
else if (document.documentElement.clientWidth > 400) {
    svg.style.height = "180px";
    svg.style.marginLeft = "15%";
    svg.style.marginTop = "-180px";
    svg.style.width = "70%";
    bar.setAttribute('y1', 0);
    bar.setAttribute('y2', 180);
    extent.setAttribute('height', 160);
}
else if (document.documentElement.clientWidth > 300) {
    svg.style.height = "160px";
    svg.style.marginLeft = "15%";
    svg.style.marginTop = "-160px";
    svg.style.width = "70%";
    bar.setAttribute('y1', 0);
    bar.setAttribute('y2', 160);
    extent.setAttribute('height', 140);
}
else if (document.documentElement.clientWidth > 200) {
    svg.style.height = "160px";
    svg.style.marginLeft = "15%";
    svg.style.marginTop = "-160px";
    svg.style.width = "70%";
    bar.setAttribute('y1', 0);
    bar.setAttribute('y2', 160);
    extent.setAttribute('height', 140);
}
else {
    svg.style.height = "160px";
    svg.style.marginLeft = "15%";
    svg.style.marginTop = "-160px";
    svg.style.width = "70%";
    bar.setAttribute('y1', 0);
    bar.setAttribute('y2', 160);
    extent.setAttribute('height', 140);
}

xClic;
ctxWidth = document.getElementById("graphPower").style.width;
sessionStorage.ctxWidth = (ctxWidth.slice(0, ctxWidth.length - 2));
fraction;
Altitude;

baraltitude = document.getElementById("baraltitude");
barData = document.getElementById("barData");

document.getElementById("svgData").onmousemove = function (event) {
    chartLineHoverData(event, Zoomgrade, Zoomaltitude, Zoomvitesse, watt, latlng) 
}

$("#svgData")
.mouseover(function() {
    barData.classList.add("bar");
})
.mouseout(function() {
    barData.classList.remove("bar");
});

$("#svgData").mousedown(function(event) {
    xClic = event.offsetX;
    console.log(xClic)
    if (xClic < extent.x.animVal.value - 5 || xClic > (extent.width.animVal.value + extent.x.animVal.value + 5)) {
        extent.setAttribute('width', 0);
        resizeLeft.setAttribute('transform', `translate(0, 0)`);
        resizeRight.setAttribute('transform', `translate(0, 0)`);
        sessionStorage.xClic = xClic;
        if (xClic >= 21) {
            extent.setAttribute('x', xClic);
        }
        else {
            extent.setAttribute('x', 21);
        }
        $("#svgData").mousemove(function (event2) {
            xClic2 = event2.offsetX;
            sessionStorage.xClic2 = xClic2;
            if (xClic2 - xClic > 0) {
                if (xClic >= 21 && xClic2 <= sessionStorage.ctxWidth - 9) {
                    extent.setAttribute('width', xClic2 - xClic);
                    resizeLeft.setAttribute('transform', `translate(${xClic - 3}, 0)`);
                    resizeRight.setAttribute('transform', `translate(${xClic2 - 3}, 0)`);
                }
                else if (xClic >= 21) {
                    extent.setAttribute('width', (sessionStorage.ctxWidth - 9) - xClic);
                    resizeLeft.setAttribute('transform', `translate(${xClick - 5}, 0)`);
                    resizeRight.setAttribute('transform', `translate(${sessionStorage.ctxWidth - 9}, 0)`);
                }
                else if (xClic2 <= sessionStorage.ctxWidth - 9) {
                    extent.setAttribute('width', xClic2 - xClic);
                    resizeLeft.setAttribute('transform', `translate(21, 0)`);
                    resizeRight.setAttribute('transform', `translate(${xClic2 - 5}, 0)`);
                }
                else {
                    extent.setAttribute('width', (sessionStorage.ctxWidth - 9) - 21);
                    resizeLeft.setAttribute('transform', `translate(21, 0)`);
                    resizeRight.setAttribute('transform', `translate(${sessionStorage.ctxWidth - 9}, 0)`);
                }
            }
            else {
                if (xClic <= sessionStorage.ctxWidth - 9 && xClic2 >= 21) {
                    extent.setAttribute('x', xClic2);
                    extent.setAttribute('width', Math.abs(xClic2 - xClic) );
                    resizeLeft.setAttribute('transform', `translate(${xClic2 - 5}, 0)`);
                    resizeRight.setAttribute('transform', `translate(${xClic - 5}, 0)`);
                }
                else if (xClic <= sessionStorage.ctxWidth - 9) {
                    extent.setAttribute('x', 21);
                    extent.setAttribute('width', Math.abs(xClic - 21));
                    resizeLeft.setAttribute('transform', `translate(21, 0)`);
                    resizeRight.setAttribute('transform', `translate(${xClic - 5}, 0)`);
                }
                else if (xClic2 >= 21) {
                    extent.setAttribute('x', xClic2);
                    extent.setAttribute('width', Math.abs((sessionStorage.ctxWidth - 9) - xClic2));
                    resizeLeft.setAttribute('transform', `translate(${xClic2 - 5}, 0)`);
                    resizeRight.setAttribute('transform', `translate(${sessionStorage.ctxWidth - 9}, 0)`);
                }
                else {
                    extent.setAttribute('x', 21);
                    extent.setAttribute('width', Math.abs((sessionStorage.ctxWidth - 9) - 21) );
                    resizeLeft.setAttribute('transform', `translate(21, 0)`);
                    resizeRight.setAttribute('transform', `translate(${sessionStorage.ctxWidth - 9}, 0)`);
                }
            }

            selection = extent.width.animVal.value / (sessionStorage.ctxWidth - 30);
            x = (extent.x.animVal.value - 21) / (sessionStorage.ctxWidth - 30);

            Vitesse = JSON.parse(localStorage.activitiesVitesse)[sessionStorage.activityIndex];
            Altitude = JSON.parse(localStorage.activitiesAltitude)[sessionStorage.activityIndex];
            Grade = JSON.parse(localStorage.activitiesGrade)[sessionStorage.activityIndex];
            let dataSpeed = new Array();
            for (let i = Math.round(x * Vitesse.length);( i - Math.round(x * Vitesse.length)) <  Math.round(Vitesse.length * selection); i++) {
                dataSpeed[i - Math.round(x * Vitesse.length)] = Vitesse[i]
            }

            Watt = wattEstimation(Altitude, Vitesse, Grade);
            let dataPower = new Array();
            for (let i = Math.round(x * Watt.length);( i - Math.round(x * Watt.length)) <  Math.round(Watt.length * selection); i++) {
                dataPower[i - Math.round(x * Watt.length)] = Watt[i]
            }

            updateSpeedChart(dataSpeed);
            updatePowerChart(dataPower);
            
            document.getElementById("svgSpeed").onmousemove = function (event) {
                chartLineHoverData(
                    event, 
                    Grade, 
                    Altitude, 
                    JSON.parse(localStorage.activitiesVitesse)[sessionStorage.activityIndex], 
                    Watt, 
                    latlng
                )
            }

            document.getElementById("svgPower").onmousemove = function (event) {
                chartLineHoverData(
                    event, 
                    Grade, 
                    Altitude, 
                    JSON.parse(localStorage.activitiesVitesse)[sessionStorage.activityIndex], 
                    Watt, 
                    latlng
                )
            }

            document.getElementById("svgaltitude").onmousemove = function (event) {
                chartLineHoverElevation(
                    event, 
                    Grade, 
                    Altitude, 
                    Vitesse, 
                    Watt, 
                    latlng
                )
            }
        });
    }
})