import React, { Component } from 'react';
//import ReactDOM from 'react-dom';


class Contact extends Component {
  render() {
    return (
      <form>
        <div className="card" style={{ width: '100%' }}>
        <h5>Please fill out the form below</h5>
        <p>Enter your name:</p>
        <input
          type="text"
        />
        <p>Contact Email </p>
        <input
          type="text"
        />
        <p>Message - How can I help you? </p>
        <input
          type="text"
        />
        
        <a href="#" className="btn btn-success" style={{ width: '20%' }}>Submit</a>
        </div >
      </form>
      
    );
  }
}

export default Contact;
