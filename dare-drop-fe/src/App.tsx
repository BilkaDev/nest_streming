import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import './App.css';
import { AppRoute } from './AppRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path={AppRoute.streamer} element={<div>Streamer</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
