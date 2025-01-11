import React from 'react';
import Header from '../components/AdminDashboard/Header';
import StatCard from '../components/AdminDashboard/StatCard';
import ActionButton from '../components/AdminDashboard/ActionButton';
import '../css/AdminDash.css';

const AdminDash = () => {
  const handleAction = (action) => {
    console.log(`Action clicked: ${action}`);
  };

  return (
    <div className="dashboard">
      <Header />
      
      <main className="main-content">
        <h2 className="welcome-text">Welcome, Admin</h2>
        
        <section className="section">
          <h2 className="section-title">Quick Insight</h2>
          <div className="stats-grid">
            <StatCard title="Total Movies" value="15" />
            <StatCard title="Active Showtimes" value="3" />
            <StatCard title="Total Users" value="12" />
          </div>
        </section>
        
        <section className="section">
          <h2 className="section-title">Quick Links</h2>
          <div className="actions-grid">
            <ActionButton onClick={() => handleAction('add-showtime')}>
              Add Showtime
            </ActionButton>
            <ActionButton onClick={() => handleAction('add-movie')}>
              Add Movie
            </ActionButton>
            <ActionButton onClick={() => handleAction('add-theatre')}>
              Add Theatre
            </ActionButton>
            <ActionButton onClick={() => handleAction('list-showtimes')}>
              List Showtimes
            </ActionButton>
            <ActionButton onClick={() => handleAction('list-movies')}>
              List Movies
            </ActionButton>
            <ActionButton onClick={() => handleAction('list-theatres')}>
              List Theatres
            </ActionButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDash;