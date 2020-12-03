import React from "react";
import "./style.css"

function Home(){
return(
    // <main className="container-fluid">
    <div>
      <div className="jumbotron-text">
        <h1>Suganya Somu</h1>
        <p>Full-Stack Web Developer in Oregon</p>
      </div>
      <div className="jumbotron-social">
        <ul className="ul-social">
          <li className="li-social-links">
            <a className="social" href="https://github.com/" target="_blank"><i className="fa fa-github"
                aria-hidden="true"></i></a>
          </li>
          <li className="li-social-links">
            <a className="social" href="https://linkedin.com" target="_blank"><i className="fa fa-linkedin"
                aria-hidden="true"></i></a>
          </li>
          <li className="li-social-links">
            <a className="social" href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"
                aria-hidden="true"></i></a>
          </li>
          <li className="li-social-links">
            <a className="social" href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"
                aria-hidden="true"></i></a>
          </li>
          <li className="li-social-links">
            <a className="social" href="https://plus.google.com/" target="_blank"><i className="fa fa-google-plus"
                aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
    </div>

//   </main>
);
}

export default Home