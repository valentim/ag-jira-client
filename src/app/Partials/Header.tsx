import React, { Component } from "react";
import Logo from './logo.png';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className="topnavbar-wrapper">
                <nav className="navbar topnavbar navbar-expand-lg navbar-light">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <div className="brand-logo">
                                <img className="img-fluid" src={Logo} alt="AgileStats" />
                            </div>
                        </a>
                    </div>
                    <div id="topnavbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav mr-auto flex-column flex-lg-row">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Dashboard</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item dropdown dropdown-list">
                                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#">
                                    <em className="icon-bell"></em>
                                    <span className="badge badge-danger">11</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}