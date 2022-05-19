import React from 'react';
import logo from '../assets/image/logo.jpg';
import '../assets/style/navbar.scss';

function Navbar() {
    const handleClick = (e) => e.preventDefault();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a href="/home" className="navbar-brand" onClick={e => handleClick(e)}><img src={logo}  alt="logo" className="logo" width="60" height="60" /> I  N E E D  D E V </a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* <a className="nav-item nav-link active" href="#">Home</a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar