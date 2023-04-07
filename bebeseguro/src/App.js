import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Guides from "./pages/Guides/Guides";
import Community from "./pages/Community/Community";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/guides' element={<Guides />} />
            <Route path='/community' element={<Community />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
