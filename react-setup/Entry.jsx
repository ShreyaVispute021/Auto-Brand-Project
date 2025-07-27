import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Entry.css';
import ai from './assets/ai.jpg';
import abtus from './assets/abtus.jpeg';

function Entry() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="brand-header">
        <div className="logo">🚀</div>
        <h1 className="brand-name">AutoBrand</h1>
        <p className="tagline">Transform your startup vision into a powerful brand identity</p>
      </header>

      <div className="main-content">
        <h4>Welcome to AutoBrand</h4>
        <h2>How would you like to start?</h2>

        <div className="card-container">
          <div className="card">
            <img src={abtus} alt="Design a site" />
            <div className="card-content">
              <h3>About US</h3>
              <p>Know about us more.</p>
              <button onClick={() => navigate('/about')}>Start Knowing →</button>
            </div>
          </div>

          <div className="card">
            <img src={ai} alt="Generate AI Structure" />
            <div className="card-content">
              <h3>Generate Information for your Ideas</h3>
              <p>Answer questions to get an idea of your StartUP.</p>
              <button onClick={() => navigate('/autobrandform')}>Start Generating →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
