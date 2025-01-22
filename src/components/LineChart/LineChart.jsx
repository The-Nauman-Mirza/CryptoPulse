import { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (historicalData && historicalData.prices) {
      const dataCopy = [
        ["Date", "Prices"],
        ...historicalData.prices.map(item => [
          new Date(item[0]).toLocaleDateString("en-US", { day: "numeric", month: "short" }),
          item[1]
        ])
      ];
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart style={{borderRadius:"10px"}}
      chartType="LineChart"
      data={data}
      width="100%"
      height="300px"
      options={{
        // legend: { position: 'bottom' },
        hAxis: {
          title: 'Date',
        },
        vAxis: {
          title: 'Prices',
        },
      }}
    />
  );
};

export default LineChart;
