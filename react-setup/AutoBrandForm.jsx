import React, { useState } from 'react';
import './AutoBrandForm.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    startupIdea: '',
    industry: '',
    targetAudience: '',
    preferences: '',
    competitorAnalysis: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    console.log('Input:', e.target.name, 'Value:', e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValid = formData.startupIdea && formData.industry && formData.targetAudience;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
    if (!isValid) {
      setError('Please fill all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await new Promise(res => setTimeout(res, 10));
      console.log('Storing data in localStorage');
      localStorage.setItem('brandingFormData', JSON.stringify(formData));
      localStorage.setItem('brandingResults', JSON.stringify({
        names: ['BrandA', 'BrandB', 'BrandC'],
        taglines: ['Empower Your Future', 'Innovate Today', 'Create Tomorrow'],
        marketingIdeas: ['Idea 1', 'Idea 2', 'Idea 3'],
        logos: ['https://via.placeholder.com/200'],
        colorThemes: [{ name: 'Primary Palette', colors: ['#1976D2', '#81d4fa', '#a6c0fe'] }],
        usps: ['USP 1', 'USP 2']
      }));
      console.log('Navigating to /results');
      navigate('/result');
    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-page">
      <header className="brand-header">
        <div className="logo">🚀</div>
        <h1 className="brand-name">AutoBrand</h1>
        <p className="tagline">Transform your startup vision into a powerful brand identity</p>
      </header>

      <main className="main-container">
        <form onSubmit={handleSubmit} className="form-section">
          <h2>Tell Us About Your Startup Vision</h2>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group" key="startupIdea">
            <label>Startup Idea / Concept *</label>
            <textarea
              name="startupIdea"
              value={formData.startupIdea}
              onChange={handleChange}
              required
              placeholder="e.g., An AI-powered app for personalized fitness plans"
            />
          </div>

          <div className="form-group" key="industry">
            <label>Industry / Field *</label>
            <input
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              placeholder="e.g., Health & Wellness"
            />
          </div>

          <div className="form-group" key="targetAudience">
            <label>Target Audience *</label>
            <textarea
              name="targetAudience"
              value={formData.targetAudience}
              onChange={handleChange}
              required
              placeholder="e.g., Young professionals aged 25-40"
            />
          </div>

          <div className="form-group" key="preferences">
            <label>Brand Preferences (Optional)</label>
            <textarea
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
              placeholder="e.g., Prefer a short, modern name"
            />
          </div>

          <div className="form-group" key="competitorAnalysis">
            <label>Competitor Analysis (Optional)</label>
            <textarea
              name="competitorAnalysis"
              value={formData.competitorAnalysis}
              onChange={handleChange}
            />
          </div>

          <button type="submit" disabled={!isValid || loading} className="submit-btn">
            {loading ? (
              <span className="loading-spinner">
                <div className="spinner"></div>
                Generating Your Brand Identity...
              </span>
            ) : (
              '🎨 Generate My Brand Identity'
            )}
          </button>
        </form>
      </main>
    </div>
  );
}
