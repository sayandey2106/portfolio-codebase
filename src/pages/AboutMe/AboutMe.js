import React from 'react'
import AboutMeBox from '../../components/AboutMeBox/AboutMeBox'
import './AboutMe.css'
export default function AboutMe() {
    return (
        <div className="about-me"id="aboutme">
            <div className="justify-content-center container d-flex pt-5">
            <h2 className="justify-content-center align-items-center">About ME</h2>

            </div>
            <AboutMeBox/>
        </div>
    )
}
