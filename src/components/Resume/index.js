import React from 'react';

function Resume() {


    return(
        <section id="services" className="services section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Resume</h2>
            <p>Experience and Practice Is the Continued Key To My Success. See My github for more information</p>
          </div>
  
          <div className="row">
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon"><i className="icofont-computer"></i></div>
              <h4 className="title"><a href="/">Javascript</a></h4>
              <p className="description">1 Year of fullstack development using the MERN stack. Proficiency using different Javascript frameworks such as node, express, react, jquery.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
              <h4 className="title"><a href="/">HTML/JSX/HBS</a></h4>
              <p className="description">The bakcbone to a website whether it is using html, JSX, handlebars to develop your personal website. It all starts with having something to say.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon"><i className="icofont-earth"></i></div>
              <h4 className="title"><a href="/">CSS</a></h4>
              <p className="description">You can have the most functional website ever, no one would use it if it had no appeal. CSS is crucial in driving traffick to your platform.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon"><i className="icofont-image"></i></div>
              <h4 className="title"><a href="/">Python</a></h4>
              <p className="description">One of the most popular languages out there and I offer a host of solutions using this language.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon"><i className="icofont-settings"></i></div>
              <h4 className="title"><a href="/">Django</a></h4>
              <p className="description">Popular web framework using python to develop great, functional, interactive and full stacked web applications.</p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon"><i className="icofont-tasks-alt"></i></div>
              <h4 className="title"><a href="/">Finance</a></h4>
              <p className="description">For specific solutions tailored to your financial web application needs, this is a niche market I am currently operating in.</p>
            </div>
          </div>
  
        </div>
      </section>
    )
};


export default Resume;