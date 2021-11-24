import { ChartOptions } from 'chart.js';

const DEFAULT_TITLE = 'A person from [MASK] is an enemy';

//this option for 6 row bar charts.
export const getChartOptions = (
  title = DEFAULT_TITLE
): ChartOptions<'bar'> => ({
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 0.5,
    },
  },
  datasets: {
    bar: {
      barPercentage: 0.7,
    },
  },
  responsive: true,
  aspectRatio: 1.9,
  plugins: {
    title: {
      display: true,
      text: title,
      font: {
        size: 13,
        weight: '500',
      },
      color: 'black',
    },
    legend: {
      display: false,
      onClick: (e) => {},
    },
    datalabels: {
      labels: {
        value: {
          color: 'black',
          display: (context) => {
            return context.dataset.data[context.dataIndex] >= 0.05;
          },
          font: {
            size: 11,
            weight: 450,
          },
          formatter: (value, context) => {
            const label = context.dataset.data[context.dataIndex];
            return `${value}`;
          },
        },
        label: {
          color: 'black',
          display: (context) => {
            return context.dataset.data[context.dataIndex] >= 0.05;
          },
          font: {
            size: 11,
            weight: 450,
          },
          formatter: (_, context) => {
            return context.dataset.label;
          },
          align: 'bottom',
          offset: 17,
        },
      },
    },
  },
  scales: {
    x: {
      stacked: true,
      min: 0,
      max: 1,
      position: 'top',
      title: {
        display: true,
        text: 'Normalized probability',
      },
    },

    y: {
      stacked: true,
      grid: {
        lineWidth: 0,
      },
    },
  },
});
