import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from "./hooks/useAuthentication";

// context
import { AuthProvider } from "./context/AuthContext";

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Guides from "./pages/Guides/Guides";
import Calculators from "./pages/Calculators/Calculators";
import Community from "./pages/Community/Community";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {

  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <Header />
          <div className='containerApp'>
            <Routes>
              <Route 
                path='/' 
                element={<Home />} 
              />
              <Route 
                path='/store' 
                element={<Store />} 
              />
              <Route 
                path='/guides' 
                element={user ? <Guides /> : <Navigate to="/login" />} 
              />
              <Route 
                path='/calculators' 
                element={user ? <Calculators /> : <Navigate to="/login" />} 
              />
              <Route 
                path='/community' 
                element={user ? <Community /> : <Navigate to="/login" />} 
              />
              <Route 
                path='/about' 
                element={<About />} 
              />
              <Route 
                path='/login' 
                element={!user ? <Login /> : <Navigate to="/" />} 
              />
              <Route 
                path='/register' 
                element={!user ? <Register /> : <Navigate to="/" />} 
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
