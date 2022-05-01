import React, { useState } from "react";
import { useRef } from "react";
import "./ContactMeForm.css";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export default function ContactMeForm() {
  // const { register, handleSubmit, errors , reset} = useForm();

  // const [userInfo, setUserInfo] = useState();

  // const onSubmit = data => {
  //   setUserInfo(data);
  //   console.log(data);
	// reset();


  // }


  
    const form = useRef();
  


  const sendEmail = (e) => {
    e.preventDefault();

// form


   
   
  //  email js

    emailjs.sendForm('gmail', 'template', e.target, 'user_Lokn5YG3Ov7CYAtIHEvay')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      // alert(`thank you ${e.name} for your message`);
      toast.success('Thanks for contacting!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
      });
  
    }



  return (
    <div id="contact">
      <div className="container justify-content-center text-center">
          <h2 className="my-5">
              Contact Me
          </h2>
        </div>
      <div class="container contact my-4">
        <div class="row">
          <div class="col-lg-3 left-form">
            <div class="contact-info">
              <img
                src="https://image.ibb.co/kUASdV/contact-image.png"
                alt="image"
              />
              <h3>Contact Me</h3>
            
            </div>
          </div>
          <div class="col-lg-9 right-form">

			             
            <form class="contact-form" onSubmit={sendEmail}>
				<div>

			 
				</div>


              <div class="form-group">
                <label class="control-label col-sm-2" for="fname">
                  Name:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="fname"
                    placeholder="Enter Name"
                    name="name"
                    required
                  />
                </div>
                <div class="invalid-feedback">Please choose a username.</div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-2" for="email">
                  Email:
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="comment">
                  Comment:
                </label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    name="comments"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
          // position="top-center"
          // autoClose={5000}
          // hideProgressBar={false}
          // newestOnTop={false}
          // closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
          />
    </div>
  );
}
