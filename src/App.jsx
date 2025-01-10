import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './Pages/home';

const App = () => {
  return (
    <StrictMode>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home1/>} />
          </Routes>
        </div>
      </Router>
    </StrictMode>
  );
};

export default App;
