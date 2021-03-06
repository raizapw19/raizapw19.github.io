import React from "react";
import logo from "../logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PROJECTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">EXPERIENCE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">EDUCATION</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACTS</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
