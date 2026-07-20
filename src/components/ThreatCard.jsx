function ThreatCard({ analysis }) {

    if (!analysis) {
        return (
            <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">

                <h2 className="text-xl font-bold text-white mb-4">
                    Threat Summary
                </h2>

                <p className="text-slate-400">
                    No analysis yet.
                </p>

            </div>
        );
    }

    return (

        <div className="bg-slate-900 rounded-xl border border-slate-700 p-6">

            <h2 className="text-xl font-bold text-white mb-6">
                Threat Summary
            </h2>

            <div className="space-y-4">

                <div className="flex justify-between">
                    <span className="text-slate-400">Risk</span>
                    <span className="text-red-500 font-bold">
                        {analysis.level}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">Score</span>
                    <span className="text-white">
                        {analysis.score}%
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">URLs</span>
                    <span className="text-white">
                        {analysis.urls}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-slate-400">Threats</span>
                    <span className="text-white">
                        {analysis.threatsCount}
                    </span>
                </div>

            </div>

        </div>

    );
}

export default ThreatCard;