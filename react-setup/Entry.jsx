import React from 'react';
import './Entry.css';

function Entry() {
  return (
    <div>
      <header>
        <div className="logo">&#9632; AutoBrand</div>
      </header>

      <div className="main-content">
        <h4>Welcome to AutoBrand</h4>
        <h2>How would you like to start?</h2>

        <div className="card-container">
          <div className="card">
            <img src="aboutus.png" alt="Design a site" />
            <div className="card-content">
              <h3>About US</h3>
              <p>Know about us more.</p>
              <button>Start Knowing →</button>
            </div>
          </div>

          <div className="card">
            <img src="ai.jpg" alt="Generate AI Structure" />
            <div className="card-content">
              <h3>Generate Information for your Ideas</h3>
              <p>Answer questions to get an idea of your StartUP.</p>
              <button>Start Generating →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
