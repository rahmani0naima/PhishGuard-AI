import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="bg-slate-900 border-b border-slate-700 px-8 py-4">

            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <div className="flex items-center gap-3">

                    <span className="text-3xl">🛡️</span>

                    <div>

                        <h1 className="text-xl font-bold text-white">
                            PhishGuard 
                        </h1>

                        <p className="text-sm text-slate-400">
                            Intelligent Phishing Analyzer
                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-6 text-white font-medium">

                  <Link
    to="/"
    className="hover:text-blue-400 transition"
>
    Analyze
</Link>

<Link
    to="/history"
    className="hover:text-blue-400 transition"
>
    History
</Link>

<Link
    to="/dashboard"
    className="hover:text-blue-400 transition"
>
    Dashboard
</Link>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;