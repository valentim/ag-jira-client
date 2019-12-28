// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import Dashboard from '../Pages/Dashboard';
// import App from './App';
// import HomePage from '../pages/HomePage';
// import SettingsPage from '../pages/SettingsPage';

interface MainRouterState {
    navOpenState: object;
}

interface MainRouteProps {
    // component: any;
}

export default class MainRouter extends Component<MainRouteProps> {
    public state: MainRouterState;

    constructor(props: MainRouteProps) {
        super(props);
        
        this.state = {
            navOpenState: {
                isOpen: true,
                width: 304,
            }
        }
    }

    getChildContext () {
        return {
            navOpenState: this.state.navOpenState,
        };
    }

//   appWithPersistentNav = () => (props) => (
//     <App
//       onNavResize={this.onNavResize}
//       {...props}
//     />
//   )

//   onNavResize = (navOpenState) => {
//     this.setState({
//       navOpenState,
//     });
//   }

    render() {
        const customHistory = createBrowserHistory();

        return (
            <Router history={customHistory}>
                <Route path="/" component={Dashboard} />
            </Router>
        );
    }
}

// MainRouter.childContextTypes = {
//   navOpenState: PropTypes.object,
// }
