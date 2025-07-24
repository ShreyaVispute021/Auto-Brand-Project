import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AutoBrandForm from "./AutoBrandForm";
import Entry from "./entry";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Entry />} />
          <Route path='/autobrandform' element={<AutoBrandForm />} />
        </Routes>
      </Router>

    </>
  );
}
export default App;
