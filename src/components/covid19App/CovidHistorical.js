import React, { useEffect, useState } from "react";
import CovidHistoricalService from "../../services/covid";
import CovidBarCharts from "./charts/CovidBarChart";
import CovidLinearChart from "./charts/CovidLinearChart";
import CircularProgress from "@mui/material/CircularProgress";
import '../../styles/covid19App/CovidHistorical.css';
  

function CovidHistorical() {
  const [totalData, setTotalData] = useState({});

  useEffect(() => {
    getCovidData().then((totalData) => setTotalData(totalData));
  }, []);

  async function getCovidData() {
    const data = await CovidHistoricalService.getCovidHistorical();
    return data;
  }

  return (
    <div>
      {totalData?.data?.length > 0 ? (
        <div className="historical">
          <h1>COVID-19 Statistics</h1>
          <div className="charts">
            <CovidLinearChart data={totalData.data}/>
            <CovidBarCharts data={totalData.data} />
          </div>
        </div>
      ) : (
       <div className="loading"><CircularProgress color="inherit" /></div>
      )}
    </div>
  );
}

export default CovidHistorical;
