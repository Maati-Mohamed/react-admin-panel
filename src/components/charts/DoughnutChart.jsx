import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    labels: ["Desktop", "Tablet", "Mobile"],
    datasets: [
      {
        label: "Traffic Source",
        data: [60, 25, 15],
        backgroundColor: ["#4BC0C0", "#FF9F40", "#FF6384"],
      },
    ],
  };

  return <Doughnut data={data} />;
}
