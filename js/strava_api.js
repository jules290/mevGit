$("#segmentDeReferenceHelp").click(function () {
    window.location.href = "../support/segmentDeReference.html";
})

$("#save").click(function () {
    localStorage.segmentRefSprint = document.getElementById("segmentDeReferenceSprintSelect").value;
    localStorage.segmentRef30s_30s = document.getElementById("segmentDeReference30s/30sSelect").value;
    localStorage.segmentRef1m_1m = document.getElementById("segmentDeReference1m/1mSelect").value;
    localStorage.segmentRef2m_2m = document.getElementById("segmentDeReference2m/2mSelect").value;
    window.location.reload();
})

let positionCode = window.location.href.indexOf("code=") + 5;
let endPositionCode = window.location.href.indexOf("&scope");

let positionScope = window.location.href.indexOf("scope=") + 6;

if (positionCode != -1) {
    let code = window.location.href.slice(positionCode, endPositionCode);
    localStorage.scope = window.location.href.substr(positionScope);
    
    const auth_link = `https://www.strava.com/oauth/token?client_id=46262&client_secret=d10fe947c04ec802caa34e8f54f631090d305a77&code=${code}&grant_type=authorization_code`
    if (!localStorage.oauthStatus || localStorage.oauthStatus == "non") {
        $.post(auth_link,
            function(data){
                localStorage.refresh_token = data.refresh_token;
                localStorage.oauthStatus = "ok";
                document.getElementById("strava").innerText = "strava";
                document.getElementById("strava").href = "../strava/strava.html";
                getActivities(data)
                getSegment(data);
                getSegmentRef(data);
            });
    }
}

function reAuthorize() {
    const auth_linkRefresh = "https://www.strava.com/oauth/token";
    fetch(auth_linkRefresh,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: '46262',
            client_secret: 'd10fe947c04ec802caa34e8f54f631090d305a77',
            refresh_token: localStorage.refresh_token,
            grant_type: 'refresh_token'
        })
    })
    .then((res) => res.json())
    .then(res => {
        localStorage.access_token = res.access_token;
        getActivities(res)
        getSegment(res);
        getSegmentRef(res);
    })
}

if (localStorage.oauthStatus || localStorage.oauthStatus == "ok") {
    reAuthorize();
}

function getActivities(res) {
    const resGetactPlace = res;
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": activities_link,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "35.188.171.173:8080",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {

        }
    }
    $.ajax(settings).done(function (response) {
        for (var i = 0; i < response.length; i++) {
            var activities = document.createElement("div");
            activities.id = i
            activities.className = "activities";
            document.getElementById("activite").appendChild(activities);
            var activitiesT = document.createElement("p");
            if (response[i].name.length > 25) {activitiesT.innerText = response[i].name.substr(0, 25) + "..."}
            else {activitiesT.innerText = response[i].name.substr(0, 25)}
            activitiesT.className = "activitiesT";
            activities.appendChild(activitiesT);
            var activitiesD = document.createElement("p");
            activitiesD.className = "activitiesD";
            activitiesD.innerText = response[i].start_date_local.slice(0, 10) + " " +
            response[i].start_date_local.slice(11, 16)
            activities.appendChild(activitiesD);
        }

        $("#0").click(function () {getActivitiesPlace(resGetactPlace, 0)})
        $("#1").click(function () {getActivitiesPlace(resGetactPlace, 1)})
        $("#2").click(function () {getActivitiesPlace(resGetactPlace, 2)})
        $("#3").click(function () {getActivitiesPlace(resGetactPlace, 3)})
        $("#4").click(function () {getActivitiesPlace(resGetactPlace, 4)})
        $("#5").click(function () {getActivitiesPlace(resGetactPlace, 5)})
        $("#6").click(function () {getActivitiesPlace(resGetactPlace, 6)})
        $("#7").click(function () {getActivitiesPlace(resGetactPlace, 7)})
        $("#8").click(function () {getActivitiesPlace(resGetactPlace, 8)})
        $("#9").click(function () {getActivitiesPlace(resGetactPlace, 9)})
        $("#10").click(function () {getActivitiesPlace(resGetactPlace, 10)})
        $("#11").click(function () {getActivitiesPlace(resGetactPlace, 11)})
        $("#12").click(function () {getActivitiesPlace(resGetactPlace, 12)})
        $("#13").click(function () {getActivitiesPlace(resGetactPlace, 13)})
        $("#14").click(function () {getActivitiesPlace(resGetactPlace, 14)})
        $("#15").click(function () {getActivitiesPlace(resGetactPlace, 15)})
        $("#16").click(function () {getActivitiesPlace(resGetactPlace, 16)})
        $("#17").click(function () {getActivitiesPlace(resGetactPlace, 17)})
        $("#18").click(function () {getActivitiesPlace(resGetactPlace, 18)})
        $("#19").click(function () {getActivitiesPlace(resGetactPlace, 19)})
        $("#20").click(function () {getActivitiesPlace(resGetactPlace, 20)})
        $("#21").click(function () {getActivitiesPlace(resGetactPlace, 21)})
        $("#22").click(function () {getActivitiesPlace(resGetactPlace, 22)})
        $("#23").click(function () {getActivitiesPlace(resGetactPlace, 23)})
        $("#24").click(function () {getActivitiesPlace(resGetactPlace, 24)})
        $("#25").click(function () {getActivitiesPlace(resGetactPlace, 25)})
        $("#26").click(function () {getActivitiesPlace(resGetactPlace, 26)})
        $("#27").click(function () {getActivitiesPlace(resGetactPlace, 27)})
        $("#28").click(function () {getActivitiesPlace(resGetactPlace, 28)})
        $("#29").click(function () {getActivitiesPlace(resGetactPlace, 29)})

        console.log(response)
    });
}

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiamVjb3JjaGFyZCIsImEiOiJja2FpODFqdG4wNDVoMnJxcjBkczBxY3d2In0.XfYne734PhjUYVAGmTwUsw'
        }).addTo(mymap);

