import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function PolarChart() {
  const data = {
    labels: ["Red", "Green", "Yellow", "Blue"],
    datasets: [
      {
        label: "Performance",
        data: [11, 16, 7, 3],
        backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
      },
    ],
  };

  return <PolarArea data={data} />;
}
