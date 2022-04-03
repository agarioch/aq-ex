import React, { useEffect, useState } from 'react';
import { useTradeData } from '../../hooks/';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { COLORS } from '../../theme';

const TradesChart = ({ id }: { id: number }) => {
  const { trades, isLoading, isError } = useTradeData(id);
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({});

  useEffect(() => {
    if (trades) {
      setChartOptions({
        chart: {
          backgroundColor: 'transparent',
          style: {
            fontFamily: 'Lato, sans-serif',
          },
          reflow: true,
        },
        rangeSelector: {
          // select 1 year of trades by default (option 4)
          selected: 4,
          buttonPosition: {
            align: 'center',
          },
          y: 10,
          inputEnabled: false,
          verticalAlign: 'top',
        },
        title: {
          // empty string hides the title
          text: '',
        },
        legend: {
          enabled: true,
          align: 'center',
        },
        yAxis: [
          {
            gridLineColor: 'transparent',
            opposite: false,
            title: { text: 'Price' },
          },
          {
            gridLineColor: 'transparent',
            title: { text: 'Volume' },
          },
        ],
        xAxis: {
          crosshair: false,
        },
        series: [
          {
            name: 'Price',
            type: 'spline',
            yAxis: 0,
            data: trades.map((trade) => [trade.Timestamp, trade.Price]),
            tooltip: {
              valueDecimals: 2,
            },
            color: COLORS.blue[700],
            lineWidth: 2,
          },
          {
            name: 'Volume',
            type: 'spline',
            yAxis: 1,
            data: trades.map((trade) => [trade.Timestamp, trade.Volume]),
            tooltip: {
              valueDecimals: 0,
            },
            color: COLORS.gray[400],
            lineWidth: 1,
          },
        ],
        tooltip: {
          backgroundColor: COLORS.gray[100],
          borderColor: COLORS.gray[200],
          borderWidth: 1,
          shadow: false,
          padding: 12,
          snap: 5 / 10,
          split: false,
        },
      });
    }
  }, [trades]);
  // Out of scope: rendering loading and error components
  if (isLoading || !trades) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
      constructorType={'stockChart'}
    />
  );
};

export default TradesChart;
