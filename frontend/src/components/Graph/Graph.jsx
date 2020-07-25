import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import api from '../../services/api';
import './Graph.scss';

export default function Graph() {
  const [participants, setParticipants] = useState({});  
  
  useEffect(() => {
    api.get('/participant').then(
      response => {
        setParticipants(response.data);
      });
  }, []);
  
  console.log()
    const series = Object.values(participants).map(participant => participant.participation);
    const labels = Object.values(participants).map(participant => participant.firstName + " " + participant.lastName);
    const options = {
        chart: {
          width: '100%',
          height: 'auto'
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
            pie: {
              donut: {
                size: '50%'
              }
            }
        },
        legend:{         
            fontWeight: 700,
            height: 400,
            labels: {
                useSeriesColors: true,
            },
            markers:{
                width: 16,
                height: 16,
                radius: 2,
                offsetY: 3,             
            },
            itemMargin: {   
                vertical: 8
            },
        },
          labels
      }

    return (
        <div className="donut">
          <Chart options={options} series={series} type="donut" width="380" />
        </div>
      );
}
