import React from "react";
import  "./style.css";

import Row from "../../components/Row";
import Col from "../../components/Col";
import Jumbotron from "../../components/Jumbotron"

function AboutMe(){
return(
   
    
    <Jumbotron>
<div className="about">
      <Row>
        <Col size="md-12">

          <h1>AboutMe</h1>
          <hr/>

        </Col>
      </Row>
      <Row>
        <Col size ="md-3">
          <img src="Images/Suganya_Somu.jpg" className="img-thumbnail" alt="Suganya's Thumbnail image"/>

        </Col>
        <Col size="md-9">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
      </Row>

      <Row>

        <p className="content">It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English.</p>

      </Row>
    
</div>
</Jumbotron>
);
}

export default AboutMe