const Button = ({ text, onClick}) => {
    return (
        <>
            <button onClick={onClick} className="bg-orange-500 hover:bg-orange-700 text-neutral-900 font-bold py-2 px-4 rounded">{text}</button>
        </>
    );
};
export default Button;