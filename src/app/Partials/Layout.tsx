import React, { Component } from "react";
import Header from "./Header";
import './Layout.css';

export default class Layout extends Component {
    render() {
        return (
            <div className="wrapper ac-content">
                <Header></Header>
                <section className="section-container">
                    <div className="content-wrapper">
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}