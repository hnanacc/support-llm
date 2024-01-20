import { Inter } from "next/font/google";
import { DashHead } from "@/components/dashboard/dashhead";
import { ChartOne, ChartTwo } from "@/components/dashboard/chart";
import { StateData } from "@/components/dashboard/state-data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const plcHealth = 70;
  const sensorHealth = 75;

  const plcOptions = [
    "CycleTime",
    "Timestamp_ms",
    "RMSLastCycle",
    "CycleCount",
  ];
  const sensorOptions = ["VibrationProcessed", "Movement"];

  return (
    <main className={`min-h-screen flex flex-col ${inter.className}`}>
      <div className="py-8">
        <DashHead></DashHead>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex">
          <div className="basis-2/5">
            <StateData name="PLC" health={plcHealth} options={plcOptions} />
          </div>
          <div className="basis-3/5 ">
            <ChartOne></ChartOne>
          </div>
        </div>
        <div className="flex-1 flex ">
          <div className="basis-2/5 ">
            <StateData
              name="Sensor"
              health={sensorHealth}
              options={sensorOptions}
            />
          </div>
          <div className="basis-3/5 ">
            <ChartTwo></ChartTwo>
          </div>
        </div>
      </div>
    </main>
  );
}
