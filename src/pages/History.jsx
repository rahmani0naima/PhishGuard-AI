import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function History() {

    const [history, setHistory] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/api/history")
            .then(res => res.json())
            .then(data => setHistory(data))
            .catch(err => console.error(err));

    }, []);

    return (

        <div className="min-h-screen bg-slate-950">

            <Navbar />

            <div className="max-w-6xl mx-auto py-12 px-8">

                <h1 className="text-4xl text-white font-bold mb-8">
                    📜 Analysis History
                </h1>

                <div className="bg-slate-900 rounded-xl p-6">

                    <table className="w-full text-white">

                        <thead>

                            <tr className="border-b border-slate-700">

                                <th className="text-left p-3">Date</th>
                                <th className="text-left p-3">Risk</th>
                                <th className="text-left p-3">Score</th>
                                <th className="text-left p-3">Malicious</th>
                                <th className="text-left p-3">Suspicious</th>

                            </tr>

                        </thead>

                        <tbody>

                            {history.map(item => (

                                <tr
                                    key={item.id}
                                    className="border-b border-slate-800"
                                >

                                    <td className="p-3">
                                        {new Date(item.createdAt).toLocaleString()}
                                    </td>

                                    <td className="p-3">

    <span
        className={`px-3 py-1 rounded-full text-white font-semibold ${
            item.level === "HIGH RISK"
                ? "bg-red-600"
                : item.level === "MEDIUM RISK"
                ? "bg-yellow-500"
                : "bg-green-600"
        }`}
    >
        {item.level}
    </span>

</td>

                                    <td className="p-3 text-center">
                                        {item.score}%
                                    </td>

                                    <td className="p-3 text-center">
                                        {item.malicious}
                                    </td>

                                   <td className="p-3 text-center">
                                        {item.suspicious}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default History;