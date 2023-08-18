var xValues = ["ความเข้าใจงาน", "แกปัญหาได้", "เข้าใจได้ง่าย", "เรียนรู้ได้ไว", "ความขยัน"];
var yValues = [70, 60, 80, 70, 60,50,90];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "(⌐■_■)"
    }
  }
});