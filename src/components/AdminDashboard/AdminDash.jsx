import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDash.css';

const AdminDash = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => handleNavigation('/dashboard')}>Dashboard</li>
          <li onClick={() => handleNavigation('/manage-movies')}>Manage Movies</li>
          <li onClick={() => handleNavigation('/manage-showtimes')}>Manage Showtimes</li>
          <li onClick={() => handleNavigation('/settings')}>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
        <header>
          <button className="toggle-btn" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>CINEX</h1>
        </header>
        <div className="admincontent">
          <main>
            {/* Quick Insight Section */}
            <div className="quick-insight-container">
              <section className="section">
                <h2 className="section-title">Quick Insight</h2>
                <div className="stats-grid">
                  <Card title="Total Movies" value="15" />
                  <Card title="Active Showtimes" value="3" />
                  <Card title="Total Users" value="12" />
                </div>
              </section>
            </div>

            {/* Quick Links Section */}
            <div className="quick-links-container">
              <section className="section">
                <h2 className="section-title">Quick Links</h2>
                <div className="actions-grid">
                  <Button
                    label="Add Showtime"
                    onClick={() => handleNavigation('/add-showtime')}
                  />
                  <Button
                    label="Add Movie"
                    onClick={() => handleNavigation('/add-movie')}
                  />
                  <Button
                    label="Add Theatre"
                    onClick={() => handleNavigation('/add-theatre')}
                  />
                </div>
              </section>
            </div>
          </main>
        </div>
        
      </div>
    </div>
  );
};

/* Reusable Card Component */
const Card = ({ title, value }) => (
  <div className="card">
    <h3 className="card-title">{title}</h3>
    <p className="card-value">{value}</p>
  </div>
);

/* Reusable Button Component */
const Button = ({ label, onClick }) => (
  <button className="action-button" onClick={onClick}>
    {label} <span>➔</span>
  </button>
);

export default AdminDash;
