import React from 'react';
import MyServices from '../../components/MyServices/MyServices';
import "./Services.css"

export default function Services() {
  return <div className="services" id="services">
       
        <div className="container justify-content-center text-center">
          <h2 className="my-5">
              My Services
          </h2>
        </div>

    <MyServices/>

  </div>;
}
