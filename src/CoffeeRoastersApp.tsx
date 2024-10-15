import NavBar from './components/shared/navBar/NavBar';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Subscribe from './components/subscribe/Subscribe';
import { Route, Routes } from 'react-router-dom';

function CoffeeRoastersApp() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </>
  )
}

export default CoffeeRoastersApp
