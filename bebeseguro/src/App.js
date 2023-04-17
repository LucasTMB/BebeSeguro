import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Guides from "./pages/Guides/Guides";
import Calculators from "./pages/Calculators/Calculators";
import Community from "./pages/Community/Community";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/*<Navbar />*/}
        <Header />
        <div className='containerApp'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/guides' element={<Guides />} />
            <Route path='/calculators' element={<Calculators />} />
            <Route path='/community' element={<Community />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
