import React, {Component} from "react";
import {Grid, Col, Row} from "react-bootstrap";
import HowItWorks from "../howItWorks";
import PopularQuestion from "./popularQuestions";

const test1 = {
  fontSize: "26px", fontWeight: "bold",letterSpacing: "0.6px",textAlign: "left",
};
const test3 = {
  fontSize: "15px", fontWeight: "bold", color: "gray",textAlign: "left", paddingTop: "10px", paddingBottom: "25px", paddingcenter: "0%", paddingRight: "60%", maxWidth: "100%", height: "auto"
};
function HowItworksComponent(){
  return(
  <div>
    <Grid style={{paddingBottom: "100px"}}>
      <Row>
        <Col md={1}></Col>
        <Col md={6}>
          <div style={test1}>
            Sign up
          </div>
          <div style={test3}>
          Signing up is easy! Just answer a few questions and a growth manager will take over from there.<br/>

          </div>
          <div style={test1}>
            Advanced targeting
          </div>
          <div style={test3}>
            Using hashtags, locations, and usernames, you can target users in just about any industry.
          </div>
          <div style={test1}>
            Quick Result1
          </div>
          <div style={test3}>
            No time is wasted. Our clients typically notice results within hours of signing up.
          </div>
        </Col>
        <Col md={1}><img style={{width: "100%", minWidth: "350px", maxWidth: "500px"}}src="./iphone.jpg"/></Col>
        <Col md={1}></Col>
        <Col md={1}></Col>
      </Row>
    </Grid>
    <PopularQuestion/>
    <script>
      window.mixpanelToken = '8240da4a840ba04dac7314efe8e74e8d';
  </script>
  </div>
);
}
export default HowItworksComponent; 