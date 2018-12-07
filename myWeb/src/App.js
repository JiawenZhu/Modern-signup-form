import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/navigation.js";
import Cover from "./components/cover.js";
import SlideShow from "./components/slideShow.js";
import Content1 from "./components/content1.js";
import Board from "./components/board.js";
import Content2 from "./components/content2.js";
import Content3 from "./components/content3.js";
import Trusts from "./components/trusts.js";
import Footer from "./components/footer.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./homePage.js";
import Pricing from "./pricing.js";
import HowItWorks from "./howItWorks";
import GetStarted from "./getStarted";

class App extends Component {
    state = {
        contests : this.props.initialContests
    }
    render() {
        document.documentElement.style.overflowX = 'hidden';	
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/pricing" component={Pricing} />
                    <Route path="/how-it-works" component={HowItWorks} />
                    <Route path="/getStarted" component={GetStarted}/>
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
