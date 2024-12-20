import React from 'react';
import './styles.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Jur</h2>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>My Cases</li>
          <li>Activities</li>
          <li>Calendar</li>
          <li>Files</li>
          <li>Open a Dispute</li>
        </ul>
      </nav>
      <div className="justice-banner">
        <p>Get Justice on every Claim</p>
        <div className="image-placeholder">⚖️</div>
      </div>
    </div>
  );
};

export default Sidebar;
