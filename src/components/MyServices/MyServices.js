import React , {useState} from 'react';
import './MyServices.css';
import Services from './MyServicesList';


export default function MyServices() {


    const [services,setServices]= useState(Services);

    


  return <div>
      
<div class="section_our_solution container">

  <div class="row justify-content-center">


            {
            services.map(post => {

                        return(
                            <div class="col-lg-4 col-md-6 col-sm-12 ">
                            <div class="our_solution_category m-4">
                                <div class="solution_cards_box">
                                <div class="solution_card">
                                    <div class="hover_color_bubble"></div>
                                    {/* <div class="so_top_icon">
                                  sdfds
                                    </div> */}
                                    <div class="solu_title">
                                    <h3>{post.name}</h3>
                                    </div>
                                    <div class="solu_description">
                                    <p>
                                     {post.description}
                                    </p>
                                    {/* <button type="button" class="read_more_btn">Read More</button> */}
                                    </div>
                                </div>

                        
                                
                            
                                
                            
                            </div>
                            </div>
                        </div>

                    )})
}


  
</div>
  </div>
  
  </div>;
}
