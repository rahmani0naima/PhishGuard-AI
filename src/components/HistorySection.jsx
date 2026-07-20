function HistorySection({ history }) {

    if (!history || history.length === 0) {
        return null;
    }

    return (
        <div className="mt-12 bg-slate-900 rounded-xl border border-slate-700 p-8">

            <h2 className="text-3xl font-bold text-white mb-6">
                📜 Analysis History
            </h2>

            <div className="space-y-4">

                {history.map((item) => (

                    <div
                        key={item.id}
                        className="bg-slate-800 rounded-lg border border-slate-700 p-4"
                    >

                        <div className="flex justify-between">

                            <div>

                                <p className="text-white font-semibold">
                                    {item.level}
                                </p>

                                <p className="text-slate-400 text-sm">
                                    {item.createdAt}
                                </p>

                            </div>

                            <div className="text-right">

                                <p className="text-red-400 font-bold">
                                    {item.score}%
                                </p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );

}

export default HistorySection;