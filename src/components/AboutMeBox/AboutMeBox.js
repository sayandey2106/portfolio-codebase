import React from 'react'
import './AboutMeBox.css'
import myImage from './sayan.jpg'
import myImage2 from './_DSC0112.jpg'

export default function AboutMeBox() {
    return (
        <div>
            <div className="container box my-6">
                <div className="row">

                    <div className="col-lg-6 col-md-12 col-sm-12 box-left justfied-content-end d-flex">
                        <img src={myImage2} className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 box-right">
                        <h5>
                        My name is Sayan Dey, I’m 20 years old and I am persuing B.Tech from B.P Poddar Institute Of Management And Technology.I am learning a lot of theory and practical in subjects like Computer Architechture, C language, Data structure and algorithm and more.
                        
                        I am detail-oriented and hard working. I have also a creative bent of mind . I am versatile ,focuesd and felxible. 

                        Now, I am mainly a frontend developer, C programmer and also content creator. </h5>
                      

                    </div>

                </div>

            </div>


        </div>
    )
}

