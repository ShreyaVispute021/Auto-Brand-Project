import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AutoBrandForm from "./AutoBrandForm";
import Entry from "./entry";
import About from './About';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='/autobrandform' element={<AutoBrandForm />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>

    </>
  );
}
export default App;
