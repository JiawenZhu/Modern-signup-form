import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
const coverText = {
    fontSize: "46px",
    fontWeight: "600",
    lineHeight: "1.13",
    color: "#161616",
    marginBottom: "24px"
};
const infor = {
    fontSize: "20px",
    fontWeight: "300",
    lineHeight: "32px",
    color: "#7c7c7c",
    maxWidth: "640px",
    marginBottom: "12px"
};
const imgStyle = {
    marginTop: "22px"
    // display: "inline-block",
    // justifyContent: "middle"
};
const padding = {
    position: "fix",
    padding: "30px"
};
const floatLeft = {
    float: "left"
};
const content1 = {
    width: "75%",
    minHeight: "400px",
    //border: "1px solid green"
};
class Content1 extends Component {
    render() {
        return (
            <div>
                <Grid style={content1}>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    marginTop: "26px",
                                    float: "left"
                                }}
                            >
                                <h2 style={coverText}>
                                    Real People. <br />
                                    Real Growth. <br />
                                </h2>
                                <p style={infor}>
                                    Don’t waste your money on other services
                                    that offer fake likes and fake followers who
                                    don’t interact with your account at all.
                                    With our genuine marketing techniques, your
                                    Instagram account will get the exposure it
                                    needs to generate{" "}
                                    <stong>organic, active followers.</stong>
                                </p>
                            </div>
                        </Col>
                        <Col style={{ float: "right" }}>
                            <img
                                style={imgStyle}
                                width="350px"
                                src="/content1.jpg"
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
export default Content1;
