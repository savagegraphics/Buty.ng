import React from 'react'
import Link from 'next/link'

type Props = {}

const Services = (props: Props) => {
  return (
<div className="bg-[#F9F9F9]  max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-2xl lg:text-4xl text-[#303F9F] lg:mb-24 my-14 font-semibold font-sans text-center">Our Services</h1>
    <div className="grid md:grid-cols-2 justify-center items-center gap-6 lg:gap-12">
      <div className="space-y-4 lg:space-y-4 ">
        <div className="flex">
        <div className="flex justify-around  ml-5 sm:ml-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#3342A0"/>
</svg>

            <h3 className="ml-4 text-base sm:text-lg font-[16px] text-grat-800">
              Interior Design
            </h3>
          </div>
        </div>

        <div className="flex">
        <div className="flex justify-around  ml-5 sm:ml-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#3342A0"/>
</svg>

            <h3 className="ml-4 text-base sm:text-lg font-[16px] text-grat-800">
              Demolition sevices
            </h3>
          </div>
        </div>

        <div className="flex">
        <div className="flex justify-around  ml-5 sm:ml-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#3342A0"/>
</svg>

            <h3 className="ml-4 text-base sm:text-lg font-[16px] text-grat-800">
             Architectural Design
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-4 lg:space-y-4">
        <div className="flex">
        <div className="flex justify-around  ml-5 sm:ml-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#3342A0"/>
</svg>

            <h3 className="ml-4 text-base sm:text-lg font-[16px] text-grat-800">
               Project Management
            </h3>
          </div>
        </div>

        <div className="flex">
        <div className="flex justify-around  ml-5 sm:ml-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#3342A0"/>
</svg>

            <h3 className="ml-4 text-base sm:text-lg font-[16px] text-grat-800">
            Renovations and Remodelling
            </h3>
          </div>
        </div>

        <div className="flex">
          <div className="flex justify-around  ml-5 sm:ml-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#3342A0"/>
</svg>

            <h3 className="ml-4 text-base sm:text-lg font-[16px] text-grat-800">
            Landscaping and Hardscaping
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Services