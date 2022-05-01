import React,{useState} from 'react';
// import Hobbies from '../../components/Hobbies/Hobbies';
import Skills from '../../components/Skills/Skills';
import Timeline from '../../components/Timeline/Timeline';
import Hobbies from '../../components/Hobbies/Hobbies';
import './Resume.css';


export default function Resume() {
  const [toggleState,setToggleState] = useState(1);
  
    const toggleTab = (index) =>{
      setToggleState(index);
    }
  return <div className="resume" id="skills">
  
  <div>



      <div className="container justify-content-center text-center">
          <h2>
              My Skills
          </h2>
      </div>


       {/* <ul class="nav nav-pills justify-content-center my-5">
              <li class="nav-item button-39">
                <a class= {toggleState===1? "tab active-tab" : "tabs"} onClick={() =>toggleTab(1)}>Skills</a>
              </li>
              <li class="nav-item button-39">
                <a class={toggleState===2? "tab active-tab" : "tabs"} onClick={() =>toggleTab(2)}>Timeline</a>
              </li>
              <li class="nav-item button-39">
                <a class={toggleState===3? "tab active-tab" : "tabs"} onClick={() =>toggleTab(3)}>Hobbies</a>
              </li>
              
            </ul> */}

        </div>

        <div className="container tab-content ">
          {/* <div className={toggleState===1? "content active-content" : "content"}>
          
            <Skills/>
          </div>

          <div className={toggleState===2? "content active-content" : "content"}>
            <p>
              <Timeline/>
            </p>

          </div>
          <div className={toggleState===3? "content active-content" : "content"}>



          <Hobbies/>
          </div> */}
          <Skills/>

        </div>



  </div>;
}
