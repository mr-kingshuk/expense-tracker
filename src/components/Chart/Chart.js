import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value); 

    const totalMaximum = Math.max(...dataPointsValues);

    // outputting list of content dynamically using map() function and setting a key value
    //key props helps react render items efficently
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => (
            <ChartBar 
            key = {dataPoint.label}
            value={dataPoint.value} 
            maxValue={totalMaximum} 
            label={dataPoint.label} />))}
        </div>
    );
};

export default Chart;