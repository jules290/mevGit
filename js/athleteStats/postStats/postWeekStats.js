function postWeekStats(Activities) {
    var D = new Date();
    let Day = D.getDate();
    let Month = (D.getMonth() + 1);
    let Year = D.getFullYear();
    let DayNB = getDayNB365(Day, Month, Year);
    let Week = getWeek(Day, Month, Year);
    let CkeckWeek = checkWeek(Week);
    let WeekDistance = getWeekDistance(CkeckWeek);
    let WeekTemps = getWeekTemps(CkeckWeek);
    let WeekActivities = getWeekActivities(CkeckWeek);
    let WeekD4 = getWeekD4(CkeckWeek);
    let ActivitiesLenght = Activities.length;

    document.getElementById("WeekStatsDataDistanceValue").innerText = Math.round(WeekDistance / 100) / 10 + "km";
    document.getElementById("WeekStatsDataTempsValue").innerText = Math.round(WeekTemps / 3600) + "h" + " " + Math.round((WeekTemps % 3600) / 60) + "min";
    document.getElementById("WeekStatsDataActivitiesValue").innerText = Math.round(WeekActivities);
    document.getElementById("WeekStatsDataD4Value").innerText = Math.round(WeekD4) + "m";

    WeekChart();

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

    function checkDay(checkWeek) {
        ActivitiesDay = [0, 0, 0, 0, 0, 0, 0]
        
        let ActivitieDate;
        for (let i = 0; i < checkWeek.length; i++) {
            ActivitieDate = {
                year: Number(checkWeek[i].start_date_local.slice(0, 4)),
                month: Number(checkWeek[i].start_date_local.slice(5, 7)),
                day: Number(checkWeek[i].start_date_local.slice(8, 10)),
            }
            ActivitieDate.weekDay = getDayWeek(
                getWeek(ActivitieDate.day, ActivitieDate.month, ActivitieDate.year), 
                ActivitieDate.day,
                ActivitieDate.month,
                ActivitieDate.year
            )
            ActivitiesDay[ActivitieDate.weekDay - 1] += checkWeek[i].distance / 1000;
        };

        return ActivitiesDay;
    }

    function getWeekDistance(ckeckWeek) {
        let WeekDistance = 0;
        for (let i = 0; i < ckeckWeek.length; i++) {
            if (ckeckWeek[i] == true) WeekDistance += Activities[i].distance;
        }
        return WeekDistance;
    }

    function getWeekTemps(ckeckWeek) {
        let WeekTemps = 0;
        for (let i = 0; i < ckeckWeek.length; i++) {
            if (ckeckWeek[i] == true) WeekTemps += Activities[i].moving_time;
        }
        return WeekTemps;
    }

    function getWeekActivities(ckeckWeek) {
        let WeekActivities = 0;
        for (let i = 0; i < ckeckWeek.length; i++) {
            if (ckeckWeek[i] == true) WeekActivities += 1;
        }
        return WeekActivities;
    }

    function getWeekD4(ckeckWeek) {
        let WeekD4 = 0;
        for (let i = 0; i < ckeckWeek.length; i++) {
            if (ckeckWeek[i] == true) WeekD4 += Activities[i].total_elevation_gain;
        }
        return WeekD4;
    }

    function WeekChart() {
        var graphWeek = document.getElementById("graphWeek");
        let WeeksActivities = new Array;
        let WeekLabel = ["jr 1", "jr 2", "jr 3", "jr 4", "jr 5", "jr 6", "jr 7"];
        let ActivitieNB = 0;

        for (let i = 0; i < Activities.length; i++) {
            if (CkeckWeek[i] == true) {
                WeeksActivities[ActivitieNB] = Activities[i];
                ActivitieNB++;
            }
        }

        let CheckDay = checkDay(WeeksActivities.reverse());
        
        let min = Math.floor(getMin(CheckDay) / 50) * 50;
        let max = Math.ceil(getMax(CheckDay) / 50) * 50;

        var data = {
            labels: WeekLabel,
            datasets: [{
                label: 'kilomètre (km)',
                data: CheckDay,
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