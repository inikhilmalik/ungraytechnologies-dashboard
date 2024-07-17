import React from 'react';
import { Box } from "@chakra-ui/react";
import { Doughnut } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Import and register the datalabels plugin
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables, ChartDataLabels);

interface DonutChartReportProps {
    val:number
}

const DonutChartReport: React.FC<DonutChartReportProps> = ({val}) => {
    const prevData: ChartData<'doughnut'> = {
        labels: [
            // `Project complete %`,
        ],
        datasets: [{
            // label: 'My First Dataset',
            data: [val, 100-val],
            backgroundColor: [
                "rgb(11, 108, 224)",
                'lightgrey',
            ],
            hoverOffset: 2
        }]
    };

    const options: ChartOptions<'doughnut'> = {
        plugins: {
            legend: {
                display: false,
                align: "center",
                position: 'top',
            },
            datalabels: {
                color: 'black',
                formatter: () => {
                    return "";
                },
            }
        }
    };

    return (
        <Box>
            <Doughnut data={prevData} options={options} />
        </Box>
    );
};

export default DonutChartReport;
