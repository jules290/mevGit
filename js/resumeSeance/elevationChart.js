function postActivitiesStreamsaltitudeChart(activitie, latlng , altitude, vitesse, distance, grade) {
    let Zoomaltitude = ZoomAltitude(altitude, altitude.length);
    let Zoomvitesse = ZoomVitesse(vitesse, vitesse.length);
    let Zoomgrade = ZoomGrade(grade, grade.length);
    let watt = wattEstimation(Zoomaltitude, Zoomvitesse, Zoomgrade);
                
    var ctx = document.getElementById('graphaltitude');
    var svg = document.getElementById("svgaltitude");
    var bar = document.getElementById("baraltitude");
    let height;
    let extent = document.getElementById("extent");

    if (document.documentElement.clientWidth > 1200) {
        height = 120;
        svg.style.height = "120px";
        svg.style.marginTop = "-120px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 120);
        extent.setAttribute('height', 100);
    }
    else if (document.documentElement.clientWidth > 1000) {
        height = 120;
        svg.style.height = "120px";
        svg.style.marginTop = "-120px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 120);
        extent.setAttribute('height', 100);
    }
    else if (document.documentElement.clientWidth > 800) {
        height = 120;
        svg.style.height = "120px";
        svg.style.marginTop = "-120px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 120);
        extent.setAttribute('height', 100);
    }
    else if (document.documentElement.clientWidth > 600) {
        height = 100;
        svg.style.height = "100px";
        svg.style.marginTop = "-100px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 100);
        extent.setAttribute('height', 80);
    }
    else if (document.documentElement.clientWidth > 400) {
        height = 90;
        svg.style.height = "90px";
        svg.style.marginTop = "-90px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 90);
        extent.setAttribute('height', 70);
    }
    else if (document.documentElement.clientWidth > 300) {
        height = 80;
        svg.style.height = "80px";
        svg.style.marginTop = "-80px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 80);
        extent.setAttribute('height', 60);
    }
    else if (document.documentElement.clientWidth > 200) {
        height = 80;
        svg.style.height = "80px";
        svg.style.marginTop = "-80px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 80);
        extent.setAttribute('height', 60);
    }
    else {
        height = 80;
        svg.style.height = "80px";
        svg.style.marginTop = "-80px";
        svg.style.width = "70%";
        bar.setAttribute('y1', 0);
        bar.setAttribute('y2', 80);
        extent.setAttribute('height', 60);
    }

    ctx.height =  height;

    var kilometrage = new Array()
    for (let i = 0; i < Zoomaltitude.length; i++) {
        kilometrage[i] = "      "
    }

    var data = {
        labels: kilometrage,
        datasets: [{
            label: 'altitude (m)',
            data: Zoomaltitude,
            borderColor: [
                'rgb(170, 170, 170)',
            ],
            backgroundColor: [
                'rgb(170, 170, 170)',
            ],
            borderWidth: 1,
            lineTension: 0.0,
        }]
    }
                
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            maintainAspectRatio: false,
            elements: {
                point:{
                    radius: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                    },
                    display: false,
                }]
            },
            legend: {
                labels: {
                    fontColor: 'black'
                },
                display: false,
            },
            layout: {
                padding: {
                    left: 21,
                    right: 9,
                    top: 0,
                    bottom: 0
                }
            }
        }
    })

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
    extent = document.getElementById("extent")
    let xClic;
    let selection;

    document.getElementById("svgaltitude").addEventListener("mousemove", function (event) {
        chartLineHoverElevation(event, Zoomgrade, Zoomaltitude, Zoomvitesse, watt, latlng) 
    })

    extent = document.getElementById("extent")
    let resizeLeft = document.getElementById("resizeLeft")
    let resizeRight = document.getElementById("resizeRight")
    
    $("#svgaltitude").mousedown(function(event) {
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

            $("#svgaltitude").mousemove(function (event2) {
                xClic2 = event2.offsetX;
                sessionStorage.xClic2 = xClic2;
                if (xClic2 - xClic > 0) {
                    if (xClic >= 21) {
                        extent.setAttribute('width', xClic2 - xClic);
                        resizeLeft.setAttribute('transform', `translate(${xClic - 3}, 0)`);
                        resizeRight.setAttribute('transform', `translate(${xClic2 - 3}, 0)`);
                    }
                    else {
                        extent.setAttribute('width', (sessionStorage.ctxWidth - 9) - xClic);
                        resizeLeft.setAttribute('transform', `translate(${xClick - 5}, 0)`);
                        resizeRight.setAttribute('transform', `translate(${sessionStorage.ctxWidth - 9}, 0)`);
                    }
        
                    if (xClic2 <= sessionStorage.ctxWidth - 9) {
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
                startIndex = Math.round(x * vitesse.length);
                widthIndex =  Math.round(vitesse.length * selection);
                
                setSelectionData(startIndex, widthIndex)
                
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
            });
        }
    })
    .mouseup(function() {
        selection = extent.width.animVal.value / (sessionStorage.ctxWidth - 30);
        x = (extent.x.animVal.value - 21) / (sessionStorage.ctxWidth - 30);

        startIndex = Math.round(x * vitesse.length);
        widthIndex =  Math.round(vitesse.length * selection);
        let dataSpeed = new Array();
        for (let i = startIndex;( i - startIndex) < widthIndex; i++) {
            dataSpeed[i - startIndex] = vitesse[i]
        }

        Watt = wattEstimation(altitude, vitesse, grade);
        let dataPower = new Array();
        for (let i = startIndex;( i - startIndex) < widthIndex; i++) {
            dataPower[i - startIndex] = Watt[i]
        }

        updateSpeedChart(dataSpeed);
        updatePowerChart(dataPower);
        $("#svgaltitude").off("mousemove");
        selection = extent.width.animVal.value / (sessionStorage.ctxWidth - 30);
        x = (extent.x.animVal.value - 21) / (sessionStorage.ctxWidth - 30);

        if (selection == 0) {
            selection = 1
            x = 0

            updateSpeedChart(ZoomVitesse(vitesse, vitesse.length));
            updatePowerChart(watt);
        }
    });

    $("#resizeLeft").mousedown(function () {
        $("#svgaltitude").mousemove(function (event) {
            xClic = event.offsetX;
            sessionStorage.xClic = xClic;
            if(sessionStorage.xClic2 - xClic > 0) {
                extent.setAttribute('width', sessionStorage.xClic2 - xClic);
                extent.setAttribute('x', xClic);
                resizeLeft.setAttribute('transform', `translate(${xClic - 5}, 0)`);
            }
            else {
                extent.setAttribute('width', xClic - sessionStorage.xClic2);
                extent.setAttribute('x', sessionStorage.xClic2);
                resizeLeft.setAttribute('transform', `translate(${xClic - 5}, 0)`);
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
        })
    })

    $("#resizeRight").mousedown(function () {
        $("#svgaltitude").mousemove(function (event2) {
            xClic2 = event2.offsetX;
            sessionStorage.xClic2 = xClic2;
            if(xClic2 - sessionStorage.xClic > 0) {
                extent.setAttribute('width', xClic2 - sessionStorage.xClic);
                extent.setAttribute('x', sessionStorage.xClic);
                resizeRight.setAttribute('transform', `translate(${xClic2 - 5}, 0)`);
            }
            else {
                extent.setAttribute('width', sessionStorage.xClic - xClic2);
                extent.setAttribute('x', xClic2);
                resizeRight.setAttribute('transform', `translate(${xClic2 - 5}, 0)`);
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
        })
    })

    resizeLeft = document.getElementById("resizeLeft")

    $("#extent").mousedown(function (clickEvent) {
        $("#svgaltitude").mousemove(function (event) {
            xClic = event.offsetX;
            x =  xClic - (extent.width.animVal.value / 2);
            extentWidth = extent.width.animVal.value;

            sessionStorage.xClic = x;
            sessionStorage.xClic2 = x + extentWidth;

            extent.setAttribute('x', x);
            resizeLeft.setAttribute('transform', `translate(${x - 3}, 0)`);
            resizeRight.setAttribute('transform', `translate(${(x - 3) + extentWidth}, 0)`);

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
        })
    })
}