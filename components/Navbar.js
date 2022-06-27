import styled from "styled-components";
import Link from "next/link";
// import { Link } from 'react-bootstrap'

// const NavLinks = styled.nav`
//     color: #263069;
// 	font-size: 1.2rem;
// 	font-weight: 700;
    
// `   
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
           {/* <NavLinks></NavLinks> */}
                <Link className="navbar-brand" href="#">
                    <img
                        src="https://i.postimg.cc/8Pq1PHLf/Motiv-Logo-png-removebg-preview-1.png"
                        alt="motiv-logo"
                    />
                </Link>
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

                            <Link className="nav-link" href="/" style={{ textDecoration: 'none' }}><a style={{
                                textDecoration: 'none',
                                color: ' #263069',
                                fontSize: '1.2rem',
                                fontWeight: '700'
                            }}>Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">
                            <a style={{
                                textDecoration: 'none',
                                color: ' #263069',
                                fontSize: '1.2rem',
                                fontWeight: '700'
                            }}>About Us</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">
                            <a style={{
                                textDecoration: 'none',
                                color: ' #263069',
                                fontSize: '1.2rem',
                                fontWeight: '700'
                            }}>Login</a>
                            </Link>
                        </li>
                        <li className="nav-item" style={{ marginRight: 148 }}>
                            <Link className="btn btn-outline-dark" href="/signup">
                            <a style={{
                                textDecoration: 'none',
                                color: ' #263069',
                                fontSize: '1.2rem',
                                fontWeight: '700'
                            }}>Sign Up</a>
                            </Link>
                        </li>
                    </ul>
                </div>
           
            </div>
        </nav>
    );
};

export default Navbar;
