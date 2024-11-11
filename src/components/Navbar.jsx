import React from 'react';
import {Link} from 'react-router-dom' ; 

function Navbar() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="container w-fit border border-solid  shadow-lg bg-inherit ">
          <div className="nav">
            <div className="nav-links">
              <div className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </div>
              <div className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar