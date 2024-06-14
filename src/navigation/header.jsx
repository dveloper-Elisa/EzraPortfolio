import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-slate-800 text-white sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center  px-6">
                <div id="logo" className="max-w-32 flex flex-row items-center">
                    <img src="./vox_mok_up-removebg-preview.png" alt="Logo here" className="rounded-full"/>
                    <p className='font-extrabold text-[2rem] font-mono'>Mpyisi_Vox</p>
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
                <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:gap-10">
                        <a href="#home"><li>Home</li></a>
                        <a href="#project"><li>Project</li></a>
                        <a href="#animation"><li>Animations</li></a>
                        <a href="#about"><li>About</li></a>
                        <a href="#contact"><li>Contact</li></a>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
