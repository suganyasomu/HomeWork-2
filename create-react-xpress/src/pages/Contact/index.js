import React from "react";
import "./style.css"

import Row from "../../components/Row";
import Col from "../../components/Col";
import Jumbotron from "../../components/Jumbotron";

function Contact(){
return(
    //  <main className="container-fluid">
    // <section className="jumbotron">
    <Jumbotron>
    <div>
      <Row>
        <Col size="md-12">
          <h1>Contact</h1>
          <hr/>

        </Col>
      </Row>
      <form>
        <Row>
          <Col size="md-6">
            <label for="inputEmail4">Name</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Suganya Somu"/>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <label for="inputAddress">Email</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="sweetsugan12@gmail.com"/>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </Col>
        </Row>
        <button type="submit" className="btn btn-primary">submit</button>


      </form>
</div>
  
</Jumbotron>
);
}

export default Contact