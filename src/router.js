import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Layout from './pages/Layout';
import IndexPage from './pages/IndexPage';

const Router = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>      
    </BrowserRouter>
    </>
  )
};

export default Router;