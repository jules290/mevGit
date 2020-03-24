var ctx1 = document.getElementById('graph1');

    var data1 = {
        labels: [
            'semaine 1', 'semaine 2', 'semaine 3', 'semaine 4', 'semaine 5', 'semaine 6', 'semaine 7', 'semaine 8', 'semaine 9', 'semaine 10'
            , 'semaine 11', 'semaine 12', 'semaine 13', 'semaine 14', 'semaine 15', 'semaine 16'],
        datasets: [{
            label: 'intensité',
            data: [25, 55, 60, 60, 65, 60, 95, 95, 80, 90, 95, 90, 70, 70, 40, 30],
            borderColor: [
                'rgba(255, 0, 0)',
            ],
            borderWidth: 1
        },
        {
            label: 'volume',
            data: [100, 90, 85, 80, 85, 80, 60, 60, 70, 65, 60, 65, 75, 75, 35, 25], 
            borderColor: [
                'rgba(0, 4, 255)',
            ],
            borderWidth: 1
        }]
    }

    
    var myChart1 = new Chart(ctx1, {
        type: 'line',
        data: data1,
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