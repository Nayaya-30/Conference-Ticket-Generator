const Ticket = ({ name, position, avatar, ticketNumber }) => {
    return (
        <div className="ticket max-w-md p-4">
            {/*<div className="w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent my-6"></div>*/}

            <div className="relative flex flex-col items-left justify-center gap-16">
                {avatar && (
                    <>
                        <div className="flex gap-4">
                            <img src={'./assets/images/logo-mark.svg'} alt="Logo-mark" className="w-8 mt-1" />

                            <div className={'flex flex-col'}>
                                <span className={'text-2xl'}>Coding Conf</span>
                                <span className={'text-sm'}>Jan 31, 2025 / Austin, TX</span>
                            </div>
                        </div>
                        <div className={'flex gap-4'}>
                            <img
                                src={avatar}
                                alt="Avatar"
                                className="w-16 h-16 rounded-xl object-cover border-2 border-orange-500"
                            />
                            <div className={'mt-1'}>
                                <h3 className="text-l font-bold text-neutral-100">{name || 'Your Name'}</h3>
                                <p className="text-neutral-300 mb-1">
                                    <img src={'./assets/images/icon-github.svg'} alt="Github" className="inline-block w-4 mr-2" />
                                    {position || 'Position'}
                                </p>
                            </div>
                        </div>

                        <span className={'absolute rotate-90 right-0 text-xl text-neutral-800 font-bold'}>{ticketNumber}</span>
                    </>
                )}
            </div>
        </div>
            );
};

export default Ticket;