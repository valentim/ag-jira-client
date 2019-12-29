import React, { Component } from "react";
import Layout from "../Partials/Layout";
import CFD from 'ag-cumulative-flow';
import StatCard from 'ag-cumulative-flow-lean-stats';
import './style.css';

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

                <div className="row">
                    <div className="col-md-6">
                        <h4 className="page-header">Periods</h4>
                        <StatCard statName="Lead Time" statType="LeadTime" number={2} />
                    </div>
                </div>
            </Layout>
        )
    }
}