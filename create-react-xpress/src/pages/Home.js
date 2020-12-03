import React from "react";
import "./home.css"

function Home(){
return(
    // <main className="container-fluid">
    <div className="body">
      <div className="jumbotron-text">
        <h1>Suganya Somu</h1>
        <p>Full-Stack Web Developer in Oregon</p>
      </div>
     <div className="social">
          <a
            className="social"
            id="git"
            href="https://github.com/suganyasomu"
            target="_blank"
            ><i className="fa fa-github" aria-hidden="true"></i
          ></a>
          <a
            className="social"
            id="linkedin"
            href="https://www.linkedin.com/in/suganyasomu/"
            target="_blank"
            ><i className="fa fa-linkedin" aria-hidden="true"></i
          ></a>
          <a
            className="social"
            id="facebook"
            href="https://www.facebook.com/suganya.somu.52"
            target="_blank"
            ><i className="fa fa-facebook" aria-hidden="true"></i
          ></a>
        </div>
    </div>

//   </main>
);
}

export default Home