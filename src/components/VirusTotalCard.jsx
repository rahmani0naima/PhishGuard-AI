function VirusTotalCard({ analysis }) {

    if (!analysis) return null;

    return (

        <div className="bg-slate-900 rounded-xl p-6 mt-6">

            <h2 className="text-xl font-bold text-white mb-4">

                VirusTotal Scan

            </h2>

            <div className="space-y-2">

                <p className="text-red-400">
                    Malicious: {analysis.malicious}
                </p>

                <p className="text-yellow-400">
                    Suspicious: {analysis.suspicious}
                </p>

                <p className="text-green-400">
                    Harmless: {analysis.harmless}
                </p>

            </div>

        </div>

    );

}

export default VirusTotalCard;