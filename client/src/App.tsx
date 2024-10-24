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
import { useAppSelector } from './redux/hooks';
import { Box } from '@chakra-ui/react';
import { TermsAndConditionsPage } from './components/pages/TermsAndConditionsPage/TermsAndConditionsPage';
import { PrivacyPolicyPage } from './components/pages/PrivacyPolicyPage/PrivacyPolicyPage';

function App() {
  const { isLoading } = useAppSelector(state => state.loading);

  return (
    <Box overflow={isLoading ? 'hidden' : ''} height="100vh">
      <Router>
        {isLoading && <Loader />}
        <Navbar />
        <BookingDrawer />
        <Routes>
          <Route
            path="/master-villa"
            element={<MasterVillaPage pageName="masterVilla" />}
          />
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
