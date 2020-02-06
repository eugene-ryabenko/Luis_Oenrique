var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    display: true
                },
                ticks: {
                    min: 50,
                    max: 100,
                    stepSize: 10
                }
            }]
        },
        tooltips: {
            mode: false,
            callbacks: {
                title: function() {},
                label: function() {}
            }
        }
    },
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
        labels: ['0','1', '2', '3', '4', ''],
        datasets: [{
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(250, 250, 250)',
            data: [50, 82, 73, 98, 83, 50],
            pointBorderColor: 'rgb(33,33,33)',
            pointBackgroundColor: 'rgb(33,33,33)',
            pointRadius: 5,

        }]

    },
});
