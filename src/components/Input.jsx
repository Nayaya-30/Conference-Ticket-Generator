const Input = ({ label, type, placeholder, value = '', onChange, error }) => {
    return (
        <>
            <div className="mb-4">
                <label className="inline-block text-neutral-100 text-sm font-bold mb-2">
                    {label}
                </label>
                <input 
                    type={type} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`w-full bg-neutral-700 text-neutral-100 font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 ${
                        error ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-orange-500'
                    }`} 
                />
                {error && (
                    <p className="text-red-500 text-sm mt-1" role="alert">{error}</p>
                )}
            </div>
        </>
    );
};

export default Input;