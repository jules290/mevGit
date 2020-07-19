function postData() {
    postAthleteName()
    postActivitiestempsDistance();
    postActivitiesZoom();
    getActivityStreams()
}
postSegmentEndEffort("state")
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

            for (let i = 0; i < response.segment_efforts.length; i++) {
                var segment = document.createElement("div");
                segment.className = "segment";
                document.getElementById("segmentEffortContainer").appendChild(segment);

                var segmentKOM = document.createElement("div");
                segmentKOM.className = "segmentKOM";
                segmentKOM.innerText = response.segment_efforts[i].pr_rank;
                segment.appendChild(segmentKOM);

                var segmentInfo = document.createElement("div");
                segmentInfo.className = "segmentInfo";
                segment.appendChild(segmentInfo);
                
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
                segment.appendChild(segmentTps);
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
                segment.appendChild(segmentVitesse);

                let watts = wattEstimation(
                    JSON.parse(localStorage.activitiesAltitude)[sessionStorage.activityIndex], 
                    JSON.parse(localStorage.activitiesVitesse)[sessionStorage.activityIndex], 
                    JSON.parse(localStorage.activitiesGrade)[sessionStorage.activityIndex]
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
                segment.appendChild(segmentPower);

                let segmentFC = document.createElement("div");
                segmentFC.className = "segmentFC";
                if (JSON.parse(localStorage.activitiesBpm).length > 0) {
                    FC = JSON.parse(localStorage.activitiesBpm);
                    let FCMoy = 0;
                    for (var u = 0; u <  FC.length; u++) {
                        FCMoy += FC[u] / FC.length
                    }
                    segmentFC.innerText = FC + "bpm";
                }
                else {
                    segmentFC.innerText = "-";
                }
                segment.appendChild(segmentFC);

                segmentDataVitesse = new Array();
                let vitesse =  JSON.parse(localStorage.activitiesVitesse)[sessionStorage.activityIndex];
                for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                    segmentDataVitesse[y] = vitesse[y + response.segment_efforts[i].start_index];
                }
                segmentsDataVitesse[i] = segmentDataVitesse;

                latlng = JSON.parse(localStorage.activitiesLatlng)[sessionStorage.activityIndex];
                segmentDataLatLng = new Array();
                for (let u = 0; u < latlng.length; u++) {
                    for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                        segmentDataLatLng[y] = latlng[y + response.segment_efforts[i].start_index];
                    }
                }
                segmentsDataLatLng[i] = segmentDataLatLng;

                altitude = JSON.parse(localStorage.activitiesAltitude)[sessionStorage.activityIndex];
                segmentDataAltitude = new Array();
                for (let u = 0; u < latlng.length; u++) {
                    for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                        segmentDataAltitude[y] = altitude[y + response.segment_efforts[i].start_index];
                    }
                }
                segmentsDataAltitude[i] = segmentDataAltitude;

                grade = JSON.parse(localStorage.activitiesGrade)[sessionStorage.activityIndex];
                segmentDataGrade = new Array();
                for (let u = 0; u < latlng.length; u++) {
                    for (let y = 0; y < response.segment_efforts[i].end_index - response.segment_efforts[i].start_index; y++) {
                        segmentDataGrade[y] = grade[y + response.segment_efforts[i].start_index];
                    }
                }
                segmentsDataGrade[i] = segmentDataGrade;

                segment.onclick = function () {
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

                    document.getElementById("svgSpeed").onmousemove = function (event) {
                        chartLineHoverData(
                            event, 
                            grade, 
                            altitude, 
                            vitesse, 
                            watts, 
                            latlng
                        )
                    }

                    document.getElementById("svgPower").onmousemove = function (event) {
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
                        chartLineHoverData(
                            event, 
                            grade, 
                            altitude, 
                            vitesse, 
                            watts, 
                            latlng
                        )
                    }
                }
            }
        }
        else if (state == "effort") {
            $("#segmentEffortContainer").empty();
            latlng = JSON.parse(localStorage.activitiesLatlng)[sessionStorage.activityIndex];
            bpm = JSON.parse(localStorage.activitiesBpm)[sessionStorage.activityIndex];
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

    if (JSON.parse(localStorage.activityStream)[sessionStorage.activityIndex] == "true") {
        postLegend(
            JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesLatlng)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesAltitude)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesVitesse)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesDistance)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesGrade)[sessionStorage.activityIndex]
        );
        postWatt( 
            JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesLatlng)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesAltitude)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesVitesse)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesDistance)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesGrade)[sessionStorage.activityIndex]
        );
        postActivitiesStreamsaltitudeChart(
            JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesLatlng)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesAltitude)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesVitesse)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesDistance)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesGrade)[sessionStorage.activityIndex]
        );
        postActivitiesStreamsSpeedChart(
            JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesLatlng)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesAltitude)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesVitesse)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesDistance)[sessionStorage.activityIndex], 
            JSON.parse(localStorage.activitiesGrade)[sessionStorage.activityIndex]
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
            if (!localStorage.activityStream) {localStorage.activityStream = JSON.stringify(array)}
            if (!localStorage.activitiesMoving) {localStorage.activitiesMoving = JSON.stringify(array)}
            if (!localStorage.activitiesLatlng) {localStorage.activitiesLatlng = JSON.stringify(array)}
            if (!localStorage.activitiesDistance) {localStorage.activitiesDistance = JSON.stringify(array)}
            if (!localStorage.activitiesVitesse) {localStorage.activitiesVitesse = JSON.stringify(array)}
            if (!localStorage.activitiesTime) {localStorage.activitiesTime = JSON.stringify(array)}
            if (!localStorage.activitiesAltitude) {localStorage.activitiesAltitude = JSON.stringify(array)}
            if (!localStorage.activitiesGrade) {localStorage.activitiesGrade = JSON.stringify(array)}
            if (!localStorage.activitiesCadence) {localStorage.activitiesCadence = JSON.stringify(array)}
            if (!localStorage.activitiesBpm) {localStorage.activitiesBpm = JSON.stringify(array)}
            if (!localStorage.activitiesWatts) {localStorage.activitiesWatts = JSON.stringify(array)}

            let activityStream = JSON.parse(localStorage.activityStream);
            let activitiesMoving = JSON.parse(localStorage.activitiesMoving);
            let activitiesLatlng = JSON.parse(localStorage.activitiesLatlng);
            let activitiesDistance = JSON.parse(localStorage.activitiesDistance);
            let activitiesVitesse = JSON.parse(localStorage.activitiesVitesse);
            let activitiesTime = JSON.parse(localStorage.activitiesTime);
            let activitiesAltitude = JSON.parse(localStorage.activitiesAltitude);
            let activitiesGrade = JSON.parse(localStorage.activitiesGrade);
            let activitiesCadence = JSON.parse(localStorage.activitiesCadence);
            let activitiesBpm = JSON.parse(localStorage.activitiesBpm);
            let activitiesWatts = JSON.parse(localStorage.activitiesWatts);

            activityStream[sessionStorage.activityIndex] = "true";
            for (let i = 0; i < response.length; i++) {
                if (response[i].type == "moving") {
                    moving = response[i].data;
                    activitiesMoving[sessionStorage.activityIndex] = moving;
                }
                else if (response[i].type == "latlng") {
                    latlng = response[i].data;
                    activitiesLatlng[sessionStorage.activityIndex] = latlng;
                }
                else if (response[i].type == "distance") {
                    distance = response[i].data;
                    activitiesDistance[sessionStorage.activityIndex] = distance;
                }
                else if (response[i].type == "velocity_smooth") {
                    vitesse = response[i].data;
                    for (let i = 0; i < vitesse.length; i++) {
                        vitesse[i] = vitesse[i] * 3.6
                    }        
                    activitiesVitesse[sessionStorage.activityIndex] = vitesse;
                }
                else if (response[i].type == "time") {
                    time = response[i].data;
                    activitiesTime[sessionStorage.activityIndex] = time;
                }
                else if (response[i].type == "altitude") {
                    altitude = response[i].data;
                    activitiesAltitude[sessionStorage.activityIndex] = altitude;
                }
                else if (response[i].type == "grade_smooth") {
                    grade = response[i].data;
                    activitiesGrade[sessionStorage.activityIndex] = grade;
                }
                else if (response[i].type == "cadence") {
                    cadence = response[i].data;
                    activitiesCadence[sessionStorage.activityIndex] = cadence;
                }
                else if (response[i].type == "heartrate") {
                    bpm = response[i].data;
                    activitiesBpm[sessionStorage.activityIndex] = bpm;
                }
                else if (response[i].type == "watts") {
                    watts = response[i].data;
                    activitiesWatts[sessionStorage.activityIndex] = watts; 
                }
            }

            localStorage.activityStream = JSON.stringify(activityStream);
            localStorage.activitiesMoving = JSON.stringify(activitiesMoving);
            localStorage.activitiesLatlng = JSON.stringify(activitiesLatlng);
            localStorage.activitiesDistance = JSON.stringify(activitiesDistance);
            localStorage.activitiesVitesse = JSON.stringify(activitiesVitesse);
            localStorage.activitiesTime = JSON.stringify(activitiesTime);
            localStorage.activitiesAltitude = JSON.stringify(activitiesAltitude);
            localStorage.activitiesGrade = JSON.stringify(activitiesGrade);
            localStorage.activitiesCadence = JSON.stringify(activitiesCadence);
            localStorage.activitiesWatts = JSON.stringify(activitiesWatts);

            postLegend(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postWatt(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postActivitiesStreamsaltitudeChart(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
            postActivitiesStreamsSpeedChart(JSON.parse(localStorage.Activities)[sessionStorage.activityIndex], latlng , altitude, vitesse, distance, grade);
        })
    }
}