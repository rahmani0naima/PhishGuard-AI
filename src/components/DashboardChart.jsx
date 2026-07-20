import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function DashboardChart({ stats }) {

    const data = {

        labels: [
            "High Risk",
            "Medium Risk",
            "Low Risk"
        ],

        datasets: [
            {
                data: [
                    stats.high,
                    stats.medium,
                    stats.low
                ],
                backgroundColor: [
                    "#ef4444",
                    "#facc15",
                    "#22c55e"
                ]
            }
        ]

    };

    return (

        <div className="bg-slate-900 rounded-xl p-6 mt-10">

            <h2 className="text-2xl text-white font-bold mb-6">
                Risk Distribution
            </h2>

            <div className="max-w-md mx-auto">
                <Pie data={data} />
            </div>

        </div>

    );

}

export default DashboardChart;