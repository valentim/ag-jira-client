import React, { Component } from "react";
import Layout from "../Partials/Layout";
import CFD from 'ag-cumulative-flow'

export default class Dashboard extends Component {
    render() {
        const cumulativeFlowData = {
            Backlog: [{
                x: 1570503600, y: 2
            }],
            Done: [{
                x: 1570417200, y: 1
            }]
        };

        return (
            <Layout>
                <div>Dashboard</div>
                <CFD data={cumulativeFlowData}></CFD>
            </Layout>
        )
    }
}