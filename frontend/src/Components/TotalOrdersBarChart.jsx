import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const TotalOrdersBarChart = ({ data }) => {
    const key = ["value", "max"]
    return (
        <ResponsiveBar
            data={data}
            keys={key}

            indexBy={'id'}

            padding={0.7}
            layout='vertical'

            colors={({ id }) => (  // Custom color function for bars
                id === 'value' ? '#3b82f6' : '#93c5fd')}


            enableGridX={false}
            enableGridY={false}

            axisBottom={null}      // Remove bottom X-axis
            axisLeft={null}
        // borderRadius={4}       // Round the corners of the bars slightly



        // labelSkipHeight={999}
        />
    )
}

export default TotalOrdersBarChart