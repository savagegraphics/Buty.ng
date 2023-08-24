import React from 'react'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
          <div className="bg-[#F9F9F9] mb-12">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
              <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                  <div>
                    <p className="font-medium tracking-wide text-[#303F9F]">
                    Quick Links
                    </p>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <Link
                          href="/"
                          className="text-[#303F9F] transition-colors duration-300 hover:text-deep-purple-accent-200"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="text-[#303F9F] transition-colors duration-300 hover:text-deep-purple-accent-200"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="text-[#303F9F] transition-colors duration-300 hover:text-deep-purple-accent-200"
                        >
                         Calendar
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="text-[#303F9F] transition-colors duration-300 hover:text-deep-purple-accent-200"
                        >
                        Terms and Conditions
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium tracking-wide text-[#303F9F]">Office Address</p>
                    <ul className="mt-2 space-y-2">
                    <li>
                        <Link
                          href="/"
                          className="text-[#303F9F] transition-colors duration-300 hover:text-deep-purple-accent-200"
                        >
                         3, Birell avenue, Sabo
                       Yaba, Lagos state.
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium tracking-wide text-[#303F9F]">Email Address</p>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <Link
                          href="/"
                          className="text-[#303F9F] transition-colors duration-300 hover:text-deep-purple-accent-200"
                        >
                      buty.ng@gmail.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="md:max-w-md mt-2 lg:ml-24 lg:col-span-2">
                <p className="m-4 text-sm text-[#303F9F]">
                  Social Media
                  </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0 mb-6">
                  <Link
                    href="/"
                    className="text-[#303F9F] transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    className="text-[#303F9F] transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                      <circle cx="15" cy="15" r="4" />
                      <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                    </svg>
                  </Link>
                  <Link
                    href="/"
                    className="text-[#303F9F] transition-colors duration-300 hover:text-teal-accent-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </Link>
                </div>
                <span className="text-base mt-8 font-medium tracking-wide text-[#303F9F]">
                    Subscribe to our Newsletter
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-between pt-5 pb-10 border-t border-[#303F9F] sm:flex-row">
                  <form className="flex flex-col mt-4 md:flex-row">
                  
                  </form>
                  <div>
                  <form className="flex flex-col mt-4 md:flex-row lg:mb-4">
                  <input
                      placeholder="Email Address"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-3 transition text-lg font-medium tracking-tight duration-200 bg-white border border-[#303F9F] rounded shadow-sm appearance-none md:mr-2 md:mb-0 placeholder-orange"
                    />
                    
                      <button   type="submit" className="inline-flex items-center justify-center h-12 tracking-wide px-8 py-3 font-semibold rounded bg-[#303F9F] text-gray-100">
                      Subscribe
                    </button>
                  </form>
                  <p className="text-sm text-[#303F9F] mt-4">
                  © Copyright 2020 Lorem Inc. All rights reserved.
                </p></div>
              </div>
            </div>
          </div>
  )
}

export default Footer