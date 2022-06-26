import styled from "styled-components";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        src="https://i.postimg.cc/8Pq1PHLf/Motiv-Logo-png-removebg-preview-1.png"
                        alt="motiv-logo"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor03"
                    aria-controls="navbarColor03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav ms-auto" style={{ gap: 68 }}>
                        <li className="nav-active">
                        
                            <a className="nav-link" href="/">
                                Home
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">
                                Log in
                            </a>
                        </li>
                        <li className="nav-item" style={{ marginRight: 148 }}>
                            <a className="btn btn-outline-dark" href="/signup">
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
