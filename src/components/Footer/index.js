import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="page-footer fixed-bottom font-small bg-info pt-4">
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="col d-flex justify-content-center">
            {/* linkedin*/}
            <span><a href="https://www.linkedin.com/in/simranksehdev" className="fa fa-linkedin-square d-flex justify-content-center" /></span>
            {/*github */}
            <span><a href="https://github.com/simk2020" className="fa fa-github-square d-flex justify-content-center" /></span>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2020 Copyright: Simran K Sehdev
      </div>
    </div>
  </footer>
  );
}

export default Footer;

