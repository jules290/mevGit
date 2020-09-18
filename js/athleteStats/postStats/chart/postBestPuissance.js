var graphBestPuissance = document.getElementById("graphBestPuissance")
graphBestPuissance.style.height = "200px"

function postBestPuissance(Activities) {
    let PuissancePr = new Array();
    let PuissanceLabel = new Array();

    for (let i = 0; i < prInterval.length; i++) {
        PuissancePr[i] = prInterval[i].bestPuissance.value;
    }

    min = (Math.floor(getMin(PuissancePr) / 100) * 100);
    max = (Math.ceil(getMax(PuissancePr) / 100) * 100);

    for (let i = 0; i < prInterval.length; i++) {
        if (prInterval[i].interval.value == 3600) {
            PuissanceLabel[i] = prInterval[i].interval.value/3600 + "h";
        }
        else if (prInterval[i].interval.value >= 60) {
            PuissanceLabel[i] = prInterval[i].interval.value/60 + "min";
        }
        else {
            PuissanceLabel[i] = prInterval[i].interval.value + "sec";
        }
    }
    
    var data = {
        labels: PuissanceLabel,
        datasets: [{
            label: 'puissance (w)',
            data: PuissancePr,
            borderColor: [
                'rgb(60, 60, 60)',
            ],
            backgroundColor: [
                'rgb(60, 60, 60, 0.1)',
            ],
            borderWidth: 1,
            showLine: true,
            lineTension: 0.0,
        }]
    }
                
    var chartBestVitesse = new Chart(graphBestPuissance, {
        type: 'line',
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
                yAxes: [{
                    ticks: {
                        min: min,
                        max: max
                    },
                    display: true,
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