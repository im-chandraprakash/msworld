import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import './Navbar.css';
import Search from "./Search";

function NavBar() {
    return (
        <div className="container">
            <nav className="navbar">
                <div className="logo">MSworld</div>

                <ul className="nav-links">
                    <input type="checkbox" id="checkbox-toggle" />
                    <label htmlFor="checkbox-toggle" className="hamberger">
                        {" "}
                        <GiHamburgerMenu />
                    </label>

                    <div className="menu">
                        <li className="courses nav-title">
                            <a href="/">Courses</a>

                            <ul className="dropdown">
                                <li>
                                    <a href="/">Dropdown 1</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown2</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown3</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown4</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown5</a>
                                </li>
                            </ul>
                        </li>
                        <li className="Jobs nav-title">
                            <a href="/">Jobs</a>

                            <ul className="dropdown">
                                <li>
                                    <a href="/">Dropdown 1</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown2</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown3</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown4</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown5</a>
                                </li>
                            </ul>
                        </li>
                        <li className="tutorials nav-title">
                            <a href="/">Tutorials</a>

                            <ul className="dropdown">
                                <li>
                                    <a href="/">Dropdown 1</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown2</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown3</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown4</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown5</a>
                                </li>
                            </ul>
                        </li>
                        <li className="practice nav-title">
                            <a href="/">Practice</a>

                            <ul className="dropdown">
                                <li>
                                    <a href="/">Dropdown 1</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown2</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown3</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown4</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown5</a>
                                </li>
                            </ul>
                        </li>
                        <li className="contest nav-title">
                            <a href="/">Contest</a>

                            <ul className="dropdown">
                                <li>
                                    <a href="/">Dropdown 1</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown2</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown3</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown4</a>
                                </li>
                                <li>
                                    <a href="/">Dropdown5</a>
                                </li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