function getActivitiesPlace(res, place) {
    const activitiesId_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": activitiesId_link,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "35.188.171.173:8080",
            "x-rapidapi-key": "d9838faf1bmsh3dab1c5f99f54f4p14a909jsn374e4006fed0",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {

        }
    }
    
    $.ajax(settings).done(function (response) {
        var coordonnés = L.Polyline.fromEncoded(response[place].map.summary_polyline).getLatLngs()
        mymap.setView([coordonnés[place].lat, coordonnés[place].lng], 10);

        L.polyline(
            coordonnés,
            {
                color: "green",
                weight: 5,
                opacity: .7,
                lineJoin: 'round'
            }
        ).addTo(mymap)
        getActivitiesStreams(res, response[place].id, response[place])
    });
}

function getActivitiesStreams(res, id, activitie) {
    if (localStorage.segmentRefSprint) {
        const activitiesStreams = `https://www.strava.com/api/v3/activities/${id}/streams?access_token=${res.access_token}`
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
            
            }
        }
        $.ajax(settings).done(function (response) {
            let vitesse = new Array()
            for (var i = 0; i < response[0].data.length; i++) {
                vitesse[i] = (Math.round(((response[0].data[i + 1] -response[0].data[i]) * response[0].data.length / activitie.moving_time) * 36))/10
            }
            vitesse.splice(vitesse.length - 1, 1,)

            let Zomm100 = new Array()
            for (var i = 0; i <  vitesse.length/10; i++) {
                Zomm100[i] = Math.round((vitesse[i*10] +  vitesse[i*10+1] +  vitesse[i*10+2] +  vitesse[i*10+3] +  vitesse[i*10+4] +  vitesse[i*10+5]
                +  vitesse[i*10+6] +  vitesse[i*10+7] +  vitesse[i*10+8] +  vitesse[i*10+9]))/10
            }
            console.log(Zomm100)
            let totale = 0;
            for (var i = 0; i <  vitesse.length; i++) {
                totale += vitesse[i] / vitesse.length
            }

            moyenne = totale

            console.log(vitesse)

            
            var ctx = document.getElementById('graph1');

            var data = {
                labels: Zomm100,
                datasets: [{
                    label: 'vitesse',
                    data: Zomm100,
                    borderColor: [
                        'rgba(255, 0, 0)',
                    ],
                    borderWidth: 1
                },
                // {
                //     label: 'volume',
                //     data: [100, 85, 85, 85, 75, 75, 60, 65, 60, 65, 50, 55, 55, 60, 35, 25], 
                //     borderColor: [
                //         'rgba(0, 4, 255)',
                //     ],
                //     borderWidth: 1
                // }
            ]
            }
            
            var myChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    legend: {
                        labels: {
                            fontColor: 'white'
                        }
                    }
                }
            })

            // console.log(response[0].data)
            // console.log(activitie)
        })
    }
}

