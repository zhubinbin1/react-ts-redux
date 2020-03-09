import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Switch, Route, Redirect } from "react-router-dom";//Redirect从定向
import { Provider } from "react-redux";
import store from "./store";
import "./assets/common.less"
import { ConnectedRouter } from "connected-react-router";
import history from "./store/history"
import Home from "./routes/Home"
import Profile from "./routes/Profile"
import Mine from "./routes/Mine"
import Taps from "./components/Tabs"

ReactDOM.render(
    <>
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <main className="main-container">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/profile" exact component={Profile} />
                    <Redirect to="/"/>
                </Switch>
            </main>
            <Taps></Taps>
        </ConnectedRouter>
      
    </Provider>
    </>
    , document.getElementById("root"));