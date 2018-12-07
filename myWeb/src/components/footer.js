import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import { BrowserRouter, Link, Route } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'

const content3 = {
    width: "75%",
    minHeight: "336px",
    border: "1px solid green",
    color: "white",
    backgroundColor: "#353B40",
};

const button = {
    fontSize: "20px",
    // borderRadius: "4px",
    backgroundColor: "#0cc971",
    lineHeight: "64px",
    fontWeight: "bold",
    color: "#ffffff",
    borderRadius: "4px",
    width: "232px",
    height: "64px",
    borderColor: "transparent",
    transform: "translate(-50%)",
    left: "50%",
    position: "relative",
};

const text = {
    // border: "1px solid red",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",

}

const text2 = {
    fontSize: "18px",
    fontWeight: "300",
    opacity: "0.7",
    fontWeight: "bold",

}

const footer = {
    minHeight: "336px",
    marginTop: "80px",
    backgroundColor: "#353B40",
}
function getPrice(){ 
    return window.location.href = "/pricing";
}
function howItWorks(){
    return window.location.href = "/how-it-works"
}
function reviews(){
    return window.location.href = "/reviews"
}
function contact(){
    return window.location.href = "https://www.logiwork.com/contactus"
}

class Footer extends Component {
    render() {
        return (
            <div>
                <Grid style={content3}>
                    <Row style={{marginBottom: "10%"}}>
                        <Col >
                            <div>
                                <div style={{paddingTop: "80px", textAlign: "center", fontSize: "50px", fontWeight: "bold"}}>
                                    It's time to grow
                                    <br />
                                    your Instagram
                                </div>
                                <br />
                                <div>
                                    <button style={button} onClick={getPrice}>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr height="1px" style={{color: "#fff", opacity: "0.1",}}/>
                    <Row style={text}>
                       <ul style={{listStyleType:"none", lineHeight: "1.5", textAlign: "center"}}>
                        <div md={1} style={{...text2}}>SOCIAL   GROW</div>
                        <li md ={1} style={{...text}} onClick={getPrice}>Pricing</li>
                        <li md = {1} style={{...text}} onClick={howItWorks}>How it works</li>
                        <li md= {1} style={{...text}} onClick={contact}>Contact</li>                          
                        <Col style={{border: "1px solid white",borderRadius: "4px", width: "170px", height: "40px", paddingTop: "5px", marginTop: "5px", margin: "0px auto"}}onClick={getPrice}>
                            Get started
                        </Col> 
                       </ul>
                    </Row>
                    <Row style={text2}>
                        <br />
                        SocialUpgrade is not endorsed or certified by Instagram. All Instagram TM logos and trademarks displayed on this application are property of Instagram. *Results may vary. 
                    </Row>
                    <Row style={footer}>
                        <br />
                        <span style={{paddingRight: "30px"}}>© SocialUpgrade 2018</span>
                        <span style={{paddingRight: "30px"}}>Terms of use</span>
                        <span style={{paddingRight: "30px"}}>Privacy policy</span>
                        <br />
                        <br />
                        <br />
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Footer;
