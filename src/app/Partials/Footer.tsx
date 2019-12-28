import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="wrapper ac-content">
                <section className="section-container">
                    <div className="content-wrapper">
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}