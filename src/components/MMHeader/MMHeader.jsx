/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './MMHeader.css';

const MMHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMovie = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="movie-management-container">
      <div className="movie-management-header">
        <h2>Movie Management</h2>
        <button className="add-movie-btn" onClick={handleAddMovie}>Add Movie</button>
      </div>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search Movies"
          className="search-bar"
        />
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Movie</h3>
            <form>
              <div>
                <label>Title</label>
                <input type="text" placeholder="Enter movie title" />
              </div>
              <div>
                <label>Description</label>
                <textarea placeholder="Enter movie description"></textarea>
              </div>
              <div>
                <label>Cast (Comma - Separated)</label>
                <input type="text" placeholder="Enter cast" />
              </div>

              <div className="form-2lane">
                <div>
                    <label>Director</label>
                    <input type="text" placeholder="Enter director" />
                </div>
                <div>
                    <label>Release Date</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Duration</label>
                    <input type="text" placeholder="Enter duration" />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="text" placeholder="Enter rating" />
                </div>
                <div>
                    <label>Genres</label>
                    <select multiple={true} placeholder="Select genres">
                    <option value="action">Action</option>
                    <option value="action">Animation</option>
                    <option value="comedy">Comedy</option>
                    <option value="comedy">Crime</option>
                    <option value="drama">Drama</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Science Fiction</option>
                    <option value="thriller">Thriller</option>
                    </select>
                </div>
                <div>
                    <label>IMDB Ratings (Out of 5)</label>
                    <input type="text" placeholder="Enter IMDB rating" />
                </div>
              </div>
              
              <div>
                <label>Trailer URL</label>
                <input type="text" placeholder="Enter trailer URL" />
              </div>
              <div>
                <label>Movie Poster</label>
                <input type="text" placeholder="Enter movie poster URL" />
              </div>
              <div>
                <label>Movie Poster (Home Page)</label>
                <input type="text" placeholder="Enter homepage poster URL" />
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="save-btn">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MMHeader;
