import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="App list-group-item justify-content-center align-items-center mx-auto" style={{"width":"400px", "backgroundColor":"white", "marginTop":"15px" }}>
        <h1 className="card text-white bg-primary mb-1" styleName="max-width: 20rem;">
          R2D2
        </h1>
        <h6 className="card text-white bg-primary mb-3">
          Emails
        </h6>
        <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Test</h5>
          <span className="card-text">
            <input className="mb-2 form-control titleIn" placeholder="Title" />
            <input className="mb-2 form-control titleIn" placeholder="Description" />
            <button className="btn btn-outline-primary mx-2" style={{"borderRadius":"50px", "font-weight":"bold"}}>Submit</button>

          </span>

        </div>
      </div>
    </div>
  );
}

export default App;
