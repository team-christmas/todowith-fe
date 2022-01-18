import React from 'react';
import { useRoutes } from "react-router-dom";
import { Layout } from './components';
import { IndexPage } from './pages';
import URL from './constants/url';

const Elements = () => {
  const element = useRoutes([
    {
      path : URL.ROOT,
      element : <Layout/>,
      children: [
        {
          index: true,
          element : <IndexPage />,
        },
      ],
    }
  ]);
  return element;

};


export default Elements;