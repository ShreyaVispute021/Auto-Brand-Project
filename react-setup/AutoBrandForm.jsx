import React, { useState, useEffect } from 'react';
import './AutoBrandForm.css'; // Move styles here
import callOpenAi from './callOpenAi';

const AutoBrandForm = () => {
  const [formData, setFormData] = useState({
    startupConcept: '',
    industry: '',
    targetAudience: '',
    preferences: '',
    competitorAnalysis: 'yes',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { startupConcept, industry, targetAudience } = formData;
    setIsFormValid(
      startupConcept.trim() !== '' &&
      industry.trim() !== '' &&
      targetAudience.trim() !== ''
    );
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add submission logic here
  };

  return (
    <div className="form-container">
      <h2>🚀 AutoBrand - Startup Generator</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startupConcept">Startup Idea / Concept:</label>
        <textarea
          id="startupConcept"
          name="startupConcept"
          rows="3"
          value={formData.startupConcept}
          onChange={handleChange}
          placeholder='e.g., An AI-powered app for personalized fitness plans'
          required
        />

        <label htmlFor="industry">Industry / Field:</label>
        <input
          type="text"
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          placeholder='e.g., Health & Wellness'
          required
        />

        <label htmlFor="targetAudience">Target Audience:</label>
        <input
          type="text"
          id="targetAudience"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
          placeholder='e.g., Young professionals aged 25-40'
          required
        />

        <label htmlFor="preferences">Any Preferences:</label>
        <textarea
          id="preferences"
          name="preferences"
          rows="3"
          value={formData.preferences}
          placeholder='e.g., Prefer a short, modern name; avoid using the word tech'
          onChange={handleChange}
        />

        <label htmlFor="competitorAnalysis">Competitor Analysis?</label>
        <select
          id="competitorAnalysis"
          name="competitorAnalysis"
          value={formData.competitorAnalysis}
          onChange={handleChange}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <button type="submit" disabled={!isFormValid} onClick={<callOpenAi />}>
          Generate My Startup Kit 🚀
        </button>
      </form>
    </div>
  );
};

export default AutoBrandForm;
