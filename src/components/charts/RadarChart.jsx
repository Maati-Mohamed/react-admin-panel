import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function RadarChart() {
  const data = {
    labels: ["Strength", "Speed", "Endurance", "Agility", "Flexibility"],
    datasets: [
      {
        label: "Person A",
        data: [65, 59, 90, 81, 56],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  return <Radar data={data} />;
}
