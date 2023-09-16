import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import NavHeader from './Components/NavHeader/NavHeader';
import Home from './Pages/Home';
import Product from './Pages/Product/Product';
import Login from './Pages/LoginAndRegister/Login/Login';
import Register from './Pages/LoginAndRegister/Register/Register';
import PageInformations from './Pages/PageInformations/PageInformations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavHeader />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/product'} element={<Product />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/informations'} element={<PageInformations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
