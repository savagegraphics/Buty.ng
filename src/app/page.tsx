import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Footer from './components/Footer'
import Gallery from './components/Gallery'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Services/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default page