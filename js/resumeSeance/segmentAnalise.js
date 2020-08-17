function segmentAnalyseElevationChart(segmentDataAltitude, segmentDataGrade, ctx) {
    let dataMax = 0;
    for (var i = 0; i <  segmentDataAltitude.length; i++) {
        if (segmentDataAltitude[i] > dataMax) {
            dataMax = segmentDataAltitude[i]
        }
    }

    let dataMin = 99999;
    for (var i = 0; i <  segmentDataAltitude.length; i++) {
        if (segmentDataAltitude[i] < dataMin) {
            dataMin = segmentDataAltitude[i]
        }
    }

    function dataRound(data, type) {
        if (type == "max") {
            if (Math.abs(data, type) > 10000) {
                return (Math.round(data / 1000) * 1000) + 1000
            }
            else if (Math.abs(data) > 1000) {
                return (Math.round(data / 100) * 100) + 100
            }
            else if (Math.abs(data) > 100) {
                return (Math.round(data / 10) * 10) + 10
            }
            else if (Math.abs(data) > 10) {
                return Math.round(data) + 1
            }
            else if (Math.abs(data) > 0) {
                return Math.round(data) + 1
            }
        }
        else if (type == "min") {
            
        }
    }

    let max = dataRound(dataMax, "max");
    let min = dataRound(dataMin , "min");

    var kilometrage = new Array()
    for (let i = 0; i < segmentDataAltitude.length; i++) {
        kilometrage[i] = "      "
    }

    var data = {
        labels: kilometrage,
        datasets: [{
            label: 'altitude (m)',
            data: segmentDataAltitude,
            borderColor: [
                'rgb(170, 170, 170)',
            ],
            backgroundColor: [
                'rgb(170, 170, 170)',
            ],
            borderWidth: 1,
            showLine: true,
            lineTension: 0.4,
        }]
    }

    var segmentAnalyseElevation = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            tooltips: {
                intersect: false,
                position: 'average',
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                callbacks: {
                    label: function(tooltipItems, data) { 
                        console.log(tooltipItems)
                        return "pente: " + segmentDataGrade[tooltipItems.index] + "%";
                    }
                }
            },
            maintainAspectRatio: false,
            elements: {
                point:{
                    radius: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: min,
                        max: max,
                        // display: false,
                    },
                }]
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