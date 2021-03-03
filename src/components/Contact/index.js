import React, {useState} from "react";
import {validateEmail} from "../../utils/helpers";


function Contact() {
    
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your Email Is invalid')
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
            console.log('Handle Form', formState);
        }
    };

    return (
    <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Send Me An Email or Call to Get Started.</p>
        </div>
        
      </div>

      <div className="map">
      <iframe style={{ minHeight: 400, maxHeight: 400, minWidth: 1700 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.965285898797!2d-79.38306128450236!3d43.64889057912149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cd578a5c61%3A0xea0589912e09cc06!2sFirst%20Canadian%20Place%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1612237717289!5m2!1sen!2sca" ></iframe>
        {/* <iframe style={{Border:0, Width: 100, Height: 350}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.965285903723!2d-79.38306664962725!3d43.64889057901901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cd578a5c61%3A0xea0589912e09cc06!2sFirst%20Canadian%20Place%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1612236358053!5m2!1sen!2sca" allowfullscreen></iframe> */}
      </div>
      
      <div className="container">
        <div className="row mt-5 justify-content-center">

          <div className="col-lg-10">

            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-4 info">
                  <i className="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>Toronto<br />Ontario</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>finapptank@gmail.com<br />francoiskieran89@gmail.com</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 555 555 5555<br />+1 555 555 5555</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-lg-10">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" defaultValue={name} onBlur={handleChange} />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" defaultValue={email} onBlur={handleChange}/>
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" defaultValue={message} placeholder="Message" onBlur={handleChange}></textarea>
                <div className="validate"></div>
              </div>
              {errorMessage && (
                    <div className="mb-3">
                <div>{errorMessage}</div>
              </div>
                  )
              }
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    );
}

export default Contact;