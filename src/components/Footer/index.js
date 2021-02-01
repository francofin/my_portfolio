import React from "react";

function Footer() {


    return (
        <footer id="footer">

        <div className="footer-top">
    
          <div className="container">
    
            <div className="row  justify-content-center">
              <div className="col-lg-6">
                <h3>Francofin</h3>
                <p>Where Businesses Seek Growth.</p>
              </div>
            </div>
    
            <div className="social-links">
              <a href="https://github.com/francofin" className="github" target="_blank"><i class="bx bxl-github"></i></a>
              <a href="https://stackoverflow.com/users/14111359/francois-jack" class="facebook" target="_blank"><i class="bx bxl-stack-overflow"></i></a>
              <a href="https://www.linkedin.com/in/francoisjack/" className="linkedin" target="_blank"><i class="bx bxl-linkedin"></i></a>
            </div>
    
          </div>
        </div>
    
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright <strong><span>Francofin</span></strong>
          </div>
          <div className="credits">
            <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;