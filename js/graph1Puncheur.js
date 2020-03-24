var ctx = document.getElementById('graph1');

$(document).ready(function() {
    var data = {
        labels: [
            'semaine 1', 'semaine 2', 'semaine 3', 'semaine 4', 'semaine 5', 'semaine 6', 'semaine 7', 'semaine 8', 'semaine 9', 'semaine 10'
            , 'semaine 11', 'semaine 12', 'semaine 13', 'semaine 14', 'semaine 15', 'semaine 16'],
        datasets: [{
            label: 'intensité',
            data: [25, 60, 60, 55, 60, 90, 90, 80, 100, 100, 95, 85, 85, 85, 40, 30],
            borderColor: [
                'rgba(255, 0, 0)',
            ],
            borderWidth: 1
        },
        {
            label: 'volume',
            data: [100, 85, 85, 90, 85, 65, 65, 70, 55, 55, 55, 60, 60, 60, 35, 25], 
            borderColor: [
                'rgba(0, 4, 255)',
            ],
            borderWidth: 1
        }]
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
}) 