import React from 'react'
import HeroImage from '../assets/Story.gif'
function About() {
  return (
    <section>
        <div class="About-us">
            <div class="content">
                <div class="discover">
                    <h1>DISCOVER OUR STORY</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                </div>
                <div class="photo-gallery">
                    <div>
                        <img src={HeroImage} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About