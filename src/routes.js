import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { HomePage, DashboardPage, IncompleteTodosPage} from 'pages';
import Navigator from './components/Navigation/index';


export default (
    <Router>
        <Navigator/>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/dashboard" exact component={DashboardPage} />
            <Route path="/all_incomplete" exact component={IncompleteTodosPage} />
            <Route component={HomePage} />
        </Switch>
    </Router>
);