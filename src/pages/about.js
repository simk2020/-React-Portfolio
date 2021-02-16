import React from "react";

function About (){

    return (
      <div className="container"> 
      <div className="row">
        <div className="col-md-12">
          <h1> <strong>About Me!</strong></h1>
          <hr className="my-3" />
        </div>
        <br />
        <div className="col-md-3">
          <img src="assets\images\sim.jpg" alt="Simran Sehdev" className="img-thumbnail" />
        </div>
        <div className="col-md-8">
          <p>My name is Simran Sehdev. I am an Experienced Assistant Manager with a demonstrated history of working in the hospitality industry. Skilled in Nonprofit Organizations, Microsoft Word, Event Management, Management, and Software Documentation. </p>
          <br />
          <p>Strong professional with a Bachelor of Science (BSc) focused in Business Administration and Management.</p>
          <p>Here's a link to my Resume.</p>
          {/* downloadable link */}
          <a href="/images/resume.jpg" download>
            <img src="/images/resume.jpg" alt="Resume" />
          </a>
        </div>
      </div>
    </div>

    );
}
export default About;