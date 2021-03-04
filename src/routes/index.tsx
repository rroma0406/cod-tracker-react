import React from "react";

import { Switch, Route } from "react-router-dom";
import PageHome from "../views/pages/Home";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={PageHome} />
        </Switch>
    )
}

export default Routes;

