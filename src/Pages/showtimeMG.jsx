import React from 'react';
import '../css/showtimeMG.css';

function ShowtimeManagement() {
  const showtimes = [
    { movie: 'Interstellar', theatre: 'Cinex - OGF', screen: '03', startDate: '2024/03/15', time: '19:00', format: 'IMAX', seatPrice: 'Rs. 2500', actions: [<button className='btn-table' style={{ marginRight: '5px' }}>✎</button>, <button className='btn-table'>❌</button>] },
    { movie: 'Interstellar', theatre: 'Cinex - OGF', screen: '03', startDate: '2024/03/15', time: '19:00', format: 'IMAX', seatPrice: 'Rs. 2500', actions: [<button className='btn-table' style={{ marginRight: '5px' }}>✎</button>, <button className='btn-table'>❌</button>] },
    { movie: 'Interstellar', theatre: 'Cinex - OGF', screen: '03', startDate: '2024/03/15', time: '19:00', format: 'IMAX', seatPrice: 'Rs. 2500', actions: [<button className='btn-table' style={{ marginRight: '5px' }}>✎</button>, <button className='btn-table'>❌</button>] },
    { movie: 'Interstellar', theatre: 'Cinex - OGF', screen: '03', startDate: '2024/03/15', time: '19:00', format: 'IMAX', seatPrice: 'Rs. 2500', actions: [<button className='btn-table' style={{ marginRight: '5px' }}>✎</button>, <button className='btn-table'>❌</button>] },
  ];

  return (
    <body>
    <div className="showtime-management-container">
      <header className="header">
        <div className="menu-icon">☰</div>
        <div className="logo">CINEX</div>
      </header>
      <div className="content">
        <h1 className="title">Showtime Management</h1>
        <div className="actions">
          <input type="text" placeholder="Search Movies or Theatre" className="search-input" />
          <button className="add-showtime-button">Add Showtime</button>
        </div>
        <div className="table-wrapper">
          <table className="showtime-table">
            <thead>
              <tr>
                <th>Movie</th>
                <th>Theatre</th>
                <th>Screen</th>
                <th>Start Date</th>
                <th>Start Date</th>
                <th>Time</th>
                <th>Format</th>
                <th>Seat Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {showtimes.map((showtime, index) => (
                <tr key={index}>
                  <td>{showtime.movie}</td>
                  <td>{showtime.theatre}</td>
                  <td>{showtime.screen}</td>
                  <td>{showtime.startDate}</td>
                  <td>{showtime.startDate}</td>
                  <td>{showtime.time}</td>
                  <td>{showtime.format}</td>
                  <td>{showtime.seatPrice}</td>
                  <td className="action-icons">
                    {showtime.actions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button className="pagination-button"></button>
          <span className="page-info">Page 1 of 2</span>
          <button className="pagination-button"></button>
        </div>
      </div>
    </div>
    </body>
  );
}

export default ShowtimeManagement;