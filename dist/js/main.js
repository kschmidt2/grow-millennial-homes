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
    data: {
      googleSpreadsheetKey: '1q3upw6QSnV6ammFn8Wn9EiwujLyKnw_GPZnBJWxOToo',
      startColumn: 3,
      endRow: 7
    },
    legend: {
      align: 'right',
      symbolRadius: 0,
      verticalAlign: 'top',
      x: 10,
      itemMarginTop: -10
    },
    xAxis: {
      labels: {
        style: {
          whiteSpace: 'nowrap'
        },
        autoRotation: false
      },
      type: 'category'
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
            x: -18,
            itemDistance: 14
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});