import React, { Component } from "react";
import {Panel} from "react-bootstrap";
import { Grid, Col, Row } from "react-bootstrap";

const textBoard = {
    fontSize: "21px",
    fontWeight: "normal",
    marginTop: "50px",
    paddingTop: "20px",
    paddingBottom: "20px",
};

const strong = {
    fontWeight: "bold",
    backgroundColor: "rgba(65, 197, 197, 0.15)",
}

const button = {
    borderRadius: "4px",
    height: "64px",
    fontSize: "20px",
    fontWeight: "600",
    transform: "translate(-50%)",
    left: "50%",
    position: "relative",
    border: "solid 1px #c4eaea",
    width: "232px",
    color: "#41c5c5",
    marginTop: "50px",
    marginBottom: "50px",
}

const buttonText = {
    width: "100%",
    textAlign: "center",
    top: "50%",
    transform: "translateY(-50%)",
    position: "absolute"
}

class Trusts extends Component {
    render() {
        return (
            <div>
                <Grid style={{width: "70%"}}>
                    <Row>
                        <Col md={6}>
                            <Panel style={textBoard}>
                                <Panel.Body>
                                    <Grid style={{width: "100%"}}>
                                        <Row>
                                            <Col md={2}>
                                                <img src="./gravatar/milanasmakeup.jpg" width="96px"/>
                                            </Col>
                                            <Col md={10} style={{paddingLeft: "35px"}}>
                                                Ever since I started using SocialUpgrade <span style={strong}>I've noticed significant 
                                                growth</span> that has helped me become a more serious fashion influencer.*
                                                <br />
                                                <b>@milanasmakeup</b>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Panel.Body>
                            </Panel>
                            <Panel style={textBoard}>
                                <Panel.Body>
                                    <Grid style={{width: "100%"}}>
                                        <Row>
                                            <Col md={2}>
                                                <img src="./gravatar/ericramia.jpg" width="96px"/>
                                            </Col>
                                            <Col md={10} style={{paddingLeft: "35px"}}>
                                                SocialUpgrade has done wonders for my page. <span style={strong}>Totally worth it!*</span>
                                                <br />
                                                <b>@ericaramia</b>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col md={6}>
                            <Panel style={textBoard}>
                                <Panel.Body>
                                    <Grid style={{width: "100%"}}>
                                        <Row>
                                            <Col md={2}>
                                                <img src="./gravatar/miamibunny.jpg" width="96px"/>
                                            </Col>
                                            <Col md={10} style={{paddingLeft: "35px"}}>
                                                <span style={strong}>I've seen my sales increase exponentially</span> each month since I've started using SocialUpgrade.*
                                                <br />
                                                <b>@miamibunny</b>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Panel.Body>
                            </Panel>
                            <Panel style={textBoard}>
                                <Panel.Body>
                                    <Grid style={{width: "100%"}}>
                                        <Row>
                                            <Col md={2}>
                                                <img src="./gravatar/jammestattoo.jpg" width="96px"/>
                                            </Col>
                                            <Col md={10} style={{paddingLeft: "35px"}}>
                                                <span style={strong}>Great and real service! Real accounts respond.</span> 
                                                Very happy with service. I can happily recommend SocialUpgrade :)*
                                                <br />
                                                <b>@jammestattoo</b>
                                            </Col>
                                        </Row>
                                    </Grid>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
                <div>
                    <div style={button}>
                        <div style={buttonText}>See more reviews</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trusts;
