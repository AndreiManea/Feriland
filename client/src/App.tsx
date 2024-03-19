import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MasterVillaPage from './components/MasterVillaPage/MasterVilla';
import Navbar from './components/Navbar/Navbar';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import HomePage from './components/HomePage/HomePage';
import BookingDrawer from './components/BookingDrawer/BookingDrawer';

function App() {
  return (
    <>
      <Navbar />
      <BookingDrawer />
      <Router>
        <Routes>
          <Route path="/master-villa" element={<MasterVillaPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
