import React, { useState } from "react";
import "./TheatreManage.css";

function TheatreManage() {
  const [theatreData, setTheatreData] = useState([]); // Empty initial data
  const [currentPage, setCurrentPage] = useState(1);
  const [popup, setPopup] = useState({ type: null, data: null });
  const itemsPerPage = 6;
  const totalPages = Math.ceil(theatreData.length / itemsPerPage);

  // Add Theatre Handler
  const handleAddTheatre = (newTheatre) => {
    setTheatreData((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        name: newTheatre.name,
        screens: [],
        location: newTheatre.location,
      },
    ]);
    setPopup({ type: null, data: null });
  };

  // Add Screen Handler
  const handleAddScreen = (newScreen) => {
    setTheatreData((prevData) =>
      prevData.map((theatre) =>
        theatre.id === parseInt(newScreen.theatreId)
          ? {
              ...theatre,
              screens: [
                ...theatre.screens,
                {
                  screenNumber: newScreen.screenNumber,
                  format: newScreen.format,
                  rowCount: newScreen.rowCount,
                  seatsPerRow: newScreen.seatsPerRow,
                },
              ],
            }
          : theatre
      )
    );
    setPopup({ type: null, data: null });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTheatres = theatreData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="theater-page">
        <div className="theatre-container">
            <div className="theatre-header">
                <h2>Theatre Management</h2>
                <div className="button-container">
                <button
                    className="button add-theatre"
                    onClick={() => setPopup({ type: "addTheatre", data: null })}
                >
                    Add Theatre
                </button>
                <button
                    className="button add-screen"
                    onClick={() => setPopup({ type: "addScreen", data: null })}
                >
                    Add Screen
                </button>
                </div>
            </div>
            <div className="tm-table-wrapper">
                <table className="theatre-table">
                <thead>
                    <tr>
                    <th>Theatre Name</th>
                    <th>Screen & Formats</th>
                    <th>Location</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTheatres.length > 0 ? (
                    currentTheatres.map((theatre) => (
                        <tr key={theatre.id}>
                        <td>{theatre.name}</td>
                        <td>
                            {theatre.screens.length > 0 ? (
                            <ul>
                                {theatre.screens.map((screen, index) => (
                                <li key={index}>
                                    Screen {screen.screenNumber}: {screen.format} (
                                    {screen.rowCount} Rows x {screen.seatsPerRow} Seats)
                                </li>
                                ))}
                            </ul>
                            ) : (
                            "No Screens"
                            )}
                        </td>
                        <td>{theatre.location}</td>
                        <td>
                            <span className="action-icons">
                            <button
                                className="delete-icon"
                                onClick={() =>
                                setTheatreData((prevData) =>
                                    prevData.filter((t) => t.id !== theatre.id)
                                )
                                }
                            >
                                ❌
                            </button>
                            </span>
                        </td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="4" style={{ textAlign: "center" }}>
                        No Theatres Added Yet
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
            <div className="pagination">
                <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="page-button"
                >
                {"<"}
                </button>
                <span>
                Page {currentPage} of {totalPages || 1}
                </span>
                <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="page-button"
                >
                {">"}
                </button>
            </div>

            {popup.type === "addTheatre" && (
                <AddTheatrePopup
                onSubmit={handleAddTheatre}
                onClose={() => setPopup({ type: null, data: null })}
                />
            )}
            {popup.type === "addScreen" && (
                <AddScreenPopup
                theatres={theatreData}
                onSubmit={handleAddScreen}
                onClose={() => setPopup({ type: null, data: null })}
                />
            )}
        </div>
    </div>
  );
}

function AddTheatrePopup({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Add Theatre</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </label>
          <div className="popup-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AddScreenPopup({ theatres, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    theatreId: "",
    screenNumber: "",
    format: "",
    rowCount: "",
    seatsPerRow: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Add Screen</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Theatre:
            <select
              name="theatreId"
              value={formData.theatreId}
              onChange={handleChange}
              required
            >
              <option value="">Select a Theatre</option>
              {theatres.map((theatre) => (
                <option key={theatre.id} value={theatre.id}>
                  {theatre.name}
                </option>
              ))}
            </select>
          </label>
          <div className="form-row">
            <label>
              Screen Number:
              <input
                type="text"
                name="screenNumber"
                value={formData.screenNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Format:
              <input
                type="text"
                name="format"
                value={formData.format}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Row Count:
              <input
                type="number"
                name="rowCount"
                value={formData.rowCount}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Seat Per Row:
              <input
                type="number"
                name="seatsPerRow"
                value={formData.seatsPerRow}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="popup-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TheatreManage;
