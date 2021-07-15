var labels = ['January', 'February', 'March', 'April', 'May', 'June'];

var data = {
    labels: labels,
    datasets: [{
        lineLabel: '初めてのグラフ用データセット',
        borderColor: 'rgb(130, 60, 70)',
        backgroundColor: 'rgb(225, 100, 130)',
        data: [0, 10, 15, 3, 20, 60, 10],
    }]
};

var config = {
    type: 'line',
    data,
    options: {},
};

var lineChart = new Chart(

    // 通常のやり方
    // document.getElementById('lineChart'),

    // jQueryを使ったやり方
    $('#lineChart'),
    config,
);



