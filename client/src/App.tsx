import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import ExploreSection from './components/ExploreSection/ExploreSection'
import GallerySection from './components/GallerySection/GallerySection'
import HeroSection from './components/HeroSection/HeroSection'
import MasterVillaPage from './components/MasterVillaPage/MasterVilla'
import Navbar from './components/Navbar/Navbar'
import SliderSection from './components/SliderSection/SliderSection'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/master-villa" element={<MasterVillaPage />} />
        <Route path="/" element={ <>
          <Navbar />
          <HeroSection />
          <ExploreSection />
          <GallerySection />
          <SliderSection />
          </> } 
        />
      </Routes>
    </Router>
    </>
  )
}

export default App
