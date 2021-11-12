import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PagesFormList from "./List/Form/FormList";



const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={PagesFormList} />
            </Switch>
        </Router>
    );
};

export default Root;