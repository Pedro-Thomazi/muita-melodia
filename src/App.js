import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NavHeader from './Components/NavHeader/NavHeader';
import Home from './Pages/Home';
import Product from './Pages/Product/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <NavHeader />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home />}/>
          <Route path={'/product'} element={<Product />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
