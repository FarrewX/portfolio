
const xValues = [2019,2020,2021,2022,2023];
const yValues = [166,167,168,169,170];

new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 160, max:180}}],
      }
    }
  });


  var aValues = ["นอน", "นอนเหมือนกันแต่คนละสี"];
  var bValues = [80, 20,];
  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];
  
  new Chart("myChart2", {
    type: "doughnut",
    data: {
      labels: aValues,
      datasets: [{
        backgroundColor: barColors,
        data: bValues
      }]
    },
    options: {
      title: {
        display: true,
      }
    }
  });


  var cValues = ["จันทร์", "อังคาร", "พุธ", "พฤหัสฯ", "ศุกร์"];
var dValues = [2000, 1800, 1600, 1400, 1000];
var barColors = [
  "rgba(255,0,0,1.0)",
  "rgba(255,0,0,0.8)",
  "rgba(255,0,0,0.6)",
  "rgba(255,0,0,0.4)",
  "rgba(255,0,0,0.2)"
];

new Chart("myChart3", {
  type: "bar",
  data: {
    labels: cValues,
    datasets: [{
      backgroundColor: barColors,
      data: dValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
    }
  }
});

var heightValues = [160, 165, 170, 175, 180];
var weightValues = [59, 60, 59, 62, 64,50,70];
var bmiValues = [19.5, 20.2, 20.8, 21.2, 21.6, 18.0, 22.0];

// Chart for weight
new Chart("myChart4", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: weightValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
        }
    }
});

// Chart for BMI
new Chart("myChart5", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: bmiValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
        }
    }
});