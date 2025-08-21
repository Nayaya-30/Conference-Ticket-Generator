const Button = ({ children, onClick, disabled = false, type = "button" }) => {
    return (
        <>
            <button 
                type={type}
                onClick={onClick} 
                disabled={disabled}
                className={`w-full font-bold py-2 px-4 rounded-lg transition duration-300 ${
                    disabled 
                        ? 'bg-neutral-500 text-neutral-300 cursor-not-allowed' 
                        : 'bg-orange-700 hover:bg-orange-500 text-neutral-900 active:border-r-4 active:border-neutral-200'
                }`}
                aria-disabled={disabled}
            >
                {children}
            </button>
        </>
    );
};

export default Button;