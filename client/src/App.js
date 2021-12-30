import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getVideogames, getGenres } from './Actions/index';
import Home from './Views/Home/Home';
import LandingPage from './Views/LandingPage/LandingPage';
// import Nav from './Components/Nav/Nav';
import Details from './Views/Details/Details';
import CreateVideogame from './Views/CreateVideogame/CreateVideogame.jsx';
import Header from './Components/Nav/Nav.jsx';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes >
          <Route exact path='/' element={<LandingPage />} />
          {/* <Route path='/' element={<Nav />} /> */}
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/videogame/:id' element={<Details />} />
          <Route exact path='/createVideogame' element={<CreateVideogame />} />
      </Routes>
    </>
  );
}

export default App;
