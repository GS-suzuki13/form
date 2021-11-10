import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PagesEditList from "./List/Edit/EditList";
import PagesFormList from "./List/Form/FormList";



const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' component={PagesFormList} />
                <Route path='/edit/:id' component={PagesEditList} />
            </Switch>
        </Router>
    );
};

export default Root;