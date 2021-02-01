import React from "react";
import {removeHyphensAndCapitalize} from '../../utils/helpers';

function Project({project}) {
    const{name, description, link} = project;

    return(
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={require(`../../assets/portfolio/${name}.PNG`).default} className="img-fluid" alt={removeHyphensAndCapitalize(name)} style={{ minHeight: 220, maxHeight: 220, maxWidth: 350 }} />
            <div className="portfolio-info">
              <h4><a href={link}>{removeHyphensAndCapitalize(name)}</a></h4>
              <p>{description}</p>
            </div>
          </div>
    );
}

export default Project;