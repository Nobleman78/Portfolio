import React from 'react';

const Navbar = () => {
    return (
        <div className='flex item-center justify-between '>
            <h2 className='text-2xl'>Jesmin Chakma</h2>
            <div className='md:flex gap-5 text-lg hidden text-center '>
                <a href="#home" className='w-20  px-3 py-1 bg-blue-500 rounded text-white'>Home</a>
                <a href="#about" className=' w-20 rounded hover:bg-gray-500 hover:px-3 hover:py-1 hover:text-white'>About</a>
                <a href="#skills"  className='w-20 rounded hover:bg-gray-500 hover:px-3 hover:py-1 hover:text-white'>Skills</a>
                <a href="#portfolio"  className='w-25 rounded hover:bg-gray-500 hover:px-3 hover:py-1 hover:text-white'>Portfolio</a>
                <a href="#contact"  className='w-23 rounded hover:bg-gray-500 hover:px-3 hover:py-1 hover:text-white'>Contact</a>
            </div>
            <button className='text-lg bg-blue-500 px-3 py-1 text-white rounded cursor-pointer'>Hire Me</button>


        </div>
    );
};

export default Navbar;