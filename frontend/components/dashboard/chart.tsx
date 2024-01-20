import * as React from "react";
import BarChart from "./barchart";

export interface ChartProps {
  data: any[];
}

export interface IChartData {
  categories: Array<string>;
  data: Array<{ name: string; data: Array<number> }>;
  name: string;
  randomKey?: number;
}

export interface ChartProps {
  name: string;
}

export function ChartOne({ name }: ChartProps) {
  const [randomKey, setRandomKey] = React.useState(0);
  const setKeyRef = React.useRef<any>();
  const keyeyRef = React.useRef<any>();
  setKeyRef.current = setRandomKey;
  keyeyRef.current = randomKey;
  const [chartData, setChartData] = React.useState<{
    categories: Array<string>;
    name: string;
    data: Array<number>;
  }>({ categories: [], name: "", data: [] });
  const adxlXDataRef = React.useRef<IChartData>({
    categories: [],
    name: "",
    data: [],
  });

  const pollData = () => {
    fetch(`http://127.0.0.1:8080/api/live_data`)
      .then((response) => response.json())
      .then((data) => {
        const mqtt_data = data.mqtt_data;
        try {
          const parsedData = JSON.parse(mqtt_data);
          if (parsedData.adxlX && parsedData.adxlX["Key Values"]) {
            const categories: Array<string> = [];
            const categoryData: Array<{ name: string; data: Array<number> }> =
              [];

            Object.keys(parsedData.adxlX["Key Values"]).forEach((key) => {
              const isAlreadyInitiated = adxlXDataRef.current.data.find(
                (d) => d.name === key
              );
              // console.log(key, parsedData.adxlX['Key Values'][key]);
              if (isAlreadyInitiated) {
                categoryData.push({
                  name: key,
                  data: [
                    ...isAlreadyInitiated.data,
                    parsedData.adxlX["Key Values"][key],
                  ],
                });
              } else {
                categoryData.push({
                  name: key,
                  data: [parsedData.adxlX["Key Values"][key]],
                });
              }
              const nowDate = new Date();
              categories.push(
                nowDate.getMinutes() + ":" + nowDate.getSeconds()
              );
            });

            adxlXDataRef.current = {
              categories: categories,
              name: "adxlX",
              data: categoryData,
            };

            setKeyRef.current((key: number) => {
              return Math.random();
            });
            // console.log(adxlXDataRef.current);
          }
        } catch (e) {
          console.log(e);
        }
      });
  };

  React.useEffect(() => {
    setInterval(() => {
      pollData();
    }, 5000);
  }, []);
  return (
    <div className="App">
      <BarChart
        name="adxlX"
        randomKey={randomKey}
        chartData={adxlXDataRef.current}
      />
    </div>
  );
}

export function ChartTwo({ name }: ChartProps) {
  const [randomKey, setRandomKey] = React.useState(0);
  const setKeyRef = React.useRef<any>();
  const keyeyRef = React.useRef<any>();
  setKeyRef.current = setRandomKey;
  keyeyRef.current = randomKey;
  const [chartData, setChartData] = React.useState<{
    categories: Array<string>;
    name: string;
    data: Array<number>;
  }>({ categories: [], name: "", data: [] });
  const kionixXDataRef = React.useRef<IChartData>({
    categories: [],
    name: "",
    data: [],
  });

  const pollData = () => {
    fetch(`http://127.0.0.1:8080/api/live_data`)
      .then((response) => response.json())
      .then((data) => {
        const mqtt_data = data.mqtt_data;
        try {
          const parsedData = JSON.parse(mqtt_data);
          if (parsedData.kionixX && parsedData.kionixX["Key Values"]) {
            const categories: Array<string> = [];
            const categoryData: Array<{ name: string; data: Array<number> }> =
              [];

            Object.keys(parsedData.kionixX["Key Values"]).forEach((key) => {
              const isAlreadyInitiated = kionixXDataRef.current.data.find(
                (d) => d.name === key
              );
              // console.log(key, parsedData.adxlX['Key Values'][key]);
              if (isAlreadyInitiated) {
                categoryData.push({
                  name: key,
                  data: [
                    ...isAlreadyInitiated.data,
                    parsedData.kionixX["Key Values"][key],
                  ],
                });
              } else {
                categoryData.push({
                  name: key,
                  data: [parsedData.kionixX["Key Values"][key]],
                });
              }
              const nowDate = new Date();
              categories.push(
                nowDate.getMinutes() + ":" + nowDate.getSeconds()
              );
            });

            kionixXDataRef.current = {
              categories: categories,
              name: "kionixX",
              data: categoryData,
            };

            setKeyRef.current((key: number) => {
              return Math.random();
            });
            // console.log(adxlXDataRef.current);
          }
        } catch (e) {
          console.log(e);
        }
      });
  };

  React.useEffect(() => {
    setInterval(() => {
      pollData();
    }, 5000);
  }, []);
  return (
    <div className="App">
      <BarChart
        name="kionixX"
        randomKey={randomKey}
        chartData={kionixXDataRef.current}
      />
    </div>
  );
}

// export function Chart({ data }: ChartProps) {
//   return (
//     <div>
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           width={100}
//           height={100}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="time" />
//           <YAxis />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="value"
//             stroke="#8884d8"
//             activeDot={{ r: 8 }}
//           />
//           <Line type="monotone" dataKey="value" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
