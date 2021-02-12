import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer bg-info text-center">
       <div class="col d-flex justify-content-center">
            {/* <!-- linkedin--> */}
            </div><span><a href="https://www.linkedin.com/in/simranksehdev"
                className="fa fa-linkedin-square d-flex justify-content-center"></a></span>
            {/* <!--github --> */}
            <span><a href="https://github.com/simk2020"
                className="fa fa-github-square d-flex justify-content-center"></a></span>
       <span>© 2020 Copyright: Simran K Sehdev { new Date().getFullYear() }</span>
    </footer>
  );
}

export default Footer;

