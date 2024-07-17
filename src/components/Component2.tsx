import React from 'react';
import { Box } from "@chakra-ui/react";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

// Register the necessary components for the Bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ComparisonBarGraphProps {}

const Component2: React.FC<ComparisonBarGraphProps> = () => {
  const data: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'This year',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Last year',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comparison Bar Graph',
      },
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  };

  return (
    <Box>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default Component2;
