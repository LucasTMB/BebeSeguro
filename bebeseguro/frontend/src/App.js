import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
//import { useAuthentication } from "./hooks/useAuthentication";
import { useAuth } from "../src/hooks/useAuth";

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
import OvulationCalculator from "./pages/OvulationCalculator/OvulationCalculator";
import GestAgeCalculator from "./pages/GestAgeCalculator/GestAgeCalculator";
import ImcCalculator from "./pages/ImcCalculator/ImcCalculator";
import DeliveryDateCalculator from './pages/DeliveryDateCalculator/DeliveryDateCalculator';
import Community from "./pages/Community/Community";
import PhotosSearch from './pages/PhotosSearch/PhotosSearch';
import About from "./pages/About/About";
import EditProfile from './pages/EditProfile/EditProfile';
import Profile from './pages/Profile/Profile';
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Photo from './pages/Photo/Photo';
import NotFound from './pages/NotFound/NotFound';

function App() {

  /*
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
  */

  const { auth, loading } = useAuth();

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
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
              element={auth ? <Guides /> : <Navigate to="/login" />}
            />
            <Route
              path='/guides/search'
              element={auth ? <GuidesSearch /> : <Navigate to="/login" />}
            />
            <Route
              path='/guides/posts/:id'
              element={auth ? <GuidePost /> : <Navigate to="/login" />}
            />
            <Route
              path='/guides/posts/create'
              element={auth ? <CreateGuidePost /> : <Navigate to="/login" />}
            />
            <Route
              path='/guides/posts/edit/:id'
              element={auth ? <EditGuidePost /> : <Navigate to="/login" />}
            />
            <Route
              path='/calculators'
              element={auth ? <Calculators /> : <Navigate to="/login" />}
            />
            <Route
              path='/calculators/ovulation'
              element={auth ? <OvulationCalculator /> : <Navigate to="/login" />}
            />
            <Route
              path='/calculators/gestage'
              element={auth ? <GestAgeCalculator /> : <Navigate to="/login" />}
            />
            <Route
              path='/calculators/imc'
              element={auth ? <ImcCalculator /> : <Navigate to="/login" />}
            />
            <Route
              path='/calculators/deliverydate'
              element={auth ? <DeliveryDateCalculator /> : <Navigate to="/login" />}
            />
            <Route
              path='/community'
              element={auth ? <Community /> : <Navigate to="/login" />}
            />
            <Route
              path='/community/search'
              element={auth ? <PhotosSearch /> : <Navigate to="/login" />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/profile'
              element={auth ? <EditProfile /> : <Navigate to="/login" />}
            />
            <Route
              path='/users/:id'
              element={auth ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
              path='/login'
              element={!auth ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path='/register'
              element={!auth ? <Register /> : <Navigate to="/" />}
            />
            <Route
              path='/photos/:id'
              element={auth ? <Photo /> : <Navigate to="/login" />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
