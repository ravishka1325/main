import { Play, Ticket } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/Home.css';


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
            <button className="btn btn-primary">
              <Ticket className="icon" />
              Buy Tickets
            </button>
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
