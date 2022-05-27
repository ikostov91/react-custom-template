import React from 'react';
import Layout from './layout/layout';
import { Route, Routes } from 'react-router-dom';
import history from './history';
import NotFound from './pages/not-found/not-found';
import CustomRouter from './routes/custom-router';

function App() {
  return ( 
    <CustomRouter history={history}>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CustomRouter>
  );
}

export default App;
