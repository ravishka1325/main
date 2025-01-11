import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShowtimeSelector.css';

const dates = [
  { id: 1, label: '', date: 'Dec 22' },
  { id: 2, label: '', date: 'Dec 23' },
  { id: 3, label: '', date: 'Dec 24' },
  { id: 4, label: '', date: 'Dec 25' },
  { id: 5, label: '', date: 'Dec 26' },
];

const theaters = [
  {
    id: 1,
    name: 'CINEX Bambalapitiya',
    formats: [
      { id: 'imax', name: 'IMAX 3D', times: ['9:00 AM', '12:30 PM', '4:00 PM', '7:30 PM'] },
      { id: 'dolby', name: 'Dolby Atmos 3D', times: ['10:00 AM', '1:30 PM', '5:00 PM', '8:30 PM'] },
      { id: 'digital', name: 'Digital 2D', times: ['11:00 AM', '2:30 PM', '6:00 PM', '9:30 PM'] },
    ],
  },
  {
    id: 2,
    name: 'CINEX One Gall Face Mall',
    formats: [
      { id: 'imax', name: 'IMAX 3D', times: ['9:30 AM', '1:00 PM', '4:30 PM', '8:00 PM'] },
      { id: 'dolby', name: 'Dolby Atmos 3D', times: ['10:30 AM', '2:00 PM', '5:30 PM', '9:00 PM'] },
      { id: 'digital', name: 'Digital 2D', times: ['11:30 AM', '3:00 PM', '6:30 PM', '10:00 PM'] },
    ],
  },
];

const ShowtimeSelector = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedTime, setSelectedTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDate && selectedTime) {
      // Navigate to the SeatSelection page with query parameters
      navigate(`/SeatSelection?date=${selectedDate}&time=${selectedTime}`);
    }
  }, [selectedDate, selectedTime, navigate]);
  

  return (
    <div className="showtime-selector">
      <h2>Showtimes & Tickets</h2>
      
      <div className="date-selector">
        {dates.map((date) => (
          <button
            key={date.id}
            className={`date-button ${selectedDate === date.id ? 'selected' : ''}`}
            onClick={() => setSelectedDate(date.id)}
          >
            <div className="date-label">{date.label}</div>
            <div className="date-value">{date.date}</div>
          </button>
        ))}
      </div>

      <div className="theaters">
        {theaters.map((theater) => (
          <div key={theater.id} className="theater">
            <h3>{theater.name}</h3>
            
            {theater.formats.map((format) => (
              <div key={format.id} className="format">
                <h4>{format.name}</h4>
                <div className="times">
                  {format.times.map((time) => (
                    <button
                      key={`${theater.id}-${format.id}-${time}`}
                      className={`time-button ${
                        selectedTime === `${theater.id}-${format.id}-${time}` ? 'selected' : ''
                      }`}
                      onClick={() => setSelectedTime(`${theater.id}-${format.id}-${time}`)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowtimeSelector;
