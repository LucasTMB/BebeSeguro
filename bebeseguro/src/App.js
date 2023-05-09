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
import GuidesSearch from './pages/GuidesSearch/GuidesSearch';
import CreateGuidePost from "./pages/CreateGuidePost/CreateGuidePost";
import EditGuidePost from './pages/EditGuidePost/EditGuidePost';
import GuidePost from './pages/GuidePost/GuidePost';
import Calculators from "./pages/Calculators/Calculators";
import HcgCalculator from "./pages/HcgCalculator/HcgCalculator";
import GestAgeCalculator from "./pages/GestAgeCalculator/GestAgeCalculator";
import ImcCalculator from "./pages/ImcCalculator/ImcCalculator";
import DeliveryDateCalculator from './pages/DeliveryDateCalculator/DeliveryDateCalculator';
import Community from "./pages/Community/Community";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from './pages/NotFound/NotFound';

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
                path='/guides/search'
                element={user ? <GuidesSearch /> : <Navigate to="/login" />}
              />
              <Route 
                path='/guides/posts/:id' 
                element={user ? <GuidePost /> : <Navigate to="/login" />} 
              />
              <Route 
                path='/guides/posts/create' 
                element={user ? <CreateGuidePost /> : <Navigate to="/login" />} 
              />
              <Route 
                path='/guides/posts/edit/:id' 
                element={user ? <EditGuidePost /> : <Navigate to="/login" />} 
              />
              <Route 
                path='/calculators' 
                element={user ? <Calculators /> : <Navigate to="/login" />} 
              />
              <Route 
                path='/calculators/hcg' 
                element={user ? <HcgCalculator /> : <Navigate to="/login" />} 
              />
              <Route 
                path='/calculators/gestage' 
                element={user ? <GestAgeCalculator /> : <Navigate to="/login" />} 
              />
              <Route 
                path='/calculators/imc' 
                element={user ? <ImcCalculator /> : <Navigate to="/login" />} 
              />
              <Route 
                path='/calculators/deliverydate' 
                element={user ? <DeliveryDateCalculator /> : <Navigate to="/login" />} 
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
              <Route 
                path='*'
                element={<NotFound />}
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
