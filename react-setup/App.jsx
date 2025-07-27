import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AutoBrandForm from "./AutoBrandForm";
import Entry from "./Entry";
import About from './About';
import ResultPage from './ResultPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='/autobrandform' element={<AutoBrandForm />} />
          <Route path='/about' element={<About />} />
          <Route path='/result' element={<ResultPage />}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
