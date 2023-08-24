'use client'

import React, { useState } from 'react';
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="">
            <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="flex items-center justify-between">
                    <Link href="#">
                    <h1 className='text-4xl text-white font-semibold tracking-tight'>Buty.</h1>
                    </Link>
                    <div className="flex lg:hidden">
                        <button onClick={toggleMenu} type="button" className="text-gray-200 hover:text-gray-300  focus:outline-none focus:t0ext-gray-300" aria-label="toggle menu">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div className={`lg:flex lg-mr-4  ${isOpen ? 'block' : 'hidden'} absolute inset-x-0 z-20 rounded-2xl w-full px-6 py-4 transition-all duration-300 ease-in-out bg-indigo-500 shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto`}>
                    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
                        <Link className="text-[1rem] font-normal text-white hover:text-gray-300" href="#">Home</Link>
                        <Link className="text-[1rem] font-normal text-white hover:text-gray-300" href="#">Service</Link>
                        <Link className="text-[1rem] font-normal text-white hover:text-gray-300" href="#">Company</Link>
                        <Link className="text-[1rem] font-normal text-white hover:text-gray-300" href="#">News</Link>
                        <Link className="text-[1rem] font-normal text-white hover:text-gray-300" href="#">Contact</Link>
                    </div>
                </div>
            </nav>

            <div className="container px-6 py-16 mx-auto text-center">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-3xl font-semibold text-white lg:text-5xl">Building Your Dream Property into Reality</h1>
                    <p className="mt-6 text-white font-normal lg:text-xl">From Concept to Completion, we are your trusted construction partner every step of the way.</p>
                    <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-[#FF7D05] rounded-lg hover:bg-[#FF7D05] lg:mx-0 lg:w-auto focus:outline-none">
                       Get Started
                    </button>
                </div>

                <div className="flex justify-center mt-10">
                    <img className="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                            </div>
        </section>
    );
}

export default Navbar;
