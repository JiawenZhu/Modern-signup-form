import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import MediaQuery from 'react-responsive';
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import PopularQuestion from "./components/popularQuestions";
const content3 = {
    width: "75%",
    minHeight: "336px",
    //border: "1px solid green",
    color: "black",
};

const button = {
    fontSize: "20px",
    backgroundColor: "#0cc971",
    lineHeight: "64px",
    fontWeight: "bold",
    color: "#ffffff",
    borderRadius: "4px",
    width: "332px",
    height: "64px",
    borderColor: "transparent",
    transform: "translate(-50%)",
    left: "50%",
    
};
const text = {
    fontFamily: "myriad-pro Helvetica Neue Helvetica Arial sans-serif",
    maxWidth: "100%",
    paddingLeft: "15%",
    paddingBottom: "30px",
    textAlign: "left", 
    fontSize: "26px"
}
const footer = {
    //border: "2px solid orange",
    minHeight: "336px",
    marginTop: "80px",
    backgroundColor: "#353B40",
}
const responsive = {

}
function getStarted(){
    return window.location.href = "/getStarted";
}

class Pricing extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Grid style={content3}>
                    <Row style={{marginBottom: "0px"}}>
                        <Col style={{height: "336px"}}>    
                            <MediaQuery minWidth={1224}>
                            <div style={{paddingTop: "80px", textAlign: "center", fontSize: "56px", fontWeight: "bold", lineHeight: "1.06"}}>
                            REAL, TARGETED GROWTH. <br/> 
                            GET STARTED TODAY. <br/>
                            </div> 
                            <div style={{paddingLeft: "25%", paddingRight: "25%", textAlign: "center", fontSize: "46", color: "gray",}}>
                                Don’t waste your money on fake followers. Our growth service uses real 
                                Instagram marketing techniques to get you real, targeted results.
                            </div>
                            </MediaQuery>
                            <MediaQuery maxWidth={1224}>
                            <div style={{paddingTop: "80px", textAlign: "center", fontSize: "36px", fontWeight: "bold", lineHeight: "1.06"}}>
                            REAL, TARGETED GROWTH. <br/> 
                            GET STARTED TODAY. <br/>
                            </div>
                            <div style={{paddingLeft: "25%", paddingRight: "25%", textAlign: "center", fontSize: "26", color: "gray",}}>
                                Don’t waste your money on fake followers. Our growth service uses real 
                                Instagram marketing techniques to get you real, targeted results.
                            </div> 
                            </MediaQuery>    
                        </Col>
                        <Col md={3}></Col>
                        <Col md={6}>                                    
                            <img src={"./turbo.png"} style={{paddingTop: "15%", paddingLeft: "25%", paddingRight: "25%", width: "100%", height: "100%",}}/>
                            <div style={{paddingLeft: "50%"}}>
                                <button style={{...button, width: "96%"}} onClick={getStarted}>Get Started</button>
                            </div>
                        </Col>
                        <Col md={3}></Col>
                    </Row>
                    {/* <Row style={{paddingTop: "0%", marginBottom: "70px"}}>
                        
                    </Row> */}
                    <Row style={{marginBottom: "70px", paddingTop: "80px"}}>
                        <Col>
                            <div style={{textAlign: "center", fontSize: "36px", fontWeight: "bold"}}>
                                What you get            
                            </div>
                            <div style={{paddingBottom: "80px", textAlign: "center", fontSize: "26px", color: "gray"}}>
                                Every subscription includes the following features.
                            </div>
                        </Col>
                        <Col md={6} style={{...text}}>
                            &#9989; Real Instagram growth
                        </Col>
                        <Col md={6} style={{...text}}>
                            &#9989; Tailored strategy
                        </Col>
                        <Col md={6} style={{...text}}>
                            &#9989; Targeted audience 
                        </Col>
                        <Col md={6} style={{...text}}>
                            &#9989; Safe and secure
                        </Col>
                    </Row>
                </Grid>
                <PopularQuestion/>
                <div style={footer}>
                    <Footer/>
                </div>
            </div>
        );
    }
}
export default Pricing;
