import React from 'react'
import About from './About'
import Event from './Event'
import CTA_section from './CTA_section'
import Endpage from './Endpage'

function Main() {
  return (
    <>
    <div class="main">
        <button class="view-menu">VIEW MENU</button> 
    </div>
    <About/>
    <Event/>
    <CTA_section/>
    <Endpage/>
    </>
  )
}

export default Main