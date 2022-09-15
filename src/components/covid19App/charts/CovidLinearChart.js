import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import '../../../styles/covid19App/CovidLinearChart.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Total Information of Last 15 days",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: false,
      ticks: {
        beginAtZero: false,
        stepSize: 150000000
      },
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      ticks: {
        beginAtZero: false,
        stepSize: 150000000
      },
      grid: {
        drawOnChartArea: false,
      },
    },
    y2: {
      type: "linear",
      display: false,
      ticks: {
        beginAtZero: false,
        stepSize: 150000000
      },
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};


function CovidLinearChart(props) {
    const labels = props.data.slice(0,15).map(({date}) => date);
  return (
    <div className="linear-container" >
      <Line
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: "Cases",
              data: props.data.map(
                ({ cases }) => cases.total.value
              ),
              borderColor: "#8DD5F2",
              backgroundColor: "#8DD5F2",
              yAxisID: "y",
            },
            {
              label: "Testing",
              data: props.data.map(
                ({ testing }) => testing.total.value
              ),
              borderColor: "#F2E6C2",
              backgroundColor: "#F2E6C2",
              yAxisID: "y1",
            },
            {
              label: "Death",
              data: props.data.map(
                ({ outcomes }) => outcomes.death.total.value
              ),
              borderColor: "#eb1d36",
              backgroundColor: "#eb1d36",
              yAxisID: "y2",
            },
          ],
        }}
      />
    </div>
  );
}

export default CovidLinearChart;