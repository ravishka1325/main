import React, { useState, useMemo } from "react";
import "../../css/SeatSelection.css"; 

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = useMemo(() => ["H", "G", "F", "E", "D", "C", "B", "A"], []);
  const columns = useMemo(() => Array.from({ length: 14 }, (_, i) => i + 1), []);

  const bookedSeats = useMemo(() => ["H3", "H4", "G5", "F6", "E7"], []); // Example booked seats
  const ticketPrice = 1000; // Assume ticket price is Rs. 1000

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const isSeatBooked = (seat) => bookedSeats.includes(seat);

  const calculatePrice = useMemo(() => selectedSeats.length * ticketPrice, [selectedSeats, ticketPrice]);

  const handleSeatClick = (seat) => {
    if (!isSeatBooked(seat)) {
      toggleSeatSelection(seat);
    }
  };

  return (
    <div className="seat-selection">
      <div className="header">
        <h1>Spider-Man: Far from Home</h1>
        <p>CINEX - Bambalapitiya | Fri, 27 Jan | DOLBY ATMOS 3D</p>
      </div>

      <div className="showtimes">
        <button>9.00 AM</button>
        <button>9.00 AM</button>
        <button>9.00 AM</button>
        <button>9.00 AM</button>
        <button>9.00 AM</button>
        <button>9.00 AM</button>
      </div>

      <div className="screen">SCREEN</div>

      <div className="seating">
        {rows.map((row) => (
          <div key={row} className="row">
            {columns.map((col) => {
              const seat = `${row}${col}`;
              return (
                <div
                  key={seat}
                  className={`seat ${
                    isSeatBooked(seat)
                      ? "booked"
                      : selectedSeats.includes(seat)
                      ? "selected"
                      : "available"
                  }`}
                  onClick={() => handleSeatClick(seat)}
                >
                  {col}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="summary">
        <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
        <p>Total Tickets: {selectedSeats.length}</p>
        <p>Total Price: Rs. {calculatePrice}</p>
      </div>

      <div className="actions">
        <button className="continue">Continue</button>
        <button className="back">Back</button>
      </div>
    </div>
  );
};

export default SeatSelection;
