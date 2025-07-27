import React, { useEffect } from 'react';
import './LoadingPage.css';
import { useNavigate } from 'react-router-dom';

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('LoadingPage mounted, navigating to /results in 2s');
    const timer = setTimeout(() => {
      console.log('Navigating to /results');
      navigate('/result');
    }, 2000);

    return () => {
      console.log('LoadingPage unmounting');
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="loading-wrapper">
      <button className="submit-btn" disabled>
        <span className="loading-spinner">
          <div className="spinner"></div>
          Generating Your Brand Identity...
        </span>
      </button>
    </div>
  );
}