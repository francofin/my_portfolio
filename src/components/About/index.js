import React from "react";
import aboutimage from "../../assets/aboutme/fj.jpg";

function About() {

  return (

    <section id='about' className='about'>
      <div className="container">

        <div className="row content">
          <div className="col-lg-6">
            <img src={aboutimage} alt="Developer For hire" style={{ maxHeight: 600, minWidth: 400 }}></img>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Amazing Developer loooking to break into the world of Full Stack Development to Help You grow your business to new heights.
              Feel Free to take a look at some of my previous works and explore some cool applications I have developed by myself.
              Also Please checkout my Github repo to see some more detailed projects I have worked as well as collaborated on.
              This is the start of my journey as well as yours.
        </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Built In React</li>
              <li><i className="ri-check-double-line"></i>Checkout My resume to see what languages and frameworks are used fro Web Development</li>
              <li><i className="ri-check-double-line"></i> Contact me Via the section at the end to get your Business Booming Today. </li>
            </ul>
            <p className="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
        </p>
          </div>
        </div>

      </div>
    </section>



  );
}

export default About;