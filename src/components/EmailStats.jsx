function EmailStats({ stats }) {
    return (
        <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-6 mt-8">

            <h2 className="text-xl text-white font-bold mb-6">
                📊 Email Statistics
            </h2>

            <div className="grid grid-cols-3 gap-8 text-center">

                <div className="bg-slate-800 rounded-lg p-5">
                    <p className="text-slate-400 text-sm mb-2">
                        📝 Words
                    </p>

                    <p className="text-4xl text-white font-bold">
                        {stats.words}
                    </p>
                </div>

                <div className="bg-slate-800 rounded-lg p-5">
                    <p className="text-slate-400 text-sm mb-2">
                        🔠 Characters
                    </p>

                    <p className="text-4xl text-white font-bold">
                        {stats.characters}
                    </p>
                </div>

                <div className="bg-slate-800 rounded-lg p-5">
                    <p className="text-slate-400 text-sm mb-2">
                        🔗 URLs
                    </p>

                    <p className="text-4xl text-white font-bold">
                        {stats.urls}
                    </p>
                </div>

            </div>

        </div>
    );
}

export default EmailStats;