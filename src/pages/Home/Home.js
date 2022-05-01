import React from 'react'
import './Home.css'
import Typical from 'react-typical'
import myImage from './sayan.jpg'
import Navbar from '../../components/Navbar/Navbar'
import cv from './cv.pdf';
// import ParticlesBackground from './ParticlesBackground'

export default function Home() {
    return (
      <div id="home">
           <Navbar/>
           {/* <ParticlesBackground/> */}
      < section className = " home" >
        <div className = "container" >
        

     
          <div className="row"> 
            <div className="col-lg-7 col-md-6">


              <div className="social-media-icons justify-content-center d-flex">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
              </div>
              
              <div className="hello justify-content-center d-flex">
                <h3 className="justify-content-center">
                  Hello, I'M 
                </h3>
              </div>
              <div className="name justify-content-center d-flex my-1">
                <h1 className="justify-content-center text-center">
                  SAYAN DEY
                </h1>
              </div>

              <div className="typical-box justify-content-center d-flex">

            
                
                   <div className="typical mx-3">
              <h3>

             <Typical 
              steps={['Web Developer', 2000, 'IT Engineer Student', 2000, 'Film director',2000 , 'Actor',2000, 'Student',2000, ]}
              loop={Infinity}
              wrapper="x"
              />
              </h3>
              </div> 
     
              </div>  

         
              <div className="intro justify-content-center  d-flex">
                <p className=" justify-content-center  d-flex my-2">
              
               </p>
              </div>

            
              <div className="home-btn justify-content-center  d-flex my-2">
                <a href="#contact">

                  <button className="btn hire-me-btn ">Hire Me</button>
                </a>
                  <a href={cv} download={cv} class="d-flex btn hire-me-btn px-3">
                  Resume
                  {/* <button className="btn">Resume</button> */}
                  <i class="fa-solid fa-download m-2"></i>
                  </a>

              </div>
            
        
            </div>

            {/* right */}
            
            <div className="col-lg-5 col-md-6 justify-content-center">

              <div className="justify-content-center d-flex right-home">

        
               <img src={myImage} className="my-image img-fluid "/>
              </div>
              
            </div>
            </div>
        </div>
        
     

        </section>
        </div>
    )
}