function getSegment(res) {
    const segment_link = `https://www.strava.com/api/v3/segments/starred?access_token=${res.access_token}`
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": segment_link,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "35.188.171.173:8080",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            'page': 1
        }
    }
    $.ajax(settings).done(function (response) {
        for (var i = 0; i < response.length; i++) {
            var option_0 = document.createElement("option");
            option_0.innerText = response[i].name;
            option_0.value = response[i].id;
            document.getElementById("segmentDeReferenceSprintSelect").appendChild(option_0);
            var option_1 = document.createElement("option");
            option_1.innerText = response[i].name;
            option_1.value = response[i].id;
            document.getElementById("segmentDeReference30s/30sSelect").appendChild(option_1);
            var option_2 = document.createElement("option");
            option_2.innerText = response[i].name;
            option_2.value = response[i].id;
            document.getElementById("segmentDeReference1m/1mSelect").appendChild(option_2);
            var option_3 = document.createElement("option");
            option_3.innerText = response[i].name;
            option_3.value = response[i].id;
            document.getElementById("segmentDeReference2m/2mSelect").appendChild(option_3);
        }

        if (localStorage.segmentRefSprint) {
            document.getElementById("segmentDeReferenceSprintSelect").value = localStorage.segmentRefSprint;
        }

        if (localStorage.segmentRef30s_30s) {
            document.getElementById("segmentDeReference30s/30sSelect").value = localStorage.segmentRef30s_30s;
        }

        if (localStorage.segmentRef1m_1m) {
            document.getElementById("segmentDeReference1m/1mSelect").value = localStorage.segmentRef1m_1m;
        }

        if (localStorage.segmentRef2m_2m) {
            document.getElementById("segmentDeReference2m/2mSelect").value = localStorage.segmentRef2m_2m;
        }
    });
}

