import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import { AppRoute } from './AppRoute';
import { Streamers } from './views/streamers/Streamers';
import { StreamerRecord } from './views/streamers/streamerRecord/StreamerRecord';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path={AppRoute.streamer} element={<Streamers />} />
          <Route
            path={`${AppRoute.streamer}/:id`}
            element={<StreamerRecord />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
