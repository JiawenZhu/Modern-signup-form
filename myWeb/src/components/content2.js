import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";

const coverText = {
    fontSize: "46px",
    fontWeight: "600",
    lineHeight: "1.13",
    color: "#161616",
    marginBottom: "24px",
    marginTop: "150px",
};

const infor = {
    fontSize: "20px",
    fontWeight: "300",
    lineHeight: "32px",
    color: "#7c7c7c",
    maxWidth: "640px",
    marginBottom: "12px",
};

const padding = {
    position: "fix",
    padding: "30px"
};

const floatLeft = {
    float: "left"
};

const content2 = {
    width: "75%",
    minHeight: "550px",
    // border: "1px solid green"
};

class Content2 extends Component {
    render() {
        return (
            <div>
                <Grid style={content2}>
                    <Row>
                        <Col style={{ float: "left" }}>
                            <div>
                                <h2 style={coverText}>
                                    Set it and forget it. <br />
                                </h2>
                                <p style={infor}>
                                    Setting up your campaign is easy – that means no setup
                                    fees, no downloads and no complicated settings. Then
                                    it’s hands off. Your growth strategist does all the hard
                                    work for you – updating you with your results along the
                                    way.
                                </p>
                            </div>
                        </Col>
                        <Col style={{ float: "right" }}>
                            <div>
                                <img width="350px" height="303px" style={{marginTop: "100px"}} src={"./image2.png"} />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Content2;
