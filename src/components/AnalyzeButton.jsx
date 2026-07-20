function AnalyzeButton({ onClick, loading }) {
    return (
        <button
            onClick={onClick}
            disabled={loading}
            className="
                bg-blue-600
                hover:bg-blue-700
                disabled:bg-gray-600
                disabled:cursor-not-allowed
                px-8
                py-3
                rounded-xl
                text-white
                font-semibold
                transition
            "
        >
            {loading ? "Analyzing..." : "Analyze Email"}
        </button>
    );
}

export default AnalyzeButton;