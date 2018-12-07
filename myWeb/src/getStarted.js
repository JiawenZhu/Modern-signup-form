import React, {Component} from 'react';
import {Grid, Col, Row} from "react-bootstrap";
const text1 = {
  fontFamily: "sans-serif",
};
class GetStarted extends Component{
  constructor(props) {
    super(props);
    this.state = {
      contact:
      {
        name: 'John',
        email: "JohnExample@gmail.com"
      }  
    };
  }
  handleChanges(propertyName, event) {
    const contact = this.state.contact;
    contact[propertyName] = event.target.value;
    this.setState({contact});
  }
  handleSubmit(event){
    console.log("name: "+this.state.contact.name+" email: "+ this.state.contact.email);
  }
  
  render(){ 
    return(
    <div style={{textAlign: "center",margin: "100px"}}>
      <label style={{fontFamily: "serif", fontSize: "300%", paddingBottom: "150px"}}>place enter your contract to continue</label>
      <Col style={{paddingBottom: "1%"}}>
      <input style={{width: "500px", height: "45px", borderStyle: "solid", borderWidth: "1px", borderRadius: "4px"}} type="text" name="name" placeholder="place enter name"
      // change dom value (name) 
      name={this.state.name}
      onChange={this.handleChanges.bind(this, 'name')}
      required/>
      </Col>
      <Col>
      <input style={{width: "500px", height: "45px", borderStyle: "solid", borderWidth: "1px", borderRadius: "4px"}} type="text" name="email" placeholder="place enter email"
       // change dom value (em) 
      email={this.state.email} 
      onChange={this.handleChanges.bind(this, 'email')}
      required/>
      </Col>
      <button type="submit" style={{width: "500px", height: "45px", backgroundColor: "#0FC266"}} onClick={this.handleSubmit.bind(this)}><font color="white" fontSize="25px">Enter to continue</font></button>
    </div>
    );
  }
}
export default GetStarted; 