import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './Pages/home';
import Navbar from './components/Navbar/Navbar'; 

const App = () => {
  return (
    <StrictMode>
      <Router>
        <div>
          <Navbar /> {/* Add the Navbar here */}
          <Routes>
            <Route path="/" element={<Home1/>} />
          </Routes>
        </div>
      </Router>
    </StrictMode>
  );
};

export default App;