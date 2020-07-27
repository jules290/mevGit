function svg(activitie, latlng , altitude, vitesse, distance, grade) {
    let svg = document.getElementById("svgData");
    let bar = document.getElementById("barData");
    extent = document.getElementById("extentData");
    extentAltitude = document.getElementById("extent");
    
    let Zoomaltitude = ZoomAltitude(altitude, altitude.length);
    let Zoomvitesse = ZoomVitesse(vitesse, vitesse.length);
    let Zoomgrade = ZoomGrade(grade, grade.length);
    let watt = wattEstimation(altitude, vitesse, grade);
    
    if (document.documentElement.clientWidth > 1200) {
        svg.style.height = "260px";
        svg.style.marginLeft = "15%";
        svg.style.marginTop = "-260px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 240);
        extent.setAttribute('height', 240);
    }
    else if (document.documentElement.clientWidth > 1000) {
        svg.style.height = "260px";
        svg.style.marginLeft = "15%";
        svg.style.marginTop = "-260px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 240);
        extent.setAttribute('height', 240);
    }
    else if (document.documentElement.clientWidth > 800) {
        svg.style.height = "240px";
        svg.style.marginLeft = "15%";
        svg.style.marginTop = "-240px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 220);
        extent.setAttribute('height', 220);
    }
    else if (document.documentElement.clientWidth > 600) {
        svg.style.height = "200px";
        svg.style.marginLeft = "15%";
        svg.style.marginTop = "-200px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 180);
        extent.setAttribute('height', 180);
    }
    else if (document.documentElement.clientWidth > 400) {
        svg.style.height = "180px";
        svg.style.marginLeft = "15%";
        svg.style.marginTop = "-180px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 160);
        extent.setAttribute('height', 160);
    }
    else if (document.documentElement.clientWidth > 300) {
        svg.style.height = "160px";
        svg.style.marginLeft = "15%";
        svg.style.marginTop = "-160px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 140);
        extent.setAttribute('height', 140);
    }
    else if (document.documentElement.clientWidth > 200) {
        svg.style.height = "160px";
        svg.style.marginLeft = "15%";
        svg.style.marginTop = "-160px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 140);
        extent.setAttribute('height', 140);
    }
    else {
        svg.style.height = "160px";
        svg.style.marginLeft = "15%";
        svg.style.marginTop = "-160px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 140);
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
        baraltitude.classList.add("bar");
        barData.classList.add("bar");
    })
    .mouseout(function() {
        baraltitude.classList.remove("bar");
        barData.classList.remove("bar");
    });
    
    $("#svgData").mousedown(function(event) {
        xClic = event.offsetX;
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
    
                document.getElementById("svgData").onmousemove = function (event) {
                    chartLineHoverData(
                        event, 
                        grade, 
                        altitude, 
                        vitesse, 
                        watt, 
                        latlng
                    )
                }
    
                document.getElementById("svgaltitude").onmousemove = function (event) {
                    chartLineHoverElevation(
                        event, 
                        grade, 
                        altitude, 
                        vitesse, 
                        watt, 
                        latlng
                    )
                }
            });
        }
    })
    .mouseup(function() {
        $("#svgData").off("mousemove");
        selection = extent.width.animVal.value / (sessionStorage.ctxWidth - 30);
        x = (extent.x.animVal.value - 21) / (sessionStorage.ctxWidth - 30);
        width = extent.width.animVal.value;
        xClick = extent.x.animVal.value;

        if (selection == 0) {
            selection = 1
            x = 0

            updateSpeedChart(ZoomVitesse(vitesse, vitesse.length));
            updatePowerChart(watt);
        }

        if (extentAltitude.width.animVal.value == 0) {
            extentAltitude.setAttribute('width', width)
            extentAltitude.setAttribute('x', xClick);

            let dataSpeed = new Array();
            for (let i = Math.round(x * vitesse.length);( i - Math.round(x * vitesse.length)) <  Math.round(vitesse.length * selection); i++) {
                dataSpeed[i - Math.round(x * vitesse.length)] = vitesse[i]
            }

            let dataPower = new Array();
            for (let i = Math.round(x * watt.length);( i - Math.round(x * watt.length)) <  Math.round(watt.length * selection); i++) {
                dataPower[i - Math.round(x * watt.length)] = watt[i]
            }

            updateSpeedChart(dataSpeed);
            updatePowerChart(dataPower);
        }
        else if (extentAltitude.width.animVal.value > 0) {
            selection = (document.getElementById("extent").width.animVal.value) / (sessionStorage.ctxWidth - 30);
            x = (((xClic - 21) * selection) + extentAltitude.x.animVal.value);
            extentAltitude.setAttribute('width', (width / (sessionStorage.ctxWidth - 30)) * extentAltitude.width.animVal.value)
            extentAltitude.setAttribute('x', x);

            selection = extentAltitude.width.animVal.value / (sessionStorage.ctxWidth - 30);
            xData = (extentAltitude.x.animVal.value - 21) / (sessionStorage.ctxWidth - 30);

            let dataSpeed = new Array();
            for (let i = Math.round(xData * vitesse.length);( i - Math.round(xData * vitesse.length)) <  Math.round(vitesse.length * selection); i++) {
                dataSpeed[i - Math.round(xData * vitesse.length)] = vitesse[i]
            }

            let dataPower = new Array();
            for (let i = Math.round(xData * watt.length);( i - Math.round(xData * watt.length)) <  Math.round(watt.length * selection); i++) {
                dataPower[i - Math.round(xData * watt.length)] = watt[i]
            }

            let dataGrade = new Array();
            for (let i = Math.round(xData * grade.length);( i - Math.round(xData * grade.length)) <  Math.round(grade.length * selection); i++) {
                dataGrade[i - Math.round(xData * watt.length)] = grade[i]
            }

            let dataAltitude = new Array();
            for (let i = Math.round(xData * altitude.length);( i - Math.round(xData * altitude.length)) <  Math.round(altitude.length * selection); i++) {
                dataAltitude[i - Math.round(xData * altitude.length)] = altitude[i]
            }

            let dataLatlng = new Array();
            for (let i = Math.round(xData * latlng.length);( i - Math.round(xData * latlng.length)) <  Math.round(latlng.length * selection); i++) {
                dataLatlng[i - Math.round(xData * latlng.length)] = latlng[i]
            }

            updateSpeedChart(dataSpeed);
            updatePowerChart(dataPower);

            document.getElementById("svgaltitude").onmousemove = function (event) {
                chartLineHoverElevation(
                    event, 
                    grade, 
                    altitude, 
                    vitesse, 
                    watt, 
                    latlng
                )
            }

            document.getElementById("svgData").onmousemove = function (event) {
                chartLineHoverData(
                    event, 
                    grade, 
                    altitude, 
                    vitesse, 
                    watt, 
                    latlng
                )
            }
        }

        extent.setAttribute('width', 0);
    });
}