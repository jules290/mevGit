function postData() {
    postAthleteName();
    postActivitiestempsDistance();
    postActivitiesZoom();
    getActivityStreams();
    postSegmentEndEffort("effort");
}

function postSegmentEndEffort(state) {
    let Id = JSON.parse(localStorage.Activities)[sessionStorage.activityIndex].id;
    const activitiesStreams = `https://www.strava.com/api/v3/activities/${Id}?access_token=${localStorage.access_token}`
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": activitiesStreams,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "35.188.171.173:8080",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            'includeAllEfforts': true
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response)
        if (state == "segment") {
            $("#segmentEffortContainer").empty();
            segmentsDataPower = new Array();
            segmentsDataVitesse = new Array();
            segmentsDataLatLng = new Array();
            segmentsDataAltitude = new Array();
            segmentsDataGrade = new Array();

            let segmentAnalyseIndex;
            for (let i = 0; i < response.segment_efforts.length; i++) {
                var segment = document.createElement("div");
                segment.className = "segment";
                segment.id = "10000" + i;
                document.getElementById("segmentEffortContainer").appendChild(segment);

                let segmentStats = document.createElement("div");
                segmentStats.className = "segmentStats";
                segment.appendChild(segmentStats);

                var segmentKOM = document.createElement("div");
                segmentKOM.className = "segmentKOM";
                segmentKOM.innerText = response.segment_efforts[i].pr_rank;
                segmentStats.appendChild(segmentKOM);

                var segmentInfo = document.createElement("div");
                segmentInfo.className = "segmentInfo";
                segmentStats.appendChild(segmentInfo);
                
                var segmentT = document.createElement("div");
                segmentT.className = "segmentT";
                segmentT.innerText = response.segment_efforts[i].name;
                segmentInfo.appendChild(segmentT);

                var segmentInfo2ND = document.createElement("div");
                segmentInfo2ND.className = "segmentInfo2ND";
                segmentInfo.appendChild(segmentInfo2ND);
                
                var segmentDst = document.createElement("div");
                segmentDst.className = "segmentDst";
                segmentDst.innerText = Math.round(response.segment_efforts[i].distance / 10) /100 + "km";
                segmentInfo2ND.appendChild(segmentDst);

                var segmentD4 = document.createElement("div");
                segmentD4.className = "segmentD4";
                segmentD4.innerText = Math.round(response.segment_efforts[i].distance * response.segment_efforts[i].segment.average_grade) / 100 + "m";
                segmentInfo2ND.appendChild(segmentD4);

                var segmentGrade = document.createElement("div");
                segmentGrade.className = "segmentGrade";
                segmentGrade.innerText = response.segment_efforts[i].segment.average_grade + "%";
                segmentInfo2ND.appendChild(segmentGrade);

                var segmentTps = document.createElement("div");
                segmentTps.className = "segmentTps";
                segmentStats.appendChild(segmentTps);
                if (response.segment_efforts[i].elapsed_time >= 60) {
                    let heure;
                    let minute;
                    let seconde;
                    if (response.segment_efforts[i].elapsed_time >= 3600) {
                        heure = (response.segment_efforts[i].elapsed_time / 3600).toString().substr(0, 2);
                        minute = (Math.round(response.segment_efforts[i].elapsed_time / 60)) % 60
                    } 
                    else {
                        seconde = (Math.round(response.segment_efforts[i].elapsed_time)) % 60
                        minute = (response.segment_efforts[i].elapsed_time - seconde) / 60;
                        if (seconde < 10) {
                            seconde = "0" + seconde;
                        }
                    }
                    segmentTps.innerText = minute + ":" + seconde
                }
                else {
                    segmentTps.innerText = Math.round(response.segment_efforts[i].elapsed_time ) + "s"
                }

                var segmentVitesse = document.createElement("div");
                segmentVitesse.className = "segmentVst";
                segmentVitesse.innerText = 
                Math.round(((response.segment_efforts[i].distance / 1000) / (response.segment_efforts[i].elapsed_time / 3600)) * 10) / 10
                + "km/h";
                segmentStats.appendChild(segmentVitesse);

                let watts = wattEstimation(
                    JSON.parse(sessionStorage.activitiesAltitude), 
                    JSON.parse(sessionStorage.activitiesVitesse), 
                    JSON.parse(sessionStorage.activitiesGrade)
                );
                var segmentPower = document.createElement("div");
                segmentPower.className = "segmentP";
                segmentDataPower = new Array();
                for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                    segmentDataPower[y] = watts[y + response.segment_efforts[i].start_index];
                }
                let wattMoy = 0;
                for (var u = 0; u <  segmentDataPower.length; u++) {
                    wattMoy += segmentDataPower[u] / segmentDataPower.length
                }
                wattMoy = Math.round(wattMoy * 10) / 10
                segmentPower.innerText = wattMoy + "w";
                segmentsDataPower[i] = segmentDataPower;
                segmentStats.appendChild(segmentPower);

                let segmentFC = document.createElement("div");
                segmentFC.className = "segmentFC";
                if (JSON.parse(sessionStorage.activitiesBpm).length > 0) {
                    FC = JSON.parse(sessionStorage.activitiesBpm);
                    for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                        segmentDataFC[y] = FC[y + response.segment_efforts[i].start_index];
                    }
                    segmentsDataFC[i] = segmentDataFC;

                    let FCMoy = 0;
                    for (var u = 0; u <  segmentDataFC.length; u++) {
                        FCMoy += segmentDataFC[u] / segmentDataFC.length
                    }
                    segmentFC.innerText = FCMoy + "bpm";
                }
                else {
                    segmentFC.innerText = "-";
                }
                segmentStats.appendChild(segmentFC);

                let segmentCadence = document.createElement("div");
                segmentCadence.className = "segmentCadence";
                if (JSON.parse(sessionStorage.activitiesCadence).length > 0) {
                    Cadence = JSON.parse(sessionStorage.activitiesCadence);
                    for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                        segmentDataCadence[y] = Cadence[y + response.segment_efforts[i].start_index];
                    }
                    segmentsDataCadence[i] = segmentDataCadence;

                    let RpmMoy = 0;
                    for (var u = 0; u <  segmentDataCadence.length; u++) {
                        RpmMoy += segmentDataCadence[u] / segmentDataCadence.length
                    }
                    segmentCadence.innerText = RpmMoy + "rpm";
                }
                else {
                    segmentCadence.innerText = "-";
                }
                segmentStats.appendChild(segmentCadence);

                segmentDataVitesse = new Array();
                let vitesse =  JSON.parse(sessionStorage.activitiesVitesse);
                for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                    segmentDataVitesse[y] = vitesse[y + response.segment_efforts[i].start_index];
                }
                segmentsDataVitesse[i] = segmentDataVitesse;

                latlng = JSON.parse(sessionStorage.activitiesLatlng);
                segmentDataLatLng = new Array();
                for (let u = 0; u < latlng.length; u++) {
                    for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                        segmentDataLatLng[y] = latlng[y + response.segment_efforts[i].start_index];
                    }
                }
                segmentsDataLatLng[i] = segmentDataLatLng;

                altitude = JSON.parse(sessionStorage.activitiesAltitude);
                segmentDataAltitude = new Array();
                for (let u = 0; u < latlng.length; u++) {
                    for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                        segmentDataAltitude[y] = altitude[y + response.segment_efforts[i].start_index];
                    }
                }
                segmentsDataAltitude[i] = segmentDataAltitude;

                grade = JSON.parse(sessionStorage.activitiesGrade);
                segmentDataGrade = new Array();
                for (let u = 0; u < latlng.length; u++) {
                    for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                        segmentDataGrade[y] = grade[y + response.segment_efforts[i].start_index];
                    }
                }
                segmentsDataGrade[i] = segmentDataGrade;

                segmentStats.onclick = function () {
                    let extent = document.getElementById("extent")
                    let resizeLeft = document.getElementById("resizeLeft")
                    let resizeRight = document.getElementById("resizeRight")
                    let ctxWidth = document.getElementById("graphaltitude").style.width;
                    let absLat = new Array();

                    ctxWidth = (ctxWidth.slice(0, ctxWidth.length - 2));
                    fraction = (response.segment_efforts[i].end_index - response.segment_efforts[i].start_index) * (ctxWidth - 30) ;
                    fractionStart = response.segment_efforts[i].start_index * (ctxWidth - 30);
                    fractionEnd = response.segment_efforts[i].end_index * (ctxWidth - 30);

                    extent.setAttribute(
                        'width', 
                        (fraction / (latlng.length))
                    );
                    extent.setAttribute(
                        'x', 
                        (fractionStart / (latlng.length)) + 21
                    );
                    resizeLeft.setAttribute(
                        'transform', 
                        `translate(${(fractionStart / (latlng.length)) + 21}, 0)`
                    );
                    resizeRight.setAttribute(
                        'transform', 
                        `translate(${fractionEnd / (latlng.length)}, 0)`
                    );

                    updatePowerChart(segmentsDataPower[i])
                    updateSpeedChart(segmentsDataVitesse[i])

                    document.getElementById("svgData").onmousemove = function (event) {
                        chartLineHoverData(
                            event, 
                            grade, 
                            altitude, 
                            vitesse, 
                            watts, 
                            latlng
                        )
                    }

                    document.getElementById("svgaltitude").onmousemove = function (event) {
                        chartLineHoverElevation(
                            event, 
                            grade, 
                            altitude, 
                            vitesse, 
                            watts, 
                            latlng
                        )
                    }

                    if (segmentAnalyseIndex != Number("10000" + i)) {
                        segmentAnalyseIndex = Number("10000" + i)
                        segmentAnalyseArray = document.getElementsByClassName("segmentAnalyse");
                        segmentArray = document.getElementsByClassName("segment");
                        if (segmentAnalyseArray.length > 0) {
                            for (let i = 0; i < segmentAnalyseArray.length; i++) {
                                segmentAnalyseArray[i].remove();
                            }
                            for (let i = 0; i < segmentArray.length; i++) {
                                segmentArray[i].style.height = "50px";
                            }
                        }
                        document.getElementById("10000" + i).style.height = "250px";
    
                        let segmentAnalyse = document.createElement("div");
                        segmentAnalyse.classList = "segmentAnalyse";
                        document.getElementById("10000" + i).appendChild(segmentAnalyse);
    
                        let segmentAnalyseElevationContenair = document.createElement("div");
                        segmentAnalyseElevationContenair.classList = "segmentAnalyseElevationContenair";
                        segmentAnalyse.appendChild(segmentAnalyseElevationContenair);
    
                        let segmentAnalyseElevation = document.createElement("canvas");
                        segmentAnalyseElevation.classList = "segmentAnalyseElevation";
                        segmentAnalyseElevation.id = "segmentAnalyseElevation";
                        segmentAnalyseElevationChart(segmentsDataAltitude[i], segmentsDataGrade[i], segmentAnalyseElevation)
                        segmentAnalyseElevationContenair.appendChild(segmentAnalyseElevation);
    
    
                        let segmentAnalyseStats = document.createElement("div");
                        segmentAnalyseStats.classList = "segmentAnalyseStats";
                        segmentAnalyse.appendChild(segmentAnalyseStats);


                        let segmentAnalyseStatsTContenair = document.createElement("div");
                        segmentAnalyseStatsTContenair.classList = "segmentAnalyseStatsTContenair";
                        segmentAnalyseStats.appendChild(segmentAnalyseStatsTContenair);

                        let segmentAnalyseStatsMoyT = document.createElement("div");
                        segmentAnalyseStatsMoyT.classList = "segmentAnalyseStatsT";
                        segmentAnalyseStatsTContenair.appendChild(segmentAnalyseStatsMoyT);
                        segmentAnalyseStatsMoyT.innerText = "Stats Moy";
                        
                        let segmentAnalyseStatsMaxT = document.createElement("div");
                        segmentAnalyseStatsMaxT.classList = "segmentAnalyseStatsT";
                        segmentAnalyseStatsTContenair.appendChild(segmentAnalyseStatsMaxT);
                        segmentAnalyseStatsMaxT.innerText = "Stats Max";
    
    
                        let segmentAnalyseStatsContenair = document.createElement("div");
                        segmentAnalyseStatsContenair.classList = "segmentAnalyseStatsContenair";
                        segmentAnalyseStats.appendChild(segmentAnalyseStatsContenair);
                        
    
                        let segmentAnalyseStatsContenairTitleRow = document.createElement("div");
                        segmentAnalyseStatsContenairTitleRow.classList = "segmentAnalyseStatsContenairRow";
                        segmentAnalyseStatsContenair.appendChild(segmentAnalyseStatsContenairTitleRow);
    
                        let segmentAnalyseStatsPenteTitle = document.createElement("div");
                        segmentAnalyseStatsPenteTitle.classList = "segmentAnalyseStatsTitle";
                        segmentAnalyseStatsContenairTitleRow.appendChild(segmentAnalyseStatsPenteTitle);
                        segmentAnalyseStatsPenteTitle.innerText = "pente";
    
                        let segmentAnalyseStatsVitesseTitle = document.createElement("div");
                        segmentAnalyseStatsVitesseTitle.classList = "segmentAnalyseStatsTitle";
                        segmentAnalyseStatsContenairTitleRow.appendChild(segmentAnalyseStatsVitesseTitle);
                        segmentAnalyseStatsVitesseTitle.innerText = "vitesse";
    
                        let segmentAnalyseStatsPowerTitle = document.createElement("div");
                        segmentAnalyseStatsPowerTitle.classList = "segmentAnalyseStatsTitle";
                        segmentAnalyseStatsContenairTitleRow.appendChild(segmentAnalyseStatsPowerTitle);
                        segmentAnalyseStatsPowerTitle.innerText = "puissance";
    
                        let segmentAnalyseStatsFCTitle = document.createElement("div");
                        segmentAnalyseStatsFCTitle.classList = "segmentAnalyseStatsTitle";
                        segmentAnalyseStatsContenairTitleRow.appendChild(segmentAnalyseStatsFCTitle);
                        segmentAnalyseStatsFCTitle.innerText = "FC";
    
                        let segmentAnalyseStatsCadenceTitle = document.createElement("div");
                        segmentAnalyseStatsCadenceTitle.classList = "segmentAnalyseStatsTitle";
                        segmentAnalyseStatsContenairTitleRow.appendChild(segmentAnalyseStatsCadenceTitle);
                        segmentAnalyseStatsCadenceTitle.innerText = "cadence";


                        let segmentAnalyseStatsContenairDataMoyRow = document.createElement("div");
                        segmentAnalyseStatsContenairDataMoyRow.classList = "segmentAnalyseStatsContenairRow";
                        segmentAnalyseStatsContenair.appendChild(segmentAnalyseStatsContenairDataMoyRow);
    
                        let segmentAnalyseStatsPenteDataMoy = document.createElement("div");
                        segmentAnalyseStatsPenteDataMoy.classList = "segmentAnalyseStatsData";
                        segmentAnalyseStatsContenairDataMoyRow.appendChild(segmentAnalyseStatsPenteDataMoy);
                        gradeMoy = response.segment_efforts[i].segment.average_grade;
                        segmentAnalyseStatsPenteDataMoy.innerText = `${gradeMoy}%`;
    
                        let segmentAnalyseStatsVitesseDataMoy = document.createElement("div");
                        segmentAnalyseStatsVitesseDataMoy.classList = "segmentAnalyseStatsData";
                        segmentAnalyseStatsContenairDataMoyRow.appendChild(segmentAnalyseStatsVitesseDataMoy);
                        vitesseMoy = 
                        Math.round(((response.segment_efforts[i].distance / 1000) / (response.segment_efforts[i].elapsed_time / 3600)) * 10) / 10;
                        segmentAnalyseStatsVitesseDataMoy.innerText = `${vitesseMoy}km/h`;
    
                        let segmentAnalyseStatsWattDataMoy = document.createElement("div");
                        segmentAnalyseStatsWattDataMoy.classList = "segmentAnalyseStatsData";
                        segmentAnalyseStatsContenairDataMoyRow.appendChild(segmentAnalyseStatsWattDataMoy);
                        let wattMoy = 0;
                        for (var u = 0; u <  segmentsDataPower[i].length; u++) {
                            wattMoy += segmentsDataPower[i][u] / segmentsDataPower[i].length
                        }
                        wattMoy = Math.round(wattMoy * 10) / 10
                        segmentAnalyseStatsWattDataMoy.innerText = `${wattMoy}W`;
    
                        let segmentAnalyseStatsFcDataMoy = document.createElement("div");
                        segmentAnalyseStatsFcDataMoy.classList = "segmentAnalyseStatsData";
                        segmentAnalyseStatsContenairDataMoyRow.appendChild(segmentAnalyseStatsFcDataMoy);
                        if (JSON.parse(sessionStorage.activitiesBpm).length > 0) {
                            let FCMoy = 0;
                            for (var u = 0; u <  segmentsDataFC[i].length; u++) {
                                FCMoy += segmentsDataFC[i][u] / segmentsDataFC[i].length
                            }
                            segmentAnalyseStatsFcDataMoy.innerText = `${FCMoy}BPM`;
                        }
                        else {
                            segmentAnalyseStatsFcDataMoy.innerText = "-";
                        }
    
                        let segmentAnalyseStatsCadenceDataMoy = document.createElement("div");
                        segmentAnalyseStatsCadenceDataMoy.classList = "segmentAnalyseStatsData";
                        segmentAnalyseStatsContenairDataMoyRow.appendChild(segmentAnalyseStatsCadenceDataMoy);
                        if (JSON.parse(sessionStorage.activitiesCadence).length > 0) {
                            let RpmMoy = 0;
                            for (var u = 0; u <  segmentsDataCadence[i].length; u++) {
                                RpmMoy += segmentsDataCadence[i][u] / segmentsDataCadence[i].length
                            }
                            segmentAnalyseStatsCadenceDataMoy.innerText = `${CadenceMoy}RPM`;
                        }
                        else {
                            segmentAnalyseStatsCadenceDataMoy.innerText = "-";
                        }
    
    
                        let segmentAnalyseStatsContenairDataMaxRow = document.createElement("div");
                        segmentAnalyseStatsContenairDataMaxRow.classList = "segmentAnalyseStatsContenairRow";
                        segmentAnalyseStatsContenair.appendChild(segmentAnalyseStatsContenairDataMaxRow);
    
                        let segmentAnalyseStatsPenteDataMax = document.createElement("div");
                        segmentAnalyseStatsPenteDataMax.classList = "segmentAnalyseStatsData";
                        segmentAnalyseStatsContenairDataMaxRow.appendChild(segmentAnalyseStatsPenteDataMax);
                        gradeMax = 0;
                        for (var u = 0; u <  segmentsDataGrade[i].length; u++) {
                            if (segmentsDataGrade[i][u] > gradeMax) {
                                gradeMax = Math.round(segmentsDataGrade[i][u] * 10) / 10
                            }
                        }
                        segmentAnalyseStatsPenteDataMax.innerText = `${gradeMax}%`;
    
                        let segmentAnalyseStatsVitesseDataMax = document.createElement("div");
                        segmentAnalyseStatsVitesseDataMax.classList = "segmentAnalyseStatsData";
                        segmentAnalyseStatsContenairDataMaxRow.appendChild(segmentAnalyseStatsVitesseDataMax);
                        vitesseMax = 0;
                        for (var u = 0; u <  segmentsDataVitesse[i].length; u++) {
                            if (segmentsDataVitesse[i][u] > vitesseMax) {
                                vitesseMax = Math.round(segmentsDataVitesse[i][u] * 10) / 10
                            }
                        }
                        segmentAnalyseStatsVitesseDataMax.innerText = `${vitesseMax}km/h`;
    
                        let segmentAnalyseStatsWattDataMax = document.createElement("div");
                        segmentAnalyseStatsWattDataMax.classList = "segmentAnalyseStatsData";
                        segmentAnalyseStatsContenairDataMaxRow.appendChild(segmentAnalyseStatsWattDataMax);
                        wattMax = 0;
                        for (var u = 0; u <  segmentsDataPower[i].length; u++) {
                            if (segmentsDataPower[i][u] > wattMax) {
                                wattMax = Math.round(segmentsDataPower[i][u] * 10) / 10
                            }
                        }
                        segmentAnalyseStatsWattDataMax.innerText = `${wattMax}W`;
    
                        let segmentAnalyseStatsFcDataMax = document.createElement("div");
                        segmentAnalyseStatsFcDataMax.classList = "segmentAnalyseStatsData";
                        segmentAnalyseStatsContenairDataMaxRow.appendChild(segmentAnalyseStatsFcDataMax);
                        if (JSON.parse(sessionStorage.activitiesBpm).length > 0) {
                            let FCMax = 0;
                            for (var u = 0; u <  segmentsDataFC[i].length; u++) {
                                if (segmentsDataFC[i][u] > FCMax) {
                                    FCMax = Math.round(segmentsDataFC[i][u])
                                }
                            }
                            segmentAnalyseStatsFcDataMax.innerText = `${FCMax}BPM`;
                        }
                        else {
                            segmentAnalyseStatsFcDataMax.innerText = "-";
                        }
    
                        let segmentAnalyseStatsCadenceDataMax = document.createElement("div");
                        segmentAnalyseStatsCadenceDataMax.classList = "segmentAnalyseStatsData";
                        segmentAnalyseStatsContenairDataMaxRow.appendChild(segmentAnalyseStatsCadenceDataMax);
                        if (JSON.parse(sessionStorage.activitiesBpm).length > 0) {
                            let CadenceMax = 0;
                            for (var u = 0; u <  segmentsDataCadence[i].length; u++) {
                                if (segmentsDataCadence[i][u] > CadenceMax) {
                                    CadenceMax = Math.round(segmentsDataCadence[i][u])
                                }
                            }
                            segmentAnalyseStatsCadenceDataMax.innerText = `${CadenceMax}BPM`;
                        }
                        else {
                            segmentAnalyseStatsCadenceDataMax.innerText = "-";
                        }
    
    
                        let segmentAnalyseButtonContenair = document.createElement("div");
                        segmentAnalyseButtonContenair.classList = "segmentAnalyseButtonContenair";
                        segmentAnalyse.appendChild(segmentAnalyseButtonContenair);

    
                        let segmentAnalyseButtonAnalyse = document.createElement("div");
                        segmentAnalyseButtonAnalyse.classList = "segmentAnalyseButton";
                        segmentAnalyseButtonContenair.appendChild(segmentAnalyseButtonAnalyse);
                        segmentAnalyseButtonAnalyse.onclick = function () {
                            window.location.href = "#selection";
                        }

                        let segmentAnalyseButtonAnalyseT = document.createElement("div");
                        segmentAnalyseButtonAnalyseT.classList = "segmentAnalyseButtonT";
                        segmentAnalyseButtonAnalyseT.innerText = "Analyser";
                        segmentAnalyseButtonAnalyse.appendChild(segmentAnalyseButtonAnalyseT);


                        let segmentAnalyseButtonGoal = document.createElement("div");
                        segmentAnalyseButtonGoal.classList = "segmentAnalyseButton";
                        segmentAnalyseButtonContenair.appendChild(segmentAnalyseButtonGoal);
                        segmentAnalyseButtonGoal.onclick = function () {
                            window.location.href = "objectif.html";
                        }

                        let segmentAnalyseButtonGoalT = document.createElement("div");
                        segmentAnalyseButtonGoalT.classList = "segmentAnalyseButtonT";
                        segmentAnalyseButtonGoalT.innerText = "Définir l'objectif";
                        segmentAnalyseButtonGoal.appendChild(segmentAnalyseButtonGoalT);


                        let segmentAnalyseButtonUp = document.createElement("div");
                        segmentAnalyseButtonUp.classList = "segmentAnalyseButton";
                        segmentAnalyseButtonContenair.appendChild(segmentAnalyseButtonUp);


                        let segmentAnalyseButtonUpT = document.createElement("div");
                        segmentAnalyseButtonUpT.classList = "segmentAnalyseButtonT";
                        segmentAnalyseButtonUpT.innerText = "Améliorer votre temps";
                        segmentAnalyseButtonUp.appendChild(segmentAnalyseButtonUpT);
                    }
                    else {
                        segmentAnaliseIndex = "";
                        for (let i = 0; i < segmentAnaliseArray.length; i++) {
                            segmentAnaliseArray[i].remove();
                        }
                        for (let i = 0; i < segmentArray.length; i++) {
                            segmentArray[i].style.height = "50px";
                        }
                    }
                }
            }
        }
        else if (state == "effort") {
            $("#segmentEffortContainer").empty();
            latlng = JSON.parse(sessionStorage.activitiesLatlng)
            bpm = JSON.parse(sessionStorage.activitiesBpm);
            // for (let i = 0; i < response.length; i++) {
                
            // }
        }
    })
}

