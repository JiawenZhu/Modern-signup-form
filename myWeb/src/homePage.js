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
import { Route, Switch } from "react-router-dom";

const background1 = {
    backgroundImage: "url('./1.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
    width: "100%",
    heigth: "666px",
    backgroundPosition: "50% 0%",
}

const content1 = {
    minHeight: "400px",
    width: "100%",
}

const content2 = {
    minHeight: "550px",
    marginTop: "50px",
}

const content3 = {
    minHeight: "336px",
    marginTop: "0px",
}

const trusts = {
    minHeight: "336px",
    marginTop: "0px",
}

const footer = {
    minHeight: "336px",
    marginTop: "80px",
    backgroundColor: "#353B40",
}

class App extends Component {
    render() {
        document.documentElement.style.overflowX = 'hidden';	
        return (
            <div style={{width: "100%"}}>
                <div style={background1}>
                    <Navigation />
                    <Cover />
                    </div>
                <div style={content1}>
                    <Content1 />
                </div>
                <div>
                    <SlideShow />
                    <Board />
                </div>
                <div style={content2}>
                    <Content2 />
                </div>
                <div style={content3}>
                    <Content3 />
                </div>
                <div style={trusts}>
                    <Trusts />
                </div>
                <div style={footer}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
