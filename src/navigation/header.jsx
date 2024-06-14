import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-slate-800 text-white sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <div id="logo" className="flex items-center">
                    <img src="./vox_mok_up-removebg-preview.png" alt="Logo here" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-full"/>
                    <p className="ml-2 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono">Mpyisi_Vox</p>
                </div>

                {/* Toggle Button for Small Screens */}
                <button 
                    onClick={toggleMenu} 
                    className="block md:hidden text-white focus:outline-none"
                >
                    {isMenuOpen ? (
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>

                {/* Navigation Menu */}
                <nav className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-slate-800 md:bg-transparent`}>
                    <ul className="flex flex-col md:flex-row md:gap-10 items-center md:items-baseline">
                        <li className="p-2 md:p-0"><a href="#home">Home</a></li>
                        <li className="p-2 md:p-0"><a href="#project">Project</a></li>
                        <li className="p-2 md:p-0"><a href="#animation">Animations</a></li>
                        <li className="p-2 md:p-0"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
