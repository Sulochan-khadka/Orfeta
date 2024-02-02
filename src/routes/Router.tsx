import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Intro from '../pages/Intro';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/intro' element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
