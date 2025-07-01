import React from 'react'
import { ResponsiveLine } from '@nivo/line';

const TotalSalesLineGraph = ({ data }) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 0, max: 10 }}
            // curve="step"
            axisTop={null}
            axisRight={null}
            axisLeft={null}
            axisBottom={{
                tickSize: 0,
                tickPadding: 10,
                tickRotation: 0,
            }}
            enablePoints={false}
            enableArea={false}
            colors={['#2979FF', '#4FC3F7']}
            enableGridX={true}
            enableGridY={false}
            lineWidth={2}
            crosshairType='x'
            defs={[
                {
                    id: 'dashed-line-pattern',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#4FC3F7',
                    rotation: 0,
                    lineWidth: 2,
                    spacing: 6,
                },
            ]}
            lineStyle={(line) => {
                if (line.id === 'dashed-line') {
                    return {
                        strokeDasharray: '6 6',
                    };
                }
                return {};
            }}
            useMesh={true}
        />
    )
}

export default TotalSalesLineGraph