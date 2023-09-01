import React, { useState } from 'react';
import Logo from '../../assets/whiteLogo.svg'
import subBanner from '../../assets/banner-02.jpg'
import { mainMenuItems, megaMenuItems } from '../../data/Data'
import MegaMenu from './MegaMenu';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleBurgerClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCloseClick = () => {
        setMenuOpen(false);
    };

    return (
        <div className=' md:px-auto'>
            <nav className="2xl:container  md:mx-auto relative px-4 py-4 flex justify-between items-center ">
                <img className="w-16 md:w-32 lg:hidden" src={Logo} alt="" />
                <div className="lg:hidden flex">
                    <input className="  placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#1b2946] focus:ring-[#1b2946] focus:ring-1 sm:text-sm" placeholder="Find my offence" type="text" name="search" />
                    <button
                        className="navbar-burger flex items-center text-white p-3"
                        onClick={handleBurgerClick}
                    >
                        {/* Burger SVG */}
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul
                    className={`${menuOpen ? '' : 'hidden'
                        } lg:bg-white absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:justify-center lg:w-full `}
                    role="group"
                >
                    {/* Menu Items */}
                    {
                        mainMenuItems?.map(item => (
                            <li className='hoverable p-3 hover:bg-[#eaf3fa] hover:transition-all duration-500 ease-in-out'>
                                <a className="text-sm  py-5 px-2 " href="#">
                                    {item}
                                </a>
                                <MegaMenu items={megaMenuItems} banner={subBanner} />
                            </li>
                        ))
                    }

                </ul>

                {/* Small Screen Menu */}
                <div
                    className={`navbar-menu ${menuOpen ? '' : 'hidden'
                        } relative z-50 lg:hidden`}
                >
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />

                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                        <button className="navbar-close" onClick={handleCloseClick}>
                            <svg
                                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        {/* Mobile Menu Content */}
                        <ul>
                            <li className="mb-1" onClick={() => handleCloseClick()}>
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                            </li>
                            <li className="mb-1" onClick={() => handleCloseClick()}>
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
                            </li>
                            <li className="mb-1" onClick={() => handleCloseClick()}>
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
                            </li>
                            <li className="mb-1" onClick={() => handleCloseClick()}>
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
                            </li>
                            <li className="mb-1" onClick={() => handleCloseClick()}>
                                <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
