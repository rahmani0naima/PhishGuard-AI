function EmailInput({ value, onChange }) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            placeholder="Paste suspicious email here..."
            className="
                w-full
                h-72
                rounded-xl
                bg-slate-800
                border
                border-slate-700
                p-5
                text-white
                resize-none
                focus:outline-none
                focus:border-blue-500
            "
        />
    );
}

export default EmailInput;