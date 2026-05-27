import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import './Layout.css';

const MainLayout = ({ role }) => {
  return (
    <div className="layout-container">
      <Sidebar role={role} />
      <div className="layout-main">
        <TopNav role={role} />
        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