function getSegmentRef(res) {
    if (localStorage.segmentRefSprint) {
        const segment_link = `https://www.strava.com/api/v3/segments/${Number(localStorage.segmentRefSprint)}?access_token=${res.access_token}`
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": segment_link,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "35.188.171.173:8080",
                "x-rapidapi-key": "SIGN-UP-FOR-KEY",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
            
            }
        }
        $.ajax(settings).done(function (response) {
            if (!localStorage.segmentRefSprint_pr_date || !localStorage.segmentRefSprint_pr_elapsed_time) {
                localStorage.segmentRefSprint_pr_date = response.athlete_segment_stats.pr_date
                localStorage.segmentRefSprint_pr_elapsed_time = response.athlete_segment_stats.pr_elapsed_time
            }
            else {
                if (localStorage.segmentRefSprint_pr_date != response.athlete_segment_stats.pr_date) {
                    sessionStorage.segmentRefSprint_pr_dateCHANGED = true;
                    localStorage.segmentRefSprint_pr_date = response.athlete_segment_stats.pr_date;
                }
                if (localStorage.segmentRefSprint_pr_elapsed_time != response.athlete_segment_stats.pr_elapsed_time) {
                    sessionStorage.segmentRefSprint_pr_elapsed_timeCHANGED = true;
                    sessionStorage.segmentRefSprint_pr_elapsed_timeGAIN = 
                    response.athlete_segment_stats.pr_elapsed_time - localStorage.segmentRefSprint_pr_elapsed_time;
                    localStorage.segmentRefSprint_pr_elapsed_time = response.athlete_segment_stats.pr_elapsed_time;
                }
                else {
                    sessionStorage.segmentRef30s_30s_pr_dateCHANGED = false;
                }
            }
        })
    }

    if (localStorage.segmentRef30s_30s) {
        const segment_link_streams = `https://www.strava.com/api/v3/segments/${Number(localStorage.segmentRef30s_30s)}?access_token=${res.access_token}`
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": segment_link_streams,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "35.188.171.173:8080",
                "x-rapidapi-key": "SIGN-UP-FOR-KEY",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
            
            }
        }
        $.ajax(settings).done(function (response) {
            if (!localStorage.segmentRef30s_30s_pr_date || !localStorage.segmentRef30s_30s_pr_elapsed_time) {
                localStorage.segmentRef30s_30s_pr_date = response.athlete_segment_stats.pr_date
                localStorage.segmentRef30s_30s_pr_elapsed_time = response.athlete_segment_stats.pr_elapsed_time
            }
            else {
                if (localStorage.segmentRef30s_30s_pr_date != response.athlete_segment_stats.pr_date) {
                    sessionStorage.segmentRef30s_30s_pr_dateCHANGED = true;
                    localStorage.segmentRef30s_30s_pr_date = response.athlete_segment_stats.pr_date;
                }
                if (localStorage.segmentRef30s_30s_pr_elapsed_time != response.athlete_segment_stats.pr_elapsed_time) {
                    sessionStorage.segmentRef30s_30s_pr_elapsed_timeCHANGED = true;
                    sessionStorage.segmentRef30s_30s_pr_elapsed_timeGAIN = 
                    response.athlete_segment_stats.pr_elapsed_time - localStorage.segmentRef30s_30s_pr_elapsed_time;
                    localStorage.segmentRef30s_30s_pr_elapsed_time = response.athlete_segment_stats.pr_elapsed_time;
                }
                else {
                    sessionStorage.segmentRef30s_30s_pr_dateCHANGED = false;
                }
            }
        });
    }

    if (localStorage.segmentRef1m_1m) {
        const segment_link_streams = `https://www.strava.com/api/v3/segments/${Number(localStorage.segmentRef1m_1m)}?access_token=${res.access_token}`
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": segment_link_streams,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "35.188.171.173:8080",
                "x-rapidapi-key": "SIGN-UP-FOR-KEY",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
            
            }
        }
        $.ajax(settings).done(function (response) {
            if (!localStorage.segmentRef1m_1m_pr_date || !localStorage.segmentRef1m_1m_pr_elapsed_time) {
                localStorage.segmentRef1m_1m_pr_date = response.athlete_segment_stats.pr_date
                localStorage.segmentRef1m_1m_pr_elapsed_time = response.athlete_segment_stats.pr_elapsed_time
            }
            else {
                if (localStorage.segmentRef1m_1m_pr_date != response.athlete_segment_stats.pr_date) {
                    sessionStorage.segmentRef1m_1m_pr_dateCHANGED = true;
                    localStorage.segmentRef1m_1m_pr_date = response.athlete_segment_stats.pr_date;
                }
                if (localStorage.segmentRef1m_1m_pr_elapsed_time != response.athlete_segment_stats.pr_elapsed_time) {
                    sessionStorage.segmentRef1m_1m_pr_elapsed_timeCHANGED = true;
                    sessionStorage.segmentRef1m_1m_pr_elapsed_timeGAIN = 
                    response.athlete_segment_stats.pr_elapsed_time - localStorage.segmentRef1m_1m_pr_elapsed_time;
                    localStorage.segmentRef1m_1m_pr_elapsed_time = response.athlete_segment_stats.pr_elapsed_time;
                }
                else {
                    sessionStorage.segmentRef1m_1m_pr_dateCHANGED = false;
                }
            }
        });
    }

    if (localStorage.segmentRef2m_2m) {
        const segment_link_streams = `https://www.strava.com/api/v3/segments/${Number(localStorage.segmentRef2m_2m)}?access_token=${res.access_token}`
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": segment_link_streams,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "35.188.171.173:8080",
                "x-rapidapi-key": "SIGN-UP-FOR-KEY",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {
            
            }
        }
        $.ajax(settings).done(function (response) {
            if (!localStorage.segmentRef2m_2m_pr_date || !localStorage.segmentRef2m_2m_pr_elapsed_time) {
                localStorage.segmentRef2m_2m_pr_date = response.athlete_segment_stats.pr_date
                localStorage.segmentRef2m_2m_pr_elapsed_time = response.athlete_segment_stats.pr_elapsed_time
            }
            else {
                if (localStorage.segmentRef2m_2m_pr_date != response.athlete_segment_stats.pr_date) {
                    sessionStorage.segmentRef2m_2m_pr_dateCHANGED = true;
                    localStorage.segmentRef2m_2m_pr_date = response.athlete_segment_stats.pr_date;
                }
                if (localStorage.segmentRef2m_2m_pr_elapsed_time != response.athlete_segment_stats.pr_elapsed_time) {
                    sessionStorage.segmentRef2m_2m_pr_elapsed_timeCHANGED = true;
                    sessionStorage.segmentRef2m_2m_pr_elapsed_timeGAIN = 
                    response.athlete_segment_stats.pr_elapsed_time - localStorage.segmentRef2m_2m_pr_elapsed_time;
                    localStorage.segmentRef2m_2m_pr_elapsed_time = response.athlete_segment_stats.pr_elapsed_time;
                }
                else {
                    sessionStorage.segmentRef2m_2m_pr_dateCHANGED = false;
                }
            }
        });
    }
}
