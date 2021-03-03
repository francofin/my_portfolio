import React, { useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Link } from "react-router-dom";



function Nav(props) {

    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <header id="header" className="fixed-top d-flex align-items-center header-transparent">
        <div className="container d-flex align-items-center">
    
          <div className="logo mr-auto">
            <h1 className="text-light"><a href="index.html"><span>Francofin</span></a></h1>
                {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}
          </div>
    
          <nav className="nav-menu d-none d-lg-block">
            <ul>
            {pages.map((Page) => (
                <li className={`${currentPage.name===Page.name}`}
                  key={Page.name}
                >
                  <Link onClick={() => setCurrentPage(Page)} to={`#${Page.name}`}>  
                    {capitalizeFirstLetter(Page.name)}
                  </Link>
                </li>
            ))}
            </ul>
          </nav>
    
        </div>
      </header>
    );
}


export default Nav;