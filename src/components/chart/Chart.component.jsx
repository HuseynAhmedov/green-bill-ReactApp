import { Component } from "react";
import './Chart.style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

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
    plugins: {
      legend: {
        position: 'bottom',
      }
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Convertion rate',
        borderColor: '#39603D',
        backgroundColor: '#39603D',
      }
    ],
  };

class Chart extends Component
{
    constructor(){
        super();
    }
    render(){
      
        return (
            <div className="container chart-container">
                <div className="d-flex chart-information-container">
                    <div className="col chart-title-container">
                        <p className="chart-title">RUB to USD Chart</p>
                    </div>
                    <div className="col chart-rate-container">
                        <span className="chart-rate">1 RUB = 0.0154741 USD</span>
                        <span className="chart-date">May 18, 2022, 17:37 UTC</span>
                    </div>
                </div>
                <Line options={options} data={data} />
            </div>
        );
    }
}
export default Chart;