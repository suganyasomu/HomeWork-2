import React from "react";
import "./portfolio.css";
import Row from "../components/Row";
import Col from "../components/Col"
function Portfolio(){
return(
    // <main className="container-fluid">
    <div>
      <h1>Portfolio</h1>
      <hr/>

      <form>
       
        <Row>
          <Col size="md-4">
            <div className="content">
              <img src="Images/Fall.jpg" alt="Mountains"/>
              <div className="centered">Mountains </div>

            </div>
          </Col>
          <Col size ="md-4">
            <div className="content">
              <img src="Images/Sea.jpg" alt="Lights"/>
              <div className="centered">Lights </div>

            </div>

          </Col>
        </Row>

        <Row>
          <Col size ="md-4">
            <div className="content">
              <img src="Images/Mountains.jpg" alt="Nature"/>
              <div className="centered">Nature</div>

            </div>
          </Col>
          <Col size="md-4">
            <div className="content">
              <img src="Images/Nature.jpg" alt="Mountains"/>
              <div className="centered">Mountains</div>

            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <div className="content">
              <img src="Images/Trees.jpg" alt="Trees"/>
              <div className="centered">Trees</div>
            </div>
          </Col>
        </Row>
      
      </form>



      

    </div>

//   </main>
);
}

export default Portfolio