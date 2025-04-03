import React from 'react'
import '../styles/navbar.css'; // Import your CSS file here

function NavBar() {
  return (
        <>
        <div className="navigation container-fluid d-inline-flex navbar navbar-expand-lg navbar-light ">
            <div className="navbar-brand">
                <a href="/">Logo</a>
            </div>
            <div className="collapse navbar-collapse justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        </>
)
}

export default NavBar