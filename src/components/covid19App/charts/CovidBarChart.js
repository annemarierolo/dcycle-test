import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import '../../../styles/covid19App/CovidBarChart.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Seven Day Change Percent",
    },
  },
};

function CovidBarCharts(props) {
  const labels = props.data.slice(0, 1).map(({ date }) => date);
  return (
    <div className="bar-container" >
      <Bar
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: "Cases",
              data: props.data
                .slice(0, 1)
                .map(
                  ({ cases }) => cases.total.calculated.seven_day_change_percent
                ),
              backgroundColor: "#8DD5F2",
            },
            {
              label: "Testing",
              data: props.data
                .slice(0, 1)
                .map(
                  ({ testing }) =>
                    testing.total.calculated.seven_day_change_percent
                ),
              backgroundColor: "#F2E6C2",
            },
            {
              label: "Death",
              data: props.data
                .slice(0, 1)
                .map(
                  ({ outcomes }) =>
                    outcomes.death.total.calculated.seven_day_change_percent
                ),
              backgroundColor: "#eb1d36",
            },
          ],
        }}
      />
    </div>
  );
}

export default CovidBarCharts;
