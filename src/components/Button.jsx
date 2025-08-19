const Button = ({ children, onClick, disabled = false, type = "button" }) => {
    return (
        <>
            <button 
                type={type}
                onClick={onClick} 
                disabled={disabled}
                className={`w-full font-bold py-3 px-4 rounded-lg transition duration-300 ${
                    disabled 
                        ? 'bg-neutral-500 text-neutral-300 cursor-not-allowed' 
                        : 'bg-orange-500 hover:bg-orange-700 text-neutral-900 hover:text-white'
                }`}
                aria-disabled={disabled}
            >
                {children}
            </button>
        </>
    );
};

export default Button;