import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import DashboardChart from "../components/DashboardChart";

function Dashboard() {

    const [stats, setStats] = useState({
        total: 0,
        high: 0,
        medium: 0,
        low: 0,
    });

    useEffect(() => {

        fetch("http://localhost:8080/api/dashboard")
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error(err));

    }, []);

    return (

        <div className="min-h-screen bg-slate-950">

            <Navbar />

            <div className="max-w-6xl mx-auto py-12 px-8">

                <h1 className="text-4xl text-white font-bold mb-8">
                    📊 Dashboard
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-slate-900 rounded-xl p-6 text-center">
                        <h2 className="text-slate-400">Total Analyses</h2>
                        <p className="text-4xl font-bold text-blue-400">
                            {stats.total}
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-6 text-center">
                        <h2 className="text-slate-400">High Risk</h2>
                        <p className="text-4xl font-bold text-red-500">
                            {stats.high}
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-6 text-center">
                        <h2 className="text-slate-400">Medium Risk</h2>
                        <p className="text-4xl font-bold text-yellow-400">
                            {stats.medium}
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-6 text-center">
                        <h2 className="text-slate-400">Low Risk</h2>
                        <p className="text-4xl font-bold text-green-500">
                            {stats.low}
                        </p>
                    </div>

                </div>

            </div>
<DashboardChart stats={stats} />
        </div>

    );

}

export default Dashboard;