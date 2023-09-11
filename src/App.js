import './App.css';
import BestSellers from './Components/BestSellers/BestSellers';
import Footer from './Components/Footer/Footer';

import Header from './Components/Header/Header';
import NavHeader from './Components/NavHeader/NavHeader';
import PrincipalGuitar from './Components/PrincipalGuitar/PrincipalGuitar';
import Products from './Components/Products/Products';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <NavHeader />
      <Slider />
      <BestSellers />
      <PrincipalGuitar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
