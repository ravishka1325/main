import React from 'react';
import { Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <button className="menu-button">
        <Menu size={24} color="white" />
      </button>
      <h1 className="logo">CINEX</h1>
    </header>
  );
};

export default Header;