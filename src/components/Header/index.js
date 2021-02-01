import React from "react";
import coverImage from "../../assets/cover/trinidad.jpg";

function Header(props) {

    return (
        <section id="hero">
            <div className="hero-container">
                <h1>Francofin Designs</h1>
                <h2>Expert Mobile and Web Solutions To Grow Your Business</h2>
                <a href="#about" class="btn-get-started scrollto">Explore</a>
            </div>
        </section>
    );

}

export default Header;