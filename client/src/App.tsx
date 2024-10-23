import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MasterVillaPage from './components/MasterVillaPage/MasterVilla';
import Navbar from './components/Navbar/Navbar';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import HomePage from './components/HomePage/HomePage';
import BookingDrawer from './components/BookingDrawer/BookingDrawer';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { setBookedDates } from './redux/slices/bookingsDatesSlice';
import { TermsAndConditionsPage } from './components/pages/TermsAndConditionsPage/TermsAndConditionsPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage/PrivacyPolicyPage';

function App() {
  const { isLoading } = useAppSelector(state => state.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchDates = async () => {
      const request = await fetch('https://feriland.onrender.com/reservations');
      const response = await request.json();
      dispatch(setBookedDates(response.dates));
    };
    fetchDates();
  }, []);

  return (
    <Box overflow={isLoading ? 'hidden' : ''} height="100vh">
      <Router>
        {isLoading && <Loader />}
        <Navbar />
        <BookingDrawer />
        <Routes>
          <Route path="/master-villa" element={<MasterVillaPage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
