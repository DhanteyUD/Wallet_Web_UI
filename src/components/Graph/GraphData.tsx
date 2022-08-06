/** @format */

export const series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined =
  [
    {
      name: 'offline sales',
      data: [50, 200, 400, 250, 400, 600, 770],
    },
    {
      name: 'online sales',
      data: [220, 600, 780, 670, 580, 350, 400],
    },
  ];

export const options: ApexCharts.ApexOptions | undefined = {
  chart: {
    height: 350,
    type: 'line',
  },
  colors: ['#a88ed4', '#b9e303'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  tooltip: {
    x: {
      format: 'MM',
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'center',
    floating: true,
    offsetY: 0,
    offsetX: 10,
  }
};
