function ResultsSection({ analysis }) {

    if (!analysis) return null;

    return (
        <div className="mt-12 bg-slate-900 rounded-xl border border-slate-700 p-8">

            <h2 className="text-3xl font-bold text-white mb-6">
                📊 Analysis Result
            </h2>

            {/* Score */}
          <div>

    <p className="text-slate-400 mb-2">
        Threat Score
    </p>

    <h1
    className={`text-5xl font-bold ${
        analysis.level === "HIGH RISK"
            ? "text-red-500"
            : analysis.level === "MEDIUM RISK"
            ? "text-yellow-400"
            : "text-green-500"
    }`}
>
    {analysis.score}%
</h1>

    <span
        className={`inline-block mt-3 px-4 py-2 rounded-full font-semibold text-white ${
            analysis.level === "HIGH RISK"
                ? "bg-red-600"
                : analysis.level === "MEDIUM RISK"
                ? "bg-yellow-500"
                : "bg-green-600"
        }`}
    >
        {analysis.level}
    </span>

</div>

            {/* Progress Bar */}
            <div className="mt-6">

                <div className="w-full bg-slate-700 rounded-full h-4">

                   <div
    className={`h-4 rounded-full transition-all duration-700 ${
        analysis.level === "HIGH RISK"
            ? "bg-red-500"
            : analysis.level === "MEDIUM RISK"
            ? "bg-yellow-500"
            : "bg-green-500"
    }`}
    style={{ width: `${analysis.score}%` }}
></div>

                </div>

            </div>

            {/* Threat List */}
            <div className="mt-8">

                <h3 className="text-white font-semibold mb-3">
                    🚨 Detected Issues
                </h3>

                <ul className="space-y-3">

                    {analysis.threats.map((item, index) => (

                        <li
                            key={index}
                            className="bg-slate-800 border border-red-600 rounded-lg p-3"
                        >
                            ⚠ {item}
                        </li>

                    ))}

                </ul>

            </div>

            {/* Recommendation */}
            <div className="mt-8 bg-slate-800 rounded-lg p-5">

                <h3 className="text-lg font-bold text-blue-400 mb-2">
                    💡 Recommendation
                </h3>

                <p className="text-slate-300">
                    Do not click any links or download any attachments.
                    Verify the sender before responding.
                </p>

            </div>
            

        </div>
    );
}

export default ResultsSection;