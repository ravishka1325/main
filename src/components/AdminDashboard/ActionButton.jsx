import React from 'react';
import { ChevronRight } from 'lucide-react';
import './ActionButton.css';

const ActionButton = ({ children, onClick }) => {
  return (
    <button className="action-button" onClick={onClick}>
      <span>{children}</span>
      <div className="icon-circle">
        <ChevronRight size={20} />
      </div>
    </button>
  );
};

export default ActionButton;