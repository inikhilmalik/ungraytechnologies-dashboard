import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const LineChart: React.FC = ({ }) => {
    const data1 = [32, 51, 60, 65, 90, 100, 120];
    const data2 = [28, 38, 58, 63, 71, 82, 90];
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'web sales',
                data: data1,
                borderColor: 'rgb(11, 108, 224)',
                backgroundColor: 'rgb(11, 108, 224)',
            },
            {
                label: 'offline selling',
                data: data2,
                borderColor: 'rgba(75, 192, 192, 0.5)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            // title: {
            //     display: true,
            //     text: 'Comparison Line Chart',
            // },
        },
        scales: {
            x: {
                display: false, // This hides the x-axis
            },
        },
    };

    return <Line options={options} data={chartData} />;
};

export default LineChart;