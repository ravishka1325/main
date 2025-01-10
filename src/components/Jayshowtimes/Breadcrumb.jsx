import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <span>Home</span>
      <span className="separator">&gt;</span>
      <span>Buy Ticket</span>
    </div>
  );
};

export default Breadcrumb;