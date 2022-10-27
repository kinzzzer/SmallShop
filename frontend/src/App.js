import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from './components/CardDetails/CardDetails';
import CardList from './components/CardList/CardList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={`/card/:id`} element={<CardDetails />} />
        <Route exact path={``} element={<CardList />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
