import React from 'react'
import '../../App.css'
import arrowIcon from '../../assets/right-Arrow.svg'


const MegaMenu = ({items, banner}) => {
    return (
        <div className="p-6 mega-menu mb-16 mt-3 sm:mb-0 shadow-xl bg-[#eaf3fa]" >
            <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                <div className='w-1/2 pe-5'>
                    <div className="  mb-8">
                        <h6 className="font-bold text-md">Our main services</h6>
                    </div>

                    <div className='w-full submenu grid grid-cols-2 gap-4 pe-5' >
                        {
                            items?.map(item => (
                                <a className=" bg-white p-2 relative cursor-pointer hover:text-white  hover:transition-all hover:bg-[#0f1b33]  ease-in-out">
                                    {item}
                                    <img src={arrowIcon} className=" cursor-pointer absolute right-3 top-3 " alt="Right arrow" />
                                </a>
                            ))
                        }
                    </div>
                </div>
                
                <div className='w-1/2'>
                    <h1 className='test'>this is the test</h1>
                    <img src={banner} className=" h-full border-4 border-[#2186d1]" alt="" />
                </div>



            </div>
        </div>
    )
}

export default MegaMenu