import React , {useState} from 'react';
import './ProjectFilter.css'
import Projects from './ProjectList.js';



export default function ProjectFilter() {

     const[items,setItems] = useState(Projects);

     const filterProjects =(cate) =>{

        const updateProjects = Projects.filter((currProject) =>{

                return currProject.category === cate;
     
            })

        setItems(updateProjects);
     }
     const [toggleState,setToggleState] = useState(1);
  
     const toggleTab = (index) =>{
       setToggleState(index);
    // console.log()
     }
    

  return <div>
            <div className ="container justify-content-center text-align-center">

               

                <ul class="nav nav-pills justify-content-center my-5">
           

                <li class="nav-item">
                <a className={toggleState===1? "tab active-tab" : "tabs"}onClick={()=> {
                    setItems(Projects)
                    toggleTab(1)
                    }}>All</a>
                    </li> 
                
                <li class="nav-item">
                <a className={toggleState===4? "tab active-tab" : "tabs"} onClick={()=> 
                
              {
                 filterProjects("website")
                toggleTab(4)
            }
                }>Website</a>
                </li>


                <li class="nav-item">
                <a className={toggleState===3? "tab active-tab" : "tabs"} onClick={()=>{
                     filterProjects("Short film")
                     toggleTab(3)   
                }}>Short Film</a>
                
                </li>
                
                <li class="nav-item">
                 <a className={toggleState===2? "tab active-tab" : "tabs"} onClick={()=> {
                    filterProjects("app")
                    toggleTab(2)
                }}>App</a>
                </li>
             
              
            </ul>
            

                <div className="row justify-content-center">


                    {
                        items.map(post => {
                       

                            return (
                            
                                    <div className="col-lg-4 col-md-6 my-5">
                                        <div class = 'projects'>
                                            <div class = 'card'>
                                                <div class = 'image img-fluid'>
                                                    <img href = "#" src = {post.image}/>
                                                </div>
                                                
                                                <div class = 'info'>
                                                <h2>{post.name}</h2>
                                                    <p>{post.description}</p>
                                                   
                                                    <a className="btn watch-project-btn"  href={post.link} target="_blank"   > Watch it</a>
                                                  </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        })
                    }
  
                </div>
            </div>    
        </div>

  
}