function getActivityStreams() {
    let Id = JSON.parse(localStorage.Activities)[sessionStorage.activityIndex].id;

    let moving;
    let latlng;
    let distance;
    let vitesse;
    let time;
    let altitude;
    let grade;
    let cadence;
    let bpm;
    let watts;

    let array = new Array();
    if (!localStorage.activityStream) {localStorage.activityStream = JSON.stringify(array)}

    if (sessionStorage.activityStream == sessionStorage.activityIndex) {
        postLegend(
            JSON.parse(sessionStorage.Activities), 
            JSON.parse(sessionStorage.activitiesLatlng), 
            JSON.parse(sessionStorage.activitiesAltitude), 
            JSON.parse(sessionStorage.activitiesVitesse), 
            JSON.parse(sessionStorage.activitiesDistance), 
            JSON.parse(sessionStorage.activitiesGrade)
        );
        postWatt( 
            JSON.parse(sessionStorage.Activities), 
            JSON.parse(sessionStorage.activitiesLatlng), 
            JSON.parse(sessionStorage.activitiesAltitude), 
            JSON.parse(sessionStorage.activitiesVitesse), 
            JSON.parse(sessionStorage.activitiesDistance), 
            JSON.parse(sessionStorage.activitiesGrade)
        );
        postActivitiesStreamsaltitudeChart(
            JSON.parse(sessionStorage.Activities), 
            JSON.parse(sessionStorage.activitiesLatlng), 
            JSON.parse(sessionStorage.activitiesAltitude), 
            JSON.parse(sessionStorage.activitiesVitesse), 
            JSON.parse(sessionStorage.activitiesDistance), 
            JSON.parse(sessionStorage.activitiesGrade)
        );
        postActivitiesStreamsSpeedChart(
            JSON.parse(sessionStorage.Activities), 
            JSON.parse(sessionStorage.activitiesLatlng), 
            JSON.parse(sessionStorage.activitiesAltitude), 
            JSON.parse(sessionStorage.activitiesVitesse), 
            JSON.parse(sessionStorage.activitiesDistance), 
            JSON.parse(sessionStorage.activitiesGrade)
        );
        svg(
            JSON.parse(sessionStorage.Activities), 
            JSON.parse(sessionStorage.activitiesLatlng), 
            JSON.parse(sessionStorage.activitiesAltitude), 
            JSON.parse(sessionStorage.activitiesVitesse), 
            JSON.parse(sessionStorage.activitiesDistance), 
            JSON.parse(sessionStorage.activitiesGrade)
        );
    }
    else {
        const activitiesStreams = `https://www.strava.com/api/v3/activities/${Id}/streams?access_token=${localStorage.access_token}`
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": activitiesStreams,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "35.188.171.173:8080",
                "x-rapidapi-key": "SIGN-UP-FOR-KEY",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
                "keys": "time,latlng,distance,altitude,velocity_smooth,heartrate,cadence,watts,temp,moving,grade_smooth",
            }
        }
        $.ajax(settings).done(function (response) {
            if (!sessionStorage.activityStream) {sessionStorage.activityStream = JSON.stringify(array)}
            if (!sessionStorage.activitiesMoving) {sessionStorage.activitiesMoving = JSON.stringify(array)}
            if (!sessionStorage.activitiesLatlng) {sessionStorage.activitiesLatlng = JSON.stringify(array)}
            if (!sessionStorage.activitiesDistance) {sessionStorage.activitiesDistance = JSON.stringify(array)}
            if (!sessionStorage.activitiesVitesse) {sessionStorage.activitiesVitesse = JSON.stringify(array)}
            if (!sessionStorage.activitiesTime) {sessionStorage.activitiesTime = JSON.stringify(array)}
            if (!sessionStorage.activitiesAltitude) {sessionStorage.activitiesAltitude = JSON.stringify(array)}
            if (!sessionStorage.activitiesGrade) {sessionStorage.activitiesGrade = JSON.stringify(array)}
            if (!sessionStorage.activitiesCadence) {sessionStorage.activitiesCadence = JSON.stringify(array)}
            if (!sessionStorage.activitiesBpm) {sessionStorage.activitiesBpm = JSON.stringify(array)}
            if (!sessionStorage.activitiesWatts) {sessionStorage.activitiesWatts = JSON.stringify(array)}

            let activityStream = JSON.parse(sessionStorage.activityStream);
            let activitiesMoving = JSON.parse(sessionStorage.activitiesMoving);
            let activitiesLatlng = JSON.parse(sessionStorage.activitiesLatlng);
            let activitiesDistance = JSON.parse(sessionStorage.activitiesDistance);
            let activitiesVitesse = JSON.parse(sessionStorage.activitiesVitesse);
            let activitiesTime = JSON.parse(sessionStorage.activitiesTime);
            let activitiesAltitude = JSON.parse(sessionStorage.activitiesAltitude);
            let activitiesGrade = JSON.parse(sessionStorage.activitiesGrade);
            let activitiesCadence = JSON.parse(sessionStorage.activitiesCadence);
            let activitiesBpm = JSON.parse(sessionStorage.activitiesBpm);
            let activitiesWatts = JSON.parse(sessionStorage.activitiesWatts);

            activityStream = sessionStorage.activityIndex;
            for (let i = 0; i < response.length; i++) {
                if (response[i].type == "moving") {
                    moving = response[i].data;
                    activitiesMoving = moving;
                }
                else if (response[i].type == "latlng") {
                    latlng = response[i].data;
                    activitiesLatlng = latlng;
                }
                else if (response[i].type == "distance") {
                    distance = response[i].data;
                    activitiesDistance = distance;
                }
                else if (response[i].type == "velocity_smooth") {
                    vitesse = response[i].data;
                    for (let i = 0; i < vitesse.length; i++) {
                        vitesse[i] = vitesse[i] * 3.6
                    }        
                    activitiesVitesse = vitesse;
                }
                else if (response[i].type == "time") {
                    time = response[i].data;
                    activitiesTime = time;
                }
                else if (response[i].type == "altitude") {
                    altitude = response[i].data;
                    activitiesAltitude = altitude;
                }
                else if (response[i].type == "grade_smooth") {
                    grade = response[i].data;
                    activitiesGrade = grade;
                }
                else if (response[i].type == "cadence") {
                    cadence = response[i].data;
                    activitiesCadence = cadence;
                }
                else if (response[i].type == "heartrate") {
                    bpm = response[i].data;
                    activitiesBpm = bpm;
                }
                else if (response[i].type == "watts") {
                    watts = response[i].data;
                    activitiesWatts = watts; 
                }
            }

            sessionStorage.activityStream = JSON.stringify(activityStream);
            sessionStorage.activitiesMoving = JSON.stringify(activitiesMoving);
            sessionStorage.activitiesLatlng = JSON.stringify(activitiesLatlng);
            sessionStorage.activitiesDistance = JSON.stringify(activitiesDistance);
            sessionStorage.activitiesVitesse = JSON.stringify(activitiesVitesse);
            sessionStorage.activitiesTime = JSON.stringify(activitiesTime);
            sessionStorage.activitiesAltitude = JSON.stringify(activitiesAltitude);
            sessionStorage.activitiesGrade = JSON.stringify(activitiesGrade);
            sessionStorage.activitiesCadence = JSON.stringify(activitiesCadence);
            sessionStorage.activitiesWatts = JSON.stringify(activitiesWatts);

            postLegend(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postWatt(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postActivitiesStreamsaltitudeChart(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postActivitiesStreamsSpeedChart(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            svg(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
        })
    }
}