function getElevationChart(res) {
    const acces = res;
    let positionId = window.location.href.indexOf("id=") + 3;
    
    if (positionId != -1) {
        let id = window.location.href.slice(positionId);
        sessionStorage.id = id;
    }

    const activities_link = `https://www.strava.com/api/v3/activities/${sessionStorage.id}?access_token=${res.access_token}`
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
            'includeAllEfforts': true
        }
    }
    $.ajax(settings).done(function (response) {
        getActivitiesStreamsElevationChart(acces, sessionStorage.id, response)
    });
}

function getActivitiesStreamsElevationChart(res, id, activitie) {
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
                keys: "altitude"
            }
        }
        $.ajax(settings).done(function (response) {
            let vitesse = new Array()
            for (var i = 0; i < response[0].data.length; i++) {
                vitesse[i] = response[0].data[i]
            }
            vitesse.splice(vitesse.length - 1, 1)
    
            let supprEnd;
            if (vitesse.length.toString().charAt(vitesse.length.toString().length - 1) == "0") {
                supprEnd = 0;
            }
            else {
                supprEnd = 1;
            }
            let Zomm100 = new Array()
                if (Math.round(activitie.moving_time / 60) < 30) {
                    for (var i = 1; i <  (vitesse.length/10)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*10] + vitesse[i*10+1] + vitesse[i*10+2] + vitesse[i*10+3] + vitesse[i*10+4] + vitesse[i*10+5] +  
                            vitesse[i*10+6] + vitesse[i*10+7] + vitesse[i*10+8] + vitesse[i*10+9])/1.0)/10
                    }
                }
                else if (Math.round(activitie.moving_time / 60) < 60) {
                    for (var i = 1; i <  (vitesse.length/10)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*10] + vitesse[i*10+1] + vitesse[i*10+2] + vitesse[i*10+3] + vitesse[i*10+4] + vitesse[i*10+5] +  
                            vitesse[i*10+6] + vitesse[i*10+7] + vitesse[i*10+8] + vitesse[i*10+9])/1.0)/10
                    }
                }
                else if (Math.round(activitie.moving_time / 60) < 90) {
                    for (var i = 1; i <  (vitesse.length/10)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*10] + vitesse[i*10+1] + vitesse[i*10+2] + vitesse[i*10+3] + vitesse[i*10+4] + vitesse[i*10+5] +  
                            vitesse[i*10+6] + vitesse[i*10+7] + vitesse[i*10+8] + vitesse[i*10+9])/1.0)/10
                    }
                }
                else if (Math.round(activitie.moving_time / 60) < 120) {
                    for (var i = 1; i <  (vitesse.length/13)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*13] + vitesse[i*13+1] + vitesse[i*13+2] + vitesse[i*13+3] + vitesse[i*13+4] + vitesse[i*13+5] +  
                            vitesse[i*13+6] + vitesse[i*13+7] + vitesse[i*13+8] + vitesse[i*13+9] + vitesse[i*13+10] + vitesse[i*13+11] + 
                            vitesse[i*13+12])/1.3)/10
                    }
                }
                else if (Math.round(activitie.moving_time / 60) < 150) {
                    for (var i = 1; i <  (vitesse.length/16)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*16] + vitesse[i*16+1] + vitesse[i*16+2] + vitesse[i*16+3] + vitesse[i*16+4] + vitesse[i*16+5] +  
                            vitesse[i*16+6] + vitesse[i*16+7] + vitesse[i*16+8] + vitesse[i*16+9] + vitesse[i*16+10] + vitesse[i*16+11] + vitesse[i*16+12] + 
                            vitesse[i*16+13] + vitesse[i*16+14] + vitesse[i*16+15])/1.6)/10
                    }
                }
                else if (Math.round(activitie.moving_time / 60) < 180) {
                    for (var i = 1; i <  (vitesse.length/19)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*19] + vitesse[i*19+1] + vitesse[i*19+2] + vitesse[i*19+3] + vitesse[i*19+4] + vitesse[i*19+5] +  
                            vitesse[i*19+6] + vitesse[i*19+7] + vitesse[i*19+8] + vitesse[i*19+9] + vitesse[i*19+10] + vitesse[i*19+11] + vitesse[i*19+12] + 
                            vitesse[i*19+13] + vitesse[i*19+14] + vitesse[i*19+15] + vitesse[i*19+16] + vitesse[i*19+17] + vitesse[i*19+18])/1.9)/10
                    }
                }
                else if (Math.round(activitie.moving_time / 60) < 210) {
                    for (var i = 1; i <  (vitesse.length/22)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*22] + vitesse[i*22+1] + vitesse[i*22+2] + vitesse[i*22+3] + vitesse[i*22+4] + vitesse[i*22+5] +  
                            vitesse[i*22+6] + vitesse[i*22+7] + vitesse[i*22+8] + vitesse[i*22+9] + vitesse[i*22+10] + vitesse[i*22+11] + vitesse[i*22+12] + 
                            vitesse[i*22+13] + vitesse[i*22+14] + vitesse[i*22+15] + vitesse[i*22+16] + vitesse[i*22+17] + vitesse[i*22+18] + 
                            vitesse[i*22+19] + vitesse[i*22+20] + vitesse[i*22+21])/2.2)/10
                    }
                }
                else if (Math.round(activitie.moving_time / 60) < 240) {
                    for (var i = 1; i <  (vitesse.length/25)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*25] + vitesse[i*25+1] + vitesse[i*25+2] + vitesse[i*25+3] + vitesse[i*25+4] + vitesse[i*25+5] +  
                            vitesse[i*25+6] + vitesse[i*25+7] + vitesse[i*25+8] + vitesse[i*25+9] + vitesse[i*25+10] + vitesse[i*25+11] + vitesse[i*25+12] + 
                            vitesse[i*25+13] + vitesse[i*25+14] + vitesse[i*25+15] + vitesse[i*25+16] + vitesse[i*25+17] + vitesse[i*25+18] + 
                            vitesse[i*25+19] + vitesse[i*25+20] + vitesse[i*25+21] + vitesse[i*25+22] + vitesse[i*25+23] + vitesse[i*25+24])/2.5)/10
                    }
                }
                else if (Math.round(activitie.moving_time / 60) < 270) {
                    for (var i = 1; i <  (vitesse.length/28)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*28] + vitesse[i*28+1] + vitesse[i*28+2] + vitesse[i*28+3] + vitesse[i*28+4] + vitesse[i*28+5] +  
                            vitesse[i*28+6] + vitesse[i*28+7] + vitesse[i*28+8] + vitesse[i*28+9] + vitesse[i*28+10] + vitesse[i*28+11] + vitesse[i*28+12] + 
                            vitesse[i*28+13] + vitesse[i*28+14] + vitesse[i*28+15] + vitesse[i*28+16] + vitesse[i*28+17] + vitesse[i*28+18] + 
                            vitesse[i*28+19] + vitesse[i*28+20] + vitesse[i*28+21] + vitesse[i*28+22] + vitesse[i*28+23] + vitesse[i*28+24]
                            + vitesse[i*28+25] + vitesse[i*28+26] + vitesse[i*28+27])/2.8)/10
                    }
                }
                else if (Math.round(activitie.moving_time / 60) < 300) {
                    for (var i = 1; i <  (vitesse.length/31)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*31] + vitesse[i*31+1] + vitesse[i*31+2] + vitesse[i*31+3] + vitesse[i*31+4] + vitesse[i*31+5] +  
                            vitesse[i*31+6] + vitesse[i*31+7] + vitesse[i*31+8] + vitesse[i*31+9] + vitesse[i*31+10] + vitesse[i*31+11] + vitesse[i*31+12] + 
                            vitesse[i*31+13] + vitesse[i*31+14] + vitesse[i*31+15] + vitesse[i*31+16] + vitesse[i*31+17] + vitesse[i*31+18] + 
                            vitesse[i*31+19] + vitesse[i*31+20] + vitesse[i*31+21] + vitesse[i*31+22] + vitesse[i*31+23] + vitesse[i*31+24]
                            + vitesse[i*31+25] + vitesse[i*31+26] + vitesse[i*31+27] + vitesse[i*31+28] + vitesse[i*31+29] + vitesse[i*31+30])/3.1)/10
                    }
                }
                else if (Math.round(activitie.moving_time / 60) > 300) {
                    for (var i = 1; i <  (vitesse.length/35)-supprEnd; i++) {
                        Zomm100[i-1] = Math.round((vitesse[i*35] + vitesse[i*35+1] + vitesse[i*35+2] + vitesse[i*35+3] + vitesse[i*35+4] + vitesse[i*35+5] +  
                            vitesse[i*35+6] + vitesse[i*35+7] + vitesse[i*35+8] + vitesse[i*35+9] + vitesse[i*35+10] + vitesse[i*35+11] + vitesse[i*35+12] + 
                            vitesse[i*35+13] + vitesse[i*35+14] + vitesse[i*35+15] + vitesse[i*35+16] + vitesse[i*35+17] + vitesse[i*35+18] + 
                            vitesse[i*35+19] + vitesse[i*35+20] + vitesse[i*35+21] + vitesse[i*35+22] + vitesse[i*35+23] + vitesse[i*35+24]
                            + vitesse[i*35+25] + vitesse[i*35+26] + vitesse[i*35+27] + vitesse[i*35+28] + vitesse[i*35+29] + vitesse[i*35+30]
                            + vitesse[i*35+31] + vitesse[i*35+32] + vitesse[i*35+33] + vitesse[i*35+34])/3.5)/10
                    }
                }
    
            document.getElementById("firstCaseDataSpeed").innerText = Math.round(moyenne * 100) / 100 + "km/h"
                
            var ctx = document.getElementById('graphElevation');
            var legend = document.getElementById('elevationBoxLegend');
            if (document.documentElement.clientWidth > 1800) {
                ctx.height = 35;
                legend = 35;
            }
            else if (document.documentElement.clientWidth > 1600) {
                ctx.height = 39;
                legend.height = 39;
            }
            else if (document.documentElement.clientWidth > 1400) {
                ctx.height = 41;
                legend.height = 41;
            }
            else if (document.documentElement.clientWidth > 1200) {
                ctx.height = 45;
                legend.style.height = document.getElementById("elevationGraph").style.height;
                alert(document.getElementById("elevationGraph").style.height)
            }
            else if (document.documentElement.clientWidth > 1000) {
                ctx.height = 52;
                legend.height = 52;
            }
            else if (document.documentElement.clientWidth > 800) {
                ctx.height = 63;
                legend.height = 63;
            }
            else if (document.documentElement.clientWidth > 600) {
                ctx.height = 76;
                legend.height = 76;
            }
            else if (document.documentElement.clientWidth > 400) {
                ctx.height = 108;
                legend.height = 108;
            }
            else if (document.documentElement.clientWidth > 300) {
                ctx.height = 135;
                legend.height = 135;
            }
            else if (document.documentElement.clientWidth > 200) {
                ctx.height = 171;
                legend.height = 171;
            }
            else {
                ctx.height = 207;
                legend.height = 207;
            }
    
            var data = {
                labels: Zomm100,
                datasets: [{
                    label: 'altitude (m)',
                    data: Zomm100,
                    borderColor: [
                        'rgb(170, 170, 170)',
                    ],
                    backgroundColor: [
                        'rgb(170, 170, 170)',
                    ],
                    borderWidth: 1
                }]
            }
                
            var myChart = new Chart(ctx, {
                type: 'line',
                data: data,
                options: {
                    elements: {
                        point:{
                            radius: 0
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: false
                            }
                        }]
                    },
                    legend: {
                        labels: {
                            fontColor: 'black'
                        },
                        display: false,
                    }
                }
            })
        })
    }