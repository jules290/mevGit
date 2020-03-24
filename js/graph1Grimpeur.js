var ctx = document.getElementById('graph1');
//data: [25, 50, 60, 50, 60, 40, 90, 85, 80, 75, 100, 95, 75, 85, 25, 10]

$(document).ready(function() {
    var data = {
        labels: [
            'semaine 1', 'semaine 2', 'semaine 3', 'semaine 4', 'semaine 5', 'semaine 6', 'semaine 7', 'semaine 8', 'semaine 9', 'semaine 10'
            , 'semaine 11', 'semaine 12', 'semaine 13', 'semaine 14', 'semaine 15', 'semaine 16'],
        datasets: [{
            label: 'intensité',
            data: [25, 50, 60, 50, 55, 55, 90, 85, 80, 75, 100, 95, 85, 80, 40, 30],
            borderColor: [
                'rgba(255, 0, 0)',
            ],
            borderWidth: 1
        },
        {
            label: 'volume',
            data: [100, 85, 85, 85, 75, 75, 60, 65, 60, 65, 50, 55, 55, 60, 35, 25], 
            borderColor: [
                'rgba(0, 4, 255)',
            ],
            borderWidth: 1
        }]
    }

    var options
    
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    })
}) 