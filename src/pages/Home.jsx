import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import EmailInput from "../components/EmailInput";
import AnalyzeButton from "../components/AnalyzeButton";
import ClearButton from "../components/ClearButton";
import ThreatCard from "../components/ThreatCard";
import EmailStats from "../components/EmailStats";
import ResultsSection from "../components/ResultsSection";
import Footer from "../components/Footer";
import VirusTotalCard from "../components/VirusTotalCard";
import HistorySection from "../components/HistorySection";
import { exportAnalysisPDF } from "../utils/pdfGenerator";
function Home() {

    const [email, setEmail] = useState("");
const [analysis, setAnalysis] = useState(null);
const [history, setHistory] = useState([]);
const [loading, setLoading] = useState(false);

const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    urls: 0,
});

    const handleClear = () => {
        setEmail("");
        setAnalysis(null);

        setStats({
            words: 0,
            characters: 0,
            urls: 0,
        });
    };

    const handleAnalyze = async () => {

        if (!email.trim()) {
            alert("Please paste an email first.");
            return;
        }

        setLoading(true);

        try {

            const response = await fetch("http://localhost:8080/api/analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                }),
            });

            const data = await response.json();

            setAnalysis(data);

        } catch (error) {

            console.error(error);
            alert("Unable to connect to Spring Boot.");

        } finally {

            setLoading(false);

        }

    };
    useEffect(() => {

    fetch("http://localhost:8080/api/history")
        .then(res => res.json())
        .then(data => setHistory(data))
        .catch(err => console.error(err));

}, []);
const handleExportPDF = () => {

    if (!analysis) {
        alert("Please analyze an email first.");
        return;
    }

    exportAnalysisPDF({
        ...analysis,
        stats: stats,
        email: email
    });

};

    return (

        <div className="min-h-screen bg-slate-950">

            <Navbar />

            <div className="max-w-5xl mx-auto py-16 px-8">

                <h1 className="text-5xl text-white font-bold mb-4">
                    Analyze Emails
                </h1>

                <p className="text-slate-400 mb-10">
                    Detect phishing attempts using intelligent security analysis.
                </p>

                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2">

                        <EmailInput
                            value={email}
                            onChange={(e) => {

                                const value = e.target.value;

                                setEmail(value);

                                setStats({
                                    characters: value.length,

                                    words:
                                        value.trim() === ""
                                            ? 0
                                            : value.trim().split(/\s+/).length,

                                    urls:
                                        (value.match(/https?:\/\/\S+/g) || []).length,
                                });

                            }}
                        />

                    </div>

                    <ThreatCard analysis={analysis} />

                </div>

                <EmailStats stats={stats} />

                <div className="mt-8 flex justify-center gap-4">

                    <AnalyzeButton
                        onClick={handleAnalyze}
                        loading={loading}
                    />

                    <ClearButton
                        onClick={handleClear}
                    />

                </div>

                {loading && (

                    <div className="mt-8 text-center text-blue-400 font-semibold">
                        🔍 Analyzing email...
                    </div>

                )}

                <ResultsSection analysis={analysis} />
                <VirusTotalCard analysis={analysis}/>
                {analysis && (

    <div className="mt-8 flex justify-center">

        <button
            onClick={handleExportPDF}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
            📄 Export PDF Report
        </button>

    </div>

)}

            </div>

            <Footer />

        </div>

    );

}

export default Home;