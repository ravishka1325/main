import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = () => {
  return (
    <div className="breadcrumbmain">
      <div className="breadcrumb">
        <span>Home</span>
        <span className="separator">&gt;</span>
        <span>Buy Ticket</span>
      </div>
    </div>
  
  );
};

export default Breadcrumb;