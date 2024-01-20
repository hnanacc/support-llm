import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React from "react";
import { IChartData } from "./chart";

interface PropType {
  chartData: IChartData;
  randomKey: number;
  name: string;
}

const BarChart = (props: PropType) => {
  const options = {
    chart: {
      type: "line",
    },
    title: {
      text: props.name,
    },
    xAxis: {
      categories: props.chartData.categories,
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: props.chartData.data,
    // [

    //     {
    //         name: 'Chart Test 1',
    //         data:
    //     }
    // ]
  };
  console.log(props);
  return (
    <div>
      <HighchartsReact options={options} highcharts={Highcharts} />
    </div>
  );
};

export default BarChart;
