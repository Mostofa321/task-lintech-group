import React from 'react'
import logo from "../../assets/whiteLogo.svg"

const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center p-5 2xl:container mx-auto' >
                <div className='w-2/5 hidden lg:inline-block'>
                    <img src={logo} className="w-16 md:w-32 lg:w-40" alt="" />
                </div>
                <div className='flex hidden lg:flex items-center justify-end w-3/5'>
                    <input className=" w-1/2 placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#1b2946] focus:ring-[#1b2946] focus:ring-1 sm:text-sm" placeholder="Find my offence" type="text" name="search" />
                    <a
                        className="hidden lg:inline-block  lg:mx-3 py-2 px-6 border border-white bg-[#1c2847] hover:bg-[#2c4577] text-sm text-white font-bold  transition duration-500"
                        href="#"
                    >
                        EMAIL US
                    </a>
                    <a
                        className="hidden lg:inline-block py-2 px-6 bg-[#1c2847] border border-white hover:bg-[#2c4577] text-sm text-white font-bold  transition duration-1000"
                        href="#"
                    >
                        CALL US NOW
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header