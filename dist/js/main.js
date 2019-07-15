"use strict";

Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'column',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    series: [{
      data: [[2012, 28], [2013, 31], [2014, 32], [2015, 35], [2016, 34], [2017, 36], [2018, 37]]
    }],
    plotOptions: {
      series: {
        groupPadding: .1
      }
    },
    legend: {
      enabled: false
    },
    xAxis: {
      labels: {
        style: {
          whiteSpace: 'nowrap'
        }
      }
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow'
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      pointFormat: '{point.y}%'
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            align: 'left',
            x: -18
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});