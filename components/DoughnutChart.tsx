"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
 const data = {
  datasets: [
   {
    label: 'Banks',
    data: [1240, 2400, 3650],
    backgroundColor: ['#7D3C98', '#C7B8D2', '#6E4F95']
   }
  ],
  labels: ['Bank 1', 'Bank 2', 'Bank 3']
 }

  return <Doughnut 
   data={data} 
   options={{
    cutout: '60%',
    plugins: {
     legend: {
      display: false
     }
    }
   }}
  />
}

export default DoughnutChart