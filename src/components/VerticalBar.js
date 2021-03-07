import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['March 1', 'March 2', 'March 3', 'March 4', 'March 5', 'March 6', 'March 7'],
  datasets: [
    {
      data: [6, 10, 12, 4, 7, 9, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const options = {
    maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
      display: false
  }
}

const VerticalBar = () => (
  <>
    <div className='header' style={{ padding: 30 }}>
      <h1 className='title' style={{fontWeight: 'bold'}}>7 Day Progress</h1>
      <div className='links'>
          <Bar data={data} options={options} width='50 ' height='500'/>
      </div>
    </div>
  </>
)

export default VerticalBar