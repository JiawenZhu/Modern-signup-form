import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";

const content3 = {
    width: "75%",
    minHeight: "336px",
    // border: "1px solid green",
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
function getStarted(){
    return window.location.href = "/pricing";
 }
class Content3 extends Component {
    render() {
        return (
            <div>
                <Grid style={content3}>
                    <Row>
                        <Col style={{height: "336px", backgroundColor: "#F4F4F4"}}>
                            <div>
                                <div style={{paddingTop: "80px", textAlign: "center", fontSize: "50px", fontWeight: "bold"}} >
                                    Grow your Instagram account now
                                </div>
                                <div>
                                    <button style={button} onClick= {getStarted}>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Content3;
