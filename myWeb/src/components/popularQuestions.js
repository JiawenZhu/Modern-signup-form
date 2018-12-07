import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
const test1 = {
  paddingTop: "60px", fontSize: "36px", fontWeight: "bold",
};
const test2 = {
  paddingTop: "60px", fontSize: "20px", fontWeight: "bold", color: "gray", 
};
const test3 = {
  paddingTop: "60px", fontSize: "10px", fontWeight: "bold",
};

class PopularQuestion extends Component{
  render(){
    return(
      <div>
      <div style={{paddingTop: "60px", textAlign: "center", fontSize: "36px", fontWeight: "bold"}}>
        Popular questions
      </div>
      <Grid>
        <Row>
          <Col md={6}>
          <div>
            <h3>How does it work?</h3>
            <p1 style={{...test2}}>
            Unlike our competitors, we don’t sell you fake followers. We’ve spent years developing specialized marketing techniques to help you see real, targeted results. Our service is hands free and requires absolutely no work from your end. Just connect your account and watch your account grow.
            </p1>
          </div>
          </Col>
          <Col md={6}>
          <div>
            <h3>What Payment methods are accepted?</h3>
            <p1 style={{...test2}}>
            Unlike our competitors, we don’t sell you fake followers. We’ve spent years developing specialized marketing techniques to help you see real, targeted results. Our service is hands free and requires absolutely no work from your end. Just connect your account and watch your account grow.
            </p1>
          </div>
          </Col>
          <Col md={6}>
          <div>
            <h3>What happens when the plan ends?</h3>
            <p1 style={{...test2}}>
            Unlike our competitors, we don’t sell you fake followers. We’ve spent years developing specialized marketing techniques to help you see real, targeted results. Our service is hands free and requires absolutely no work from your end. Just connect your account and watch your account grow.
            </p1>
          </div>
          </Col>
          <Col md={6}>
          <div>
            <h3>Is it for me?</h3>
            <p1 style={{...test2}}>
            Unlike our competitors, we don’t sell you fake followers. We’ve spent years developing specialized marketing techniques to help you see real, targeted results. Our service is hands free and requires absolutely no work from your end. Just connect your account and watch your account grow.
            </p1>
          </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
  }
}

export default PopularQuestion;