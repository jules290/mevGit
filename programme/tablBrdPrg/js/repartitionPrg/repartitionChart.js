function getRepartitionChart(type) {

    seances = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
    ]

    for (let i = 0; i < PRG[index].length; i++) {
        thisSemaineArray = [PRG[index][i].lundi, PRG[index][i].mardi, PRG[index][i].mercredi, PRG[index][i].jeudi, PRG[index][i].vendredi, 
        PRG[index][i].samedi, PRG[index][i].dimanche]

        for (let y = 0; y < thisSemaineArray.length; y++) {
            if (thisSemaineArray[y].Z) seances[thisSemaineArray[y].Z - 1]++;
        }
    }

    seanceLenght = 0
    for (let i = 0; i < seances.length; i++) {
        seanceLenght += seances [i];
    }
    
    seancePrct = new Array();
    for (let i = 0; i < seances.length; i++) {
        seancePrct[i] = Math.round( (seances[i] * 100) / seanceLenght );
    }

    zone = [
        "zone 1",
        "zone 2",
        "zone 3",
        "zone 4",
        "zone 5",
        "zone 6",
        "zone 7",
    ];

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: zone,
            datasets: [{
                label: '',
                data: seancePrct,
                backgroundColor: ZColor,
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 75,
            tooltips: {
                intersect: true,
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                callbacks: {
                    label: function(tooltipItems, data) { 
                        return zone[tooltipItems.index] + ": " + seancePrct[tooltipItems.index] + "%";
                    }
                }
            },
        }
    });
}