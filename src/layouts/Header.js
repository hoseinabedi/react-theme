import { React } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="index.html">
                    Start Bootstrap
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact-us" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pricing" className="nav-link">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faq" className="nav-link">FAQ</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownBlog"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Blog
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownBlog"
                            >
                                <li>
                                    <Link to="/blog-home" className="dropdown-item">Blog Home</Link>
                                </li>
                                <li>
                                    <Link to="/blog-post" className="dropdown-item">Blog Post</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownPortfolio"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Portfolio
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownPortfolio"
                            >
                                <li>
                                    <Link to="/portfolio-overview" className="dropdown-item">Portfolio Overview</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio-item" className="dropdown-item">Portfolio Item</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
    );
};

export default Header;
