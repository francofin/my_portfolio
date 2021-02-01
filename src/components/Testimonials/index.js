import React from "react";

function Testimonials() {

    return(
    <section id="testimonials" className="testimonials">
      <div className="container">

        <div>

          <div className="testimonial-item">
            <img src={require(`../../assets/testimonials/image1.jpg`).default} className="testimonial-img" alt="" />
            <h3>Saul Goodman</h3>
            <h4>Ceo &amp; Founder</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

        </div>

      </div>
    </section>
    );
};

export default Testimonials;