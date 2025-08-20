const Input = ({ label, type, placeholder, value = '', name, onChange, error }) => {
    return (
        <>
            <div className="relative mb-4">
                <label className="inline-block text-neutral-100 text-sm font-bold mb-2">
                    {label}
                </label>
                <input 
                    type={type} 
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full bg-neutral-700/50 text-neutral-100 font-bold py-2 px-4 rounded-lg 
                    focus:outline-none focus:ring-2 
                    ${
                        error ? 'focus:ring-red-600 border border-red-700' : 'focus:ring-orange-500'
                    }`}
                />
                {error && (
                    <p className="text-red-500 absolute bottom-2 left-0 bg-neutral-800 p-2 text-sm mt-1" role="alert">{error}</p>
                )}
            </div>
        </>
    );
};

export default Input;