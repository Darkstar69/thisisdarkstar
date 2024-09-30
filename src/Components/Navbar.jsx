import React from 'react';
import DemoIcon from "./assets/Dario-Arnaez-Genesis-3G-User-Files.256.png";

const Navbar = () => {
    return (
        <div className='p-6 flex fixed top-0 left-0 right-0 bg-black'>
            <div className='h-10 w-10 rounded-full bg-blue-900'>
                <img src={DemoIcon} alt="" />
            </div>
            <div className='bg-black w-full'>
                <h1 className='text-center text-gray-400 font-semibold text-xl '>Console</h1>
            </div>
        </div>
    )
}

export default Navbar
