import React from 'react';
import './Skills.css'

export default function Skills() {
  return <div className="skills">
      <div class="container mt-5">
    <div class="row mt-3">
        <div class="col-md-6 col-lg-6   ">
            <h3 class="progress-title">HTML5</h3>
            <div class="progress orange">
                <div class="progress-bar" id="html">
                   
                </div>
            </div>
            <h3 class="progress-title">CSS3</h3>
            <div class="progress blue">
                <div class="progress-bar" id="css" >
                    {/* <div class="progress-value">90%</div> */}
                </div>
            </div>

            <h3 class="progress-title">JAVASCRIPT</h3>
            <div class="progress yellow">
                <div class="progress-bar" id="javascript" >
                    {/* <div class="progress-value">90%</div> */}
                </div>
            </div>
        </div>
        <div class="col-md-6 col-lg-6 ">
            
        <h3 class="progress-title">REACT JS</h3>
            <div class="progress purple">
                <div class="progress-bar" id="react" >
                    {/* <div class="progress-value">90%</div> */}
                </div>
            </div>
            
            <h3 class="progress-title">C LANGUAGE</h3>
            <div class="progress green">
                <div class="progress-bar" id="c" >
                    {/* <div class="progress-value">60%</div> */}
                </div>
            </div>
            

            <h3 class="progress-title">BOOTSTRAP</h3>
            <div class="progress brown">
                <div class="progress-bar" id="bootstrap" >
                    {/* <div class="progress-value">90%</div> */}
                </div>
            </div>
        </div>
    </div>
</div>
  </div>;
}
