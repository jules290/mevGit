var graphBestVitesse = document.getElementById("graphBestVitesse")
graphBestVitesse.style.height = "200px"

function postBestVitesse(Activities) {
    let VitessePr =  new Array();
    let VitesseLabel = new Array();

    for (let i = 0; i < prInterval.length; i++) {
        VitessePr[i] = prInterval[i].bestVitesse.value;
    }

    min = (Math.floor(getMin(VitessePr) / 10) * 10);
    max = (Math.ceil(getMax(VitessePr) / 10) * 10);

    for (let i = 0; i < prInterval.length; i++) {
        if (prInterval[i].interval.value == 3600) {
            VitesseLabel[i] = prInterval[i].interval.value/3600 + "h";
        }
        else if (prInterval[i].interval.value >= 60) {
            VitesseLabel[i] = prInterval[i].interval.value/60 + "min";
        }
        else {
            VitesseLabel[i] = prInterval[i].interval.value + "sec";
        }
    }

    var data = {
        labels: VitesseLabel,
        datasets: [{
            label: 'vitesse (km/h)',
            data: VitessePr,
            borderColor: [
                'rgb(6, 141, 251)',
            ],
            backgroundColor: [
                'rgb(6, 141, 251, 0.1)',
            ],
            borderWidth: 1,
            showLine: true,
            lineTension: 0.0,
        }]
    }
                
    var chartBestVitesse = new Chart(graphBestVitesse, {
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