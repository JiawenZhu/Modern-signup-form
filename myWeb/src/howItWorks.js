import React ,{Component}from "react";
import {Grid, Col, Row} from "react-bootstrap";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import HowItWorksComponent from "./components/howItWorksComponent";

const button1 = {
  fontSize: "20px",
  backgroundColor: "#0cc971",
  lineHeight: "64px",
  fontWeight: "bold",
  color: "#ffffff",
  borderRadius: "4px",
  width: "272px",
  height: "64px",
  borderColor: "transparent",
  // transform: "translate(-50%)",
  position: "relative",
};
const button2 = {
  fontSize: "20px",
  backgroundColor: "white",
  lineHeight: "64px",
  fontWeight: "bold",
  color: "#ffffff",
  borderRadius: "4px",
  width: "272px",
  height: "64px",
  borderColor: "green",
  // transform: "translate(-50%)",
  position: "relative",
};
const test1 = {
  fontSize: "46px", fontWeight: "bold",letterSpacing: "0.6px",textAlign: "center",
};
const test2 = {
  fontSize: "15px", fontWeight: "bold", color: "gray",textAlign: "center", paddingLeft: "37%", paddingRight: "37%", maxWidth: "100%", height: "auto"
};
const footer ={
  minHeight: "336px",
  marginTop: "80px",
  backgroundColor: "#353B40",
}
class HowItWorks extends Component{
  render(){
    return (
      <div>
        <Navigation/>
        <h1 style={test1}>
          HOW IT WORKS
        </h1>
        <p style={test2}>
          SocialUpgrade helps you organically grow your Instagram following with our fully managed service.
        </p>
          <div style={{paddingTop: "30px", paddingBottom: "150px", textAlign: "center"}}>
            <button style={button1}><font size="3">Get Started</font></button>
            <button style={button2}><font size ="3" color="black">Pricing</font></button>
          </div>
        <div>
          <HowItWorksComponent/>
        </div>
        <div style={footer}>
          <Footer/>
        </div>
    </div>
    );
  }
}

export default HowItWorks;