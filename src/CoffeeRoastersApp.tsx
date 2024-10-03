import './coffeeRoastersApp.css';
import NavBar from './components/shared/navBar/NavBar';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';
import Subscribe from './components/subscribe/Subscribe';

function CoffeeRoastersApp() {
  return (
    <>
      <NavBar />
      {/* <Home /> */}
      {/* <AboutUs /> */}
      <Subscribe/>
    </>
  )
}

export default CoffeeRoastersApp
