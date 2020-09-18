function segmentList() {
    let segmentAnalyseIndex;
    let segmentAnalyseArray = new Array();
    let efforts = JSON.parse(localStorage.efforts)[sessionStorage.activityIndex];
    let watts = JSON.parse(sessionStorage.activitiesWatts);
    let Cadence = JSON.parse(sessionStorage.activitiesCadence);
    let FC = JSON.parse(sessionStorage.activitiesBpm);
    let latlng = JSON.parse(sessionStorage.activitiesLatlng);
    let altitude = JSON.parse(sessionStorage.activitiesAltitude);
    let grade = JSON.parse(sessionStorage.activitiesGrade);
    let Segment = efforts.segment;
    let SegmentLenght = Segment.length;

    $("#segmentEffortContainer").empty();
    segmentsDataPower = new Array();
    segmentsDataFC = new Array();
    segmentsDataCadence = new Array();
    segmentsDataVitesse = new Array();
    segmentsDataLatLng = new Array();
    segmentsDataAltitude = new Array();
    segmentsDataGrade = new Array();
    
    for (let i = 0; i < SegmentLenght; i++) {
        SegmentI = Segment[i];
        elapsedTime = SegmentI.elapsed_time;
        distance = SegmentI.distance;
        averageGrade = SegmentI.segment.average_grade;
        startIndex = SegmentI.start_index;
        endIndex = SegmentI.end_index;

        var segment = document.createElement("div");
        segment.className = "segment";
        segment.id = "10000" + i;
        document.getElementById("segmentEffortContainer").appendChild(segment);
    
        let segmentStats = document.createElement("div");
        segmentStats.className = "segmentStats";
        segment.appendChild(segmentStats);
    
        var segmentKOM = document.createElement("div");
        segmentKOM.className = "segmentKOM";
        segmentKOM.innerText = SegmentI.pr_rank;
        segmentStats.appendChild(segmentKOM);
    
        var segmentInfo = document.createElement("div");
        segmentInfo.className = "segmentInfo";
        segmentStats.appendChild(segmentInfo);
        
        var segmentT = document.createElement("div");
        segmentT.className = "segmentT";
        let name = SegmentI.name;
        if (name.length > 40) {
            name = SegmentI.name.slice(0, 37) + "..."
        }
        segmentT.innerText = name;
        segmentInfo.appendChild(segmentT);
    
        var segmentInfo2ND = document.createElement("div");
        segmentInfo2ND.className = "segmentInfo2ND";
        segmentInfo.appendChild(segmentInfo2ND);
        
        var segmentDst = document.createElement("div");
        segmentDst.className = "segmentDst";
        segmentDst.innerText = Math.round(distance / 10) /100 + "km";
        segmentInfo2ND.appendChild(segmentDst);
    
        var segmentD4 = document.createElement("div");
        segmentD4.className = "segmentD4";
        segmentD4.innerText = Math.round(distance * averageGrade) / 100 + "m";
        segmentInfo2ND.appendChild(segmentD4);
    
        var segmentGrade = document.createElement("div");
        segmentGrade.className = "segmentGrade";
        segmentGrade.innerText = averageGrade + "%";
        segmentInfo2ND.appendChild(segmentGrade);
    
        var segmentTps = document.createElement("div");
        segmentTps.className = "segmentTps";
        segmentStats.appendChild(segmentTps);
        if (elapsedTime >= 60) {
            let heure;
            let minute;
            let seconde;
            if (elapsedTime >= 3600) {
                heure = (elapsedTime / 3600).toString().substr(0, 2);
                if (heure < 10) heure = "0" + heure;
                minute = (Math.round(elapsedTime / 60)) % 60;
                if (minute < 10) minute = "0" + minute;
                seconde = (Math.round(elapsedTime)) % 60;
                if (seconde < 10) seconde = "0" + seconde;
                segmentTps.innerText = heure + ":" + minute + ":" + seconde;
            } 
            else {
                minute = (Math.round(elapsedTime / 60)) % 60;
                if (minute < 10) minute = "0" + minute;
                seconde = (Math.round(elapsedTime)) % 60
                if (seconde < 10) seconde = "0" + seconde;
                segmentTps.innerText = "00:" + minute + ":" + seconde;
            }
        }
        else {
            seconde = elapsedTime;
            if (seconde < 10) seconde = "0" + seconde;
            segmentTps.innerText = "00:00:" + seconde;
        }
    
        var segmentVitesse = document.createElement("div");
        segmentVitesse.className = "segmentVst";
        segmentVitesse.innerText = 
        Math.round(((distance / 1000) / (elapsedTime / 3600)) * 10) / 10
        + "km/h";
        segmentStats.appendChild(segmentVitesse);

        var segmentPower = document.createElement("div");
        segmentPower.className = "segmentP";
        segmentDataPower = new Array();
        for (let y = 0; y < endIndex - startIndex; y++) {
            segmentDataPower[y] = watts[y + startIndex];
        }
        let wattMoy = 0;
        segmentDataPowerLength = segmentDataPower.length;
        for (var u = 0; u <  segmentDataPowerLength; u++) {
            wattMoy += segmentDataPower[u] / segmentDataPowerLength;
        }
        wattMoy = Math.round(wattMoy * 10) / 10
        segmentPower.innerText = wattMoy + "w";
        segmentsDataPower[i] = segmentDataPower;
        segmentStats.appendChild(segmentPower);
    
        let segmentFC = document.createElement("div");
        segmentFC.className = "segmentFC";
        let segmentDataFC = new Array();
        if (JSON.parse(sessionStorage.activitiesBpm) != "false") {
            for (let y = 0; y < endIndex - startIndex; y++) {
                segmentDataFC[y] = FC[y + startIndex];
            }
            segmentsDataFC[i] = segmentDataFC;
    
            let FCMoy = 0;
            segmentDataFCLength = segmentDataFC.length;
            for (var u = 0; u <  segmentDataFCLength; u++) {
                FCMoy += segmentDataFC[u] / segmentDataFCLength;
            }
            segmentFC.innerText = Math.round(FCMoy) + "bpm";
        }
        else {
            segmentFC.innerText = "-";
        }
        segmentStats.appendChild(segmentFC);
    
        let segmentCadence = document.createElement("div");
        segmentCadence.className = "segmentCadence";
        let segmentDataCadence = new Array();
        if (JSON.parse(sessionStorage.activitiesCadence) != "false") {
            for (let y = 0; y < endIndex - startIndex; y++) {
                segmentDataCadence[y] = Cadence[y + startIndex];
            }
            segmentsDataCadence[i] = segmentDataCadence;
    
            let RpmMoy = 0;
            segmentDataCadenceLength = segmentDataCadence.length;
            for (var u = 0; u <  segmentDataCadenceLength; u++) {
                RpmMoy += segmentDataCadence[u] / segmentDataCadenceLength;
            }
            segmentCadence.innerText = Math.round(RpmMoy) + "rpm";
        }
        else {
            segmentCadence.innerText = "-";
        }
        segmentStats.appendChild(segmentCadence);
    
        segmentDataVitesse = new Array();
        let vitesse =  JSON.parse(sessionStorage.activitiesVitesse);
        for (let y = 0; y < endIndex - startIndex; y++) {
            segmentDataVitesse[y] = vitesse[y + startIndex];
        }
        segmentsDataVitesse[i] = segmentDataVitesse;
    
        latlng = JSON.parse(sessionStorage.activitiesLatlng);
        segmentDataLatLng = new Array();
        latlngLength = latlng.length;
        for (let u = 0; u < latlngLength; u++) {
            for (let y = 0; y < endIndex - startIndex; y++) {
                segmentDataLatLng[y] = latlng[y + startIndex];
            }
        }
        segmentsDataLatLng[i] = segmentDataLatLng;
    
        segmentDataAltitude = new Array();
        for (let u = 0; u < latlngLength; u++) {
            for (let y = 0; y < endIndex - startIndex; y++) {
                segmentDataAltitude[y] = altitude[y + startIndex];
            }
        }
        segmentsDataAltitude[i] = segmentDataAltitude;
    
        segmentDataGrade = new Array();
        for (let u = 0; u < latlngLength; u++) {
            for (let y = 0; y < endIndex - startIndex; y++) {
                segmentDataGrade[y] = grade[y + startIndex];
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
            fraction = (Segment[i].end_index - Segment[i].start_index) * (ctxWidth - 30);
            fractionStart = Segment[i].start_index * (ctxWidth - 30);
            fractionEnd = Segment[i].end_index * (ctxWidth - 30);
    
            extent.setAttribute(
                'width', 
                (fraction / (latlngLength))
            );
            extent.setAttribute(
                'x', 
                (fractionStart / (latlngLength)) + 21
            );
            resizeLeft.setAttribute(
                'transform', 
                `translate(${(fractionStart / (latlngLength)) + 19}, 0)`
            );
            resizeRight.setAttribute(
                'transform', 
                `translate(${fractionEnd / (latlngLength) + 19}, 0)`
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
                    segmentAnalyseArrayLength = segmentAnalyseArray.length;
                    for (let i = 0; i < segmentAnalyseArrayLength; i++) {
                        segmentAnalyseArray[i].remove();
                    }
                    segmentArrayLength = segmentArray.length;
                    for (let i = 0; i < segmentArrayLength; i++) {
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
                gradeMoy = Segment[i].segment.average_grade;
                segmentAnalyseStatsPenteDataMoy.innerText = `${gradeMoy}%`;
    
                let segmentAnalyseStatsVitesseDataMoy = document.createElement("div");
                segmentAnalyseStatsVitesseDataMoy.classList = "segmentAnalyseStatsData";
                segmentAnalyseStatsContenairDataMoyRow.appendChild(segmentAnalyseStatsVitesseDataMoy);
                vitesseMoy = 
                Math.round(((Segment[i].distance / 1000) / (Segment[i].elapsed_time / 3600)) * 10) / 10;
                segmentAnalyseStatsVitesseDataMoy.innerText = `${vitesseMoy}km/h`;
    
                let segmentAnalyseStatsWattDataMoy = document.createElement("div");
                segmentAnalyseStatsWattDataMoy.classList = "segmentAnalyseStatsData";
                segmentAnalyseStatsContenairDataMoyRow.appendChild(segmentAnalyseStatsWattDataMoy);
                let wattMoy = 0;
                segmentsDataPowerILength = segmentsDataPower[i].length;
                for (var u = 0; u <  segmentsDataPowerILength; u++) {
                    wattMoy += segmentsDataPower[i][u] / segmentsDataPowerILength;
                }
                wattMoy = Math.round(wattMoy * 10) / 10
                segmentAnalyseStatsWattDataMoy.innerText = `${wattMoy}w`;
    
                let segmentAnalyseStatsFcDataMoy = document.createElement("div");
                segmentAnalyseStatsFcDataMoy.classList = "segmentAnalyseStatsData";
                segmentAnalyseStatsContenairDataMoyRow.appendChild(segmentAnalyseStatsFcDataMoy);
                if (JSON.parse(sessionStorage.activitiesBpm) != "false") {
                    let FCMoy = 0;
                    segmentsDataFCILength = segmentsDataFC[i].length;
                    for (var u = 0; u <  segmentsDataFCILength; u++) {
                        FCMoy += segmentsDataFC[i][u] / segmentsDataFCILength;
                    }
                    segmentAnalyseStatsFcDataMoy.innerText = `${Math.round(FCMoy)}bpm`;
                }
                else {
                    segmentAnalyseStatsFcDataMoy.innerText = "-";
                }
    
                let segmentAnalyseStatsCadenceDataMoy = document.createElement("div");
                segmentAnalyseStatsCadenceDataMoy.classList = "segmentAnalyseStatsData";
                segmentAnalyseStatsContenairDataMoyRow.appendChild(segmentAnalyseStatsCadenceDataMoy);
                if (JSON.parse(sessionStorage.activitiesCadence) != "false") {
                    let RpmMoy = 0;
                    segmentsDataCadenceLength =  segmentsDataCadence[i].length;
                    for (var u = 0; u <  segmentsDataCadenceLength; u++) {
                        RpmMoy += segmentsDataCadence[i][u] / segmentsDataCadenceLength;
                    }
                    segmentAnalyseStatsCadenceDataMoy.innerText = `${Math.round(RpmMoy)}rpm`;
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
                segmentsDataGradeILength = segmentsDataGrade[i].length;
                for (var u = 0; u <  segmentsDataGradeILength; u++) {
                    if (segmentsDataGrade[i][u] > gradeMax) {
                        gradeMax = Math.round(segmentsDataGrade[i][u] * 10) / 10
                    }
                }
                segmentAnalyseStatsPenteDataMax.innerText = `${gradeMax}%`;
    
                let segmentAnalyseStatsVitesseDataMax = document.createElement("div");
                segmentAnalyseStatsVitesseDataMax.classList = "segmentAnalyseStatsData";
                segmentAnalyseStatsContenairDataMaxRow.appendChild(segmentAnalyseStatsVitesseDataMax);
                vitesseMax = 0;
                segmentsDataVitesseILength = segmentsDataVitesse[i].length;
                for (var u = 0; u < segmentsDataVitesseILength; u++) {
                    if (segmentsDataVitesse[i][u] > vitesseMax) {
                        vitesseMax = Math.round(segmentsDataVitesse[i][u] * 10) / 10
                    }
                }
                segmentAnalyseStatsVitesseDataMax.innerText = `${vitesseMax}km/h`;
    
                let segmentAnalyseStatsWattDataMax = document.createElement("div");
                segmentAnalyseStatsWattDataMax.classList = "segmentAnalyseStatsData";
                segmentAnalyseStatsContenairDataMaxRow.appendChild(segmentAnalyseStatsWattDataMax);
                wattMax = 0;
                segmentsDataPowerLength = segmentsDataPower[i].length;
                for (var u = 0; u <  segmentsDataPowerLength; u++) {
                    if (segmentsDataPower[i][u] > wattMax) {
                        wattMax = Math.round(segmentsDataPower[i][u] * 10) / 10
                    }
                }
                segmentAnalyseStatsWattDataMax.innerText = `${wattMax}w`;
    
                let segmentAnalyseStatsFcDataMax = document.createElement("div");
                segmentAnalyseStatsFcDataMax.classList = "segmentAnalyseStatsData";
                segmentAnalyseStatsContenairDataMaxRow.appendChild(segmentAnalyseStatsFcDataMax);
                if (JSON.parse(sessionStorage.activitiesBpm) != "false") {
                    let FCMax = 0;
                    segmentsDataFCILength = segmentsDataFC[i].length;
                    for (var u = 0; u <  segmentsDataFCILength; u++) {
                        if (segmentsDataFC[i][u] > FCMax) {
                            FCMax = Math.round(segmentsDataFC[i][u])
                        }
                    }
                    segmentAnalyseStatsFcDataMax.innerText = `${Math.round(FCMax)}bpm`;
                }
                else {
                    segmentAnalyseStatsFcDataMax.innerText = "-";
                }
    
                let segmentAnalyseStatsCadenceDataMax = document.createElement("div");
                segmentAnalyseStatsCadenceDataMax.classList = "segmentAnalyseStatsData";
                segmentAnalyseStatsContenairDataMaxRow.appendChild(segmentAnalyseStatsCadenceDataMax);
                if (JSON.parse(sessionStorage.activitiesCadence) != "false") {

                    let CadenceMax = 0;
                    segmentsDataCadenceILength = segmentsDataCadence[i].length;
                    for (var u = 0; u <  segmentsDataCadenceILength; u++) {
                        if (segmentsDataCadence[i][u] > CadenceMax) {
                            CadenceMax = Math.round(segmentsDataCadence[i][u])
                        }
                    }
                    segmentAnalyseStatsCadenceDataMax.innerText = `${CadenceMax}rpm`;
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
                    window.location.href = "#altitudeBox";
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
                segmentAnaliseArrayLength = segmentAnaliseArray.length;
                for (let i = 0; i < segmentAnaliseArrayLength; i++) {
                    segmentAnaliseArray[i].remove();
                }
                segmentArrayLength = segmentArray.length;
                for (let i = 0; i < segmentArrayLength; i++) {
                    segmentArray[i].style.height = "50px";
                }
            }
        }
    }
}

function intervalList() {
    Interval = getBestInterval();
    IntervalLenght = Interval.length;
    PR = JSON.parse(localStorage.prInterval);

    for (let i = 0; i < IntervalLenght; i++) {
        let itrI = Interval[i];
        let PRI = PR[i];
        var interval = document.createElement("div");
        interval.className = "segment";
        document.getElementById("segmentEffortContainer").appendChild(interval);
    
        let intervalStats = document.createElement("div");
        intervalStats.className = "segmentStats";
        interval.appendChild(intervalStats);
    
        var intervalKOM = document.createElement("div");
        intervalKOM.className = "intervalKOM";
        if (itrI.bestVitesse.pr == true || itrI.bestPuissance.pr == true || itrI.bestBpm.pr == true || itrI.bestCadence.pr == true) {
            PRIntervalList(intervalKOM, Interval[i])
        }
        else if (PRI.bestVitesse.activityIndex === sessionStorage.activityIndex || PRI.bestPuissance.activityIndex === sessionStorage.activityIndex ||
        PRI.bestBpm.activityIndex === sessionStorage.activityIndex || PRI.bestCadence.activityIndex === sessionStorage.activityIndex) {
            PRIntervalList(intervalKOM, Interval[i])
        }
        intervalStats.appendChild(intervalKOM);
        
        var intervalT = document.createElement("div");
        intervalT.className = "intervalT";
        let intervalName;
        if (Interval[i].interval.value >= 60) {
            let heure;
            let minute;
            let seconde;
            if (Interval[i].interval.value >= 3600) {
                heure = (Interval[i].interval.value / 3600).toString().substr(0, 2);
                if (heure < 10) heure = "0" + heure;
                minute = (Math.round(Interval[i].interval.value / 60)) % 60;
                if (minute < 10) minute = "0" + minute;
                seconde = (Math.round(Interval[i].interval.value)) % 60;
                if (seconde < 10) seconde = "0" + seconde;
                intervalName = heure + ":" + minute + ":" + seconde;
            } 
            else {
                minute = (Math.round(Interval[i].interval.value / 60)) % 60;
                if (minute < 10) minute = "0" + minute;
                seconde = (Math.round(Interval[i].interval.value)) % 60
                if (seconde < 10) seconde = "0" + seconde;
                intervalName = "00:" + minute + ":" + seconde;
            }
        }
        else {
            seconde = Interval[i].interval.value;
            if (seconde < 10) seconde = "0" + seconde;
            intervalName = "00:00:" + seconde;
        }
        intervalT.innerText = intervalName;
        intervalStats.appendChild(intervalT);
    
        var intervalTps = document.createElement("div");
        intervalTps.className = "intervalTps";
        intervalTps.innerText = "-";
        intervalStats.appendChild(intervalTps);
    
        var intervalVitesse = document.createElement("div");
        intervalVitesse.className = "intervalVst";
        intervalVitesse.innerText = Interval[i].bestVitesse.value+ "km/h";
        intervalStats.appendChild(intervalVitesse);

        var intervalPower = document.createElement("div");
        intervalPower.className = "intervalP";
        intervalPower.innerText = Interval[i].bestPuissance.value + "w";
        intervalStats.appendChild(intervalPower);
    
        let intervalFC = document.createElement("div");
        intervalFC.className = "intervalFC";
        if (Interval[i].bestBpm.value != 0) intervalFC.innerText = Interval[i].bestBpm.value + "bpm"
        else intervalFC.innerText = "-";
        intervalStats.appendChild(intervalFC);
    
        let intervalCadence = document.createElement("div");
        intervalCadence.className = "intervalCadence";
        if (Interval[i].bestCadence.value != 0) intervalCadence.innerText = Interval[i].bestCadence.value + "rpm"
        else intervalCadence.innerText = "-";
        intervalStats.appendChild(intervalCadence);
    }
}