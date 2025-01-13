import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home1 from './Pages/home';
import Navbar from './components/Navbar/Navbar';
import MovieBooking from './Pages/MovieBooking'; // Import the MovieBooking component
import Footer from './components/Footer/Footer';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Moviepage from './Pages/MoviePage';
import SeatSelection from './components/MovieSelectionPage/SeatSelection';
import SignIn from './components/Signinform/Signin';
import ShowtimeManagement from './Pages/showtimeMG';
import ContactUS from './components/ContactUS/Contactus';
import TheatreManage from './components/TheatreManage/TheatreManage';
import AdminDash from './components/AdminDashboard/AdminDash';
import Moviemanagement from './Pages/Moviemanagement';
import Payments from './components/PaymentSection/Payments';
import BookingConfirmation from './components/BookingConfirm/BookingConfirm';


const App = () => {
  return (
    <StrictMode>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/booking" element={<MovieBooking />} /> {/* Add this route */}
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
            <Route path="/SignIn" element={<SignIn/>} />
            <Route path="/Moviepage" element={<Moviepage />} />
            <Route path="/SeatSelection" element={<SeatSelection/>}/>
            <Route path="/AdminDashBoard" element={<AdminDash/>}/>
            <Route path="/showtimemgr" element={<ShowtimeManagement/>}/>
            <Route path="/Contactus" element={<ContactUS/>}/>
            <Route path="/TheatreManage" element={<TheatreManage/>}/>
            <Route path="/pay" element={<Payments/>}/>
            <Route path="/Moviemanagement" element={<Moviemanagement/>} />
            <Route path="/BookingConfirmation" element={<BookingConfirmation/>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </StrictMode>
  );
};

export default App;