import React, { useState } from "react";
import Project from "../Project";


function Portfolio() {
    const [projects] = useState([
        {
            name: 'fintank',
            description: 'Financial News Website',
            link: "https://sleepy-garden-67658.herokuapp.com/"
        },
        {
            name: 'food-blog',
            description: 'Food Bloogers Template',
            link: 'https://vast-stream-51012.herokuapp.com/'
        },
        {
            name: 'pizza-app',
            description: 'A Place For Pizza Lovers',
            link: 'https://shielded-brushlands-55799.herokuapp.com/'
        },
        {
            name: 'python-bootcamp',
            description: 'Repo for financial Analysis Python Codes',
            link: 'https://github.com/francofin/fintankv3'
        },
        {
            name: 'Runbuddy',
            description: 'Runners Paradise',
            link: 'https://github.com/francofin/fintankv3'
        },
        {
            name: 'zoo-keeper',
            description: 'Toronto Zoo Management',
            link: 'https://agile-meadow-78303.herokuapp.com/'
        },

    ]);

    return (
        <section id="portfolio" class="portfolio">
            <div className="container">

                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>A Few Project i have developed For myself and Others. Enjoy!</p>
                </div>
                <div className="row portfolio-container">
                    {projects.map((project, idx) => (
                        <Project
                            project={project}
                            key={"project" + idx}
                        >
                        </Project>
                    ))}
                </div>

            </div>
        </section>


    );
};

export default Portfolio;
