import React from "react";
import { Play, Ticket } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../css/Home.css';
import { Link } from 'react-router-dom'; 

const Homemain = ({ title, description, imageUrl, isActive }) => {
  return (
    <div className={`homemain-container ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="gradient-overlay"></div>
      </div>

      <div className="content-container">
        <div className="text-container">
          <h1 className="title">
            {title}
          </h1>
          <p className="description">
            {description}
          </p>
          <div className="buttons-container">
            <Link to="/booking" className="btn btn-primary"> {/* Changed to "/booking" */}
              <Ticket className="icon" />
              Buy Tickets
            </Link>
            <button className="btn btn-primary">
              <Play className="icon" />
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homemain;