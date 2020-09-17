import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { Bar } from 'react-chartjs-2';

BarChart.propTypes = {
    chartDataset: PropTypes.object.isRequired,
    chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    chartMaxValue: PropTypes.number.isRequired,
    barBackgroundColor: PropTypes.string,
    barThickness: PropTypes.number,
    maintainAspectRatio: PropTypes.bool,
    displayLegend: PropTypes.bool,
    displayGridLines: PropTypes.bool,
    xAxesFontSize: PropTypes.number,
    yAxesFontSize: PropTypes.number,
    yAxisTicksCallback: PropTypes.func,
    defaultTicksStepSize: PropTypes.number,
    defaultTicksMaxValue: PropTypes.number,
};

export default function BarChart({
    chartDataset,
    chartLabels,
    chartMaxValue,
    barBackgroundColor = 'lightgrey',
    barThickness = 8,
    maintainAspectRatio = false,
    displayLegend = false,
    displayGridLines = false,
    xAxesFontSize = 10,
    yAxesFontSize = 10,
    yAxisTicksCallback = (v) => v,
    defaultTicksStepSize = 5000,
    defaultTicksMaxValue = 20000,
    ...props
}) {
    const data = {
        labels: chartLabels,
        datasets: [
            chartDataset,
            // A second dataset is needed to display those grey bars as background. The values are the difference between the maximum and the real value
            {
                label: 'greyBars',
                barThickness,
                backgroundColor: barBackgroundColor,
                data: chartDataset.data.map((val) => chartMaxValue - val),
            },
        ],
    };

    const options = {
        // Disable maintain aspect ratio makes the chart take into consideration the container's height/width
        maintainAspectRatio,
        legend: {
            // Enable/disable the box located at the top that displays the name and color of each dataset
            display: displayLegend,
        },
        tooltips: {
            // Enable tooltip just for the real values dataset, and not for the grey bars
            filter: function (tooltipItem) {
                return tooltipItem.datasetIndex === 0;
            },
        },
        scales: {
            xAxes: [
                {
                    // Stacked is needed to display the grey bars
                    stacked: true,
                    gridLines: {
                        display: displayGridLines,
                    },
                    ticks: {
                        fontSize: xAxesFontSize,
                    },
                },
            ],
            yAxes: [
                {
                    // Stacked is needed to display the grey bars
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        // Ticks for the Y axis (the actual values of the chart) are calculated dinamically based on the chartMaxValue
                        stepSize:
                            chartMaxValue > 0
                                ? chartMaxValue / 4
                                : defaultTicksStepSize,
                        max:
                            chartMaxValue > 0
                                ? chartMaxValue
                                : defaultTicksMaxValue,
                        // The callback function allows to change the display ticks values
                        callback: yAxisTicksCallback,
                        fontSize: yAxesFontSize,
                    },
                    gridLines: {
                        display: displayGridLines,
                    },
                },
            ],
        },
    };
    return (
        // Height/width properties must be added to an outer container, and not to the chart component itself
        <Box {...props}>
            <Bar data={data} options={options} />
        </Box>
    );
}
