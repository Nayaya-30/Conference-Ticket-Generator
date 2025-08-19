const Ticket = ({ name, email, position, avatar }) => {
    return (
        <div className="max-w-md mx-auto bg-gradient-to-r from-orange-700 to-orange-500 rounded-xl p-1 shadow-lg">
            <div className="bg-neutral-900 rounded-lg p-6">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-neutral-100 mb-2">CONFERENCE TICKET</h2>
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent my-6"></div>
                    
                    <div className="flex justify-center mb-6">
                        {avatar ? (
                            <img 
                                src={avatar} 
                                alt="Avatar" 
                                className="w-24 h-24 rounded-full object-cover border-2 border-orange-500"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-neutral-700 flex items-center justify-center border-2 border-orange-500">
                                <span className="text-4xl text-neutral-500">?</span>
                            </div>
                        )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-neutral-100 mb-1">{name || 'Your Name'}</h3>
                    <p className="text-neutral-300 mb-1">{position || 'Position'}</p>
                    <p className="text-orange-500 mb-6">{email || 'email@example.com'}</p>
                    
                    <div className="flex justify-between items-center text-sm text-neutral-300">
                        <span>ID: CONF-2023</span>
                        <span>2023.12.15</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;