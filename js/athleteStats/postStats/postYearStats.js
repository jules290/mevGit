function postYearStats(Activities) {
    var D = new Date();
    let Day = D.getDate();
    let Month = (D.getMonth() + 1);
    let Year = D.getFullYear();
    let DayNB = getDayNB365(Day, Month, Year);
    let Week = getWeek(Day, Month, Year);
    let CkeckWeek = checkWeek(Week);
    let ckeckYear = checkYear();
    let YearDistance = getYearDistance(ckeckYear);
    let YearTemps = getYearTemps(ckeckYear);
    let YearActivities = getYearActivities(ckeckYear);
    let YearD4 = getYearD4(ckeckYear);
    let ActivitiesLenght = Activities.length;

    document.getElementById("yearStatsDataDistanceValue").innerText = Math.round(YearDistance / 100) / 10 + "km";
    document.getElementById("yearStatsDataTempsValue").innerText = Math.round(YearTemps / 3600) + "h";
    document.getElementById("yearStatsDataActivitiesValue").innerText = Math.round(YearActivities);
    document.getElementById("yearStatsDataD4Value").innerText = Math.round(YearD4) + "m";

    yearChart();

    function checkYear() {
        ActivitiesYear = new Array();
        let date;
        for (let i = 0; i < Activities.length; i++) {
            date = Activities[i].start_date_local.slice(0,4);
            if (date == "2020") ActivitiesYear[i] = true
            else ActivitiesYear[i] = false
        };
        return ActivitiesYear;
    }

    function getYearDistance(ckeckYear) {
        let yearDistance = 0;
        for (let i = 0; i < ckeckYear.length; i++) {
            if (ckeckYear[i] == true) yearDistance += Activities[i].distance;
        }
        return yearDistance;
    }

    function getYearTemps(ckeckYear) {
        let yearTemps = 0;
        for (let i = 0; i < ckeckYear.length; i++) {
            if (ckeckYear[i] == true) yearTemps += Activities[i].moving_time;
        }
        return yearTemps;
    }

    function getYearActivities(ckeckYear) {
        let yearActivities = 0;
        for (let i = 0; i < ckeckYear.length; i++) {
            if (ckeckYear[i] == true) yearActivities += 1;
        }
        return yearActivities;
    }

    function getYearD4(ckeckYear) {
        let yearD4 = 0;
        for (let i = 0; i < ckeckYear.length; i++) {
            if (ckeckYear[i] == true) yearD4 += Activities[i].total_elevation_gain;
        }
        return yearD4;
    }

    function checkWeek(week) {
        ActivitiesWeek = new Array();
        
        let ActivitieDate;
        for (let i = 0; i < Activities.length; i++) {
            ActivitieDate = {
                year: Number(Activities[i].start_date_local.slice(0, 4)),
                month: Number(Activities[i].start_date_local.slice(5, 7)),
                day: Number(Activities[i].start_date_local.slice(8, 10)),
            }
            ActivitieDate.week = getWeek(ActivitieDate.day, ActivitieDate.month, ActivitieDate.year)
            if (ActivitieDate.week == week) ActivitiesWeek[i] = true
            else ActivitiesWeek[i] = false
        };

        return ActivitiesWeek;
    }

    function yearChart() {
        var graphWeek = document.getElementById("yearWeek");
        let WeeksDistance = new Array;
        let WeeksDistanceLabel = new Array;

        for (let i = 0; i < 53; i++) {
            ckeckWeek = checkWeek(i);
            WeeksDistance[i+1] = 0;

            for (let u = 0; u < ckeckWeek.length; u++) {
                if (ckeckWeek[u] == true) {
                    WeeksDistance[i+1] += Activities[u].distance;
                }
            }
        }

        for (let i = 0; i < WeeksDistance.length; i++) {
            WeeksDistance[i] = Math.round(WeeksDistance[i] / 100) / 10
            WeeksDistanceLabel[i] = "sem " + i
        }

        let min = Math.floor(getMin(WeeksDistance) / 50) * 50;
        let max = Math.ceil(getMax(WeeksDistance) / 50) * 50;

        var data = {
            labels: WeeksDistanceLabel,
            datasets: [{
                label: 'kilomètre (km)',
                data: WeeksDistance,
                backgroundColor: 'rgba(0, 134, 191, 0.8)',
                borderWidth: 0,
                barPercentage: 0.95,
                categoryPercentage: 0.95,
            }]
        }
                    
        var chartWeek = new Chart(graphWeek, {
            type: 'bar',
            data: data,
            options: {
                maintainAspectRatio: false,
                elements: {
                    point:{
                        radius: 0
                    }
                },
                tooltips: {
                    intersect: false,
                    position: 'average',
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                    }],
                    yAxes: [{
                        ticks: {
                            min: min,
                            max: max,
                            maxTicksLimit: 3
                        },
                        display: true,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                    }],
                },
                legend: {
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
    }
}