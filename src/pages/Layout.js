import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      {/* 차후 공통컴포넌트 추가 */}
      <Outlet /> 
    </>
  );
};

export default Layout;