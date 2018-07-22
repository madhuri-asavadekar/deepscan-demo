import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ShowUser from "./components/ShowUser";
import NotFound from "./components/NotFound";

const UserRoute = ({ match }) => (
    <div>
        <Route path={`${match.url}/create`} component={AddUser} />
        <Route path={`${match.url}/edit/:id`} component={EditUser} />
        <Route path={`${match.url}/show/:id`} component={ShowUser} />
    </div>
);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Dashboard} exact={true} />
                    <Route path="/users" component={UserRoute} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
