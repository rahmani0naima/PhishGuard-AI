function ClearButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="
                bg-slate-700
                hover:bg-slate-600
                px-8
                py-3
                rounded-xl
                text-white
                font-semibold
                transition
            "
        >
            Clear
        </button>
    );
}

export default ClearButton;